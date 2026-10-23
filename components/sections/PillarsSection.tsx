'use client';

import React from 'react';
import { Eye, Target, Award, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';

const PILLARS = [
  {
    num: '01',
    title: 'Our Vision',
    description: 'To bring revival to individuals, families, churches & nation through the Gospel of Jesus Christ and the resurrection power of the Holy Spirit.',
    icon: Eye,
  },
  {
    num: '02',
    title: 'Our Mission',
    description: 'To lead people into a growing relationship with Jesus Christ through worship, word and works of the Holy Spirit, followed by signs and wonders.',
    icon: Target,
  },
  {
    num: '03',
    title: 'Our Values',
    description: 'Spirit of excellence in everything and anything we do, honoring God through genuine integrity, sacrificial love, and compassionate stewardship.',
    icon: Award,
  },
  {
    num: '04',
    title: 'Our Faith',
    description: 'Our unshakable faith is rooted in God\'s Word and Promises, however big it may be. We believe all things are possible to him who believes.',
    icon: Shield,
  },
];

export default function PillarsSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-[#050914] border-t border-gray-100 dark:border-white/10 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up" distance={20} className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <p className="text-brand-accent text-sm font-bold uppercase tracking-widest">Who We Are</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy dark:text-white tracking-tight">
            Breath of God. Building Lives.
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            The core spiritual foundation and kingdom convictions that drive every service, outreach, and broadcast.
          </p>
        </FadeIn>

        <StaggerContainer
          staggerChildren={0.12}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {PILLARS.map((p) => {
            const Icon = p.icon;
            return (
              <StaggerItem key={p.num} className="h-full">
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="bg-white dark:bg-[#0E162B] rounded-2xl p-7 shadow-soft border border-gray-100 dark:border-white/10 hover:border-brand-gold/40 dark:hover:border-brand-gold/40 hover:shadow-elevated transition-all flex flex-col justify-between group h-full relative overflow-hidden"
                >
                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-brand-accent bg-brand-accent/10 dark:bg-brand-accent/20 px-2.5 py-1 rounded-md group-hover:bg-brand-accent group-hover:text-white transition-colors">
                        {p.num}
                      </span>
                      <motion.div
                        whileHover={{ rotate: 15, scale: 1.15 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Icon className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-brand-accent transition-colors" />
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-bold text-brand-navy dark:text-white group-hover:text-brand-accent transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{p.description}</p>
                  </div>
                  {/* Subtle decorative bottom glow line */}
                  <div className="w-0 group-hover:w-full h-1 bg-gradient-to-r from-brand-gold to-brand-accent transition-all duration-300 mt-4 rounded-full" />
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
