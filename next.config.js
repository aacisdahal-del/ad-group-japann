/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/ad-group-japann', // Ensure 2 'n's here
  assetPrefix: '/ad-group-japann/', // And 2 'n's here
  trailingSlash: true,
};

module.exports = nextConfig;