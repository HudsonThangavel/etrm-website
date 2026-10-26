import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HelplineBanner from '@/components/layout/HelplineBanner';

export const metadata: Metadata = {
  metadataBase: new URL('https://etrmtuticorin.com'),
  title: {
    default: 'End Time Revival Mission - Word Changes World | Sam Selvaraj',
    template: '%s | End Time Revival Mission',
  },
  description:
    'End Time Revival Mission exists to spread the Word of God to cause freedom to the oppressed and to instill a fresh revival in the extended body of Christ. Founded by Bishop. Dr. J. Sam Selvaraj.',
  keywords: [
    'End Time Revival Mission',
    'Bishop. Dr. J. Sam Selvaraj',
    'ETRM Church',
    'Chennai Church',
    'Christian Revival',
    'Prayer Helpline',
    'Vadapalani Prayer Tower',
    'Rhema Word',
    'Christian Ministry India'
  ],
  authors: [{ name: 'End Time Revival Mission' }, { name: 'Bishop. Dr. J. Sam Selvaraj' }],
  creator: 'End Time Revival Mission',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://etrmtuticorin.com/',
    title: 'End Time Revival Mission -  Word Changes World | Sam Selvaraj',
    description:
      'Spreading the breath of God to cause freedom to the oppressed and to instill a fresh revival in the extended body of Christ.',
    siteName: 'End Time Revival Mission',
    images: [
      {
        url: '/images/hero-worship.jpg',
        width: 1200,
        height: 630,
        alt: 'End Time Revival Mission Worship Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'End Time Revival Mission - Word Changes World',
    description: 'Experience the breath of God with Bishop. Dr. J. Sam Selvaraj and End Time Revival Church.',
    images: ['/images/hero-worship.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { LanguageProvider } from '@/components/translation/LanguageContext';
import GoogleTranslateScript from '@/components/translation/GoogleTranslateScript';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased bg-[#FAFAFB] text-[#1C2541] dark:bg-[#070D1F] dark:text-gray-100 transition-colors duration-200">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <LanguageProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <HelplineBanner />
            <Footer />
            <GoogleTranslateScript />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
