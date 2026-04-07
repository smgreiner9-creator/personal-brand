import type { NavLink, LaneCard, ProjectCard, PricingTier, SocialLink } from "@/types";

export const siteConfig = {
  name: "By Forge",
  title: "By Forge — AI-Augmented Product Studio",
  description:
    "A decade in frontend tech startups. Now we build products with AI agents. Strategy meets execution.",
  url: "https://byforge.dev",
  ogImage: "/og-image.png",
  twitterHandle: "@J3ndrix_",
  calendly: "https://calendly.com/smgreiner9/30min",
};

export const navLinks: NavLink[] = [
  { label: "What We Do", href: "/#what-we-do" },
  { label: "Projects", href: "/#projects" },
  { label: "Services", href: "/#services" },
  { label: "Blog", href: "/blog" },
  { label: "Toolbox", href: "https://tools.byforge.dev" },
];

export const hero = {
  headline: "From strategy to system.",
  headlineAccent: "AI that works.",
  subhead:
    "A decade inside frontend tech startups taught me what makes products win. AI doesn't replace that instinct. It accelerates it.",
  paragraph:
    "10+ years in product marketing, IT project management, and growth gave me two things most builders don't have: the strategic eye to know what will resonate, and the operational discipline to deliver it on scope and on schedule. Now we build with AI agents that handle the research and execution while we make the calls that matter.",
  tagline: "We strategize. AI executes. We ship.",
  ctaPrimary: { label: "Book an Intro Call", href: "https://calendly.com/smgreiner9/30min" },
  ctaSecondary: { label: "See Our Work", href: "#projects" },
};

export const lanes: LaneCard[] = [
  {
    title: "AI Agent Architecture",
    description:
      "We design and deploy autonomous AI agents that handle real work. Not chatbots. Agents that research, execute, and deliver.",
    points: [
      "Custom agent builds",
      "Multi-model orchestration",
      "Tool and API integration",
    ],
  },
  {
    title: "Workflow Automation",
    description:
      "We find the repetitive work your team does every day and replace it with AI-powered systems that run on their own.",
    points: [
      "Process audit and mapping",
      "LLM-powered automation",
      "Monitoring and iteration",
    ],
  },
  {
    title: "Product Strategy",
    description:
      "We help you figure out what to build, how to position it, and the fastest path to something people actually want.",
    points: [
      "AI-first product design",
      "Go-to-market planning",
      "Build vs. buy analysis",
    ],
  },
];

export const projects: ProjectCard[] = [
  {
    title: "aiden",
    description:
      "autonomous AI agent managing research, execution, trading analysis, and content across multiple models. the same architecture i deploy for clients.",
    status: "live",
    tags: ["24/7 automation", "multi-model", "zero maintenance"],
  },
  {
    title: "collabor8",
    description:
      "music collaboration platform built end-to-end with AI. real-time kanban workflow from idea to master. dark glassmorphic ui.",
    status: "live",
    tags: ["full-stack app", "real-time", "AI-assisted"],
  },
  {
    title: "pure gold",
    description:
      "trading journal and signals platform for crypto and forex traders. designed and shipped with AI agents, from zero to production.",
    status: "building",
    tags: ["shipped product", "analytics", "production"],
  },
  {
    title: "forge tools",
    description:
      "free AI readiness assessment and 50+ point security scanner for businesses. scan your site, get a grade, and see exactly what to fix before adopting AI.",
    status: "live",
    tags: ["lead gen", "security scanner", "AI readiness"],
  },
];

export const pricing: PricingTier[] = [
  {
    title: "strategy session",
    problem: "\"i know AI could help us, but i don't know where to start.\"",
    description:
      "a 90-minute deep dive into your workflow, team, and goals. you walk away with a prioritized roadmap of exactly where AI fits and what to build first.",
    includes: [
      "full workflow audit",
      "AI opportunity mapping",
      "written roadmap with priorities",
      "30-day action plan",
    ],
    cta: "Book a Strategy Session",
  },
  {
    title: "build sprint",
    problem: "\"we need this built, and we need it fast.\"",
    description:
      "a 2-4 week focused engagement. i scope it, build it, and hand it off. AI agents, automations, internal tools. fixed scope, fixed price.",
    includes: [
      "scoping and architecture",
      "full build and deployment",
      "documentation and handoff",
      "2 weeks post-launch support",
    ],
    cta: "Start a Build Sprint",
  },
  {
    title: "fractional AI lead",
    problem: "\"we need someone owning AI for us, not just advising.\"",
    description:
      "ongoing monthly engagement. i embed with your team as your AI lead. weekly check-ins, continuous improvements, new automations as needs emerge.",
    includes: [
      "weekly strategy syncs",
      "continuous AI integration",
      "team training and enablement",
      "priority slack/discord access",
    ],
    cta: "Explore a Retainer",
  },
  {
    title: "humanized AI documents",
    problem: "\"our AI-generated content reads like... AI-generated content.\"",
    description:
      "send us your AI draft. we rewrite it so the phrasing, rhythm, and structure feel natural. no detectable patterns, no robotic hedging. just writing that reads like a person who knows the subject sat down and wrote it.",
    includes: [
      "light — $75, up to 1,500 words",
      "standard — $150, up to 5,000 words",
      "premium — $350, up to 15,000 words",
      "brand voice calibration",
    ],
    cta: "Get Started",
  },
];

export const newsletter = {
  headline: "the forge log",
  description:
    "weekly dispatches on building products with AI. the wins, the failures, and the real numbers. no fluff, no hustle porn. just what's actually working.",
  placeholder: "your@email.com",
  cta: "Subscribe",
  note: "free. unsubscribe anytime. no spam, ever.",
};

export const contact = {
  headline: "let's talk",
  description:
    "start with a 30-minute intro call. from there, we'll decide whether a paid 90-minute strategy session, build sprint, or deeper engagement makes the most sense.",
  qualifiers: [
    "you have a product idea but need help with AI-first architecture",
    "your team is drowning in manual work that AI could automate",
    "you want to integrate LLMs into your workflow. not just chat, but real execution",
    "you need someone who can manage the project end-to-end, not just advise",
  ],
  cta: { label: "Book an Intro Call", href: "https://calendly.com/smgreiner9/30min" },
};

export const footer = {
  copyright: `© ${new Date().getFullYear()} forge AI. built with AI.`,
  socials: [
    { label: "x / twitter", href: "https://x.com/J3ndrix_" },
    { label: "linkedin", href: "https://www.linkedin.com/company/forge-ai-consulting" },
    { label: "github", href: "https://github.com/smgreiner9-creator" },
  ] as SocialLink[],
};
