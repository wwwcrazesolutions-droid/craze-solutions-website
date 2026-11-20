function trimSlash(url: string): string {
  return url.replace(/\/$/, "");
}

function normalizePath(path: string): string {
  if (!path.startsWith("/")) return `/${path}`;
  return path === "/" ? "/" : path.endsWith("/") ? path : `${path}/`;
}

const defaultUrl = "https://www.crazesolutions.org";

const resolvedUrl = trimSlash(
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || defaultUrl,
);

export const siteConfig = {
  name: "Craze Solutions",
  legalName: "Craze Solutions",
  tagline: "Software engineering · Applied AI",
  description:
    "Craze Solutions builds custom software, SaaS platforms, and practical AI solutions for ambitious businesses worldwide.",
  email: "hello@crazesolutions.org",
  url: resolvedUrl,
  isIndexable: process.env.NEXT_PUBLIC_SITE_READY_FOR_INDEXING === "true",
} as const;

export const navLinks = [
  { href: "/services/", label: "Services" },
  { href: "/industries/", label: "Industries" },
  { href: "/process/", label: "Process" },
  { href: "/about/", label: "About" },
] as const;

export function absoluteUrl(path: string): string {
  return `${siteConfig.url}${normalizePath(path)}`;
}

export const contactHref = `mailto:${siteConfig.email}?${new URLSearchParams({
  subject: "Project inquiry — Craze Solutions",
  body:
    "Hi Craze Solutions,\n\nWe would like to discuss a software or AI project.\n\nGoals:\nTimeline:\n\n— ",
}).toString()}`;