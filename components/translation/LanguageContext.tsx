'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getActiveLanguage, setGoogleLanguage, SUPPORTED_LANGUAGES, LanguageItem } from './types';

interface LanguageContextType {
  currentLang: string;
  isTamil: boolean;
  activeLanguage: LanguageItem;
  changeLanguage: (code: string) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  currentLang: 'en',
  isTamil: false,
  activeLanguage: SUPPORTED_LANGUAGES[0],
  changeLanguage: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLang, setCurrentLang] = useState<string>('en');

  useEffect(() => {
    // Check initial language from cookie
    const active = getActiveLanguage();
    setCurrentLang(active);

    // Watch for cookie changes (e.g. if updated via combo or other tabs)
    const interval = setInterval(() => {
      const active = getActiveLanguage();
      setCurrentLang((prev) => (prev !== active ? active : prev));
    }, 800);

    return () => clearInterval(interval);
  }, []);

  const changeLanguage = (code: string) => {
    setCurrentLang(code);
    setGoogleLanguage(code);
  };

  const isTamil = currentLang === 'ta';
  const activeLanguage =
    SUPPORTED_LANGUAGES.find((l) => l.code === currentLang) || SUPPORTED_LANGUAGES[0];

  return (
    <LanguageContext.Provider
      value={{
        currentLang,
        isTamil,
        activeLanguage,
        changeLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
