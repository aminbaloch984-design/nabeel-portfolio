/** @type {import('next').NextConfig} */

// GitHub Pages project sites are served from /<repo>/.
// Set NEXT_PUBLIC_BASE_PATH=/nabeel-portfolio for the deployment build.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
