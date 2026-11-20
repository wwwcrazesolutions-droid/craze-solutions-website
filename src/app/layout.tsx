import type { Metadata, Viewport } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { absoluteUrl, siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: `Custom Software Development & AI Solutions | ${siteConfig.name}`, template: "%s" },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  icons: { icon: "/favicon.svg" },
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    type: "website", locale: "en_US", siteName: siteConfig.name,
    title: `Custom Software Development & AI Solutions | ${siteConfig.name}`,
    description: siteConfig.description,
    images: [{ url: absoluteUrl("/og-image.png"), width: 1200, height: 630, alt: `${siteConfig.name} software and AI solutions` }],
  },
  twitter: { card: "summary_large_image", images: [absoluteUrl("/og-image.png")] },
  robots: { index: siteConfig.isIndexable, follow: true },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#07121e" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a><Header /><main id="main-content">{children}</main><Footer /></body></html>;
}
