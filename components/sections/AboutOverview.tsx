'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SITE_INFO } from '@/lib/constants';
import { FadeIn, AnimatedCounter, HoverCard } from '@/components/animations';
import { getAssetPath } from '@/lib/utils';

export default function AboutOverview() {
  return (
    <section className="py-20 bg-white dark:bg-[#070D1F] transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image with Leader Highlight & Parallax-feel hover */}
          <FadeIn direction="right" distance={30} duration={0.7} className="lg:col-span-5 order-2 lg:order-1">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-3xl overflow-hidden shadow-xl aspect-[3/4] bg-gray-100 dark:bg-[#0E162B] group"
            >
              <Image
                src={getAssetPath('/images/pastor-samselvaraj.jpg')}
                alt="Bishop Dr. J. Sam Selvaraj, Founder & Senior Pastor of End Time Revival Mission"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <p className="text-xl font-bold">{SITE_INFO.founder}</p>
                <p className="text-sm text-brand-goldLight">{SITE_INFO.role}</p>
                <p className="text-xs text-gray-300">End Time Revival Mission & Revival Churches</p>
              </div>
            </motion.div>
          </FadeIn>

          {/* Right Column: Narrative & Stats */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <FadeIn direction="up" delay={0.1}>
              <div className="text-brand-accent text-sm font-bold uppercase tracking-widest">
                About Us
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy dark:text-white tracking-tight">
                Inspiring Hope, Transforming Lives.
              </h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                End Time Revival Mission exists to spread the breath of God to cause freedom to the oppressed and to instill a fresh revival in the extended body of Christ. We&apos;re glad that you are here with us, click below to know more about our journey and vision.
              </p>
            </FadeIn>

            {/* Stat Cards with Animated Numbers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <FadeIn direction="up" delay={0.4}>
                <HoverCard className="p-5 rounded-2xl bg-brand-sand dark:bg-[#0E162B] border border-gray-100 dark:border-white/10 space-y-2 shadow-sm hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy/10 dark:bg-white/10 flex items-center justify-center text-brand-navy dark:text-brand-goldLight">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <p className="text-xl font-bold text-brand-navy dark:text-white">Over a Decade</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">of Spiritual Guidance & Kingdom Impact</p>
                </HoverCard>
              </FadeIn>

              <FadeIn direction="up" delay={0.5}>
                <HoverCard className="p-5 rounded-2xl bg-brand-sand dark:bg-[#0E162B] border border-gray-100 dark:border-white/10 space-y-2 shadow-sm hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-brand-accent/10 dark:bg-brand-accent/20 flex items-center justify-center text-brand-accent">
                    <Users className="w-5 h-5" />
                  </div>
                  <p className="text-xl font-bold text-brand-navy dark:text-white">
                    <AnimatedCounter value={1000000} suffix="+" duration={2.2} />
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Souls Harvested for Kingdom of God</p>
                </HoverCard>
              </FadeIn>
            </div>

            <FadeIn direction="up" delay={0.6} className="flex flex-wrap items-center gap-4 pt-4">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-dark text-white font-semibold text-sm px-6 py-3 rounded-full transition-all shadow-md hover:shadow-lg"
                >
                  <span>Know More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/15 text-gray-800 dark:text-gray-200 font-semibold text-sm px-6 py-3 rounded-full transition-all"
                >
                  <span>Plan a Visit</span>
                </Link>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
