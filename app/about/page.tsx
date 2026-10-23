import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Users, Award, Shield, CheckCircle, MapPin, ArrowRight, Music } from 'lucide-react';
import { SITE_INFO, SERVICE_LOCATIONS, ASSOCIATE_PASTOR } from '@/lib/constants';
import { FadeIn, StaggerContainer, StaggerItem, EtrmParticles, AnimatedCounter } from '@/components/animations';
import { getAssetPath } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about End Time Revival Mission, Founder & Senior Bishop. Dr.J.Sam Selvaraj, our mission, statement of faith, and decade-long revival movement.',
};

export default function AboutPage() {
  return (
    <div className="pt-36 sm:pt-32 pb-20 overflow-hidden">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-brand-sand via-white to-white dark:from-[#070D1F] dark:via-[#0A1226] dark:to-[#070D1F] py-16 border-b border-gray-100 dark:border-white/10 relative overflow-hidden transition-colors duration-300">
        <EtrmParticles count={14} color="gold" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <FadeIn direction="down" distance={15}>
            <p className="text-brand-accent text-sm font-bold uppercase tracking-widest">End Time Revival Mission</p>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy dark:text-white tracking-tight">
              About Us
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
              Spreading the breath of God to cause freedom to the oppressed and to instill a fresh revival in the extended body of Christ.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Founder & Pastoral Leadership Story */}
      <section className="py-20 bg-white dark:bg-[#070D1F] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <FadeIn direction="right" distance={30} className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[3/4] bg-gray-100 dark:bg-[#0E162B] group">
                <Image
                  src={getAssetPath('/images/pastor-samselvaraj.jpg')}
                  alt="Bishop. Dr. J. Sam Selvaraj"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold">{SITE_INFO.founder}</h3>
                  <p className="text-brand-goldLight text-sm font-medium">{SITE_INFO.role}</p>
                </div>
              </div>
            </FadeIn>

            <div className="lg:col-span-7 space-y-6">
              <FadeIn direction="up" delay={0.1}>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-accent bg-red-50 dark:bg-red-950/40 px-3 py-1 rounded-full">
                  Pastoral Leadership
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy dark:text-white">
                  Inspiring Hope, Transforming Lives Across Nations
                </h2>
              </FadeIn>
              <FadeIn direction="up" delay={0.3}>
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                  End Time Revival Mission was birthed out of a divine mandate given to Bishop. Dr. J. Sam Selvaraj to release the life-giving breath of the Holy Spirit (Ruah in Hebrew: רוּחַ) into churches, families, and individuals burdened by despair, oppression, and sickness.
                </p>
              </FadeIn>
              <FadeIn direction="up" delay={0.4}>
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                  With a deep commitment to apostolic truth, passionate prayer, and supernatural faith, {SITE_INFO.founder} has guided millions into an intimate, victorious relationship with Jesus Christ. Over the past decade, End Time Revival Mission has expanded from humble prayer circles into a dynamic global ministry encompassing vibrant churches, gospel broadcasts, round-the-clock prayer networks, and mission frontiers reaching the unreached.
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.5}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-[#0E162B] border border-gray-100 dark:border-white/10 space-y-1 shadow-sm">
                    <p className="text-xl font-bold text-brand-navy dark:text-white">Over a Decade</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Of Spirit-Led Revival Guidance</p>
                  </div>
                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-[#0E162B] border border-gray-100 dark:border-white/10 space-y-1 shadow-sm">
                    <p className="text-xl font-bold text-brand-accent">
                      <AnimatedCounter value={1000000} suffix="+ Souls" duration={2} />
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Harvested for the Kingdom of God</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Associate Pastor & Worship Ministry - Pastor Jim Williams */}
      <section className="py-20 bg-gray-50/70 dark:bg-[#060B18] border-t border-gray-100 dark:border-white/10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text on Left */}
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
              <FadeIn direction="up" delay={0.1}>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 px-3 py-1 rounded-full border border-amber-200/60 dark:border-amber-700/30">
                  Associate Pastor & Worship Leadership
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy dark:text-white">
                  Leading Worship, Equipping Generations for Revival
                </h2>
              </FadeIn>
              <FadeIn direction="up" delay={0.3}>
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                  {ASSOCIATE_PASTOR.formalName} serves alongside {SITE_INFO.founder} as Associate Pastor and Director of Worship at End Time Revival Mission. Anointed with a deep prophetic mantle in praise and worship, Pastor Jim carries a passionate calling to usher the body of Christ into the tangible, healing presence of the Holy Spirit.
                </p>
              </FadeIn>
              <FadeIn direction="up" delay={0.4}>
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                  As the visionary voice behind <span className="font-semibold text-brand-navy dark:text-white">ETRM Melodies</span> (releasing spirit-filled anthems including <em>“Karthar Uyarthiduvaar”</em>) and powerful worship encounters like <em>“In His Presence”</em>, he mentors young leaders and cultivates a generation rooted in holiness, apostolic prayer, and bold kingdom purpose.
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.5}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white dark:bg-[#0E162B] border border-gray-100 dark:border-white/10 space-y-1 shadow-sm">
                    <div className="flex items-center gap-2 text-brand-navy dark:text-white font-bold text-lg">
                      <Music className="w-5 h-5 text-brand-accent shrink-0" />
                      <span>ETRM Melodies</span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Prophetic Songs, Anthems & Anointed Praise</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white dark:bg-[#0E162B] border border-gray-100 dark:border-white/10 space-y-1 shadow-sm">
                    <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-lg">
                      <Users className="w-5 h-5 text-amber-500 shrink-0" />
                      <span>Youth & Worship</span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Raising a Holy & Passionate Generation</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.6}>
                <div className="pt-2 flex flex-wrap gap-3">
                  <Link
                    href="/ministries/media"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-navy text-white hover:bg-brand-navy/90 dark:bg-white dark:text-brand-navy dark:hover:bg-gray-100 font-semibold text-sm transition-all shadow-sm"
                  >
                    <span>Watch Worship & Sermons</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={ASSOCIATE_PASTOR.youtubeMelodies}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-[#0E162B] text-brand-navy dark:text-white border border-gray-200 dark:border-white/10 hover:border-brand-accent font-semibold text-sm transition-all shadow-sm"
                  >
                    <Music className="w-4 h-4 text-brand-accent" />
                    <span>ETRM Melodies Channel</span>
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Photo Card on Right */}
            <FadeIn direction="left" distance={30} className="lg:col-span-5 order-1 lg:order-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[3/4] bg-gray-100 dark:bg-[#0E162B] group">
                <Image
                  src={getAssetPath(ASSOCIATE_PASTOR.image)}
                  alt={ASSOCIATE_PASTOR.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold">{ASSOCIATE_PASTOR.name}</h3>
                  <p className="text-brand-goldLight text-sm font-medium">{ASSOCIATE_PASTOR.role}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Statement of Faith & Core Convictions */}
      <section className="py-20 bg-gray-50 dark:bg-[#050914] border-t border-gray-100 dark:border-white/10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <FadeIn direction="up" className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-brand-navy dark:text-white">Our Statement of Faith</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Rooted firmly in the inerrant Scriptures and apostolic doctrine.</p>
          </FadeIn>

          <StaggerContainer staggerChildren={0.12} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'The Inerrant Word of God',
                desc: 'We believe the Holy Bible is the inspired, authoritative, and infallible Word of God, serving as the sole rule of faith and conduct.'
              },
              {
                title: 'The Triune Godhead',
                desc: 'We believe in one God, eternally existent in three persons: Father, Son, and Holy Spirit, equal in power and glory.'
              },
              {
                title: 'The Lord Jesus Christ',
                desc: 'We believe in the deity of Christ, His virgin birth, sinless life, atoning death, bodily resurrection, ascension to the Father, and imminent second coming.'
              },
              {
                title: 'Baptism and Gifts of the Holy Spirit',
                desc: 'We believe in the baptism in the Holy Spirit with signs following, and the present-day active operation of spiritual gifts, healing, and miracles.'
              }
            ].map((item, idx) => (
              <StaggerItem key={idx}>
                <div className="bg-white dark:bg-[#0E162B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/10 space-y-2 flex gap-4 hover:shadow-md transition-all h-full">
                  <CheckCircle className="w-5 h-5 text-brand-accent shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-brand-navy dark:text-white text-base">{item.title}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mt-1">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Service Locations */}
      <section className="py-20 bg-white dark:bg-[#070D1F] border-t border-gray-100 dark:border-white/10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <FadeIn direction="up" className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-brand-navy dark:text-white">Visit Our Centers</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Experience fellowship, uplifting worship, and individual prayer in person.</p>
          </FadeIn>

          <StaggerContainer staggerChildren={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICE_LOCATIONS.map((loc, idx) => (
              <StaggerItem key={idx}>
                <div className="bg-gray-50 dark:bg-[#0E162B] rounded-2xl p-6 border border-gray-100 dark:border-white/10 flex flex-col justify-between space-y-4 hover:shadow-md transition-all h-full">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-white/10 shadow-sm flex items-center justify-center text-brand-accent">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-brand-navy dark:text-white text-lg">{loc.name}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-300">{loc.address}</p>
                    <div className="pt-2 border-t border-gray-200 dark:border-white/10 space-y-1.5">
                      <p className="text-xs font-bold text-brand-navy dark:text-white">Service Times:</p>
                      {loc.timing.map((t, tIdx) => (
                        <p key={tIdx} className="text-xs text-gray-600 dark:text-gray-300 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                          <span>{t}</span>
                        </p>
                      ))}
                    </div>
                  </div>

                  <a
                    href={loc.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-brand-accent hover:underline flex items-center gap-1 pt-2 group"
                  >
                    <span>Open in Google Maps</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
