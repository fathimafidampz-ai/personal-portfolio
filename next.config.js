/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development warnings
  reactStrictMode: true,
  
  // Image optimization configuration
  images: {
    // Allow images from these domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
