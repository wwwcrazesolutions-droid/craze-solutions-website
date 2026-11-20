import { PageHero } from "@/components/ui/page-hero";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy Notice (Draft)",
  description: "Draft privacy notice for the Craze Solutions marketing website.",
  pathname: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="LEGAL"
        title={
          <>
            Privacy notice <span>(draft)</span>
          </>
        }
        description="Replace this draft with counsel-reviewed language before relying on it in production."
      />

      <section className="section" style={{ background: "#fff" }}>
        <div className="container" style={{ maxWidth: 760, color: "#69798a", lineHeight: 1.85, fontSize: 15 }}>
          <p>
            <strong style={{ color: "#152b43" }}>Not legal-ready.</strong> This static marketing site does not provide
            accounts, contact forms, or embedded analytics in this build. If you email {siteConfig.name} at{" "}
            <a href={`mailto:${siteConfig.email}`} style={{ color: "#246be0" }}>
              {siteConfig.email}
            </a>
            , you voluntarily share whatever information you include in that message.
          </p>
          <p>
            Hosting providers (for example Cloudflare Pages) may process connection logs and security telemetry. Configure
            retention and policies with your provider before launch.
          </p>
          <p>Canonical site URL: {siteConfig.url}</p>
        </div>
      </section>
    </>
  );
}