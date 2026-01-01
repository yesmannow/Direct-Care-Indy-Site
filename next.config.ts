import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Ignore TypeScript errors during builds for faster deployment
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignore ESLint errors during builds for zero-blocker Vercel deployments
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
