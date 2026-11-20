import { ArrowUpRight } from "lucide-react";
import { CtaBanner } from "@/components/ui/cta-banner";
import { PageHero } from "@/components/ui/page-hero";
import { ServiceCard } from "@/components/services/service-card";
import { pageMetadata } from "@/lib/seo";
import { contactHref } from "@/lib/site";
import { services } from "@/data/services";

export const metadata = pageMetadata({
  title: "Custom Software & AI Development Services",
  description:
    "Explore Craze Solutions services: custom software, AI development, SaaS, agents, RAG, and backend engineering.",
  pathname: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="WHAT WE DO"
        title={
          <>
            Built to solve the <span>hard problems.</span>
          </>
        }
        description="From internal platforms to applied AI, we help teams ship software that fits how they work."
      />

      <section className="section service-listing">
        <div className="container">
          <div className="service-listing__intro">
            <span>SIX CORE CAPABILITIES</span>
            <p>Each page describes outcomes, deliverables, and blueprint notes — not fixed SKUs.</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
          <div className="services-help">
            <div>
              <h2>Need help choosing a starting point?</h2>
              <p>Describe your goals and constraints. We will suggest a sensible first milestone and team shape.</p>
            </div>
            <a href={contactHref}>
              Talk to Craze Solutions <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}