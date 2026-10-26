const isProd = process.env.NODE_ENV === 'production';

// Must match your GitHub repo name: https://<username>.github.io/etrm-website/
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isProd ? '/etrm-website' : '');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Static export for GitHub Pages (production build only)
  output: isProd ? 'export' : undefined,

  // Makes /about -> /about/index.html, which GitHub Pages serves reliably
  trailingSlash: true,

  // Next.js applies basePath to pages and _next assets automatically,
  // so a separate assetPrefix is not needed.
  basePath: basePath || undefined,

  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },

  // Redirects only work in dev (not supported with static export)
  redirects: isProd
    ? undefined
    : async () => [
        { source: '/etrm-website', destination: '/', permanent: false },
        { source: '/etrm-website/:path*', destination: '/:path*', permanent: false },
        { source: '/etrim-website', destination: '/', permanent: false },
        { source: '/etrim-website/:path*', destination: '/:path*', permanent: false },
      ],

  images: {
    // Required for static export (no image optimization server on GitHub Pages)
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'etrmtuticorin.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'img.youtube.com' },
      { protocol: 'https', hostname: 'i.ytimg.com' },
    ],
  },

  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

module.exports = nextConfig;
