import { CheckCircle2, Compass, Hammer, Rocket, Search } from "lucide-react";
import { CtaBanner } from "@/components/ui/cta-banner";
import { PageHero } from "@/components/ui/page-hero";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Delivery Process",
  description:
    "How Craze Solutions runs discovery, architecture, iterative build, and launch for software and AI projects.",
  pathname: "/process",
});

const phases = [
  {
    n: "01",
    icon: Search,
    title: "Discover",
    body: "Map goals, users, systems, risks, and constraints with the people doing the work.",
    items: ["Stakeholder interviews", "Workflow mapping", "Success metrics"],
  },
  {
    n: "02",
    icon: Compass,
    title: "Architect",
    body: "Choose sensible boundaries, milestones, and tradeoffs before production implementation.",
    items: ["Solution blueprint", "Technical options", "Delivery plan"],
  },
  {
    n: "03",
    icon: Hammer,
    title: "Build",
    body: "Ship demo-ready increments with reviews, tests, and visible progress every week.",
    items: ["Iteration demos", "Quality gates", "Documentation"],
  },
  {
    n: "04",
    icon: Rocket,
    title: "Launch & evolve",
    body: "Support cutover, training, monitoring, and the next tranche of product value.",
    items: ["Launch checklist", "Adoption checks", "Improvement backlog"],
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="HOW WE WORK"
        title={
          <>
            A clear path from <span>idea to impact.</span>
          </>
        }
        description="Transparent collaboration, focused milestones, and engineering discipline — without surprise scope."
      />

      <section className="section process-detail">
        <div className="container process-detail__list">
          {phases.map((phase) => (
            <article key={phase.n} className="process-detail__row">
              <div className="process-detail__number">{phase.n}</div>
              <div className="process-detail__symbol">
                <phase.icon size={24} strokeWidth={1.6} />
              </div>
              <div className="process-detail__copy">
                <h2>{phase.title}</h2>
                <p>{phase.body}</p>
              </div>
              <div className="process-detail__deliverables">
                <span>TYPICAL OUTPUTS</span>
                {phase.items.map((item) => (
                  <div key={item}>
                    <CheckCircle2 size={16} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}