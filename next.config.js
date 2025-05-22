/** @type {import('next').NextConfig} */
const nextConfig = {
  // Webpack configuration
  webpack: (config, { isServer }) => {
    // Add any webpack customizations here
    return config;
  },
  
  // Turbopack configuration
  experimental: {
    turbo: {
      rules: {
        // Add any Turbopack rules here
      },
    },
  },
  
  // Other Next.js configurations
  reactStrictMode: true,

  // Image configuration
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5000',
        pathname: '/uploads/**',
      },
    ],
  },
}

module.exports = nextConfig 