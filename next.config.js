/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
    GOOGLEMAP_KEY: process.env.GOOGLEMAP_KEY,
  },
};

module.exports = nextConfig;
