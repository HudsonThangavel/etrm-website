import { NextResponse } from 'next/server';
import { LATEST_SERMONS } from '@/lib/constants';
import { Sermon } from '@/types';

export const dynamic = 'force-static';
export const revalidate = 300;

const DEFAULT_CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID || 'UCwhi2dFfvtqg9JU0aczlRpw';
const DEFAULT_PLAYLIST_ID = process.env.NEXT_PUBLIC_YOUTUBE_PLAYLIST_ID || 'UUwhi2dFfvtqg9JU0aczlRpw';

function decodeHtmlEntities(str: string): string {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'");
}

function formatDate(isoString: string): string {
  if (!isoString) return 'Recent';
  try {
    const d = new Date(isoString);
    if (isNaN(d.getTime())) return 'Recent';
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  } catch {
    return 'Recent';
  }
}

function parseYouTubeRss(xml: string, limit: number = 24): Sermon[] {
  const entries = xml.split('<entry>').slice(1);
  const sermons: Sermon[] = [];

  for (const entry of entries) {
    if (sermons.length >= limit) break;

    const videoIdMatch = entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/);
    const titleMatch = entry.match(/<title>(.*?)<\/title>/);
    const publishedMatch = entry.match(/<published>(.*?)<\/published>/);
    const authorMatch = entry.match(/<name>(.*?)<\/name>/);
    const descriptionMatch = entry.match(/<media:description>([\s\S]*?)<\/media:description>/);

    const videoId = videoIdMatch?.[1]?.trim();
    if (!videoId) continue;

    const rawTitle = titleMatch?.[1]?.trim() || 'ETRM Worship Service';
    const title = decodeHtmlEntities(rawTitle);
    const publishedIso = publishedMatch?.[1]?.trim() || '';
    const author = decodeHtmlEntities(authorMatch?.[1]?.trim() || 'ETRM - OFFICIAL');
    const description = decodeHtmlEntities(descriptionMatch?.[1]?.trim() || '');

    let series = 'ETRM Broadcast';
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('sunday')) {
      series = 'Sunday Service';
    } else if (lowerTitle.includes('promise')) {
      series = 'Promise Service';
    } else if (lowerTitle.includes('song') || lowerTitle.includes('melodies') || lowerTitle.includes('music')) {
      series = 'ETRM Melodies';
    } else if (lowerTitle.includes('fasting') || lowerTitle.includes('deliverance')) {
      series = 'Breakthrough Prayer';
    }

    let speaker = 'Rev. Sam Selvaraj';
    if (lowerTitle.includes('mercy') || lowerTitle.includes('sis.mercy') || lowerTitle.includes('sis mercy')) {
      speaker = 'Sis. Mercy';
    } else if (lowerTitle.includes('jim williams') || lowerTitle.includes('bro. jim')) {
      speaker = 'Pastor Jim Williams';
    } else if (lowerTitle.includes('sam selvaraj')) {
      speaker = 'Rev. Sam Selvaraj';
    }

    const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

    sermons.push({
      id: videoId,
      title,
      series,
      speaker,
      duration: 'HD Video',
      date: formatDate(publishedIso),
      youtubeId: videoId,
      thumbnail,
      description,
      channelTitle: author
    });
  }

  return sermons;
}

export async function GET() {
  const limit = 24;

  // Try live YouTube public RSS feed
  try {
    let rssUrl = `https://www.youtube.com/feeds/videos.xml?playlist_id=${encodeURIComponent(DEFAULT_PLAYLIST_ID)}`;
    let res = await fetch(rssUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      next: { revalidate: 300 }
    });

    if (!res.ok) {
      rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${encodeURIComponent(DEFAULT_CHANNEL_ID)}`;
      res = await fetch(rssUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        },
        next: { revalidate: 300 }
      });
    }

    if (res.ok) {
      const xml = await res.text();
      const videos = parseYouTubeRss(xml, limit);

      if (videos.length > 0) {
        return NextResponse.json({
          success: true,
          source: 'youtube-live-rss',
          count: videos.length,
          videos
        });
      }
    }
  } catch (err) {
    console.error('Error fetching live YouTube RSS feed:', err);
  }

  // Graceful fallback to cached LATEST_SERMONS
  return NextResponse.json({
    success: true,
    source: 'fallback',
    count: LATEST_SERMONS.length,
    videos: LATEST_SERMONS
  });
}
