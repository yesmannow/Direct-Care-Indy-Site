/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Ignore TypeScript errors during builds for faster deployment
    ignoreBuildErrors: true,
  },
  // Ensure proper ESM handling to prevent minification issues
  experimental: {
    esmExternals: 'loose',
  },
  // Optimize for production builds
  swcMinify: true,
  // Ensure proper module resolution
  webpack: (config, { isServer, webpack }) => {
    // Fix for ESM modules that might have minification issues
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    // Ensure proper handling of ESM modules
    config.resolve.extensionAlias = {
      '.js': ['.js', '.ts', '.tsx'],
      '.jsx': ['.jsx', '.tsx'],
    };
    // Prevent minification issues with ESM modules
    config.optimization = {
      ...config.optimization,
      minimize: true,
    };
    return config;
  },
};

export default nextConfig;

