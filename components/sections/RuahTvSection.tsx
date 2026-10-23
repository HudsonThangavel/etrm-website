'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Tv, Youtube, BookOpen, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { RHEMA_WORDS, LATEST_SERMONS, SITE_INFO } from '@/lib/constants';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import VideoCard from '@/components/media/VideoCard';
import VideoPlayerModal from '@/components/media/VideoPlayerModal';
import { Sermon } from '@/types';

export default function RuahTvSection() {
  const [selectedVideo, setSelectedVideo] = useState<Sermon | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayOnSite = (video: Sermon) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="py-20 bg-white dark:bg-[#070D1F] transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn direction="up" distance={20} className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-brand-accent text-sm font-bold uppercase tracking-widest">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600" />
              </span>
              <Tv className="w-4 h-4" />
              <span>ETRM Media & TV Broadcast</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy dark:text-white tracking-tight">
              Watch. Listen. Be Transformed.
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xl">
              Stream latest messages directly on our website or watch on our official YouTube channel.
            </p>
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href={SITE_INFO.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-md hover:shadow-red-500/20 transition-all self-start md:self-auto"
            >
              <Youtube className="w-4 h-4 fill-white" />
              <span>Subscribe @etrm-official9293</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </motion.div>
        </FadeIn>

        {/* Content Columns: Daily Rhema Word & Latest Sermons */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Daily Rhema Word Column */}
          <FadeIn direction="right" distance={30} className="lg:col-span-5 bg-gradient-to-br from-brand-sand to-gray-50 dark:from-[#0E162B] dark:to-[#090F1F] rounded-3xl p-6 sm:p-8 border border-gray-100 dark:border-white/10 flex flex-col justify-between shadow-sm">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-white/10">
                <div className="flex items-center gap-2 text-brand-navy dark:text-white font-bold text-lg">
                  <BookOpen className="w-5 h-5 text-brand-accent" />
                  <span>Daily Rhema Word</span>
                </div>
                <span className="text-xs font-semibold text-brand-accent uppercase bg-white dark:bg-white/10 dark:text-brand-goldLight px-2.5 py-1 rounded-full shadow-sm">
                  Every Day
                </span>
              </div>

              <div className="space-y-4">
                {RHEMA_WORDS.map((rw) => (
                  <motion.div
                    key={rw.id}
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white dark:bg-[#070D1F] rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-white/10 hover:shadow-md transition-shadow space-y-2 group"
                  >
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span className="font-semibold text-brand-accent">Rhema Word</span>
                      <span>{rw.date}</span>
                    </div>
                    <p className="font-bold text-gray-900 dark:text-white text-base leading-relaxed group-hover:text-brand-accent transition-colors">
                      {rw.tamilText}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-300 italic">
                      &quot;{rw.englishTranslation}&quot;
                    </p>
                    <p className="text-[11px] font-semibold text-brand-gold">
                      — {rw.scriptureReference}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="/ministries/media"
                className="text-sm font-semibold text-brand-accent hover:text-red-800 dark:hover:text-red-400 flex items-center gap-1 group"
              >
                <span>View all Rhema Words & Media</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </FadeIn>

          {/* Latest Sermons Column */}
          <div className="lg:col-span-7 space-y-6">
            <FadeIn direction="up" delay={0.15} className="flex items-center justify-between pb-2 border-b border-gray-200 dark:border-white/10">
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-bold">
                  Official YouTube Broadcasts
                </p>
                <h3 className="text-2xl font-bold text-brand-navy dark:text-white">Latest Sermons & Worship</h3>
              </div>
              <Link href="/ministries/media" className="text-sm font-semibold text-brand-accent hover:underline flex items-center gap-1">
                <span>View all media</span>
                <span>→</span>
              </Link>
            </FadeIn>

            {/* Video Cards Grid */}
            <StaggerContainer staggerChildren={0.12} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {LATEST_SERMONS.map((s) => (
                <StaggerItem key={s.id}>
                  <VideoCard
                    video={s}
                    onPlayOnSite={handlePlayOnSite}
                  />
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeIn direction="up" delay={0.3} className="text-center pt-2">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
                <Link
                  href="/ministries/media"
                  className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/15 text-gray-800 dark:text-gray-200 font-semibold text-sm px-6 py-2.5 rounded-full transition-colors"
                >
                  <span>Explore More Sermons & Music</span>
                </Link>
              </motion.div>
            </FadeIn>
          </div>
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
