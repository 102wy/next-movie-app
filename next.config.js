/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/movies",
  //       destination: `/movie/popular?api_key=${process.env.NEXT_PUBLIC_APP_API_KEY}`,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
