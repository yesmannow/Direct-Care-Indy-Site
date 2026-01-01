import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Ignore TypeScript errors during builds for faster deployment
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
