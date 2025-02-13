/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    PORT: 3001,
  },
}

module.exports = nextConfig
