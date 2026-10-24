'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  Heart,
  ArrowRight,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Church,
  Music,
  PhoneCall,
  Clock,
  Flame,
  Radio,
  Users,
  Compass,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_INFO, ASSOCIATE_PASTOR } from '@/lib/constants';
import { EtrmParticles, AnimatedCounter } from '@/components/animations';
import { useLanguage } from '@/components/translation/LanguageContext';
import { getAssetPath } from '@/lib/utils';

interface SlideData {
  id: string;
  category: string;
  categoryTamil: string;
  badgeEn: string;
  badgeTa: string;
  badgeIcon: React.ElementType;
  headingLine1En: string;
  headingLine1Ta?: string;
  headingHighlightEn: string;
  headingHighlightTa?: string;
  gradient: string;
  descriptionEn: string;
  descriptionTa: string;
  primaryCta: {
    labelEn: string;
    labelTa: string;
    href: string;
    isExternal?: boolean;
    icon?: React.ElementType;
  };
  secondaryCta: {
    labelEn: string;
    labelTa: string;
    href: string;
    isExternal?: boolean;
    icon?: React.ElementType;
    pulseIcon?: boolean;
  };
  image: string;
  imageAlt: string;
  captionTagEn: string;
  captionTagTa: string;
  captionTitleEn: string;
  captionTitleTa: string;
  floatingCard: {
    image?: string;
    icon?: React.ElementType;
    titleEn: string;
    titleTa: string;
    subtitleEn: string;
    subtitleTa: string;
    badgeEn: string;
    badgeTa: string;
    badgeIcon: React.ElementType;
  };
  metrics: Array<{
    type: 'counter' | 'static';
    value?: number;
    suffix?: string;
    textValue?: string;
    labelEn: string;
    labelTa: string;
    isLive?: boolean;
  }>;
  glowColor: string;
}

