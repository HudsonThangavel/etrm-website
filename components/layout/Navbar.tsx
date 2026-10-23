'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Heart, Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MINISTRIES_DATA, SITE_INFO } from '@/lib/constants';
import { ScrollProgressBar } from '@/components/animations';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { getAssetPath } from '@/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [ministriesOpen, setMinistriesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setMinistriesOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Scroll Reading Progress Bar */}
      <ScrollProgressBar />

      {/* Top Notification / Verse Strip */}
      <div className="bg-brand-navy dark:bg-[#040813] text-gray-200 text-xs sm:text-sm py-2 px-4 border-b border-white/10 relative overflow-hidden transition-colors">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 relative z-10">
          <p className="font-serif italic tracking-wide text-brand-goldLight text-center sm:text-left flex-1 sm:flex-none">
            {SITE_INFO.scriptureVerse}
          </p>
          <div className="flex items-center space-x-4 mx-auto sm:mx-0">
            <a
              href={`tel:${SITE_INFO.contact.primaryPhone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors group"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-flex"
              >
                <Phone className="w-3.5 h-3.5 text-brand-gold group-hover:text-white" />
              </motion.span>
              <span>{SITE_INFO.contact.primaryPhone}</span>
            </a>
            <span className="hidden md:inline text-white/30">|</span>
            <span className="hidden md:inline text-gray-300">24×7 Prayer Available</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 dark:bg-[#070D1F]/95 backdrop-blur-md shadow-md py-3 border-b border-gray-100 dark:border-white/10'
            : 'bg-white/90 dark:bg-[#070D1F]/90 backdrop-blur-sm py-4 border-b border-gray-100 dark:border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group py-0.5">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="relative flex items-center justify-center shrink-0"
            >
              {/* Light mode: crisp, high-contrast prominent logo */}
              <Image
                src={getAssetPath('/images/chruch-logo.svg')}
                alt="End Time Revival Mission Church Logo"
                width={80}
                height={120}
                className="h-12 sm:h-14 md:h-15 w-auto object-contain dark:hidden drop-shadow-sm transition-transform duration-200"
                priority
              />
              {/* Dark mode: radiant luminous gold logo */}
              <Image
                src={getAssetPath('/images/chruch-logo-gold.svg')}
                alt="End Time Revival Mission Church Logo"
                width={80}
                height={120}
                className="h-12 sm:h-14 md:h-15 w-auto object-contain hidden dark:block drop-shadow-[0_0_12px_rgba(212,175,55,0.6)] transition-transform duration-200"
                priority
              />
            </motion.div>
            <div className="flex flex-col justify-center">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-brand-navy dark:text-white transition-colors leading-tight">
                End Time Revival <span className="text-brand-accent">Mission</span>
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 dark:text-brand-goldLight font-semibold mt-0.5">
                Word Changes World
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm font-semibold transition-colors hover:text-brand-accent relative py-1 ${
                pathname === '/' ? 'text-brand-accent' : 'text-gray-700 dark:text-gray-200'
              }`}
            >
              Home
              {pathname === '/' && (
                <motion.span
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-accent rounded-full"
                />
              )}
            </Link>
            <Link
              href="/about"
              className={`text-sm font-semibold transition-colors hover:text-brand-accent relative py-1 ${
                pathname === '/about' ? 'text-brand-accent' : 'text-gray-700 dark:text-gray-200'
              }`}
            >
              About Us
              {pathname === '/about' && (
                <motion.span
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-accent rounded-full"
                />
              )}
            </Link>

            {/* Ministries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setMinistriesOpen(true)}
              onMouseLeave={() => setMinistriesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-semibold transition-colors hover:text-brand-accent py-2 ${
                  pathname.startsWith('/ministries') ? 'text-brand-accent' : 'text-gray-700 dark:text-gray-200'
                }`}
                aria-expanded={ministriesOpen}
              >
                <span>Ministries</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${ministriesOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {ministriesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute top-full -left-20 w-[420px] bg-white dark:bg-[#0D162B] rounded-2xl shadow-2xl border border-gray-100 dark:border-white/10 p-4 grid grid-cols-2 gap-2"
                  >
                    {MINISTRIES_DATA.map((item) => (
                      <Link
                        key={item.id}
                        href={`/ministries/${item.slug}`}
                        className="p-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors flex flex-col group/item"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-brand-navy dark:text-white group-hover/item:text-brand-accent text-sm">
                            {item.title}
                          </span>
                          <span className="text-[11px] font-mono text-gray-400">{item.num}</span>
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">{item.tagline}</span>
                      </Link>
                    ))}
                    <div className="col-span-2 pt-2 border-t border-gray-100 dark:border-white/10 mt-1 flex justify-between items-center px-1">
                      <span className="text-xs text-gray-400">Transforming lives globally</span>
                      <Link href="/ministries" className="text-xs font-semibold text-brand-accent hover:underline">
                        View all ministries →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/contact"
              className={`text-sm font-semibold transition-colors hover:text-brand-accent relative py-1 ${
                pathname === '/contact' ? 'text-brand-accent' : 'text-gray-700 dark:text-gray-200'
              }`}
            >
              Contact Us
              {pathname === '/contact' && (
                <motion.span
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-accent rounded-full"
                />
              )}
            </Link>
          </div>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Theme Toggle (Light / Dark) */}
            <ThemeToggle />

            <a
              href={`tel:${SITE_INFO.contact.primaryPhone.replace(/\s+/g, '')}`}
              className="text-xs font-bold text-gray-700 dark:text-gray-200 hover:text-brand-accent dark:hover:text-brand-accent transition-colors flex items-center gap-1.5 py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10"
            >
              <Phone className="w-3.5 h-3.5 text-brand-accent" />
              <span>{SITE_INFO.contact.primaryPhone}</span>
            </a>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/give"
                className="inline-flex items-center gap-2 bg-brand-accent hover:bg-red-700 text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Give Online</span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu & Theme Buttons */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />

            <Link
              href="/give"
              className="bg-brand-accent text-white text-xs font-bold px-3 py-2 rounded-full flex items-center gap-1 shadow"
            >
              <Heart className="w-3 h-3 fill-white" />
              <span>Give</span>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-white dark:bg-[#070D1F] border-b border-gray-200 dark:border-white/10 shadow-xl px-4 pt-3 pb-6 space-y-3 max-h-[85vh] overflow-y-auto"
          >
            <Link
              href="/"
              className="block px-3 py-2 rounded-md font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10"
            >
              About Us
            </Link>

            <div>
              <button
                onClick={() => setMinistriesOpen(!ministriesOpen)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-md font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10"
              >
                <span>Ministries</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${ministriesOpen ? 'rotate-180' : ''}`} />
              </button>
              {ministriesOpen && (
                <div className="pl-4 pr-2 py-2 space-y-2 bg-gray-50 dark:bg-white/5 rounded-xl my-1 border border-gray-100 dark:border-white/10">
                  {MINISTRIES_DATA.map((item) => (
                    <Link
                      key={item.id}
                      href={`/ministries/${item.slug}`}
                      className="block py-1.5 px-2 rounded text-sm text-gray-700 dark:text-gray-300 hover:text-brand-accent dark:hover:text-brand-accent"
                    >
                      <div className="font-medium">{item.title}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{item.tagline}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10"
            >
              Contact Us
            </Link>

            <div className="pt-4 border-t border-gray-200 dark:border-white/10 space-y-3">
              <a
                href={`tel:${SITE_INFO.contact.primaryPhone.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-2 w-full py-3 bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 rounded-xl font-bold text-gray-800 dark:text-gray-200 text-sm"
              >
                <Phone className="w-4 h-4 text-brand-accent" />
                <span>Call Helpline ({SITE_INFO.contact.primaryPhone})</span>
              </a>
              <Link
                href="/give"
                className="flex items-center justify-center gap-2 w-full py-3 bg-brand-accent hover:bg-red-700 text-white rounded-xl font-bold text-sm shadow"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Give Online</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
