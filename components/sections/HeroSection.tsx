'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Heart, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { SITE_INFO } from '@/lib/constants';
import { EtrmParticles, AnimatedCounter } from '@/components/animations';

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-brand-sand via-white to-gray-50 dark:from-[#070D1F] dark:via-[#0A1226] dark:to-[#070D1F] transition-colors duration-300 overflow-hidden">
      {/* Dynamic Breath of God Ambient Particles & Ethereal Orbs */}
      <EtrmParticles count={24} color="gold" />

      {/* Decorative background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/10 dark:bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top pill badge with subtle sparkle bounce */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 bg-brand-navy/5 dark:bg-white/10 text-brand-navy dark:text-gray-200 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide border border-brand-navy/10 dark:border-white/15 shadow-sm"
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Sparkles className="w-4 h-4 text-brand-gold fill-brand-gold" />
              </motion.div>
              <span>End Time Revival Mission — Experience the breath of God</span>
            </motion.div>

            {/* Staggered Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy dark:text-white tracking-tight leading-[1.15]"
            >
              Breath of God, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-red-600 to-amber-600">
                Building Lives.
              </span>
            </motion.h1>

            {/* Subtitle with fade-in */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
              className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              Spreading the life-giving breath of the Holy Spirit to cause freedom to the oppressed, restoration to families, and an unquenchable revival in the nation.
            </motion.p>

            {/* CTA Buttons with Spring Physics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.96 }}>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-dark text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  <span>Know More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.96 }}>
                <Link
                  href="/give"
                  className="inline-flex items-center gap-2 bg-brand-accent hover:bg-red-700 text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  <motion.div
                    animate={{ scale: [1, 1.25, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Heart className="w-4 h-4 fill-white" />
                  </motion.div>
                  <span>Give Online</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Service & Community Highlights with Animated Counter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-gray-200 dark:border-white/10"
            >
              <div className="group">
                <p className="text-2xl font-bold text-brand-navy dark:text-white">
                  <AnimatedCounter value={10} suffix="L+" duration={2} />
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Souls Harvested</p>
              </div>
              <div className="group">
                <p className="text-2xl font-bold text-brand-navy dark:text-white">
                  <AnimatedCounter value={10} suffix="+ Yrs" duration={2} />
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Spiritual Revival</p>
              </div>
              <div className="col-span-2 sm:col-span-1 group">
                <p className="text-2xl font-bold text-brand-accent flex items-center justify-center lg:justify-start gap-1">
                  <span>24×7</span>
                  <span className="inline-block w-2 h-2 rounded-full bg-brand-accent animate-ping" />
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Prayer Helpline</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Main Worship Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-[#0E162B] aspect-[4/3] bg-gray-100 dark:bg-[#0E162B] group">
                <Image
                  src="/images/hero-worship.jpg"
                  alt="Believers gathered for a End Time Revival Mission worship service"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs uppercase tracking-wider text-brand-gold font-bold">Ruah Revival Church</p>
                  <p className="text-sm font-semibold">Spirit-filled worship and life-transforming fellowship</p>
                </div>
              </div>

              {/* Founder Leader Floating Card with gentle levitation animation */}
              <motion.div
                animate={{
                  y: [0, -9, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="mt-4 sm:absolute sm:-bottom-8 sm:-left-8 bg-white/95 dark:bg-[#0E162B]/95 backdrop-blur-md rounded-2xl shadow-xl p-4 border border-gray-100 dark:border-white/10 flex items-center gap-3.5 max-w-xs z-20 hover:shadow-2xl transition-all"
              >
                <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-brand-gold shadow-sm">
                  <Image
                    src="/images/pastor-samselvaraj.jpg"
                    alt="Bishop Dr. J. Sam Selvaraj"
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-brand-navy dark:text-white text-sm">{SITE_INFO.founder}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{SITE_INFO.role}</p>
                  <div className="flex items-center gap-1 text-[11px] text-brand-accent font-semibold mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Apostolic Anointing</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
