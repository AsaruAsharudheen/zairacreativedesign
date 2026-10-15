import { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/curtains",
    "/services/interior-design",
    "/services/fabrication",
    "/services/gypsum-work",
    "/services/staircase-design",
    "/gallery",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date("2026-10-15"),
    changeFrequency: route === "" || route === "/curtains" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/curtains" ? 0.9 : 0.8,
  }));
}
