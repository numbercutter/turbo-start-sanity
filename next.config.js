/** @type {import('next').NextConfig} */
const nextConfig = {
  // Update experimental options to remove reactRoot
  experimental: {
    // reactRoot is no longer needed in Next.js 15
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

module.exports = nextConfig;
