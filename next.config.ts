import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd22ofvg8yrf77k.cloudfront.net',
        port: '',
        pathname: '/**',
      },
    ],
    // Enable caching for images
    minimumCacheTTL: 31536000, // 1 year in seconds
    formats: ['image/avif', 'image/webp'],
  },
  // Add headers for caching static assets
  async headers() {
    return [
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
        source: '/:path*\\.(jpg|jpeg|png|gif|webp|svg|mp4|webm|ogg)',
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
