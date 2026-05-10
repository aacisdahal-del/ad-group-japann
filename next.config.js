/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure this is EXACTLY your repo name with the leading slash
  basePath: '/ad-group-japann',
  
  // This tells Next.js: "Look for CSS/JS inside the repo folder"
  assetPrefix: '/ad-group-japann/', 
  
  trailingSlash: true,
};

module.exports = nextConfig;