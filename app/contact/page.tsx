'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { SITE_INFO, SERVICE_LOCATIONS } from '@/lib/constants';
import { FadeIn, StaggerContainer, StaggerItem, EtrmParticles } from '@/components/animations';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Prayer Request',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-36 sm:pt-32 pb-20 overflow-hidden">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-brand-sand via-white to-white dark:from-[#070D1F] dark:via-[#0A1226] dark:to-[#070D1F] py-14 border-b border-gray-100 dark:border-white/10 relative overflow-hidden transition-colors duration-300">
        <EtrmParticles count={14} color="gold" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <FadeIn direction="down" distance={15}>
            <span className="text-brand-accent text-xs font-bold uppercase tracking-widest bg-red-50 dark:bg-red-950/40 px-3.5 py-1 rounded-full">
              Connect with us
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy dark:text-white tracking-tight">
              Contact Us
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-base">
              Have a prayer request, testimony, or inquiry? Our team and 24×7 prayer warriors are here to stand with you.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Helpline & Contact Info */}
          <FadeIn direction="right" distance={30} className="lg:col-span-5 space-y-6">
            {/* 24x7 Helpline Card */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-brand-navy dark:bg-[#0E162B] text-white rounded-3xl p-7 shadow-lg space-y-4 border border-transparent dark:border-white/10 relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-gold bg-white/10 px-3 py-1 rounded-full">
                  Always Available
                </span>
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-gold" />
                </span>
              </div>
              <h2 className="text-2xl font-bold">24×7 Prayer Helpline</h2>
              <p className="text-xs text-gray-300 leading-relaxed">
                If you are going through pain, fear, sickness, or difficulty, do not carry the burden alone. Dial our lines now.
              </p>

              <div className="space-y-3 pt-2 border-t border-white/10">
                <motion.a
                  whileHover={{ scale: 1.02, x: 4 }}
                  href={`tel:${SITE_INFO.contact.primaryPhone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-colors"
                >
                  <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                  <div>
                    <p className="text-xs text-gray-300">Helpline 1 (Mobile & WhatsApp)</p>
                    <p className="text-base font-bold text-white">{SITE_INFO.contact.primaryPhone}</p>
                  </div>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02, x: 4 }}
                  href={`tel:${SITE_INFO.contact.secondaryPhone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-colors"
                >
                  <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                  <div>
                    <p className="text-xs text-gray-300">Helpline 2 (Mobile)</p>
                    <p className="text-base font-bold text-white">{SITE_INFO.contact.secondaryPhone}</p>
                  </div>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02, x: 4 }}
                  href={`tel:${SITE_INFO.contact.landline.replace(/[^0-9]/g, '')}`}
                  className="flex items-center gap-3 bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-colors"
                >
                  <Clock className="w-5 h-5 text-brand-gold shrink-0" />
                  <div>
                    <p className="text-xs text-gray-300">Round-the-clock Landline</p>
                    <p className="text-base font-bold text-white">{SITE_INFO.contact.landline}</p>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            {/* Email & Headquarters */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-white dark:bg-[#0E162B] rounded-3xl p-7 border border-gray-100 dark:border-white/10 shadow-sm space-y-4"
            >
              <h3 className="font-bold text-brand-navy dark:text-white text-lg">Administrative Office</h3>
              <div className="space-y-3 text-xs text-gray-600 dark:text-gray-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-gray-100">End Time Revival Mission</p>
                    <p>{SITE_INFO.contact.address}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-brand-accent shrink-0" />
                  <a href={`mailto:${SITE_INFO.contact.email}`} className="text-brand-navy dark:text-brand-goldLight font-semibold hover:underline">
                    {SITE_INFO.contact.email}
                  </a>
                </div>
              </div>
            </motion.div>
          </FadeIn>

          {/* Right Column: Interactive Prayer Request / Contact Form */}
          <FadeIn direction="left" distance={30} className="lg:col-span-7">
            <div className="bg-white dark:bg-[#0E162B] rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-white/10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-950/40 text-green-600 dark:text-green-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy dark:text-white">Thank You for Reaching Out</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm max-w-md mx-auto">
                    Your message has been received by our prayer team. Our pastors and prayer warriors will immediately lift your petition in prayer.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', subject: 'Prayer Request', message: '' });
                    }}
                    className="inline-flex items-center gap-2 bg-brand-navy dark:bg-brand-accent text-white text-xs font-bold px-6 py-2.5 rounded-full hover:bg-brand-dark dark:hover:bg-red-700 transition-colors cursor-pointer shadow"
                  >
                    Send Another Request
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h2 className="text-2xl font-bold text-brand-navy dark:text-white">Send a Prayer Request or Message</h2>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Every submission is treated with strictest pastoral confidentiality.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John David"
                        className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/15 dark:bg-[#070D1F] dark:text-white dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98849 01777"
                        className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/15 dark:bg-[#070D1F] dark:text-white dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. name@example.com"
                        className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/15 dark:bg-[#070D1F] dark:text-white dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Request Type</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/15 dark:bg-[#070D1F] dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-accent bg-white transition-all"
                      >
                        <option value="Prayer Request" className="dark:bg-[#070D1F]">Prayer Request (Healing & Deliverance)</option>
                        <option value="Thanksgiving Testimony" className="dark:bg-[#070D1F]">Share a Praise / Testimony</option>
                        <option value="Church Service Inquiry" className="dark:bg-[#070D1F]">Church Service & Timings Inquiry</option>
                        <option value="Bible College" className="dark:bg-[#070D1F]">International Bible College Admission</option>
                        <option value="Partner Support" className="dark:bg-[#070D1F]">Partnership & Contribution</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Your Message or Prayer Points *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share what you are believing God for..."
                      className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/15 dark:bg-[#070D1F] dark:text-white dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-red-700 text-white font-bold text-sm py-3 px-6 rounded-xl shadow-md transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Prayer Request</span>
                  </motion.button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>

        {/* Center Locations Strip */}
        <div className="pt-8 border-t border-gray-200 dark:border-white/10">
          <FadeIn direction="up">
            <h3 className="text-xl font-bold text-brand-navy dark:text-white mb-6">Our Church Centers & Venues</h3>
          </FadeIn>
          <StaggerContainer staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICE_LOCATIONS.map((loc, idx) => (
              <StaggerItem key={idx}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white dark:bg-[#0E162B] rounded-2xl p-5 border border-gray-100 dark:border-white/10 shadow-sm space-y-2 h-full hover:border-brand-accent/30 transition-all"
                >
                  <h4 className="font-bold text-brand-navy dark:text-white text-sm">{loc.name}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{loc.address}</p>
                  <div className="pt-2 text-[11px] text-brand-accent font-semibold">
                    {loc.timing[0]}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </div>
  );
}
