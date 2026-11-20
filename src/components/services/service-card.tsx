import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  Braces,
  Cloud,
  Code2,
  Database,
  type LucideIcon,
  Sparkles,
} from "lucide-react";
import type { Service } from "@/data/services";

const icons: Record<Service["icon"], LucideIcon> = {
  Code2,
  Sparkles,
  Cloud,
  Bot,
  Database,
  Braces,
};

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = icons[service.icon];

  return (
    <Link href={`/services/${service.slug}/`} className="service-card">
      <div className="service-card__top">
        <div className="service-card__icon" aria-hidden>
          <Icon size={22} strokeWidth={1.8} />
        </div>
        <span className="service-card__index">0{index + 1}</span>
      </div>
      <div className="service-card__body">
        <h3>{service.title}</h3>
        <p>{service.summary}</p>
      </div>
      <div className="service-card__bottom">
        <span>Explore capability</span>
        <ArrowUpRight size={17} />
      </div>
    </Link>
  );
}