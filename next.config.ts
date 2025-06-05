/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
  },
  experimental: {
    optimizePackageImports: ["@heroui/react"],
  },
};

export default nextConfig;
