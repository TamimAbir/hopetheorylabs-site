import type { NextConfig } from "next";

/** GitHub Pages serves this repo at /hopetheorylabs-site */
const isGhPages = process.env.GITHUB_PAGES === "true";
const basePath = isGhPages ? "/hopetheorylabs-site" : "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
