import type { MetadataRoute } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots {
  return siteConfig.isIndexable
    ? { rules: { userAgent: "*", allow: "/" }, sitemap: absoluteUrl("/sitemap.xml") }
    : { rules: { userAgent: "*", disallow: "/" } };
}
