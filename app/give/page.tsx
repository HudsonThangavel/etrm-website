'use client';

import React, { useState } from 'react';
import { CreditCard, QrCode, Globe, Copy, Check, ShieldCheck, Heart, Building, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { BANK_ACCOUNTS } from '@/lib/constants';
import { FadeIn, StaggerContainer, StaggerItem, EtrmParticles } from '@/components/animations';

export default function GivePage() {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);
  const [selectedFund, setSelectedFund] = useState('General Tithe & Offering');

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(id);
    setTimeout(() => setCopiedAccount(null), 2500);
  };

  return (
    <div className="pt-36 sm:pt-32 pb-20 overflow-hidden">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-brand-sand via-white to-white dark:from-[#070D1F] dark:via-[#0A1226] dark:to-[#070D1F] py-14 border-b border-gray-100 dark:border-white/10 relative overflow-hidden transition-colors duration-300">
        <EtrmParticles count={14} color="gold" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <FadeIn direction="down" distance={15}>
            <span className="text-brand-accent text-xs font-bold uppercase tracking-widest bg-red-50 dark:bg-red-950/40 px-3.5 py-1 rounded-full">
              Give in seconds
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy dark:text-white tracking-tight">
              Choose the way you give
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-base">
              Whether you are in India or partnering from across the world, giving takes less than a minute. Your faithful seed builds God&apos;s house and brings salvation to souls.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Quick Fund Selector */}
        <FadeIn direction="up" delay={0.2} className="bg-white dark:bg-[#0E162B] rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 dark:border-white/10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-brand-navy dark:text-white">Select Ministry Fund</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">Designate your offering towards a specific gospel objective</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                'General Tithe & Offering',
                'Tabernacle Building Expansion',
                'Revial Media Broadcast',
                'Mercy Trust Compassion Outreach',
                'North India Missions'
              ].map((fund) => (
                <motion.button
                  key={fund}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setSelectedFund(fund)}
                  className={`text-xs px-3.5 py-2 rounded-full font-semibold transition-all ${
                    selectedFund === fund
                      ? 'bg-brand-navy dark:bg-brand-accent text-white shadow'
                      : 'bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-white/15'
                  }`}
                >
                  {fund}
                </motion.button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* 3 Main Online Giving Channels */}
        <StaggerContainer staggerChildren={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Option 1: Razorpay (India) */}
          <StaggerItem className="h-full">
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className="bg-white dark:bg-[#0E162B] rounded-3xl p-7 shadow-soft border border-gray-100 dark:border-white/10 flex flex-col justify-between hover:shadow-elevated transition-all h-full"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <CreditCard className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-2.5 py-1 rounded-md">
                  India
                </span>
                <h3 className="text-2xl font-bold text-brand-navy dark:text-white">Give through Razorpay</h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  One secure page for every way you like to pay within India. Supports Credit & debit cards, UPI, Google Pay, PhonePe, Paytm, netbanking and wallets.
                </p>
                <div className="text-xs text-gray-500 dark:text-gray-400 space-y-1 pt-2 border-t border-gray-100 dark:border-white/10">
                  <p>• Credit & debit cards</p>
                  <p>• UPI & wallets</p>
                  <p>• Netbanking across all Indian banks</p>
                </div>
              </div>

              <div className="pt-6">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="https://razorpay.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm py-3 px-4 rounded-xl shadow transition-colors"
                >
                  <span>Give via Razorpay</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
                <p className="text-[10px] text-gray-400 text-center mt-2">Opens in a secure tab</p>
              </div>
            </motion.div>
          </StaggerItem>

          {/* Option 2: Scan & Give (UPI) */}
          <StaggerItem className="h-full">
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className="bg-white dark:bg-[#0E162B] rounded-3xl p-7 shadow-soft border-2 border-brand-accent/30 dark:border-brand-accent/40 flex flex-col justify-between hover:shadow-elevated transition-all relative h-full"
            >
              <div className="space-y-4 text-center">
                <div className="w-12 h-12 rounded-2xl bg-red-50 dark:bg-red-950/40 text-brand-accent flex items-center justify-center mx-auto">
                  <QrCode className="w-6 h-6" />
                </div>
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-brand-accent bg-red-50 dark:bg-red-950/40 px-2.5 py-1 rounded-md">
                  UPI Instant
                </span>
                <h3 className="text-2xl font-bold text-brand-navy dark:text-white">Scan & Give</h3>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  Open any UPI app on your mobile phone and scan the code to give instantly.
                </p>

                {/* QR Code Graphic with hover scale */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-gray-50 dark:bg-[#070D1F] rounded-2xl border border-gray-200 dark:border-white/10 inline-block mx-auto"
                >
                  <div className="w-40 h-40 bg-white rounded-xl shadow-inner flex flex-col items-center justify-center p-3 border border-gray-100">
                    <div className="w-full h-full bg-gradient-to-tr from-brand-navy/10 to-brand-accent/10 rounded-lg flex flex-col items-center justify-center text-center p-2">
                      <QrCode className="w-20 h-20 text-brand-navy mb-1" />
                      <span className="text-[9px] font-mono font-bold text-brand-navy">UPI: ruah@hdfcbank</span>
                    </div>
                  </div>
                </motion.div>

                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                  GPay · PhonePe · Paytm · BHIM & more
                </p>
              </div>

              <div className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleCopy('endtimereivalmission@testbank', 'upi')}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/15 text-gray-800 dark:text-gray-200 font-bold text-xs py-2.5 px-4 rounded-xl transition-colors cursor-pointer"
                >
                  {copiedAccount === 'upi' ? (
                    <>
                      <Check className="w-4 h-4 text-green-600" />
                      <span>UPI ID Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy UPI ID (endtimereivalmission@testbank)</span>
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          </StaggerItem>

          {/* Option 3: PayPal (International) */}
          <StaggerItem className="h-full">
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className="bg-white dark:bg-[#0E162B] rounded-3xl p-7 shadow-soft border border-gray-100 dark:border-white/10 flex flex-col justify-between hover:shadow-elevated transition-all h-full"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-2.5 py-1 rounded-md">
                  International partners
                </span>
                <h3 className="text-2xl font-bold text-brand-navy dark:text-white">Give through PayPal</h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  Partnering with us from outside India? PayPal is the simplest way to give in your own local currency from anywhere in the world.
                </p>
                <div className="text-xs text-gray-500 dark:text-gray-400 space-y-1 pt-2 border-t border-gray-100 dark:border-white/10">
                  <p>• Give in USD, GBP, EUR, AUD, CAD, SGD</p>
                  <p>• PayPal handles automatic currency conversion</p>
                  <p>• Instant receipt and confirmation</p>
                </div>
              </div>

              <div className="pt-6">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="https://paypal.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-dark dark:bg-brand-accent dark:hover:bg-red-700 text-white font-bold text-sm py-3 px-4 rounded-xl shadow transition-colors"
                >
                  <span>Give via PayPal</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
                <p className="text-[10px] text-gray-400 text-center mt-2">Opens in a secure tab</p>
              </div>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>

        {/* Security Notice */}
        <FadeIn direction="up" delay={0.2} className="bg-brand-sand dark:bg-[#0E162B] rounded-2xl p-4 flex items-center gap-3 border border-gray-200 dark:border-white/10 text-xs text-gray-600 dark:text-gray-300 shadow-sm">
          <ShieldCheck className="w-5 h-5 text-green-600 dark:text-green-400 shrink-0" />
          <p>
            <strong>Safe & secure:</strong> Online payments are processed on Razorpay&apos;s and PayPal&apos;s own bank-grade secure portals — End Time Revival Mission never sees or stores your card or banking credentials.
          </p>
        </FadeIn>

        {/* Bank Transfer Direct Accounts */}
        <FadeIn direction="up" delay={0.3} className="bg-white dark:bg-[#0E162B] rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-white/10 space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent">Bank transfer</span>
            <h2 className="text-2xl font-bold text-brand-navy dark:text-white">Give directly to our bank accounts</h2>
            <p className="text-xs text-gray-500 dark:text-gray-400">Tap any detail below or click &quot;Copy all details&quot; to transfer directly via NEFT, RTGS, IMPS, or International SWIFT wire.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BANK_ACCOUNTS.map((acc, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-gray-50 dark:bg-[#070D1F] rounded-2xl p-6 border border-gray-200 dark:border-white/10 flex flex-col justify-between space-y-4 hover:shadow-md transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-base text-brand-navy dark:text-white">{acc.bankName}</span>
                    <span className="text-[10px] font-bold uppercase bg-white dark:bg-white/10 dark:text-gray-300 px-2.5 py-1 rounded-md border border-gray-200 dark:border-white/10 text-gray-600">
                      {acc.category === 'India' ? 'Within India' : 'International wire'}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">{acc.branch}</p>

                  <div className="space-y-2 pt-2 border-t border-gray-200 dark:border-white/10 text-xs font-mono">
                    <div className="flex justify-between items-center py-1">
                      <span className="text-gray-500 dark:text-gray-400 font-sans">Account number:</span>
                      <span className="font-bold text-brand-navy dark:text-white select-all">{acc.accountNumber}</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-gray-500 dark:text-gray-400 font-sans">Account name:</span>
                      <span className="font-bold text-brand-navy dark:text-white select-all">{acc.accountName}</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-gray-500 dark:text-gray-400 font-sans">IFSC code:</span>
                      <span className="font-bold text-brand-navy dark:text-white select-all">{acc.ifscCode}</span>
                    </div>
                    {acc.swiftCode && (
                      <div className="flex justify-between items-center py-1">
                        <span className="text-gray-500 dark:text-gray-400 font-sans">SWIFT code:</span>
                        <span className="font-bold text-brand-navy dark:text-white select-all">{acc.swiftCode}</span>
                      </div>
                    )}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() =>
                    handleCopy(
                      `Bank: ${acc.bankName}\nBranch: ${acc.branch}\nAccount: ${acc.accountNumber}\nName: ${acc.accountName}\nIFSC: ${acc.ifscCode}${acc.swiftCode ? `\nSWIFT: ${acc.swiftCode}` : ''}`,
                      `bank-${idx}`
                    )
                  }
                  className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 dark:bg-white/10 dark:hover:bg-white/15 text-brand-navy dark:text-white font-bold text-xs py-2.5 px-4 rounded-xl border border-gray-200 dark:border-white/10 transition-colors cursor-pointer"
                >
                  {copiedAccount === `bank-${idx}` ? (
                    <>
                      <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                      <span>Copied details to clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy all details</span>
                    </>
                  )}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
