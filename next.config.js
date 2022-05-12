/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    GOOGLE_ANALYTICS_ID: 'G-573P6NBBF7'
  }
};

module.exports = nextConfig;
