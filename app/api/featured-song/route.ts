import { NextResponse } from 'next/server';
import { FEATURED_SONG } from '@/lib/constants';

export const dynamic = 'force-static';
export const revalidate = 300; // revalidate every 5 minutes

const MELODIES_CHANNEL_ID = 'UCcgeS6j3N7roTb4X52qglqw';
const MELODIES_PLAYLIST_ID = 'UUcgeS6j3N7roTb4X52qglqw';

function decodeHtmlEntities(str: string): string {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'");
}

function cleanCredit(str: string): string {
  return decodeHtmlEntities(str)
    .replace(/^[\s.:\-_|]+/, '')
    .trim();
}

function formatDate(isoString: string): string {
  if (!isoString) return 'Recent Release';
  try {
    const d = new Date(isoString);
    if (isNaN(d.getTime())) return 'Recent Release';
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  } catch {
    return 'Recent Release';
  }
}

interface ParsedSong {
  id: string;
  title: string;
  fullTitle: string;
  composer: string;
  artists: string;
  channel: string;
  youtubeId: string;
  youtubeUrl: string;
  thumbnail: string;
  hqThumbnail: string;
  shortDescription: string;
  fullDescription: string;
  publishedDate: string;
  isShort: boolean;
  isPromo: boolean;
}

function parseMelodiesRss(xml: string): { featuredSong: ParsedSong; allSongs: ParsedSong[] } {
  const entries = xml.split('<entry>').slice(1);
  const parsedSongs: ParsedSong[] = [];

  for (const entry of entries) {
    const videoIdMatch = entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/);
    const titleMatch = entry.match(/<title>(.*?)<\/title>/);
    const descMatch = entry.match(/<media:description>([\s\S]*?)<\/media:description>/);
    const publishedMatch = entry.match(/<published>(.*?)<\/published>/);

    const videoId = videoIdMatch?.[1]?.trim();
    if (!videoId) continue;

    const rawTitle = decodeHtmlEntities(titleMatch?.[1]?.trim() || 'ETRM Melodies Release');
    const rawDesc = decodeHtmlEntities(descMatch?.[1]?.trim() || '');
    const publishedIso = publishedMatch?.[1]?.trim() || '';

    // Clean title: remove hashtags
    let titleNoHashtags = rawTitle.replace(/#\S+/g, '').trim();
    const parts = titleNoHashtags.split('|').map((s) => s.trim()).filter(Boolean);
    const mainTitle = parts[0] || titleNoHashtags;

    // Check if short or promo
    const isShort = entry.includes('/shorts/') || rawTitle.toLowerCase().includes('#shorts');
    const isPromo = rawTitle.toLowerCase().includes('promo');

    // Extract composer & artists from description if available
    let composer = 'Bishop. Dr. J. Sam Selvaraj';
    const compMatch = rawDesc.match(/Lyrics\s*&?\s*Tune\s*(?:by|:)\s*([^\n\r]+)/i);
    if (compMatch && compMatch[1]) {
      composer = cleanCredit(compMatch[1]);
    }

    let artists = 'Jim Williams & Beryl Williams';
    const artistMatch = rawDesc.match(/Sung\s*(?:by|:)\s*([^\n\r]+)/i);
    if (artistMatch && artistMatch[1]) {
      artists = cleanCredit(artistMatch[1]);
    } else if (parts[2] && (parts[1]?.toLowerCase().includes('song') || parts[1]?.toLowerCase().includes('official'))) {
      artists = cleanCredit(parts[2]);
    }

    // Extract clean descriptions
    const descLines = rawDesc
      .split('\n')
      .map((l) => l.trim())
      .filter((l) => l.length > 0 && !l.startsWith('#') && !l.toLowerCase().includes('subscribe'));

    const shortDescription =
      descLines[0] ||
      `An anointed Christian worship release from ETRM MELODIES to inspire hearts and usher in revival.`;

    const fullDescription =
      descLines.slice(1, 3).join(' ') ||
      `Written and composed under the apostolic anointing, this song carries the message of God's Word, hope, and victory.`;

    parsedSongs.push({
      id: videoId,
      title: mainTitle,
      fullTitle: rawTitle,
      composer,
      artists,
      channel: 'ETRM MELODIES',
      youtubeId: videoId,
      youtubeUrl: `https://www.youtube.com/watch?v=${videoId}`,
      thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
      hqThumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
      shortDescription,
      fullDescription,
      publishedDate: formatDate(publishedIso),
      isShort,
      isPromo
    });
  }

  // Priority for featured song:
  // 1. First full song (not a short and not a promo)
  // 2. Otherwise the very first uploaded video
  const fullSongs = parsedSongs.filter((s) => !s.isShort && !s.isPromo);
  const featuredSong = fullSongs[0] || parsedSongs[0] || {
    id: FEATURED_SONG.id,
    title: FEATURED_SONG.title,
    fullTitle: FEATURED_SONG.title,
    composer: FEATURED_SONG.composer,
    artists: FEATURED_SONG.artists,
    channel: FEATURED_SONG.channel,
    youtubeId: FEATURED_SONG.youtubeId,
    youtubeUrl: FEATURED_SONG.youtubeUrl,
    thumbnail: FEATURED_SONG.thumbnail,
    hqThumbnail: FEATURED_SONG.hqThumbnail,
    shortDescription: FEATURED_SONG.shortDescription,
    fullDescription: FEATURED_SONG.fullDescription,
    publishedDate: 'Latest Release',
    isShort: false,
    isPromo: false
  };

  return {
    featuredSong,
    allSongs: parsedSongs
  };
}

export async function GET() {
  try {
    // Fetch live RSS feed from ETRM MELODIES channel
    let rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${MELODIES_CHANNEL_ID}`;
    let res = await fetch(rssUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      next: { revalidate: 300 }
    });

    if (!res.ok) {
      rssUrl = `https://www.youtube.com/feeds/videos.xml?playlist_id=${MELODIES_PLAYLIST_ID}`;
      res = await fetch(rssUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        },
        next: { revalidate: 300 }
      });
    }

    if (res.ok) {
      const xml = await res.text();
      const { featuredSong, allSongs } = parseMelodiesRss(xml);

      return NextResponse.json({
        success: true,
        source: 'youtube-melodies-live',
        featuredSong,
        allSongs
      });
    }
  } catch (err) {
    console.error('Error fetching live ETRM Melodies feed:', err);
  }

  // Graceful fallback to constants
  return NextResponse.json({
    success: true,
    source: 'fallback',
    featuredSong: {
      ...FEATURED_SONG,
      fullTitle: FEATURED_SONG.title,
      publishedDate: 'Latest Release',
      isShort: false,
      isPromo: false
    },
    allSongs: []
  });
}
