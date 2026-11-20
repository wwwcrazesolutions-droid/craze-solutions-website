import { ActionLink } from "@/components/ui/action-link";
import { contactHref } from "@/lib/site";

export function CtaBanner({
  title = "Ready to build something that lasts?",
  description = "Share your goals and constraints. We will help you chart a sensible path from idea to production software.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="cta-wrap section">
      <div className="container">
        <div className="cta-banner">
          <div className="cta-banner__content">
            <div className="eyebrow eyebrow--light">
              <span className="eyebrow-line" />
              WORK WITH CRAZE SOLUTIONS
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
            <ActionLink href={contactHref} variant="white" external>
              Let&apos;s build together
            </ActionLink>
          </div>
          <svg
            className="cta-banner__decoration"
            viewBox="0 0 400 400"
            fill="none"
            aria-hidden="true"
          >
            {[100, 165, 235].map((r) => (
              <circle key={r} cx="200" cy="200" r={r} stroke="rgba(115,179,255,0.35)" strokeWidth="2" />
            ))}
            <circle cx="120" cy="120" r="7" fill="rgba(106,188,251,0.9)" />
            <circle cx="290" cy="280" r="7" fill="rgba(106,188,251,0.9)" />
          </svg>
        </div>
      </div>
    </section>
  );
}