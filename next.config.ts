import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Generates a standalone HTML/CSS/JS site compatible with Cloudflare Pages.
  output: "export",
  // Pretty URLs export to /services/name/index.html for static hosts.
  trailingSlash: true,
  // Default Next.js image optimization needs a server; use optimized local assets.
  images: { unoptimized: true },
};

export default nextConfig;