const SLIDES: SlideData[] = [
  {
    id: 'revival',
    category: '01 Word & Revival',
    categoryTamil: '01 தேவ வார்த்தை',
    badgeEn: 'End Time Revival Mission — Experience the breath of God',
    badgeTa: 'கடைசி கால எழுப்புதல் சபை — தேவ ஆவியை உணருங்கள்',
    badgeIcon: Sparkles,
    headingLine1En: 'Word Changes',
    headingLine1Ta: 'வார்த்தை மாற்றும்',
    headingHighlightEn: 'World.',
    headingHighlightTa: 'உலகத்தை.',
    gradient: 'from-brand-accent via-red-600 to-amber-600',
    descriptionEn:
      'Spreading the life-giving breath of the Holy Spirit to cause freedom to the oppressed, restoration to families, and an unquenchable revival across the nations.',
    descriptionTa:
      'ஒடுக்கப்பட்டோருக்கு விடுதலை, குடும்பங்களுக்கு மறுவாழ்வு, மற்றும் தேசமெங்கும் அணையாத எழுப்புதலைக் கொண்டுவரும் தூய ஆவியானவரின் ஜீவ சுவாசத்தைப் பரப்புகிறோம்.',
    primaryCta: {
      labelEn: 'Know More About Us',
      labelTa: 'எங்களை பற்றி அறிய',
      href: '/about',
      icon: ArrowRight,
    },
    secondaryCta: {
      labelEn: 'Give Online',
      labelTa: 'காணிக்கை செலுத்த',
      href: '/give',
      icon: Heart,
      pulseIcon: true,
    },
    image: '/images/hero-worship.jpg',
    imageAlt: 'Believers gathered for an End Time Revival Mission worship service',
    captionTagEn: 'Ruah Revival Church',
    captionTagTa: 'ரூவா எழுப்புதல் சபை',
    captionTitleEn: 'Spirit-filled worship and life-transforming fellowship',
    captionTitleTa: 'ஆவியின் பிரசன்னம் மற்றும் வாழ்க்கை மாற்றும் ஐக்கியம்',
    floatingCard: {
      image: '/images/pastor-samselvaraj.jpg',
      titleEn: SITE_INFO.founder,
      titleTa: 'பிஷப் முனைவர் J. சாம் செல்வராஜ்',
      subtitleEn: SITE_INFO.role,
      subtitleTa: 'ஸ்தாபகர் & தலைமை போதகர்',
      badgeEn: 'Apostolic Anointing',
      badgeTa: 'அப்போஸ்தல அபிஷேகம்',
      badgeIcon: ShieldCheck,
    },
    metrics: [
      {
        type: 'counter',
        value: 10,
        suffix: 'L+',
        labelEn: 'Souls Harvested',
        labelTa: 'மீட்கப்பட்ட ஆத்துமாக்கள்',
      },
      {
        type: 'counter',
        value: 10,
        suffix: '+ Yrs',
        labelEn: 'Spiritual Revival',
        labelTa: 'ஆவிக்குரிய எழுப்புதல்',
      },
      {
        type: 'static',
        textValue: '24×7',
        labelEn: 'Prayer Helpline',
        labelTa: 'ஜெப உதவி மையம்',
        isLive: true,
      },
    ],
    glowColor: 'bg-brand-gold/15 dark:bg-brand-gold/10',
  },
  {
    id: 'tabernacle',
    category: '02 Holy Tabernacle',
    categoryTamil: '02 திருச்சபை ஆலயம்',
    badgeEn: 'Consecrated Sanctuary & Unceasing Altar of Worship',
    badgeTa: 'அர்ப்பணிக்கப்பட்ட பிரதான ஆலயம் — தொடர் ஆராதனையின் பலிபீடம்',
    badgeIcon: Church,
    headingLine1En: 'A Holy Altar Built for',
    headingLine1Ta: 'ஆயிரக்கணக்கானோருக்கான',
    headingHighlightEn: 'Revival & Praise.',
    headingHighlightTa: 'மகிமையின் ஆலயம்.',
    gradient: 'from-amber-500 via-brand-gold to-yellow-500',
    descriptionEn:
      'Step into our consecrated Tabernacle designed to host 2,500+ worshippers under continuous praise, fervent intercession, and tangible manifestations of God’s glory.',
    descriptionTa:
      '2,500-க்கும் மேற்பட்ட விசுவாசிகள் ஒன்றுகூடி தொடர் துதி, ஆவியின் ஜெபம் மற்றும் அற்புதங்களை அனுபவிக்கும் பரிசுத்த ஆலயம்.',
    primaryCta: {
      labelEn: 'Explore Tabernacle',
      labelTa: 'ஆலயத்தை பார்வையிட',
      href: '/ministries/church',
      icon: ArrowRight,
    },
    secondaryCta: {
      labelEn: 'Worship Timings',
      labelTa: 'ஆராதனை நேரங்கள்',
      href: '/about',
      icon: Clock,
    },
    image: '/images/tabernacle-interior.jpg',
    imageAlt: 'Interior of the Ruah Tabernacle worship hall',
    captionTagEn: 'Ruah Tabernacle Altar',
    captionTagTa: 'ரூவா ஆலயம்',
    captionTitleEn: '2,500+ Seats • Vadapalani & Tuticorin Centers',
    captionTitleTa: '2,500+ இருக்கைகள் • வடபழனி & தூத்துக்குடி',
    floatingCard: {
      icon: Church,
      titleEn: 'Ruah Revival Tabernacle',
      titleTa: 'ரூவா எழுப்புதல் ஆலயம்',
      subtitleEn: 'House of Prayer for All Nations',
      subtitleTa: 'சகல ஜனங்களுக்குமான ஜெப வீடு',
      badgeEn: 'Consecrated Altar',
      badgeTa: 'பரிசுத்த பலிபீடம்',
      badgeIcon: Sparkles,
    },
    metrics: [
      {
        type: 'counter',
        value: 2500,
        suffix: '+ Seats',
        labelEn: 'Seating Capacity',
        labelTa: 'இருக்கை வசதி',
      },
      {
        type: 'static',
        textValue: 'Sundays',
        labelEn: '7:00 & 9:30 AM',
        labelTa: 'ஞாயிறு காலை ஆராதனை',
      },
      {
        type: 'static',
        textValue: 'Open Daily',
        labelEn: 'Prayer & Counseling',
        labelTa: 'தனிநபர் ஜெபம்',
        isLive: true,
      },
    ],
    glowColor: 'bg-amber-500/15 dark:bg-amber-400/10',
  },
  {
    id: 'melodies',
    category: '03 Praise Melodies',
    categoryTamil: '03 துதி கீதங்கள்',
    badgeEn: 'ETRM Melodies — Anointed Songs of Faith & Healing',
    badgeTa: 'ஈடிஆர்எம் மெலடிஸ் — நம்பிக்கை மற்றும் விடுதலையின் பாடல்கள்',
    badgeIcon: Music,
    headingLine1En: 'Heavenly Worship &',
    headingLine1Ta: 'பரலோக ஆராதனை &',
    headingHighlightEn: 'Prophetic Songs.',
    headingHighlightTa: 'தீர்க்கதரிசன கீதங்கள்.',
    gradient: 'from-blue-500 via-indigo-600 to-brand-accent',
    descriptionEn:
      'Original Christian songs and worship anthems written by Bishop Dr. J. Sam Selvaraj & Pastor Jim Williams, imparting healing, joy, and spiritual intimacy to millions worldwide.',
    descriptionTa:
      'பிஷப் முனைவர் J. சாம் செல்வராஜ் மற்றும் போதகர் ஜிம் வில்லியம்ஸ் ஆகியோரால் எழுதப்பட்டு இயற்றப்பட்ட மெய்யான ஆராதனைப் பாடல்கள்.',
    primaryCta: {
      labelEn: 'Listen on YouTube',
      labelTa: 'யூடியூபில் கேட்க',
      href: SITE_INFO.social.youtubeMelodies,
      isExternal: true,
      icon: ExternalLink,
    },
    secondaryCta: {
      labelEn: 'Watch Revial Media',
      labelTa: 'ரூவா டிவி பார்க்க',
      href: SITE_INFO.social.youtube,
      isExternal: true,
      icon: Radio,
    },
    image: '/images/tabernacle-exterior.jpg',
    imageAlt: 'Ruah Tabernacle exterior and worship broadcast atmosphere',
    captionTagEn: 'ETRM Melodies Ministry',
    captionTagTa: 'ஈடிஆர்எம் மெலடிஸ் ஊழியங்கள்',
    captionTitleEn: 'Original Christian Songs of Deliverance & Revival',
    captionTitleTa: 'விடுதலை மற்றும் எழுப்புதலின் மெல்லிசைப் பாடல்கள்',
    floatingCard: {
      image: ASSOCIATE_PASTOR.image,
      titleEn: ASSOCIATE_PASTOR.name,
      titleTa: 'போதகர் ஜிம் வில்லியம்ஸ்',
      subtitleEn: ASSOCIATE_PASTOR.role,
      subtitleTa: 'இணை போதகர் & இசை இயக்குநர்',
      badgeEn: 'Worship & Music Director',
      badgeTa: 'ஆராதனை & இசை இயக்குநர்',
      badgeIcon: Music,
    },
    metrics: [
      {
        type: 'counter',
        value: 100,
        suffix: '+ Songs',
        labelEn: 'Original Releases',
        labelTa: 'வெளியிடப்பட்ட பாடல்கள்',
      },
      {
        type: 'static',
        textValue: 'Global',
        labelEn: 'Worship Streaming',
        labelTa: 'உலகளாவிய ஒளிபரப்பு',
      },
      {
        type: 'static',
        textValue: 'Revial Media',
        labelEn: '24×7 Gospel Broadcast',
        labelTa: '24 மணி நேர சுவிசேஷம்',
        isLive: true,
      },
    ],
    glowColor: 'bg-blue-600/15 dark:bg-indigo-500/10',
  },
  {
    id: 'helpline',
    category: '04 24×7 Helpline',
    categoryTamil: '04 24/7 ஜெப உதவி',
    badgeEn: 'Someone is Always Here to Stand in the Gap for You',
    badgeTa: 'உங்களுக்காக தேவ சமூகத்தில் நிற்க எப்போதும் ஒருவர் உண்டு',
    badgeIcon: PhoneCall,
    headingLine1En: 'Never Face Your Battles',
    headingLine1Ta: 'போராட்டங்களில் நீங்கள்',
    headingHighlightEn: 'Alone in Prayer.',
    headingHighlightTa: 'தனிமையில்லை.',
    gradient: 'from-emerald-500 via-teal-600 to-cyan-500',
    descriptionEn:
      'Whether you are facing sickness, grief, or family challenges, our anointed prayer intercessors are on the line 24/7, ready to release miraculous breakthroughs into your life.',
    descriptionTa:
      'நோய், கண்ணீர், குடும்பப் பிரச்சனைகளில் உள்ளீர்களா? 24 மணி நேரமும் உங்களுக்காக ஜெபிக்க ஆயத்தமாயிருக்கும் எங்கள் ஜெப வீரர்களை தொடர்புகொள்ளுங்கள்.',
    primaryCta: {
      labelEn: `Call ${SITE_INFO.contact.primaryPhone}`,
      labelTa: `அழைக்க: ${SITE_INFO.contact.primaryPhone}`,
      href: `tel:${SITE_INFO.contact.primaryPhone.replace(/\s+/g, '')}`,
      icon: PhoneCall,
    },
    secondaryCta: {
      labelEn: 'Submit Prayer Request',
      labelTa: 'ஜெபக் குறிப்பு அனுப்ப',
      href: '/contact',
      icon: Heart,
    },
    image: '/images/prayer-tower.jpg',
    imageAlt: 'Ruah Prayer Sanctuary and Altar',
    captionTagEn: 'Ruah Prayer Helpline',
    captionTagTa: 'ரூவா 24×7 ஜெப கோபுரம்',
    captionTitleEn: 'Immediate Confidential Telephone Prayer Assistance',
    captionTitleTa: 'உடனடி மற்றும் ரகசியமான தொலைபேசி ஜெப உதவி',
    floatingCard: {
      icon: Flame,
      titleEn: '24×7 Prayer Tower',
      titleTa: '24×7 ரூவா ஜெப பலிபீடம்',
      subtitleEn: 'Live Intercessory Altar',
      subtitleTa: 'தொடர் பரிந்துபேசும் ஜெபக்குழு',
      badgeEn: 'Always Live & Available',
      badgeTa: 'எப்போதும் இயங்குகிறது',
      badgeIcon: PhoneCall,
    },
    metrics: [
      {
        type: 'static',
        textValue: '24×7',
        labelEn: 'Unceasing Prayer Altar',
        labelTa: 'இடைவிடா ஜெப பலிபீடம்',
        isLive: true,
      },
      {
        type: 'static',
        textValue: '100%',
        labelEn: 'Free & Confidential',
        labelTa: 'இலவச & ரகசிய ஆலோசனை',
      },
      {
        type: 'counter',
        value: 100000,
        suffix: '+',
        labelEn: 'Prayers Answered',
        labelTa: 'பதிலளிக்கப்பட்ட ஜெபங்கள்',
      },
    ],
    glowColor: 'bg-emerald-500/15 dark:bg-teal-500/10',
  },
];

