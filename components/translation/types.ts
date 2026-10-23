export interface LanguageItem {
  code: string;
  name: string;        // English name
  nativeName: string;  // Native script name
  shortLabel: string;  // Short 2-3 char label
}

export const SUPPORTED_LANGUAGES: LanguageItem[] = [
  { code: 'en', name: 'English', nativeName: 'English', shortLabel: 'EN' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', shortLabel: 'தமிழ்' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी', shortLabel: 'हिंदी' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', shortLabel: 'తెలుగు' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', shortLabel: 'മലയാളം' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', shortLabel: 'ಕನ್ನಡ' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी', shortLabel: 'मराठी' },
];

export const INCLUDED_LANGUAGES_STR = SUPPORTED_LANGUAGES.map((l) => l.code).join(',');

export function getActiveLanguage(): string {
  if (typeof document === 'undefined') return 'en';
  try {
    const match = document.cookie.match(/(?:^|;\s*)googtrans=([^;]+)/);
    if (match) {
      const parts = decodeURIComponent(match[1]).split('/');
      if (parts.length >= 3 && parts[2]) {
        return parts[2];
      }
    }
  } catch {
    // Ignore cookie read error
  }
  return 'en';
}

export function setGoogleLanguage(langCode: string): void {
  if (typeof window === 'undefined') return;

  const targetLang = langCode || 'en';
  const cookieValue = `/en/${targetLang}`;
  const hostname = window.location.hostname;

  if (targetLang === 'en') {
    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'googtrans=/en/en; path=/;';
    if (hostname && hostname !== 'localhost') {
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${hostname};`;
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${hostname};`;
      document.cookie = `googtrans=/en/en; path=/; domain=${hostname};`;
      document.cookie = `googtrans=/en/en; path=/; domain=.${hostname};`;
    }

    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
    if (select) {
      select.value = 'en';
      select.dispatchEvent(new Event('change', { bubbles: true }));
    }
    setTimeout(() => {
      window.location.reload();
    }, 150);
    return;
  }

  document.cookie = `googtrans=${cookieValue}; path=/;`;
  if (hostname && hostname !== 'localhost') {
    document.cookie = `googtrans=${cookieValue}; path=/; domain=${hostname};`;
    document.cookie = `googtrans=${cookieValue}; path=/; domain=.${hostname};`;
  }

  // Also trigger the Google Translate combo element if already present in DOM
  const select = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
  if (select) {
    select.value = targetLang;
    select.dispatchEvent(new Event('change', { bubbles: true }));
  } else {
    // Fallback: reload the page to apply cookie
    window.location.reload();
  }
}
