'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Play, Music, Youtube, X, ExternalLink, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FEATURED_SONG } from '@/lib/constants';
import { FadeIn, AudioWaveVisualizer } from '@/components/animations';

export default function SongReleaseSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [coverImg, setCoverImg] = useState(FEATURED_SONG.thumbnail);

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
    <section className="py-20 bg-brand-navy text-white relative overflow-hidden">
      {/* Background radial glows and atmospheric embers */}
      <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -top-20 w-96 h-96 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Image / Video Cover with Acoustic Vibration Rings */}
          <FadeIn direction="right" distance={30} className="lg:col-span-5">
            <div className="relative aspect-square max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 group">
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
                alt={`${FEATURED_SONG.title} — ${FEATURED_SONG.channel} song cover`}
                fill
                priority
                onError={() => setCoverImg(FEATURED_SONG.hqThumbnail)}
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
                  <p className="text-sm font-bold truncate">{FEATURED_SONG.title}</p>
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
              <AudioWaveVisualizer isPlaying={true} barCount={10} color="bg-brand-accent" />
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                {FEATURED_SONG.title}
              </h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} className="space-y-1">
              <p className="text-brand-gold text-lg font-medium">
                Ps. Sam Selvaraj
              </p>
              <p className="text-xs text-gray-400 font-medium tracking-wide">
                Lyrics & Tune: {FEATURED_SONG.composer} &bull; Sung by: {FEATURED_SONG.artists}
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.4} className="space-y-3">
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {FEATURED_SONG.shortDescription}
              </p>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {FEATURED_SONG.fullDescription}
              </p>
            </FadeIn>

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
                href={FEATURED_SONG.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-6 py-3 rounded-full border border-white/20 transition-all shadow-md"
              >
                <Youtube className="w-4 h-4 fill-red-500" />
                <span>Open on YouTube</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </motion.a>
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
              aria-label={FEATURED_SONG.title}
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-black/40 border-b border-white/10 gap-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="flex h-2.5 w-2.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-gold truncate">
                    ETRM MELODIES • OFFICIAL SONG RELEASE
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={FEATURED_SONG.youtubeUrl}
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
                  src={`https://www.youtube-nocookie.com/embed/${FEATURED_SONG.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  title={FEATURED_SONG.title}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Footer Details */}
              <div className="p-4 sm:p-5 bg-gradient-to-b from-[#0B132B] to-[#070D1F] flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-white/5">
                <div className="space-y-0.5">
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {FEATURED_SONG.title} — {FEATURED_SONG.artists}
                  </h3>
                  <p className="text-xs text-brand-goldLight">
                    Lyrics & Tune: {FEATURED_SONG.composer} | Music: {FEATURED_SONG.channel}
                  </p>
                </div>

                <a
                  href={FEATURED_SONG.youtubeUrl}
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
