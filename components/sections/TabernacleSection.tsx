'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Building2, Heart, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { SITE_INFO } from '@/lib/constants';
import { FadeIn, AnimatedCounter } from '@/components/animations';

export default function TabernacleSection() {
  return (
    <section className="py-20 bg-white dark:bg-[#050914] transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Vision & Expansion Call */}
          <div className="lg:col-span-6 space-y-6">
            <FadeIn direction="up" delay={0.1}>
              <div className="inline-flex items-center gap-2 bg-brand-sand dark:bg-white/10 text-brand-navy dark:text-gray-200 text-xs font-bold tracking-widest px-3 py-1.5 rounded-full uppercase border border-gray-200 dark:border-white/15">
                <Building2 className="w-3.5 h-3.5 text-brand-gold" />
                <span>Building Together for God&apos;s Glory</span>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy dark:text-white tracking-tight">
                Become a part of a Revival Movement
              </h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                Even today as God is increasing the boundaries of our ministry by leaps and bounds we&apos;re in desperate need to expand our physical building where all these ministries are carried out. God has given us a vision to build a tabernacle to accommodate approximately 2,500 people in a service.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-3 bg-brand-sand dark:bg-[#0E162B] rounded-2xl p-4 border border-gray-200 dark:border-white/10 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 dark:bg-brand-accent/20 flex items-center justify-center text-brand-accent font-bold">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-brand-navy dark:text-white">
                    <AnimatedCounter value={2500} suffix=" Seats" duration={2} />
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">State-of-the-art Sanctuary & Facilities</p>
                </div>
              </motion.div>
            </FadeIn>

            <FadeIn direction="up" delay={0.5} className="pt-2">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="inline-block">
                <Link
                  href="/give?fund=tabernacle"
                  className="inline-flex items-center gap-2 bg-brand-accent hover:bg-red-700 text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  <motion.span
                    animate={{ scale: [1, 1.25, 1] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                    className="inline-flex"
                  >
                    <Heart className="w-4 h-4 fill-white" />
                  </motion.span>
                  <span>Donate Now for the Tabernacle</span>
                </Link>
              </motion.div>
            </FadeIn>
          </div>

          {/* Right Column: Architectural Renders */}
          <div className="lg:col-span-6 space-y-6">
            {/* Exterior Render */}
            <FadeIn direction="left" distance={30} delay={0.2}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-white/10 aspect-[16/9] bg-gray-100 dark:bg-[#0E162B] group"
              >
                <Image
                  src="/images/tabernacle-exterior.jpg"
                  alt="Architectural model of the planned Ruah tabernacle building exterior"
                  fill
                  className="object-cover group-hover:scale-106 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 text-white">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-gold">Architectural Vision</p>
                  <p className="text-sm font-semibold">The Tabernacle — Exterior</p>
                </div>
              </motion.div>
            </FadeIn>

            {/* Interior Render */}
            <FadeIn direction="left" distance={30} delay={0.35}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-white/10 aspect-[16/9] bg-gray-100 dark:bg-[#0E162B] group"
              >
                <Image
                  src="/images/tabernacle-interior.jpg"
                  alt="Interior render of the planned Ruah tabernacle with worshippers"
                  fill
                  className="object-cover group-hover:scale-106 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 text-white">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-gold">2,500-Seat Auditorium</p>
                  <p className="text-sm font-semibold">Worship Hall — Interior</p>
                </div>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
