import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,

    short_name: "Musab Alradi",

    description:
      siteConfig.description,

    start_url: "/en",

    scope: "/",

    display: "standalone",

    background_color: "#020617",

    theme_color: "#2563eb",

    icons: [
      {
        src: "/logo/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}