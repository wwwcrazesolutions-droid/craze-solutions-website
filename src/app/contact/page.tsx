import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail, MessageCircle, MoveUpRight, Globe2 } from "lucide-react";
import { CtaBanner } from "@/components/ui/cta-banner";
import { pageMetadata } from "@/lib/seo";
import { contactHref, siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact Our Software & AI Development Team",
  description: "Let's discuss your custom software, SaaS, AI agent, RAG or backend development project. Connect with our software and AI engineering team.",
  pathname: "/contact",
});
export default function ContactPage(){return <>
  <section className="contact-page"><div className="container contact-grid">
    <div className="contact-intro"><div className="eyebrow eyebrow--light"><span className="eyebrow-line"/> GET IN TOUCH</div><h1>Big challenge?<br/><em>Let's talk.</em></h1><p>Tell us what you're building, what's not working, or where AI could make a difference. We can start with a simple conversation.</p>
      <div className="contact-points"><span><Globe2 size={18}/> Collaborating across international markets</span><span><MessageCircle size={18}/> Clear, direct project conversations</span></div>
    </div>
    <div className="contact-panel"><div className="contact-panel__top"><span>START A CONVERSATION</span><MoveUpRight size={23}/></div><div className="contact-panel__body"><div className="contact-panel__icon"><Mail size={26}/></div><h2>Tell us about your project.</h2><p>A brief outline of your goals, timeline, and challenges is enough to get started. No complicated inquiry form.</p><a className="contact-panel__button" href={contactHref}>Email our team <ArrowUpRight size={19}/></a><a className="contact-panel__email" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div>
      <div className="contact-panel__foot"><span>01 / SHARE YOUR IDEA</span><span>02 / DISCUSS THE APPROACH</span></div>
    </div>
  </div></section>
  <section className="section contact-followup"><div className="container"><div className="contact-followup__text"><div className="eyebrow"><span className="eyebrow-line"/> WHAT HAPPENS NEXT</div><h2>Good projects start with a clear conversation.</h2></div><div className="contact-followup__cards"><div><span>01</span><h3>Share the context</h3><p>Briefly tell us about your organization, priorities, and existing systems.</p></div><div><span>02</span><h3>Explore the options</h3><p>Discuss the scope, constraints, tradeoffs, and likely next steps.</p></div><div><span>03</span><h3>Plan the engagement</h3><p>Agree on a sensible path before committing to implementation.</p></div></div><p className="contact-followup__small">Looking for specific capabilities? <Link href="/services">Explore our services <ArrowUpRight size={14}/></Link></p></div></section>
  <CtaBanner />
</>}
