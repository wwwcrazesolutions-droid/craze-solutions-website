import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BrandMark } from "@/components/brand/brand-mark";
import { contactHref, navLinks, siteConfig } from "@/lib/site";
import { services } from "@/data/services";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Link className="brand brand--inverse" href="/">
            <span className="brand-mark" aria-hidden>
              <BrandMark />
            </span>
            <span className="brand-copy">
              <strong>{siteConfig.name}</strong>
              <span>ENGINEERING & AI</span>
            </span>
          </Link>
          <p>{siteConfig.description}</p>
          <a className="footer-email" href={contactHref}>
            {siteConfig.email}
          </a>
        </div>

        <div className="footer-col">
          <h3>Company</h3>
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/contact/">Contact</Link>
          <Link href="/privacy/">Privacy</Link>
        </div>

        <div className="footer-col">
          <h3>Services</h3>
          {services.slice(0, 4).map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}/`}>
              {service.title}
            </Link>
          ))}
          <Link href="/services/">
            View all <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="footer-col">
          <h3>Get in touch</h3>
          <p>Prefer email? Tell us about your goals, constraints, and timeline.</p>
          <a className="footer-contact-link" href={contactHref}>
            Start a conversation <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>
          © {year} {siteConfig.legalName}
        </span>
        <span>Solution blueprints on this site are illustrative, not client case studies.</span>
      </div>
    </footer>
  );
}