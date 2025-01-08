/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"]
  },
  images: {
    remotePatterns: [
      { hostname: "cdn.discordapp.com" },
      { hostname: "cdn.worldvectorlogo" },
      { hostname: "avatars.githubusercontent.com" },
      { hostname: "uxwing.com" },
      { hostname: "i.ibb.co" },
      { hostname: "cdn.flightsim.to" },
      { hostname: "cdn.discordapp.com" }
    ]
  }
};

export default nextConfig;
