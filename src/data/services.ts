export type Service = {
  slug: string;
  title: string;
  summary: string;
  icon: "Code2" | "Sparkles" | "Cloud" | "Bot" | "Database" | "Braces";
  seoTitle: string;
  seoDescription: string;
  hero: string;
  outcomes: string[];
  deliverables: string[];
  blueprintNote: string;
};

export const services: Service[] = [
  {
    slug: "custom-software-development",
    title: "Custom software development",
    icon: "Code2",
    summary: "Internal tools and customer-facing products shaped around your workflows—not generic SaaS constraints.",
    seoTitle: "Custom software development",
    seoDescription:
      "Bespoke web and platform engineering from Craze Solutions: discovery, architecture, and iterative delivery for teams that need software aligned to how they work.",
    hero:
      "We build maintainable applications around your data models, permissions, and daily operations—so your team spends less time fighting the tool.",
    outcomes: [
      "Domain-driven architecture with clear ownership boundaries",
      "Accessible, responsive interfaces your staff can adopt quickly",
      "Automated quality gates: typecheck, lint, and CI-ready repos",
      "Documentation and handoff that support long-term maintenance",
    ],
    deliverables: [
      "Technical discovery and solution blueprint",
      "Incremental releases with demo-ready milestones",
      "Production deployment guidance (static or hosted)",
      "Runbooks for onboarding and support",
    ],
    blueprintNote:
      "Solution blueprint: illustrative admin console and workflow modules—representative of delivery patterns, not a named client deployment.",
  },
  {
    slug: "ai-development",
    title: "AI development",
    icon: "Sparkles",
    summary: "Pragmatic LLM features—classification, generation, and evaluation—embedded in products you control.",
    seoTitle: "AI development",
    seoDescription:
      "Craze Solutions integrates AI where it reduces manual work: structured prompts, guardrails, observability, and human review loops.",
    hero:
      "We pair model capabilities with software engineering discipline so AI features stay testable, auditable, and cost-aware in production.",
    outcomes: [
      "Prompt and tool interfaces with typed contracts",
      "Evaluation sets and regression checks before launch",
      "Latency and cost budgets with fallbacks",
      "Clear UX for human review and override",
    ],
    deliverables: [
      "Use-case feasibility review",
      "Reference implementation in your stack",
      "Monitoring hooks for quality and spend",
      "Security review for data handling",
    ],
    blueprintNote:
      "Solution blueprint: sample copilot panel and review queue—conceptual UX for AI-assisted workflows.",
  },
  {
    slug: "saas-development",
    title: "SaaS development",
    icon: "Cloud",
    summary: "Multi-tenant products from MVP through scale-up, with billing-ready foundations when you need them.",
    seoTitle: "SaaS product development",
    seoDescription:
      "End-to-end SaaS engineering: onboarding, permissions, analytics hooks, and extensible APIs from Craze Solutions.",
    hero:
      "Ship a credible v1 fast, then harden tenancy, roles, and integrations as adoption grows.",
    outcomes: [
      "Tenant-aware data models and admin surfaces",
      "Onboarding flows and in-product guidance",
      "API design for partners and automations",
      "Roadmap-friendly modular architecture",
    ],
    deliverables: [
      "MVP scope and milestone plan",
      "Core app shell with auth integration points",
      "Stripe or billing integration guidance (when required)",
      "Launch checklist and analytics events map",
    ],
    blueprintNote:
      "Solution blueprint: fictional SaaS dashboard tiles—layout patterns only, not customer metrics.",
  },
  {
    slug: "ai-agents-automation",
    title: "AI agents & automation",
    icon: "Bot",
    summary: "Orchestrated agents and workflow automation that connect your existing tools with guardrails.",
    seoTitle: "AI agents and workflow automation",
    seoDescription:
      "Design and implementation of agent workflows, approvals, and integrations—without black-box ops from Craze Solutions.",
    hero:
      "Automate repeatable work with explicit steps, logging, and escalation paths your team can trust.",
    outcomes: [
      "Tool-calling flows with least-privilege credentials",
      "Human approval for high-impact actions",
      "Durable run history and replay for debugging",
      "Integration with email, CRM, ticketing, or internal APIs",
    ],
    deliverables: [
      "Workflow map and automation ROI estimate",
      "Pilot automations on staging data",
      "Production rollout and monitoring",
      "Playbook for extending agents safely",
    ],
    blueprintNote:
      "Solution blueprint: sample agent run timeline—demo sequence, not a live client system.",
  },
  {
    slug: "rag-development",
    title: "RAG & knowledge assistants",
    icon: "Database",
    summary: "Retrieval-augmented assistants grounded in your documents, with citation-friendly answers.",
    seoTitle: "RAG and knowledge assistants",
    seoDescription:
      "Knowledge pipelines, embeddings, and Q&A experiences that respect access control—built by Craze Solutions.",
    hero:
      "Give teams accurate answers from policies, specs, and support content—without sending sensitive data to the wrong audience.",
    outcomes: [
      "Ingestion pipelines for PDFs, wikis, and tickets",
      "Chunking and metadata strategy tuned to your corpus",
      "Answer UI with sources and confidence cues",
      "Access rules mirrored from your identity model",
    ],
    deliverables: [
      "Corpus audit and retrieval benchmark",
      "Reference assistant embedded in your product or intranet",
      "Evaluation harness with golden questions",
      "Operations guide for content updates",
    ],
    blueprintNote:
      "Solution blueprint: knowledge search mock with sample citations—illustrative content only.",
  },
  {
    slug: "backend-api-development",
    title: "Backend, API & cloud",
    icon: "Braces",
    summary: "APIs, workers, and cloud foundations that stay observable and easy to extend.",
    seoTitle: "Backend, API and cloud development",
    seoDescription:
      "Craze Solutions delivers APIs, event-driven workers, and deployment patterns on modern cloud providers.",
    hero:
      "Solid contracts, schema migrations, and observability from day one—so frontend and partner teams can move in parallel.",
    outcomes: [
      "REST or GraphQL APIs with versioning discipline",
      "Background jobs and idempotent processing",
      "Infrastructure-as-code templates where appropriate",
      "Dashboards for errors, latency, and saturation",
    ],
    deliverables: [
      "API specification and authentication model",
      "Staging and production environment layout",
      "CI/CD pipeline recommendations",
      "Security baseline checklist",
    ],
    blueprintNote:
      "Solution blueprint: API topology diagram in docs—reference architecture, not a deployed stack.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}