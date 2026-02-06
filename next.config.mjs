/** @type {import('next').NextConfig} */
const nextConfig = {
  // swcMinify is now default in v16; removing it to prevent warnings
  // experimental.esmExternals is not recommended in v16; removed to prevent resolution errors

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'health.gov',
      },
    ],
  },
  // Adding an empty turbopack config tells Next.js 16 you've acknowledged
  // the migration, which often silences the "call retries" WorkerError
  turbopack: {},
};

export default nextConfig;

