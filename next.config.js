/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for GitHub Pages
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js Image Optimization
  },
  // Use the repo name for both of these
  basePath: '/ad-group-japann',
  assetPrefix: '/ad-group-japann', 
  
  trailingSlash: true, // Fixes /admin page 404s
};

module.exports = nextConfig;