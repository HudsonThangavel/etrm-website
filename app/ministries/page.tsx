import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { MINISTRIES_DATA } from '@/lib/constants';
import { FadeIn, StaggerContainer, StaggerItem, EtrmParticles } from '@/components/animations';

export const metadata: Metadata = {
  title: 'Our Ministries',
  description:
    'Explore the 8 transformative ministries of End Time Revival Mission: Church, Media, Mercy Trust, Prayer Tower, Freedom Events, Bible College, North India Missions, and 24x7 Prayer Helpline.',
};

export default function MinistriesPage() {
  return (
    <div className="pt-36 sm:pt-32 pb-20 overflow-hidden">
      <section className="bg-gradient-to-b from-brand-sand via-white to-white dark:from-[#070D1F] dark:via-[#0A1226] dark:to-[#070D1F] py-16 border-b border-gray-100 dark:border-white/10 relative overflow-hidden transition-colors duration-300">
        <EtrmParticles count={14} color="gold" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <FadeIn direction="down" distance={15}>
            <p className="text-brand-accent text-sm font-bold uppercase tracking-widest">End Time Revival Mission</p>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy dark:text-white tracking-tight">
              Our Ministries
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
              End Time Revival Mission provides a diverse range of spiritual ministries and compassionate services designed to transform individuals, families, churches, and nations.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <StaggerContainer staggerChildren={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MINISTRIES_DATA.map((m) => (
            <StaggerItem key={m.id} className="h-full">
              <Link
                href={`/ministries/${m.slug}`}
                className="bg-white dark:bg-[#0E162B] rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-white/10 hover:border-brand-accent/40 dark:hover:border-brand-accent/40 hover:shadow-elevated transition-all flex flex-col justify-between group h-full block transform hover:-translate-y-1.5 duration-200"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-gray-400 group-hover:text-brand-accent transition-colors">
                      {m.num}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-gray-50 dark:bg-white/10 flex items-center justify-center text-gray-400 dark:text-gray-300 group-hover:bg-brand-accent group-hover:text-white transition-all transform group-hover:rotate-45">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-brand-navy dark:text-white group-hover:text-brand-accent transition-colors">
                      {m.title}
                    </h3>
                    <p className="text-xs text-brand-gold font-medium mt-0.5">{m.tagline}</p>
                  </div>

                  <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed">
                    {m.shortDescription}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-50 dark:border-white/5 flex items-center justify-between text-xs font-semibold text-brand-accent">
                  <span>View Ministry Details</span>
                  <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </div>
  );
}
