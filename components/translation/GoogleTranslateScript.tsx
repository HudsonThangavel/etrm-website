'use client';

import React, { useEffect } from 'react';
import Script from 'next/script';
import { INCLUDED_LANGUAGES_STR } from './types';

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            includedLanguages: string;
            autoDisplay: boolean;
            layout?: number;
          },
          elementId: string
        ) => void;
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

export default function GoogleTranslateScript() {
  useEffect(() => {
    // 1. Google Translate Init Hook
    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        try {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: 'en',
              includedLanguages: INCLUDED_LANGUAGES_STR,
              autoDisplay: false,
            },
            'google_translate_element'
          );
        } catch {
          // Ignore init retry
        }
      }
    };

    if (window.google?.translate?.TranslateElement && window.googleTranslateElementInit) {
      window.googleTranslateElementInit();
    }

    // 2. Hide Google's top banner frame and body top offset without killing translation worker
    const hideGoogleBanner = () => {
      // Fix body top offset that Google injects inline
      if (document.body.style.top && document.body.style.top !== '0px') {
        document.body.style.top = '0px';
      }
      if (document.documentElement.style.top && document.documentElement.style.top !== '0px') {
        document.documentElement.style.top = '0px';
      }

      // Hide only banner toolbar frames and tooltip popups
      const banners = document.querySelectorAll<HTMLElement>(
        '.goog-te-banner-frame, iframe.goog-te-banner-frame, .VIpgJd-ZVi9od-ORHb-OEVmcd, .VIpgJd-ZVi9od-ORHb-OEVmcd-ti6hGc, #goog-gt-tt, .goog-te-balloon-frame, .goog-tooltip'
      );
      banners.forEach((el) => {
        el.style.display = 'none';
        el.style.visibility = 'hidden';
        el.style.height = '0px';
        el.style.width = '0px';
        el.style.pointerEvents = 'none';
      });
    };

    const fixTamilTranslations = () => {
      const cookie = document.cookie || '';
      const isTamil =
        cookie.includes('googtrans=/en/ta') ||
        document.documentElement.lang === 'ta' ||
        document.documentElement.classList.contains('translated-ltr');
      if (!isTamil) return;

      try {
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        let node: Text | null;
        while ((node = walker.nextNode() as Text | null)) {
          if (!node || !node.nodeValue) continue;
          if (node.parentElement?.closest('.notranslate')) continue;

          const val = node.nodeValue.trim();
          if (val === 'வீடு' || val === 'ஹோம்') {
            node.nodeValue = 'முகப்பு';
          }
          if (
            node.nodeValue.includes('முடிவு நேர மறுமலர்ச்சி பணி') ||
            node.nodeValue.includes('எண்ட் டைம் ரிவைவல் மிஷன்') ||
            node.nodeValue.includes('முடிவு நேர மறுமலர்ச்சி மிஷன்') ||
            node.nodeValue.includes('முடிவு கால மறுமலர்ச்சி')
          ) {
            node.nodeValue = node.nodeValue
              .replace(/முடிவு நேர மறுமலர்ச்சி பணி/g, 'கடைசி கால எழுப்புதல் சபை')
              .replace(/எண்ட் டைம் ரிவைவல் மிஷன்/g, 'கடைசி கால எழுப்புதல் சபை')
              .replace(/முடிவு நேர மறுமலர்ச்சி மிஷன்/g, 'கடைசி கால எழுப்புதல் சபை')
              .replace(/முடிவு கால மறுமலர்ச்சி/g, 'கடைசி கால எழுப்புதல் சபை');
          }
        }
      } catch {
        // Ignore tree walker error during DOM mutation
      }
    };

    // Run immediately and set up observer
    hideGoogleBanner();
    fixTamilTranslations();

    const observer = new MutationObserver(() => {
      hideGoogleBanner();
      fixTamilTranslations();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['style', 'class'],
      childList: true,
      subtree: true,
    });

    const interval = setInterval(() => {
      hideGoogleBanner();
      fixTamilTranslations();
    }, 400);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {/* Hidden element where Google Translate attaches its DOM elements */}
      <div
        id="google_translate_element"
        aria-hidden="true"
        className="notranslate"
        translate="no"
        style={{
          position: 'fixed',
          top: '-9999px',
          left: '-9999px',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
          opacity: 0,
          pointerEvents: 'none',
          zIndex: -9999,
        }}
      />
      <Script
        id="google-translate-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            function googleTranslateElementInit() {
              if (window.google && window.google.translate && window.google.translate.TranslateElement) {
                try {
                  new window.google.translate.TranslateElement({
                    pageLanguage: 'en',
                    includedLanguages: '${INCLUDED_LANGUAGES_STR}',
                    autoDisplay: false
                  }, 'google_translate_element');
                } catch(e) {}
              }
            }
          `,
        }}
      />
      <Script
        id="google-translate-script"
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </>
  );
}