const AUTOPLAY_DURATION = 6500; // 6.5 seconds per slide

export default function HeroSection() {
  const { isTamil } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const isHoveredRef = useRef(false);

  const totalSlides = SLIDES.length;
  const currentSlide = SLIDES[currentIndex];

  const goToSlide = useCallback((newIndex: number, newDirection?: number) => {
    setDirection(newDirection !== undefined ? newDirection : newIndex > currentIndex ? 1 : -1);
    setCurrentIndex(newIndex);
    setProgress(0);
  }, [currentIndex]);

  const handleNext = useCallback(() => {
    goToSlide((currentIndex + 1) % totalSlides, 1);
  }, [currentIndex, totalSlides, goToSlide]);

  const handlePrev = useCallback(() => {
    goToSlide((currentIndex - 1 + totalSlides) % totalSlides, -1);
  }, [currentIndex, totalSlides, goToSlide]);

  // Autoplay timer with precise progress ticker
  useEffect(() => {
    if (!isPlaying) return;

    const intervalTime = 50; // update progress every 50ms
    const step = (intervalTime / AUTOPLAY_DURATION) * 100;

    const interval = setInterval(() => {
      if (isHoveredRef.current) return; // pause when user hovers

      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [isPlaying, handleNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Framer Motion variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      },
    }),
  };

  const imageVariants = {
    enter: (dir: number) => ({
      scale: 1.08,
      opacity: 0,
    }),
    center: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: {
      scale: 0.95,
      opacity: 0,
      transition: { duration: 0.4 },
    },
  };

  const BadgeIcon = currentSlide.badgeIcon;
  const PrimaryIcon = currentSlide.primaryCta.icon || ArrowRight;
  const SecondaryIcon = currentSlide.secondaryCta.icon;
  const FloatingBadgeIcon = currentSlide.floatingCard.badgeIcon;

  return (
    <section
      className="relative pt-[180px] sm:pt-[190px] md:pt-44 lg:pt-36 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-b from-brand-sand via-white to-gray-50 dark:from-[#070D1F] dark:via-[#0A1226] dark:to-[#070D1F] transition-colors duration-500 overflow-hidden select-none"
      onMouseEnter={() => {
        isHoveredRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
      }}
      aria-roledescription="carousel"
      aria-label="End Time Revival Mission Highlights Slider"
    >
      {/* Dynamic Breath of God Ambient Particles */}
      <EtrmParticles count={22} color="gold" />

      {/* Decorative dynamic background glow shifting with current slide */}
      <div
        className={`absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl pointer-events-none transition-colors duration-1000 ${currentSlide.glowColor}`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Slider Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[580px] lg:min-h-[520px]">
          {/* Left Column: Headlines & Call to Actions with directional slide animation */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentSlide.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-6 text-center lg:text-left"
              >
                {/* Top Pill Badge */}
                <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-brand-navy/5 dark:bg-white/10 text-brand-navy dark:text-gray-200 px-3.5 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs md:text-sm font-semibold tracking-wide border border-brand-navy/10 dark:border-white/15 shadow-sm max-w-full text-center sm:text-left">
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="shrink-0"
                  >
                    <BadgeIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-gold fill-brand-gold" />
                  </motion.div>
                  <span className="leading-snug">
                    {isTamil ? (
                      <span className="notranslate" translate="no">
                        {currentSlide.badgeTa}
                      </span>
                    ) : (
                      <span>{currentSlide.badgeEn}</span>
                    )}
                  </span>
                </div>

                {/* Staggered Main Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-navy dark:text-white tracking-tight leading-[1.15]">
                  <span>
                    {isTamil && currentSlide.headingLine1Ta
                      ? currentSlide.headingLine1Ta
                      : currentSlide.headingLine1En}{' '}
                  </span>
                  <br className="hidden sm:inline" />
                  <span
                    className={`text-transparent bg-clip-text bg-gradient-to-r ${currentSlide.gradient}`}
                  >
                    {isTamil && currentSlide.headingHighlightTa
                      ? currentSlide.headingHighlightTa
                      : currentSlide.headingHighlightEn}
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                  {isTamil ? currentSlide.descriptionTa : currentSlide.descriptionEn}
                </p>

                {/* CTA Action Buttons */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                  <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.96 }}>
                    {currentSlide.primaryCta.isExternal ? (
                      <a
                        href={currentSlide.primaryCta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-dark dark:bg-white dark:text-brand-navy dark:hover:bg-gray-100 text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all"
                      >
                        <span>
                          {isTamil
                            ? currentSlide.primaryCta.labelTa
                            : currentSlide.primaryCta.labelEn}
                        </span>
                        <PrimaryIcon className="w-4 h-4" />
                      </a>
                    ) : (
                      <Link
                        href={currentSlide.primaryCta.href}
                        className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-dark dark:bg-white dark:text-brand-navy dark:hover:bg-gray-100 text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all"
                      >
                        <span>
                          {isTamil
                            ? currentSlide.primaryCta.labelTa
                            : currentSlide.primaryCta.labelEn}
                        </span>
                        <PrimaryIcon className="w-4 h-4" />
                      </Link>
                    )}
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.96 }}>
                    {currentSlide.secondaryCta.isExternal ? (
                      <a
                        href={currentSlide.secondaryCta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-brand-accent hover:bg-red-700 text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all"
                      >
                        {SecondaryIcon && (
                          <motion.div
                            animate={
                              currentSlide.secondaryCta.pulseIcon
                                ? { scale: [1, 1.25, 1] }
                                : undefined
                            }
                            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                          >
                            <SecondaryIcon className="w-4 h-4 fill-white" />
                          </motion.div>
                        )}
                        <span>
                          {isTamil
                            ? currentSlide.secondaryCta.labelTa
                            : currentSlide.secondaryCta.labelEn}
                        </span>
                      </a>
                    ) : (
                      <Link
                        href={currentSlide.secondaryCta.href}
                        className="inline-flex items-center gap-2 bg-brand-accent hover:bg-red-700 text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all"
                      >
                        {SecondaryIcon && (
                          <motion.div
                            animate={
                              currentSlide.secondaryCta.pulseIcon
                                ? { scale: [1, 1.25, 1] }
                                : undefined
                            }
                            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                          >
                            <SecondaryIcon className="w-4 h-4 fill-white" />
                          </motion.div>
                        )}
                        <span>
                          {isTamil
                            ? currentSlide.secondaryCta.labelTa
                            : currentSlide.secondaryCta.labelEn}
                        </span>
                      </Link>
                    )}
                  </motion.div>
                </div>

                {/* Key Metrics / Highlights Strip */}
                <div className="pt-6 grid grid-cols-3 gap-3 sm:gap-4 border-t border-gray-200 dark:border-white/10">
                  {currentSlide.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center lg:text-left">
                      <p className="text-xl sm:text-2xl font-bold text-brand-navy dark:text-white flex items-center justify-center lg:justify-start gap-1">
                        {metric.type === 'counter' && metric.value !== undefined ? (
                          <AnimatedCounter
                            value={metric.value}
                            suffix={metric.suffix || ''}
                            duration={1.8}
                          />
                        ) : (
                          <>
                            <span>{metric.textValue}</span>
                            {metric.isLive && (
                              <span className="inline-block w-2 h-2 rounded-full bg-brand-accent animate-ping" />
                            )}
                          </>
                        )}
                      </p>
                      <p className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 font-medium line-clamp-1 mt-0.5">
                        {isTamil ? metric.labelTa : metric.labelEn}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Visual Showcase & Floating Levitating Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Showcase Image Frame with Crossfade */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-[#0E162B] aspect-[4/3] bg-gray-100 dark:bg-[#0E162B]">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentSlide.id}
                    custom={direction}
                    variants={imageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={getAssetPath(currentSlide.image)}
                      alt={currentSlide.imageAlt}
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Deep gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-brand-navy/30 to-transparent" />

                    {/* Image Caption Bottom Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 mb-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                        <p className="text-[10px] sm:text-xs uppercase tracking-wider text-brand-gold font-bold">
                          {isTamil ? currentSlide.captionTagTa : currentSlide.captionTagEn}
                        </p>
                      </div>
                      <p className="text-xs sm:text-sm font-semibold line-clamp-2">
                        {isTamil ? currentSlide.captionTitleTa : currentSlide.captionTitleEn}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Floating Levitating Highlight Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide.id}
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="mt-4 sm:absolute sm:-bottom-8 sm:-left-6 bg-white/95 dark:bg-[#0E162B]/95 backdrop-blur-md rounded-2xl shadow-xl p-3.5 sm:p-4 border border-gray-100 dark:border-white/10 flex items-center gap-3.5 max-w-sm z-20 hover:shadow-2xl transition-all"
                >
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="flex items-center gap-3 w-full"
                  >
                    {currentSlide.floatingCard.image ? (
                      <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shrink-0 border-2 border-brand-gold shadow-sm">
                        <Image
                          src={getAssetPath(currentSlide.floatingCard.image)}
                          alt={currentSlide.floatingCard.titleEn}
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-brand-navy to-brand-blue dark:from-brand-accent dark:to-brand-gold flex items-center justify-center shrink-0 border-2 border-brand-gold/50 shadow-sm text-white">
                        {React.createElement(
                          currentSlide.floatingCard.icon || Church,
                          { className: 'w-6 h-6' }
                        )}
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-brand-navy dark:text-white text-xs sm:text-sm truncate">
                        {isTamil
                          ? currentSlide.floatingCard.titleTa
                          : currentSlide.floatingCard.titleEn}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 truncate">
                        {isTamil
                          ? currentSlide.floatingCard.subtitleTa
                          : currentSlide.floatingCard.subtitleEn}
                      </p>
                      <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-brand-accent dark:text-brand-gold font-semibold mt-0.5">
                        <FloatingBadgeIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                        <span className="truncate">
                          {isTamil
                            ? currentSlide.floatingCard.badgeTa
                            : currentSlide.floatingCard.badgeEn}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Interactive Slider Navigation & Controls Bar */}
        <div className="mt-12 sm:mt-14 pt-4 border-t border-gray-200/80 dark:border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Slide Category Tabs / Navigation Buttons */}
            <div className="flex items-center flex-wrap justify-center gap-2 sm:gap-3 w-full md:w-auto">
              {SLIDES.map((slide, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(idx)}
                    className={`relative px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 overflow-hidden ${
                      isActive
                        ? 'bg-brand-navy dark:bg-white text-white dark:text-brand-navy shadow-md'
                        : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10'
                    }`}
                    aria-label={`Go to slide ${idx + 1}: ${slide.category}`}
                    aria-current={isActive ? 'true' : 'false'}
                  >
                    <span>{isTamil ? slide.categoryTamil : slide.category}</span>

                    {/* Active slide progress bar indicator */}
                    {isActive && isPlaying && (
                      <span
                        className="absolute bottom-0 left-0 h-[3px] bg-brand-gold transition-all"
                        style={{ width: `${progress}%` }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Slider Action Buttons (Prev, Play/Pause, Next) */}
            <div className="flex items-center gap-2 shrink-0">
              {/* Previous Button */}
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-[#0E162B] border border-gray-200 dark:border-white/15 text-gray-700 dark:text-gray-200 hover:bg-brand-navy hover:text-white dark:hover:bg-brand-gold dark:hover:text-brand-navy shadow-sm transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Play / Pause Toggle */}
              <button
                onClick={() => setIsPlaying((prev) => !prev)}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-[#0E162B] border border-gray-200 dark:border-white/15 text-gray-700 dark:text-gray-200 hover:bg-brand-navy hover:text-white dark:hover:bg-brand-gold dark:hover:text-brand-navy shadow-sm transition-all"
                aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                title={isPlaying ? 'Pause auto-slide' : 'Resume auto-slide'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-[#0E162B] border border-gray-200 dark:border-white/15 text-gray-700 dark:text-gray-200 hover:bg-brand-navy hover:text-white dark:hover:bg-brand-gold dark:hover:text-brand-navy shadow-sm transition-all"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Slide Counter Indicator */}
              <div className="ml-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-white/10 text-xs font-bold text-gray-700 dark:text-gray-300 tracking-wider">
                <span className="text-brand-accent dark:text-brand-gold font-extrabold">
                  0{currentIndex + 1}
                </span>
                <span className="opacity-40"> / 0{totalSlides}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
