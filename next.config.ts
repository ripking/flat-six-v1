import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export → emits a self-contained `out/` folder of HTML/CSS/JS
  // that Hostinger can serve directly (no Node server needed).
  output: "export",
  // next/image optimization requires a server; disable it for static hosting.
  images: { unoptimized: true },
  // Emit folder-style URLs (about/index.html) for clean static routing.
  trailingSlash: true,
};

export default nextConfig;
