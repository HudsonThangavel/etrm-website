import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Clock, Phone, Heart, Calendar } from 'lucide-react';
import { MINISTRIES_DATA, SITE_INFO } from '@/lib/constants';
import { FadeIn, EtrmParticles } from '@/components/animations';
import MediaMinistryGallery from '@/components/media/MediaMinistryGallery';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return MINISTRIES_DATA.map((m) => ({
    slug: m.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const ministry = MINISTRIES_DATA.find((m) => m.slug === params.slug);
  if (!ministry) return { title: 'Ministry Not Found' };

  return {
    title: `${ministry.title} | End Time Revival Mission`,
    description: ministry.shortDescription,
  };
}

export default function MinistryDetailPage({ params }: Props) {
  const ministry = MINISTRIES_DATA.find((m) => m.slug === params.slug);

  if (!ministry) {
    notFound();
  }

  return (
    <div className="pt-28 pb-20 overflow-hidden">
      {/* Header */}
      <section className="bg-gradient-to-b from-brand-sand via-white to-white dark:from-[#070D1F] dark:via-[#0A1226] dark:to-[#070D1F] py-14 border-b border-gray-100 dark:border-white/10 relative overflow-hidden transition-colors duration-300">
        <EtrmParticles count={14} color="gold" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <FadeIn direction="right" distance={15}>
            <Link
              href="/ministries"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400 hover:text-brand-accent dark:hover:text-brand-accent transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Ministries</span>
            </Link>
          </FadeIn>

          <FadeIn direction="up" delay={0.1} className="flex items-center gap-3">
            <span className="font-mono text-sm font-bold text-brand-accent bg-red-50 dark:bg-red-950/40 px-3 py-1 rounded-full">
              {ministry.num}
            </span>
            <span className="text-xs font-semibold text-brand-gold uppercase tracking-wider">
              {ministry.tagline}
            </span>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy dark:text-white tracking-tight">
              {ministry.title}
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-3xl">
              {ministry.shortDescription}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Story & Activities */}
          <div className="lg:col-span-2 space-y-8">
            <FadeIn direction="up" delay={0.1} className="space-y-4">
              <h2 className="text-2xl font-bold text-brand-navy dark:text-white">About This Ministry</h2>
              <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                {ministry.fullDescription}
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.2} className="space-y-4">
              <h2 className="text-2xl font-bold text-brand-navy dark:text-white">Key Activities & Operations</h2>
              <div className="space-y-3">
                {ministry.activities.map((act, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white dark:bg-[#0E162B] p-4 rounded-xl border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-md transition-all">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 dark:text-gray-200 font-medium leading-relaxed">{act}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Sidebar Schedule & CTA */}
          <div className="space-y-6">
            {ministry.schedule && (
              <FadeIn direction="left" delay={0.2} className="bg-brand-sand dark:bg-[#0E162B] rounded-2xl p-6 border border-gray-200 dark:border-white/10 space-y-3 shadow-sm">
                <div className="flex items-center gap-2 text-brand-navy dark:text-white font-bold text-sm">
                  <Clock className="w-4 h-4 text-brand-accent" />
                  <span>Schedule & Availability</span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                  {ministry.schedule}
                </p>
              </FadeIn>
            )}

            <FadeIn direction="left" delay={0.3} className="bg-white dark:bg-[#0E162B] rounded-2xl p-6 border border-gray-100 dark:border-white/10 shadow-sm space-y-4">
              <h3 className="font-bold text-brand-navy dark:text-white text-sm">Get Connected</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Want to attend, serve, or support this ministry? Reach out to our team today.
              </p>
              <div className="space-y-2 pt-2">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-dark dark:bg-white/15 dark:hover:bg-white/20 text-white font-semibold text-xs py-2.5 rounded-xl transition-all shadow hover:shadow-md"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Contact Ministry Team</span>
                </Link>
                <Link
                  href="/give"
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-red-700 text-white font-semibold text-xs py-2.5 rounded-xl transition-all shadow hover:shadow-md"
                >
                  <Heart className="w-3.5 h-3.5 fill-white" />
                  <span>Support this Work</span>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* If Media Ministry, Show Interactive YouTube Channel Broadcast Gallery */}
        {ministry.slug === 'media' && (
          <FadeIn direction="up" delay={0.25} className="pt-8 border-t border-gray-100 dark:border-white/10">
            <MediaMinistryGallery />
          </FadeIn>
        )}
      </section>
    </div>
  );
}
