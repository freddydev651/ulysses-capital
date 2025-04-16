// ----------------------------------------------
// robots.ts
// Generates /robots.txt for Next.js 15
// ----------------------------------------------
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/login", "/admin"],
    },
    sitemap: "https://ulyssescap.com/sitemap.xml",
  };
}
