import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/services", "/industries", "/process", "/about", "/contact", ...services.map(({slug})=>`/services/${slug}`)];
  return paths.map((path) => ({ url: absoluteUrl(path), changeFrequency: path === "/" ? "weekly" : "monthly", priority: path === "/" ? 1 : path === "/services" ? 0.9 : 0.75 }));
}
