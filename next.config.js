/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    reactRoot: 'concurrent',
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
