/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "dist",
  output: 'export',
  // Optional: Add trailingSlash if hosting on GitHub Pages or similar
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
