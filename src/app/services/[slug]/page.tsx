import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { CtaBanner } from "@/components/ui/cta-banner";
import { ActionLink } from "@/components/ui/action-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { pageMetadata } from "@/lib/seo";
import { contactHref } from "@/lib/site";
import { getAllServiceSlugs, getServiceBySlug, services } from "@/data/services";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    pathname: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = services.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="service-detail-hero">
        <div className="service-detail-hero__mesh" aria-hidden="true" />
        <div className="container service-detail-hero__grid">
          <div>
            <nav className="breadcrumb breadcrumb--light" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/services/">Services</Link>
              <span>/</span>
              <span>{service.title}</span>
            </nav>
            <h1>{service.title}</h1>
            <p>{service.hero}</p>
            <ActionLink href={contactHref} variant="primary" external>
              Discuss this capability
            </ActionLink>
          </div>
          <div className="service-detail-hero__visual" aria-hidden="true">
            <span className="detail-visual-id">BLUEPRINT / {service.slug.toUpperCase()}</span>
            <div className="detail-orbit detail-orbit--outer">
              <div className="detail-orbit detail-orbit--mid">
                <div className="detail-orbit detail-orbit--inner" />
              </div>
            </div>
            <span className="detail-visual-label">ILLUSTRATIVE SYSTEM VIEW</span>
          </div>
        </div>
      </section>

      <section className="section intro-split">
        <div className="container intro-split__grid">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" />
              OVERVIEW
            </div>
            <h2>Engineering focused on outcomes your team can adopt.</h2>
            <p>{service.blueprintNote}</p>
          </div>
          <div className="intro-split__outcomes">
            <h3>Typical outcomes</h3>
            {service.outcomes.map((outcome) => (
              <div key={outcome}>
                <CheckCircle2 size={18} />
                <span>{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section capabilities-section">
        <div className="container">
          <SectionHeading
            eyebrow="DELIVERABLES"
            title="What a Craze Solutions engagement can include"
            description="Exact scope is defined collaboratively — this is representative, not a guarantee of every artifact."
          />
          <div className="capabilities-grid">
            {service.deliverables.map((item, index) => (
              <article key={item} className="capability-card">
                <span>0{index + 1}</span>
                <ArrowUpRight size={20} />
                <h3>{item}</h3>
                <p>Delivered with documentation and handoff guidance for your team.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section related-services">
        <div className="container">
          <SectionHeading eyebrow="RELATED" title="Explore adjacent capabilities" />
          <div className="related-grid">
            {related.map((item, index) => (
              <Link href={`/services/${item.slug}/`} className="related-card" key={item.slug}>
                <div>
                  <span>0{index + 1}</span>
                  <ArrowUpRight size={18} />
                </div>
                <h3>{item.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title={`Plan your ${service.title.toLowerCase()} engagement with Craze Solutions.`} />
    </>
  );
}