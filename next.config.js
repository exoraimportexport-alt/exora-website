/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.shopify.com' },
      { protocol: 'https', hostname: '**.shopify.com' },
      { protocol: 'https', hostname: 'exoraimportexport.com' },
      { protocol: 'https', hostname: 'avatar.vercel.sh' },
    ],
  },
}
module.exports = nextConfig
