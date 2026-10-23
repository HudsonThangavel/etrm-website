const isProd = process.env.NODE_ENV === 'production';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isProd ? '/etrm-website' : '');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: isProd ? 'export' : undefined,
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  redirects: isProd
    ? undefined
    : async () => [
        {
          source: '/etrm-website',
          destination: '/',
          permanent: false,
        },
        {
          source: '/etrm-website/:path*',
          destination: '/:path*',
          permanent: false,
        },
        {
          source: '/etrim-website',
          destination: '/',
          permanent: false,
        },
        {
          source: '/etrim-website/:path*',
          destination: '/:path*',
          permanent: false,
        },
      ],
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ruahministries.org',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

module.exports = nextConfig;