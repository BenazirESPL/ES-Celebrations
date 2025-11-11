import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization - aggressive settings
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    qualities: [75, 85, 90, 95, 100],
    minimumCacheTTL: 3600, // 1 hour cache for images
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    loader: 'default',
    unoptimized: false,
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },

  // Performance optimizations
  reactStrictMode: true,
  poweredByHeader: false,

  // Experimental features for maximum performance
  experimental: {
    optimizePackageImports: ['swiper', 'next/image', 'lucide-react', 'framer-motion', 'react-infinite-scroll-component', 'react-masonry-css'],
    viewTransition: true,
    // Enable optimized CSS loading
    optimizeCss: true,
  },

  // Compression
  compress: true,

  // Production source maps (disable for faster builds)
  productionBrowserSourceMaps: false,
  
  // Optimize bundle size
  swcMinify: true,

  // Headers for better caching, security, and performance
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
        ],
      },
    ];
  },
};

export default nextConfig;
