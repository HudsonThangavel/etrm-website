'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  drift: number;
}

interface EtrmParticlesProps {
  count?: number;
  color?: 'gold' | 'light' | 'mixed';
  className?: string;
}

export function EtrmParticles({
  count = 20,
  color = 'gold',
  className = '',
}: EtrmParticlesProps) {
  // Generate consistent randomized particles for visual stability
  const particles: Particle[] = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.floor(Math.random() * 100), // percentage
      size: Math.random() * 5 + 3, // 3px to 8px
      duration: Math.random() * 8 + 7, // 7s to 15s
      delay: Math.random() * 5,
      opacity: Math.random() * 0.4 + 0.15,
      drift: (Math.random() - 0.5) * 60, // horizontal drift px
    }));
  }, [count]);

  const getColorClass = (index: number) => {
    if (color === 'light') return 'bg-white/40 shadow-glow';
    if (color === 'gold') return 'bg-brand-gold/50 shadow-glow';
    return index % 2 === 0 ? 'bg-brand-gold/60' : 'bg-brand-accent/40';
  };

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute rounded-full blur-[0.5px] ${getColorClass(p.id)}`}
          style={{
            left: `${p.x}%`,
            bottom: '-20px',
            width: `${p.size}px`,
            height: `${p.size}px`,
          }}
          animate={{
            y: ['0vh', '-110vh'],
            x: [0, p.drift, p.drift * -0.5, p.drift * 0.8],
            opacity: [0, p.opacity, p.opacity * 0.9, 0],
            scale: [0.6, 1.2, 1, 0.5],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Gentle floating glowing orbs representing the Holy Spirit's breath */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-brand-gold/10 blur-3xl"
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.15, 0.35, 0.15],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-brand-accent/10 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.25, 0.1],
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}

export const RuahParticles = EtrmParticles;
