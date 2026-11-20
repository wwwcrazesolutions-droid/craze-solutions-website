import type { Metadata } from "next";
import { BrainCircuit, Code2, Fingerprint, Globe2 } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { ActionLink } from "@/components/ui/action-link";
import { CtaBanner } from "@/components/ui/cta-banner";
import { SectionHeading } from "@/components/ui/section-heading";
import { pageMetadata } from "@/lib/seo";
import { contactHref } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About Our Software & AI Engineering Studio",
  description: "Learn our engineering-first approach to custom software, artificial intelligence, systems architecture, and collaborative product development.",
  pathname: "/about",
});

const principles=[
  {icon:Code2,index:"01",title:"Engineering over shortcuts",text:"We favor clear systems, sound architecture, and maintainable code over solutions that only look good in a demo."},
  {icon:BrainCircuit,index:"02",title:"Intelligence with a purpose",text:"AI is most valuable when it helps real people complete meaningful work with appropriate safeguards."},
  {icon:Fingerprint,index:"03",title:"Thoughtful by design",text:"We consider reliability, data boundaries, usability, and future changes from the beginning."},
  {icon:Globe2,index:"04",title:"Built to collaborate",text:"Clear communication, transparent technical decisions, and working across teams and time zones."},
];
export default function AboutPage(){return <>
  <PageHero eyebrow="WHO WE ARE" title={<>Engineering-minded.<br/><span>Business-focused.</span></>} description="A software and AI development studio focused on solving real business problems with technology that's thoughtful, reliable, and ready to evolve."><ActionLink href={contactHref}>Work with us</ActionLink></PageHero>
  <section className="section about-intro"><div className="container about-intro__grid"><div className="eyebrow"><span className="eyebrow-line"/> WHY WE EXIST</div><div><h2>Technology should unlock possibilities, not create more complexity.</h2><p>We believe great software is a combination of strong engineering and a deep understanding of the work it supports. Our approach brings together custom development, modern architecture, and applied AI to help businesses move with confidence.</p><p>Whether you're launching a product, modernizing an internal platform, or exploring where AI can help, we aim to be the technical partner that makes the complex feel manageable.</p></div></div></section>
  <section className="section values-section"><div className="container"><SectionHeading eyebrow="WHAT GUIDES US" title={<>High standards.<br/><span className="accent-word">Practical outcomes.</span></>} description="The principles behind the way we approach every technical challenge."/><div className="values-grid">{principles.map(p=><div key={p.index} className="value-card"><p.icon size={28} strokeWidth={1.6}/><span>{p.index} / PRINCIPLE</span><h3>{p.title}</h3><p>{p.text}</p></div>)}</div></div></section>
  <section className="section about-focus"><div className="container about-focus__grid"><div><span>OUR FOCUS</span><h2>Software engineering<br/>meets applied AI.</h2></div><div><p>These disciplines are increasingly interconnected. We design modern backend systems, web platforms, and intelligent capabilities as parts of one coherent product experience.</p><ActionLink href="/services" variant="text">Explore our expertise</ActionLink></div></div></section>
  <CtaBanner title="Find the engineering partner your idea deserves."/>
</>}
