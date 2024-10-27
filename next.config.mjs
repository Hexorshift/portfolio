/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"]
  },
  images: {
    domains: ["cdn.discordapp.com", "cdn.worldvectorlogo", "avatars.githubusercontent.com", "uxwing.com"]
  }
};

export default nextConfig;
