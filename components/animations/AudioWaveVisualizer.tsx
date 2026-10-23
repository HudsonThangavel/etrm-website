'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AudioWaveVisualizerProps {
  isPlaying?: boolean;
  barCount?: number;
  className?: string;
  color?: string;
}

export function AudioWaveVisualizer({
  isPlaying = true,
  barCount = 14,
  className = '',
  color = 'bg-brand-gold',
}: AudioWaveVisualizerProps) {
  // Predefined heights pattern for audio wave rhythm
  const baseHeights = [28, 48, 80, 56, 92, 65, 38, 74, 98, 45, 60, 85, 40, 70];

  return (
    <div
      className={`inline-flex items-end gap-1 h-8 sm:h-10 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 ${className}`}
      aria-label="Audio wave visualizer"
    >
      {Array.from({ length: barCount }).map((_, i) => {
        const heightPercent = baseHeights[i % baseHeights.length];
        return (
          <motion.span
            key={i}
            className={`w-[3px] rounded-full ${color}`}
            animate={
              isPlaying
                ? {
                    height: [
                      `${Math.max(15, heightPercent * 0.3)}%`,
                      `${heightPercent}%`,
                      `${Math.max(20, heightPercent * 0.5)}%`,
                      `${Math.min(100, heightPercent * 1.2)}%`,
                      `${Math.max(15, heightPercent * 0.3)}%`,
                    ],
                  }
                : { height: '20%' }
            }
            transition={{
              duration: 1.2 + (i % 5) * 0.2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: (i % 7) * 0.1,
            }}
          />
        );
      })}
    </div>
  );
}
