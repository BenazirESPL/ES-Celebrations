import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization - aggressive settings
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    qualities: [75, 85, 90, 95, 100], // Configure allowed quality values
    minimumCacheTTL: 3600, // 1 hour cache
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Loader optimization
    loader: 'default',
    unoptimized: false,
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    // React compiler optimizations
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },

  // Performance optimizations
  reactStrictMode: true,
  poweredByHeader: false,

  // Experimental features for maximum performance
  experimental: {
    optimizePackageImports: ['swiper', 'next/image', 'lucide-react', 'framer-motion', 'react-infinite-scroll-component', 'react-masonry-css'],
  },

  // Compression
  compress: true,

  // Production source maps (disable for faster builds)
  productionBrowserSourceMaps: false,

  // Headers for better caching and security
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
    ];
  },
};

export default nextConfig;
