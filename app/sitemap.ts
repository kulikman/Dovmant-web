import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { newsItems } from "@/content/news";

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
  const all = [...routes, ...newsItems.map((n) => `/news/${n.slug}`)];
  return all.map((r) => ({
    url: `${site.url}${r}`,
    lastModified: new Date(),
    changeFrequency: r === "" ? "weekly" : "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
}
