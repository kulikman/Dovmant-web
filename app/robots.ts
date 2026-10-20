import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/**
 * The site is closed to search while the legal pages are drafts. Crawling stays
 * allowed on purpose: a disallowed URL can still be listed, whereas a crawled
 * page carrying `noindex` (set in app/layout.tsx) is removed. Re-open both at
 * once.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/styleguide"] }],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
