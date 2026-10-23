'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-gold via-brand-accent to-amber-500 origin-left z-[60] pointer-events-none shadow-[0_0_10px_rgba(212,175,55,0.7)]"
      style={{ scaleX }}
    />
  );
}
