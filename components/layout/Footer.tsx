'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail, Phone, ChevronUp, Youtube, Instagram, Facebook, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { SITE_INFO, MINISTRIES_DATA } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-brand-navy dark:bg-[#040813] text-white pt-16 pb-12 border-t border-white/10 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-3.5 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="shrink-0"
              >
                <Image
                  src="/images/chruch-logo-gold.svg"
                  alt="End Time Revival Mission Logo"
                  width={80}
                  height={120}
                  className="h-14 sm:h-16 w-auto object-contain drop-shadow-[0_0_12px_rgba(212,175,55,0.5)] transition-all"
                />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-white group-hover:text-brand-goldLight transition-colors">
                  End Time Revival <span className="text-brand-accent">Mission</span>
                </span>
                <span className="text-xs uppercase tracking-widest text-brand-goldLight font-medium mt-0.5">
                  Word Changes World
                </span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Spreading the breath of God to cause freedom to the oppressed and to instill a fresh revival in the extended body of Christ.
            </p>
            <p className="text-xs font-serif italic text-brand-goldLight">
              {SITE_INFO.scriptureVerse}
            </p>
            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <motion.a
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={SITE_INFO.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-accent transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={SITE_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={SITE_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </motion.a>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-brand-gold font-bold text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link href="/give" className="hover:text-white transition-colors flex items-center gap-1.5 text-brand-goldLight">
                  <Heart className="w-3.5 h-3.5 fill-brand-goldLight" />
                  <span>Give Online</span>
                </Link>
              </li>
              <li>
                <Link href="/ministries" className="hover:text-white transition-colors">All Ministries</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Ministries List */}
          <div className="space-y-4">
            <h3 className="text-brand-gold font-bold text-sm uppercase tracking-wider">Ministries</h3>
            <ul className="space-y-2 text-xs text-gray-300">
              {MINISTRIES_DATA.slice(0, 6).map((m) => (
                <li key={m.id}>
                  <Link href={`/ministries/${m.slug}`} className="hover:text-white transition-colors">
                    {m.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/ministries/mission" className="hover:text-white transition-colors">
                  North India Mission
                </Link>
              </li>
              <li>
                <Link href="/ministries/prayer-helpline" className="hover:text-white transition-colors">
                  24×7 Prayer Helpline
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Get in Touch */}
          <div className="space-y-4">
            <h3 className="text-brand-gold font-bold text-sm uppercase tracking-wider">Get in Touch</h3>
            <div className="space-y-3 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <p>{SITE_INFO.contact.address}</p>
                  <a
                    href="https://maps.google.com/?q=82+Jawaharlal+Nehru+Salai+Vadapalani+Chennai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-goldLight underline mt-1 inline-block"
                  >
                    Get directions
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <a href={`mailto:${SITE_INFO.contact.email}`} className="hover:text-white transition-colors">
                  {SITE_INFO.contact.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <a href={`tel:${SITE_INFO.contact.primaryPhone.replace(/\s+/g, '')}`} className="block hover:text-white">
                    {SITE_INFO.contact.primaryPhone}
                  </a>
                  <a href={`tel:${SITE_INFO.contact.secondaryPhone.replace(/\s+/g, '')}`} className="block hover:text-white">
                    {SITE_INFO.contact.secondaryPhone}
                  </a>
                  <a href={`tel:${SITE_INFO.contact.landline.replace(/[^0-9]/g, '')}`} className="block text-gray-400 hover:text-white">
                    {SITE_INFO.contact.landline} (24/7)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© 2026 End Time Revival Mission. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300">Terms of Service</Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-1.5 hover:text-white transition-colors group cursor-pointer"
            >
              <span>Back to top</span>
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-flex"
              >
                <ChevronUp className="w-4 h-4 text-brand-gold group-hover:text-white" />
              </motion.span>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
