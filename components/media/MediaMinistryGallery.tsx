'use client';

import React, { useState } from 'react';
import { Youtube, ExternalLink, Sparkles, Filter } from 'lucide-react';
import { LATEST_SERMONS, SITE_INFO } from '@/lib/constants';
import VideoCard from '@/components/media/VideoCard';
import VideoPlayerModal from '@/components/media/VideoPlayerModal';
import { Sermon } from '@/types';
import { motion } from 'framer-motion';

export default function MediaMinistryGallery() {
  const [selectedVideo, setSelectedVideo] = useState<Sermon | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<'all' | 'sermons' | 'worship'>('all');

  const filteredVideos = LATEST_SERMONS.filter((v) => {
    if (activeFilter === 'sermons') {
      return v.series.toLowerCase().includes('service') || v.series.toLowerCase().includes('message') || v.series.toLowerCase().includes('convention');
    }
    if (activeFilter === 'worship') {
      return v.series.toLowerCase().includes('worship') || v.series.toLowerCase().includes('melodies');
    }
    return true;
  });

  return (
    <div className="space-y-8 pt-6">
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-200 dark:border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-accent">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ETRM Official Broadcast Gallery</span>
          </div>
          <h2 className="text-2xl font-bold text-brand-navy dark:text-white mt-1">
            Featured Sermons & Music Releases
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            Play directly on our website or open directly on YouTube.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={SITE_INFO.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-semibold shadow-sm transition-all"
          >
            <Youtube className="w-4 h-4 fill-white" />
            <span>Visit YouTube Channel</span>
            <ExternalLink className="w-3 h-3 opacity-80" />
          </a>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2">
        <Filter className="w-3.5 h-3.5 text-gray-400" />
        <span className="text-xs text-gray-500 font-medium mr-1">Filter:</span>
        <button
          type="button"
          onClick={() => setActiveFilter('all')}
          className={`text-xs px-3 py-1.5 rounded-full font-semibold transition-all ${
            activeFilter === 'all'
              ? 'bg-brand-navy text-white dark:bg-white dark:text-brand-navy'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-white/10 dark:text-gray-300'
          }`}
        >
          All Releases ({LATEST_SERMONS.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveFilter('sermons')}
          className={`text-xs px-3 py-1.5 rounded-full font-semibold transition-all ${
            activeFilter === 'sermons'
              ? 'bg-brand-navy text-white dark:bg-white dark:text-brand-navy'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-white/10 dark:text-gray-300'
          }`}
        >
          Sermons & Services
        </button>
        <button
          type="button"
          onClick={() => setActiveFilter('worship')}
          className={`text-xs px-3 py-1.5 rounded-full font-semibold transition-all ${
            activeFilter === 'worship'
              ? 'bg-brand-navy text-white dark:bg-white dark:text-brand-navy'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-white/10 dark:text-gray-300'
          }`}
        >
          Worship & Melodies
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            onPlayOnSite={(v) => {
              setSelectedVideo(v);
              setIsModalOpen(true);
            }}
          />
        ))}
      </div>

      {/* Video Modal Player */}
      <VideoPlayerModal
        video={selectedVideo}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
