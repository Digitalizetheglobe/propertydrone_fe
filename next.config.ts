import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image configuration
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5000',
        pathname: '/uploads/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '9000',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'api.propertydronerealty.com',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '/**', // Allow all paths under img.youtube.com
      },
      {
        protocol: 'https',
        hostname: 'example.com',
        pathname: '/**',
      },
    ],
  },

  // Minimal turbopack config to avoid Turbopack/webpack conflict when building
  turbopack: {},

  // Webpack configuration
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(mp4|mov|avi)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/videos/',
          outputPath: 'static/videos/',
          name: '[name].[contenthash].[ext]',
        },
      },
    });

    return config;
  },

  // Other configurations
  reactStrictMode: true,
};

export default nextConfig;
