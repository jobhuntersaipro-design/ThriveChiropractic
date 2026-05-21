import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  outputFileTracingIncludes: {
    '/blog/**': ['./src/content/posts/**/*'],
    '/blog': ['./src/content/posts/**/*'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.hashnode.com',
      },
    ],
  },
};

export default nextConfig;
