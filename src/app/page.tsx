import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Compass, Globe2, Layers3, Network, ShieldCheck, Sparkles } from "lucide-react";
import { HeroVisual } from "@/components/home/hero-visual";
import { SolutionArt } from "@/components/home/solution-art";
import { ActionLink } from "@/components/ui/action-link";
import { CtaBanner } from "@/components/ui/cta-banner";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/services/service-card";
import { services } from "@/data/services";
import { contactHref } from "@/lib/site";

const solutionExamples = [
  { tag: "SOLUTION BLUEPRINT / 01", category: "BUSINESS OPERATIONS", title: "One connected view of complex operations.", description: "Bring customer activity, stock visibility, orders, and field workflows into one purpose-built system.", type: "operations" as const, href: "/industries" },
  { tag: "SOLUTION BLUEPRINT / 02", category: "APPLIED AI", title: "Answers backed by your own knowledge.", description: "A secure knowledge assistant that retrieves the right documents and makes evidence easy to inspect.", type: "knowledge" as const, href: "/services/rag-development" },
  { tag: "SOLUTION BLUEPRINT / 03", category: "SAAS PRODUCTS", title: "A stronger foundation for a growing product.", description: "Build product workflows, permissions, APIs, and integrations ready for real customers.", type: "saas" as const, href: "/services/saas-development" },
];

export default function Home() {
  return <>
    <section className="home-hero">
      <div className="home-hero__mesh" aria-hidden="true" />
      <div className="container home-hero__content">
        <div className="home-hero__left">
          <div className="hero-badge"><span className="hero-badge__dot"/> ENGINEERING-LED SOFTWARE & AI STUDIO <ArrowUpRight size={13}/></div>
          <h1>Building the software behind <em>what's next.</em></h1>
          <p>From complex enterprise platforms to useful AI solutions, we turn business challenges into reliable, beautifully engineered products.</p>
          <div className="hero-actions"><ActionLink href={contactHref} variant="primary">Let's discuss your project</ActionLink><ActionLink href="/services" variant="outline">Explore our expertise</ActionLink></div>
          <div className="hero-smallprint"><span className="hero-smallprint__line"/><Globe2 size={15}/><span>Partnering with ambitious businesses worldwide</span></div>
        </div>
        <HeroVisual />
      </div>
      <div className="container hero-bottom-strip"><span>CRAFTED FOR COMPLEXITY</span><div><span>STRATEGY</span><i/><span>ENGINEERING</span><i/><span>INTELLIGENCE</span></div><ArrowDownRight size={22}/></div>
    </section>

    <section className="proof-band" aria-label="Core expertise">
      <div className="container proof-band__inner"><span className="proof-band__label">ONE ENGINEERING PARTNER. <strong>MULTIPLE DISCIPLINES.</strong></span>
        <div className="proof-band__items"><span><Network size={18}/> Software Engineering</span><span><Sparkles size={18}/> Applied AI</span><span><Layers3 size={18}/> Product Development</span><span><ShieldCheck size={18}/> Cloud & APIs</span></div>
      </div>
    </section>

    <section className="section services-section" id="services">
      <div className="container">
        <SectionHeading eyebrow="WHAT WE DO" title={<>Built to solve the <span className="accent-word">hard problems.</span></>} description="Thoughtful engineering across software, intelligent systems, and the infrastructure that connects them." aside={<ActionLink href="/services" variant="text">View all services</ActionLink>}/>
        <div className="services-grid">{services.map((service,i)=><ServiceCard key={service.slug} service={service} index={i}/>)}</div>
      </div>
    </section>

    <section className="section why-section">
      <div className="container why-grid">
        <div className="why-grid__left"><div className="eyebrow"><span className="eyebrow-line"/> OUR APPROACH</div><h2>Beyond the code.<br/><span>Closer to the outcome.</span></h2><p>Good technology doesn't start with a framework. It starts with understanding the business problem — then designing the right solution, building with care, and making it work in the real world.</p><ActionLink href="/process" variant="dark">How we work</ActionLink></div>
        <div className="why-grid__right">
          <div className="value-row"><div className="value-row__icon"><Compass size={23}/></div><div><h3>Business-first thinking</h3><p>Solutions shaped around the people, processes, and results that matter.</p></div><span>01</span></div>
          <div className="value-row"><div className="value-row__icon"><ShieldCheck size={23}/></div><div><h3>Engineering that lasts</h3><p>Clean architecture, sensible security, and systems built for change.</p></div><span>02</span></div>
          <div className="value-row"><div className="value-row__icon"><Sparkles size={23}/></div><div><h3>AI with purpose</h3><p>Practical AI capabilities tied to measurable workflows, not hype.</p></div><span>03</span></div>
        </div>
      </div>
    </section>

    <section className="section examples-section">
      <div className="container">
        <SectionHeading eyebrow="POSSIBILITIES IN PRACTICE" title={<>Real-world challenges.<br/><span className="accent-word">Purpose-built solutions.</span></>} description="Examples of the kinds of systems we design. These are solution concepts, not claims of completed client engagements."/>
        <div className="examples-grid">{solutionExamples.map((s,i)=><Link href={s.href} className={`example-card example-card--${i+1}`} key={s.tag}>
          <SolutionArt type={s.type}/><div className="example-card__text"><div className="example-card__meta"><span>{s.tag}</span><ArrowUpRight size={18}/></div><h3>{s.title}</h3><p>{s.description}</p><span className="example-card__category">{s.category}</span></div></Link>)}</div>
      </div>
    </section>

    <section className="section stack-section">
      <div className="container stack-section__grid"><div><div className="eyebrow"><span className="eyebrow-line"/> OUR TOOLKIT</div><h2>Modern tools.<br/>Sound decisions.</h2><p>We select technologies for the problem at hand — not the other way around.</p></div>
        <div className="stack-tags">{["React", "Next.js", "TypeScript", "Java", "Spring Boot", "Python", "FastAPI", "PostgreSQL", "AWS", "REST APIs", "Docker", "LLMs & RAG"].map(t=><span key={t}>{t}</span>)}</div>
      </div>
    </section>

    <section className="section process-teaser">
      <div className="container"><SectionHeading eyebrow="HOW WE WORK" title={<>A clear path from <span className="accent-word">idea to impact.</span></>} description="Transparent collaboration, focused milestones, and a delivery process built around your goals." aside={<ActionLink href="/process" variant="text">Explore our process</ActionLink>}/>
        <div className="steps-grid">{[
          {n:"01",t:"Discover",d:"Understand your goals, users, systems, and constraints."},
          {n:"02",t:"Architect",d:"Choose an approach built for your current needs and future growth."},
          {n:"03",t:"Build",d:"Develop in focused iterations with regular reviews and feedback."},
          {n:"04",t:"Launch & evolve",d:"Ship with confidence and improve based on real usage."},
        ].map(s=><div className="step-card" key={s.n}><span>{s.n}</span><div className="step-card__line"/><h3>{s.t}</h3><p>{s.d}</p></div>)}</div>
      </div>
    </section>
    <CtaBanner />
  </>;
}
