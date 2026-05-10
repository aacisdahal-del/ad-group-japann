/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for GitHub Pages
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js Image Optimization
  },
  basePath: '/ad-group-japann', // Update this to match your GitHub repo name
  trailingSlash: true, // Helps fix 404 errors on the /admin page
};

module.exports = nextConfig;