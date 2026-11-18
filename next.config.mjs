/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export: `npm run build` writes the whole site to /out.
  output: 'export',
 images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // The image optimizer needs a Node server, so a static export serves the WebP files as they are.
    unoptimized: true,
  },
  // headers() does not work with output: 'export'. Set cache and security headers on your host instead.
};

export default nextConfig;