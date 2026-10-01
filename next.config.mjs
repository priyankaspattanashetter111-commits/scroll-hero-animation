/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/scroll-hero-animation' : '',
  assetPrefix: isProd ? '/scroll-hero-animation' : '',
};

export default nextConfig;
