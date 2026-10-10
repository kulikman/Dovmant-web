import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const routes = [
  "",
  "/technology",
  "/rehabilitation",
  "/sports",
  "/research",
  "/about",
  "/news",
  "/contact",
  "/investors",
  "/privacy",
  "/terms",
  "/medical-disclaimer",
  "/cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${site.url}${r}`,
    lastModified: new Date(),
    changeFrequency: r === "" ? "weekly" : "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
}
