import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: '/blog/manage',
        destination: '/keystatic',
        permanent: true,
      },
      {
        source: '/blog/manage/:path*',
        destination: '/keystatic/:path*',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
