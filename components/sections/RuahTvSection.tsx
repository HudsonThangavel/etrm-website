'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import {
  Tv,
  Youtube,
  ExternalLink,
  RefreshCw,
  Sparkles,
  Play,
  Flame,
  Radio,
  SlidersHorizontal,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_INFO, LATEST_SERMONS } from '@/lib/constants';
import { FadeIn } from '@/components/animations';
import VideoCard from '@/components/media/VideoCard';
import VideoPlayerModal from '@/components/media/VideoPlayerModal';
import { Sermon } from '@/types';

type CategoryFilter = 'All' | 'Sunday Services' | 'Promise Services' | 'Melodies & Worship';

export default function RuahTvSection() {
  const [videos, setVideos] = useState<Sermon[]>(LATEST_SERMONS);
  const [loading, setLoading] = useState<boolean>(true);
  const [isLiveSynced, setIsLiveSynced] = useState<boolean>(false);
  const [selectedVideo, setSelectedVideo] = useState<Sermon | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [visibleCount, setVisibleCount] = useState<number>(6);

  // Fetch live YouTube playlist / channel videos dynamically
  const fetchYouTubeVideos = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/youtube?limit=24');
      if (res.ok) {
        const data = await res.json();
        if (data.videos && Array.isArray(data.videos) && data.videos.length > 0) {
          setVideos(data.videos);
          setIsLiveSynced(data.source !== 'fallback');
        }
      }
    } catch (err) {
      console.warn('Could not fetch live YouTube playlist, using cached videos:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchYouTubeVideos();
  }, []);

  const handlePlayOnSite = (video: Sermon) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Filter videos by category
  const filteredVideos = useMemo(() => {
    if (activeCategory === 'All') return videos;
    if (activeCategory === 'Sunday Services') {
      return videos.filter(
        (v) =>
          v.series?.toLowerCase().includes('sunday') ||
          v.title?.toLowerCase().includes('sunday')
      );
    }
    if (activeCategory === 'Promise Services') {
      return videos.filter(
        (v) =>
          v.series?.toLowerCase().includes('promise') ||
          v.title?.toLowerCase().includes('promise')
      );
    }
    if (activeCategory === 'Melodies & Worship') {
      return videos.filter(
        (v) =>
          v.series?.toLowerCase().includes('melodies') ||
          v.series?.toLowerCase().includes('song') ||
          v.title?.toLowerCase().includes('song') ||
          v.title?.toLowerCase().includes('worship') ||
          v.title?.toLowerCase().includes('music')
      );
    }
    return videos;
  }, [videos, activeCategory]);

  const displayedVideos = filteredVideos.slice(0, visibleCount);

  return (
    <section id="media-section" className="py-20 bg-white dark:bg-[#070D1F] transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn direction="up" distance={20} className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-2.5">
            <div className="flex items-center flex-wrap gap-2 text-brand-accent text-xs sm:text-sm font-bold uppercase tracking-widest">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600" />
              </span>
              <Tv className="w-4 h-4 text-brand-accent" />
              <span>Revival Media & YouTube Playlist</span>

              {/* Dynamic Live Status Indicator */}
              <span className="inline-flex items-center gap-1.5 ml-2 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900/50">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                <span>{isLiveSynced ? 'Live YouTube Feed' : 'Auto-Syncing Channel'}</span>
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy dark:text-white tracking-tight">
              Watch. Listen. Be Transformed.
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl">
              Live broadcast messages and anointed sermons streamed directly from our official YouTube channel.
            </p>
          </div>

          {/* Action Buttons: Subscribe & Refresh */}
          <div className="flex items-center flex-wrap gap-3">
            <button
              onClick={fetchYouTubeVideos}
              disabled={loading}
              title="Check for newest uploads"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-full text-xs font-semibold bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/15 text-gray-700 dark:text-gray-200 transition-colors disabled:opacity-60"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-brand-accent' : ''}`} />
              <span className="hidden sm:inline">Refresh Feed</span>
            </button>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <a
                href={SITE_INFO.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-md hover:shadow-red-500/20 transition-all"
              >
                <Youtube className="w-4 h-4 fill-white" />
                <span>Subscribe ETRM - OFFICIAL</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </motion.div>
          </div>
        </FadeIn>

        {/* Filter Categories Bar */}
        <div className="flex items-center justify-between flex-wrap gap-3 mb-8 pb-4 border-b border-gray-100 dark:border-white/10">
          <div className="flex items-center flex-wrap gap-2">
            {(['All', 'Sunday Services', 'Promise Services', 'Melodies & Worship'] as CategoryFilter[]).map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setVisibleCount(6);
                  }}
                  className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                    active
                      ? 'bg-brand-navy dark:bg-white text-white dark:text-brand-navy shadow-sm'
                      : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
            Showing {displayedVideos.length} of {filteredVideos.length} videos
          </p>
        </div>

        {/* Video Cards Grid */}
        {loading && videos.length === 0 ? (
          /* Loading Skeletons */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-gray-100 dark:bg-[#0E162B] rounded-2xl overflow-hidden animate-pulse border border-gray-200 dark:border-white/5"
              >
                <div className="aspect-video bg-gray-200 dark:bg-gray-800" />
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4" />
                  <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-1/2" />
                  <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-full mt-4" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredVideos.length === 0 ? (
          /* Empty Filter State */
          <div className="text-center py-16 bg-gray-50 dark:bg-[#0E162B]/50 rounded-3xl border border-gray-100 dark:border-white/10 space-y-4">
            <Tv className="w-12 h-12 mx-auto text-gray-400" />
            <h3 className="text-lg font-bold text-brand-navy dark:text-white">
              No videos found in this category
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Try switching back to &apos;All&apos; or visit our YouTube channel directly.
            </p>
            <button
              onClick={() => setActiveCategory('All')}
              className="px-4 py-2 bg-brand-navy dark:bg-white text-white dark:text-brand-navy text-xs font-semibold rounded-full"
            >
              Show All Videos
            </button>
          </div>
        ) : (
          /* Video Grid - Directly animated per card so dynamic additions animate in reliably */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedVideos.map((video, idx) => (
              <motion.div
                key={video.id ? `${video.id}-${idx}` : idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: Math.min((idx % 6) * 0.06, 0.35),
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="h-full"
              >
                <VideoCard
                  video={video}
                  onPlayOnSite={handlePlayOnSite}
                  priority={idx < 3}
                />
              </motion.div>
            ))}
          </div>
        )}

        {/* Load More & Channel Explore Footer */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          {filteredVideos.length > visibleCount && (
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-dark dark:bg-white dark:hover:bg-gray-100 text-white dark:text-brand-navy font-semibold text-sm px-7 py-3 rounded-full shadow-sm transition-all"
            >
              <span>Load More Videos ({filteredVideos.length - visibleCount} more)</span>
              <ChevronDown className="w-4 h-4" />
            </motion.button>
          )}

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <a
              href={SITE_INFO.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/15 text-gray-800 dark:text-gray-200 font-semibold text-sm px-6 py-3 rounded-full transition-colors"
            >
              <Youtube className="w-4 h-4 text-red-600 fill-red-600" />
              <span>Explore Entire YouTube Channel</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Embedded In-Website Video Player Modal */}
      <VideoPlayerModal
        video={selectedVideo}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
