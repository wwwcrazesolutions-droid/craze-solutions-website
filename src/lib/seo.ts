import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site";

type PageMetaInput = {
  title: string;
  description: string;
  pathname: string;
};

export function pageMetadata({ title, description, pathname }: PageMetaInput): Metadata {
  const canonical = absoluteUrl(pathname);
  const fullTitle = title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: absoluteUrl("/og-image.png"),
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — custom software and AI`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl("/og-image.png")],
    },
    robots: {
      index: siteConfig.isIndexable,
      follow: true,
    },
  };
}