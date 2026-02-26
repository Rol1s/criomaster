import type { NextConfig } from "next";

// Для GitHub Pages: имя репо = путь. Если репо "criomaster", сайт будет username.github.io/criomaster
const basePath = process.env.GITHUB_PAGES ? "/criomaster" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: { unoptimized: true },
};

export default nextConfig;
