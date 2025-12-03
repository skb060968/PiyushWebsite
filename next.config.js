/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
  // GitHub Pages deployment configuration
  basePath: process.env.NODE_ENV === 'production' ? '/PiyushWebsite' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/PiyushWebsite/' : '',
  // Disable strict mode to avoid double rendering issues
  reactStrictMode: false,
}

module.exports = nextConfig