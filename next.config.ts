import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? "/rabid-love-site" : "",
  assetPrefix: isGithubPages ? "/rabid-love-site" : "",
  trailingSlash: true,
};

export default nextConfig;
