'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { MINISTRIES_DATA } from '@/lib/constants';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';

export default function MinistriesSection() {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up" distance={20} className="max-w-3xl mx-auto text-center mb-14 space-y-3">
          <p className="text-brand-accent text-sm font-bold uppercase tracking-widest">What We Do</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            We offer a variety of transformative ministries
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            End Time Revival Mission provides a diverse range of spiritual ministries and services, including Worship, Revival Media, Freedom Events, International Bible College, Prayer Tower, 24x7 Prayer Helpline, North India missions, Social media, Outreach and enriching literature.
          </p>
        </FadeIn>

        <StaggerContainer
          staggerChildren={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {MINISTRIES_DATA.map((m) => (
            <StaggerItem key={m.id} className="h-full">
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="h-full"
              >
                <Link
                  href={`/ministries/${m.slug}`}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-brand-accent/40 hover:shadow-elevated transition-all flex flex-col justify-between group h-full block"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm font-bold text-gray-400 group-hover:text-brand-accent transition-colors">
                        {m.num}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-brand-accent group-hover:text-white transition-all transform group-hover:rotate-45">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-accent transition-colors">
                        {m.title}
                      </h3>
                      <p className="text-xs text-brand-gold font-medium mt-0.5">
                        {m.tagline}
                      </p>
                    </div>

                    <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                      {m.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-gray-50 flex items-center justify-between text-xs font-semibold text-brand-accent">
                    <span>Explore</span>
                    <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
                  </div>
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
