import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // your other Next.js config options here

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
