'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SUPPORTED_LANGUAGES, LanguageItem } from './types';
import { useLanguage } from './LanguageContext';

interface LanguageSelectorProps {
  className?: string;
  variant?: 'dropdown' | 'mobile-grid';
}

export default function LanguageSelector({
  className = '',
  variant = 'dropdown',
}: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLang, activeLanguage, changeLanguage } = useLanguage();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [coords, setCoords] = useState<{ top: number; left: number; width: number }>({
    top: 0,
    left: 12,
    width: 240,
  });

  // Calculate and clamp dropdown position so it never overflows viewport
  const updatePosition = useCallback(() => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const padding = 12;
    const dropdownWidth = Math.min(240, viewportWidth - padding * 2);

    // Prefer aligning the right edge of dropdown with the right edge of the button
    let left = rect.right - dropdownWidth;

    // If that would overflow the left edge of the screen, try aligning to the button's left edge
    if (left < padding) {
      left = rect.left;
    }

    // Clamp dropdown strictly within the viewport margins [padding, viewportWidth - dropdownWidth - padding]
    if (left + dropdownWidth > viewportWidth - padding) {
      left = viewportWidth - dropdownWidth - padding;
    }
    if (left < padding) {
      left = padding;
    }

    setCoords({
      top: Math.round(rect.bottom + 8),
      left: Math.round(left),
      width: Math.round(dropdownWidth),
    });
  }, []);

  const handleToggle = () => {
    if (!isOpen) {
      updatePosition();
    }
    setIsOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Keep dropdown repositioned on resize and scroll
  useEffect(() => {
    if (!isOpen) return;

    updatePosition();
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, true);

    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, [isOpen, updatePosition]);

  // Handle escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleSelectLanguage = (lang: LanguageItem) => {
    changeLanguage(lang.code);
    setIsOpen(false);
  };

  // Mobile Grid variant for inside mobile drawer - strictly notranslate
  if (variant === 'mobile-grid') {
    return (
      <div className={`space-y-2 notranslate ${className}`} translate="no">
        <div className="flex items-center gap-2 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider px-1 notranslate" translate="no">
          <Globe className="w-3.5 h-3.5 text-brand-accent shrink-0" />
          <span className="notranslate" translate="no">Select Language / மொழியைத் தேர்வுசெய்க</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 notranslate" translate="no">
          {SUPPORTED_LANGUAGES.map((lang) => {
            const isSelected = currentLang === lang.code;
            return (
              <button
                key={lang.code}
                onClick={() => handleSelectLanguage(lang)}
                className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all notranslate ${
                  isSelected
                    ? 'bg-brand-navy text-white dark:bg-white dark:text-brand-navy font-bold shadow-sm'
                    : 'bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/20'
                }`}
                translate="no"
              >
                <div className="flex flex-col text-left notranslate" translate="no">
                  <span className="font-semibold text-xs leading-tight notranslate" translate="no">
                    {lang.nativeName}
                  </span>
                  <span className="text-[10px] opacity-75 notranslate" translate="no">
                    {lang.name}
                  </span>
                </div>
                {isSelected && <Check className="w-3.5 h-3.5 shrink-0 ml-1.5" />}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Desktop / Header Dropdown variant - strictly notranslate
  return (
    <div className={`relative notranslate shrink-0 ${className}`} translate="no">
      <motion.button
        ref={buttonRef}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={handleToggle}
        className="flex items-center gap-1 sm:gap-1.5 h-8 sm:h-9 px-2 sm:px-3 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20 text-gray-700 dark:text-brand-goldLight border border-gray-200 dark:border-white/15 transition-all focus:outline-none focus:ring-2 focus:ring-brand-accent text-xs font-semibold notranslate shrink-0"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        translate="no"
        title="Languages / மொழிகள்"
      >
        <Globe className="w-3.5 h-3.5 text-brand-accent shrink-0" />
        <span className="leading-none notranslate truncate max-w-[65px] sm:max-w-none" translate="no">
          {activeLanguage.nativeName}
        </span>
        <ChevronDown
          className={`w-3 h-3 text-gray-500 dark:text-gray-400 transition-transform duration-200 shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={dropdownRef}
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              top: `${coords.top}px`,
              left: `${coords.left}px`,
              width: `${coords.width}px`,
            }}
            className="bg-white dark:bg-[#0D162B] rounded-2xl shadow-2xl border border-gray-100 dark:border-white/10 p-2 z-[100] backdrop-blur-md notranslate"
            role="listbox"
            translate="no"
          >
            <div className="px-3 py-1.5 mb-1 border-b border-gray-100 dark:border-white/10 flex items-center justify-between notranslate" translate="no">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 notranslate" translate="no">
                Languages
              </span>
              <span className="text-[10px] text-gray-400 notranslate" translate="no">
                மொழிகள்
              </span>
            </div>

            <div className="max-h-[min(280px,65vh)] overflow-y-auto space-y-0.5 custom-scroll notranslate" translate="no">
              {SUPPORTED_LANGUAGES.map((lang) => {
                const isSelected = currentLang === lang.code;
                return (
                  <button
                    key={lang.code}
                    onClick={() => handleSelectLanguage(lang)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left transition-all notranslate ${
                      isSelected
                        ? 'bg-brand-accent/10 dark:bg-brand-accent/20 text-brand-accent font-bold'
                        : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5'
                    }`}
                    role="option"
                    aria-selected={isSelected}
                    translate="no"
                  >
                    <div className="flex flex-col notranslate" translate="no">
                      <span className="text-sm font-semibold notranslate" translate="no">{lang.nativeName}</span>
                      <span className="text-[11px] text-gray-500 dark:text-gray-400 notranslate" translate="no">{lang.name}</span>
                    </div>
                    {isSelected && <Check className="w-4 h-4 text-brand-accent shrink-0" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
