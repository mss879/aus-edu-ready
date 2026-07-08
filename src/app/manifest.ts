import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#124b8d",
    icons: [
      {
        src: siteConfig.logo,
        sizes: "any",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
