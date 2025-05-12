import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Other config options
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5000',
        pathname: '/uploads/**',
      },
    ],
  },
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
};

export default nextConfig;
