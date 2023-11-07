/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ['drive.google.com'], // Add this line
  },
};

module.exports = nextConfig;