'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { SITE_INFO } from '@/lib/constants';
import { FadeIn, EtrmParticles } from '@/components/animations';

export default function HelplineBanner() {
  return (
    <section className="bg-gradient-to-r from-brand-navy via-brand-blue to-brand-navy dark:from-[#040813] dark:via-[#091124] dark:to-[#040813] text-white py-14 px-4 sm:px-6 lg:px-8 border-y border-white/10 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]" />
      <EtrmParticles count={12} color="light" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
        <FadeIn direction="down" distance={15}>
          <div className="inline-block bg-white/10 text-brand-gold text-xs font-bold tracking-widest px-3.5 py-1 rounded-full uppercase border border-white/10">
            ETRM
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Need prayer? We&apos;re here for you.
          </h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <p className="text-gray-200 text-base sm:text-lg max-w-2xl mx-auto">
            Our 24×7 Prayer Helpline is always open — someone is ready to stand in faith and pray with you.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.3} className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href={`tel:${SITE_INFO.contact.primaryPhone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 bg-white text-brand-navy hover:bg-gray-100 font-bold px-7 py-3 rounded-full shadow-lg transition-colors group"
            >
              <motion.span
                animate={{ rotate: [0, -12, 12, -12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-flex"
              >
                <Phone className="w-4 h-4 text-brand-accent group-hover:scale-110 transition-transform" />
              </motion.span>
              <span>Call Now ({SITE_INFO.contact.primaryPhone})</span>
            </a>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/give"
              className="inline-flex items-center gap-2 bg-brand-accent hover:bg-red-700 text-white font-bold px-7 py-3 rounded-full shadow-lg transition-colors"
            >
              <motion.span
                animate={{ scale: [1, 1.25, 1] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-flex"
              >
                <Heart className="w-4 h-4 fill-white" />
              </motion.span>
              <span>Give Online</span>
            </Link>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
