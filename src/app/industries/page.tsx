import { CheckCircle2 } from "lucide-react";
import { CtaBanner } from "@/components/ui/cta-banner";
import { PageHero } from "@/components/ui/page-hero";
import { pageMetadata } from "@/lib/seo";
import { industries } from "@/data/industries";

export const metadata = pageMetadata({
  title: "Industries We Support",
  description:
    "Craze Solutions builds custom software and AI for distribution, logistics, SaaS, and professional services teams.",
  pathname: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="INDUSTRIES"
        title={
          <>
            Vertical context. <span>Engineering depth.</span>
          </>
        }
        description="We adapt delivery to your compliance, operations, and users — these sections describe common problem shapes, not endorsements."
      />

      <section className="section">
        <div className="container industry-list">
          {industries.map((industry) => (
            <article key={industry.id} className="industry-row">
              <div className="industry-row__index">{industry.index}</div>
              <div className="industry-row__main">
                <h2>{industry.name}</h2>
                <p>{industry.summary}</p>
                <div className="industry-row__details">
                  <div>
                    <h3>Typical challenges</h3>
                    {industry.challenges.map((item) => (
                      <span key={item}>
                        <CheckCircle2 size={16} />
                        {item}
                      </span>
                    ))}
                  </div>
                  <div>
                    <h3>Solution examples</h3>
                    {industry.examples.map((item) => (
                      <span key={item}>
                        <CheckCircle2 size={16} />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}