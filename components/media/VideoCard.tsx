'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Play, Youtube, ExternalLink, Calendar, User, Eye } from 'lucide-react';
import { Sermon } from '@/types';

interface VideoCardProps {
  video: Sermon;
  onPlayOnSite: (video: Sermon) => void;
  priority?: boolean;
}

export default function VideoCard({ video, onPlayOnSite, priority = false }: VideoCardProps) {
  const [imgSrc, setImgSrc] = useState(
    video.thumbnail || `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`
  );

  useEffect(() => {
    setImgSrc(video.thumbnail || `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`);
  }, [video.thumbnail, video.youtubeId]);

  const youtubeUrl = `https://www.youtube.com/watch?v=${video.youtubeId}`;


  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="bg-white dark:bg-[#0E162B] rounded-2xl overflow-hidden border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-elevated transition-all flex flex-col group h-full"
    >
      {/* Thumbnail Area with overlay */}
      <div className="relative aspect-video bg-gray-900 overflow-hidden">
        <Image
          src={imgSrc}
          alt={video.title}
          fill
          priority={priority}
          onError={() => {
            // Fallback to standard hqdefault if maxres or custom fails
            setImgSrc(`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`);
          }}
          className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-95 group-hover:opacity-100"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Floating Quick Action Overlay on Thumbnail */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-200 bg-black/30 backdrop-blur-[2px]">
          {/* Quick Play on Website Button */}
          <motion.button
            type="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onPlayOnSite(video)}
            className="flex items-center gap-2 bg-brand-accent hover:bg-red-700 text-white font-semibold text-xs px-4 py-2.5 rounded-full shadow-lg shadow-red-900/40 transition-all"
            title="Watch on Website (Embedded)"
          >
            <Play className="w-4 h-4 fill-white ml-0.5" />
            <span>Play on Site</span>
          </motion.button>

          {/* Quick Open on YouTube Button */}
          <motion.a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 bg-black/75 hover:bg-black/90 text-white border border-white/20 font-semibold text-xs px-3.5 py-2.5 rounded-full shadow-lg transition-all"
            title="Watch on YouTube"
          >
            <Youtube className="w-4 h-4 fill-red-500" />
            <ExternalLink className="w-3.5 h-3.5" />
          </motion.a>
        </div>

        {/* Duration badge */}
        {video.duration && (
          <span className="absolute bottom-2.5 right-2.5 bg-black/80 backdrop-blur-sm text-white text-[11px] px-2 py-0.5 rounded font-mono font-medium shadow-sm">
            {video.duration}
          </span>
        )}

        {/* Top Tag */}
        <span className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-sm text-brand-goldLight border border-white/10 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">
          {video.series || 'ETRM Channel'}
        </span>
      </div>

      {/* Card Content & Details */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 space-y-4">
        <div className="space-y-2">
          <h4
            onClick={() => onPlayOnSite(video)}
            className="font-bold text-brand-navy dark:text-white text-sm sm:text-base leading-snug line-clamp-2 hover:text-brand-accent dark:hover:text-brand-accent cursor-pointer transition-colors"
            title={video.title}
          >
            {video.title}
          </h4>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-1 text-brand-accent dark:text-brand-goldLight font-medium">
              <User className="w-3 h-3" />
              <span className="truncate max-w-[150px]">{video.speaker}</span>
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{video.date}</span>
            </span>
          </div>
        </div>

        {/* Clear Dual Action Play Options */}
        <div className="pt-3 border-t border-gray-100 dark:border-white/10 grid grid-cols-2 gap-2">
          {/* Option 1: Watch on Website */}
          <button
            type="button"
            onClick={() => onPlayOnSite(video)}
            className="inline-flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl text-xs font-semibold bg-brand-sand dark:bg-white/10 text-brand-navy dark:text-white hover:bg-brand-accent hover:text-white dark:hover:bg-brand-accent dark:hover:text-white transition-all shadow-sm"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span className="truncate">Watch on Site</span>
          </button>

          {/* Option 2: Watch on YouTube */}
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl text-xs font-semibold bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 hover:bg-red-600 hover:text-white dark:hover:bg-red-600 dark:hover:text-white transition-all shadow-sm border border-red-200/60 dark:border-red-900/50"
          >
            <Youtube className="w-3.5 h-3.5 fill-red-600 group-hover:fill-white" />
            <span className="truncate">On YouTube</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
