/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "pricepally-images.s3.us-east-2.amazonaws.com",
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: "i.gifer.com",
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
