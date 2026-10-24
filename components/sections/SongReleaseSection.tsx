'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Play, Music, Youtube, X, ExternalLink, Sparkles, RefreshCw, Radio } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FEATURED_SONG, SITE_INFO } from '@/lib/constants';
import { FadeIn, AudioWaveVisualizer } from '@/components/animations';

interface SongItem {
  id: string;
  title: string;
  fullTitle?: string;
  composer: string;
  artists: string;
  channel: string;
  youtubeId: string;
  youtubeUrl: string;
  thumbnail: string;
  hqThumbnail: string;
  shortDescription: string;
  fullDescription: string;
  publishedDate?: string;
}

export default function SongReleaseSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [song, setSong] = useState<SongItem>(FEATURED_SONG);
  const [recentSongs, setRecentSongs] = useState<SongItem[]>([]);
  const [coverImg, setCoverImg] = useState<string>(FEATURED_SONG.thumbnail);
  const [isLiveSynced, setIsLiveSynced] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch live latest video details directly from ETRM Melodies YouTube
  const fetchLiveSong = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/featured-song');
      if (res.ok) {
        const data = await res.json();
        if (data.featuredSong && data.featuredSong.youtubeId) {
          setSong(data.featuredSong);
          setCoverImg(data.featuredSong.thumbnail || `https://img.youtube.com/vi/${data.featuredSong.youtubeId}/maxresdefault.jpg`);
          setIsLiveSynced(data.source !== 'fallback');
        }
        if (data.allSongs && Array.isArray(data.allSongs)) {
          setRecentSongs(data.allSongs.filter((s: any) => !s.isShort));
        }
      }
    } catch (err) {
      console.warn('Could not fetch live song from YouTube, using default:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLiveSong();
  }, []);

  // Sync cover image whenever current song changes
  useEffect(() => {
    if (song?.thumbnail) {
      setCoverImg(song.thumbnail);
    } else if (song?.youtubeId) {
      setCoverImg(`https://img.youtube.com/vi/${song.youtubeId}/maxresdefault.jpg`);
    }
  }, [song]);

  // Close modal on Escape key and disable body scroll
  useEffect(() => {
    if (!modalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [modalOpen]);

  return (
    <section id="song-release-section" className="py-20 bg-brand-navy text-white relative overflow-hidden">
      {/* Background radial glows and atmospheric embers */}
      <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -top-20 w-96 h-96 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Image / Video Cover with Acoustic Vibration Rings */}
          <FadeIn direction="right" distance={30} className="lg:col-span-5">
            <div className="relative aspect-square max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 group bg-gray-900">
              {/* Radiating soundwave pulse rings */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 rounded-3xl border-2 border-brand-gold/40 pointer-events-none z-10"
              />

              <Image
                src={coverImg}
                alt={`${song.title} — ${song.channel} song cover`}
                fill
                priority
                onError={() => {
                  // Fallback to high quality if maxres doesn't exist
                  setCoverImg(
                    song.hqThumbnail || `https://img.youtube.com/vi/${song.youtubeId}/hqdefault.jpg`
                  );
                }}
                className="object-cover group-hover:scale-108 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 40vw"
              />

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center z-10">
                <motion.button
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setModalOpen(true)}
                  className="w-16 h-16 rounded-full bg-brand-accent text-white flex items-center justify-center shadow-2xl cursor-pointer relative"
                  aria-label="Play song on website"
                >
                  <span className="absolute inset-0 rounded-full bg-brand-accent animate-ping opacity-30" />
                  <Play className="w-7 h-7 fill-white ml-1 relative z-10" />
                </motion.button>
              </div>

              {/* Bottom Card Glass Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/75 backdrop-blur-md rounded-xl p-3 border border-white/10 flex items-center justify-between z-20">
                <div className="min-w-0 pr-2">
                  <p className="text-[11px] text-brand-gold font-bold uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-brand-gold" />
                    <span>ETRM MELODIES RELEASE</span>
                  </p>
                  <p className="text-sm font-bold truncate">{song.title}</p>
                </div>
                <AudioWaveVisualizer isPlaying={true} barCount={8} color="bg-brand-gold" />
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Song Story, Audio Visualizer & Dual Play CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <FadeIn direction="up" delay={0.1} className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 bg-white/10 text-brand-goldLight text-xs font-bold tracking-widest px-3.5 py-1.5 rounded-full uppercase border border-white/10">
                <Music className="w-3.5 h-3.5" />
                <span>New Song Release • ETRM Melodies</span>
              </div>

              {/* Live sync badge */}
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-red-500/20 text-red-300 border border-red-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <span>{isLiveSynced ? 'Live from YouTube' : 'Auto-Syncing'}</span>
              </span>

              <AudioWaveVisualizer isPlaying={true} barCount={10} color="bg-brand-accent" />
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                {song.title}
              </h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} className="space-y-1">
              <p className="text-brand-gold text-lg font-medium">
                {song.composer?.includes('Sam Selvaraj') ? 'Bishop. Dr. J. Sam Selvaraj' : song.composer}
              </p>
              <p className="text-xs text-gray-400 font-medium tracking-wide">
                Lyrics & Tune: {song.composer} &bull; Sung by: {song.artists}
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.4} className="space-y-3">
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {song.shortDescription}
              </p>
              {song.fullDescription && song.fullDescription !== song.shortDescription && (
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {song.fullDescription}
                </p>
              )}
            </FadeIn>

            {/* Recent releases switcher (if multiple songs exist on the channel) */}
            {recentSongs.length > 1 && (
              <FadeIn direction="up" delay={0.45} className="pt-1">
                <p className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-2">
                  Recent ETRM Melodies Releases:
                </p>
                <div className="flex flex-wrap gap-2">
                  {recentSongs.slice(0, 4).map((s) => {
                    const isCurrent = s.youtubeId === song.youtubeId;
                    return (
                      <button
                        key={s.youtubeId}
                        onClick={() => setSong(s)}
                        className={`text-xs px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                          isCurrent
                            ? 'bg-brand-gold text-brand-navy font-bold shadow-md'
                            : 'bg-white/10 hover:bg-white/20 text-gray-300 border border-white/10'
                        }`}
                      >
                        <Play className="w-3 h-3 fill-current" />
                        <span className="truncate max-w-[200px]">{s.title}</span>
                      </button>
                    );
                  })}
                </div>
              </FadeIn>
            )}

            {/* Dual Action Options: Watch on Website vs Open on YouTube */}
            <FadeIn direction="up" delay={0.5} className="flex flex-wrap items-center gap-4 pt-2">
              {/* Option 1: Watch on Website Modal */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 bg-brand-accent hover:bg-red-700 text-white font-bold text-sm px-6 py-3 rounded-full shadow-lg transition-colors cursor-pointer"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Watch Now</span>
              </motion.button>

              {/* Option 2: Open on YouTube Channel */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={song.youtubeUrl || `https://www.youtube.com/watch?v=${song.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-6 py-3 rounded-full border border-white/20 transition-all shadow-md"
              >
                <Youtube className="w-4 h-4 fill-red-500" />
                <span>Open on YouTube</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </motion.a>

              {/* Refresh Live Feed Button */}
              <button
                onClick={fetchLiveSong}
                disabled={loading}
                title="Poll for new song upload"
                className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white px-3 py-2 rounded-full hover:bg-white/5 transition-colors"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-brand-gold' : ''}`} />
                <span>{loading ? 'Checking...' : 'Check for New Upload'}</span>
              </button>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Embedded Video Player Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
              aria-hidden="true"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-[#0B132B] text-white rounded-2xl sm:rounded-3xl shadow-2xl border border-white/10 overflow-hidden z-10 flex flex-col my-auto"
              role="dialog"
              aria-modal="true"
              aria-label={song.title}
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-black/40 border-b border-white/10 gap-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="flex h-2.5 w-2.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-gold truncate">
                    ETRM MELODIES • LIVE SONG RELEASE
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={song.youtubeUrl || `https://www.youtube.com/watch?v=${song.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-semibold transition-colors shadow-sm"
                  >
                    <Youtube className="w-3.5 h-3.5 fill-white" />
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
                  </a>

                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                    aria-label="Close video player"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Embedded YouTube Iframe Player */}
              <div className="relative w-full aspect-video bg-black">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${song.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  title={song.title}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Footer Details */}
              <div className="p-4 sm:p-5 bg-gradient-to-b from-[#0B132B] to-[#070D1F] flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-white/5">
                <div className="space-y-0.5">
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {song.title} {song.artists ? `— ${song.artists}` : ''}
                  </h3>
                  <p className="text-xs text-brand-goldLight">
                    Lyrics & Tune: {song.composer} | Music: {song.channel}
                  </p>
                </div>

                <a
                  href={song.youtubeUrl || `https://www.youtube.com/watch?v=${song.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-semibold shadow-md transition-all self-start sm:self-auto"
                >
                  <Youtube className="w-4 h-4 fill-white" />
                  <span>Open on YouTube Channel</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
