import React from 'react';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-24 text-center">
      <div className="max-w-md space-y-6">
        <p className="font-mono text-5xl font-extrabold text-brand-accent">404</p>
        <h1 className="text-3xl font-bold text-brand-navy dark:text-white">Page Not Found</h1>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          The page you are looking for may have been moved or does not exist. Please return to the homepage or explore our ministries.
        </p>
        <div className="flex justify-center gap-4 pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-dark dark:bg-brand-accent dark:hover:bg-red-700 text-white text-xs font-bold px-5 py-2.5 rounded-full transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/ministries"
            className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/15 text-gray-800 dark:text-gray-200 text-xs font-bold px-5 py-2.5 rounded-full transition-colors"
          >
            <span>Explore Ministries</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
