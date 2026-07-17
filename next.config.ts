import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow the Unsplash-hosted hero backgrounds rendered through next/image
    // (see src/components/ui/page-hero.tsx). Without this, every page with an
    // Unsplash hero throws "Invalid src prop … hostname not configured" (500).
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
