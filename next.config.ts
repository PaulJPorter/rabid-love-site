import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/rabid-love-site",
  assetPrefix: "/rabid-love-site",
  trailingSlash: true,
};

export default nextConfig;
