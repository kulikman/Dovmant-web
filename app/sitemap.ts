import type { MetadataRoute } from "next";
import { site } from "@/content/site";

// /news stays out until it carries real entries; /styleguide is internal.
const routes = [
  "",
  "/system",
  "/specifications",
  "/research",
  "/performance",
  "/about",
  "/contact",
  "/investors",
  "/research-use",
  "/privacy",
  "/terms",
  "/cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${site.url}${r}`,
    lastModified: new Date(),
    changeFrequency: r === "" ? "weekly" : "monthly",
    priority: r === "" ? 1 : r === "/specifications" || r === "/research" ? 0.9 : 0.7,
  }));
}
