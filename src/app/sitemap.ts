// ----------------------------------------------
// sitemap.ts
// Generates /sitemap.xml for Next.js 15
// ----------------------------------------------
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ulyssescap.com";

  const routes = [
    "",
    "/about",
    "/leadership",
    "/approach",
    "/careers",
    "/strategies",
    "/strategies/equities",
    "/strategies/fixed-income",
    "/strategies/venture-capital",
    "/strategies/real-estate",
    "/strategies/commodities",
    "/insights",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}
