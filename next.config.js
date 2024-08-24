/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  //TODO MAYBE ADD FOR DEPLOYMENT
  // experimental:{
  //   images:{
  //     unoptimized:true
  //   }
  // },
  // trailingSlash: true,
  images: {
    domains: ['gateway.pinata.cloud'],
  },
};

module.exports = nextConfig;