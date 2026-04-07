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
    title: "Aiden",
    description:
      "Autonomous AI agent managing research, execution, trading analysis, and content across multiple models. The same architecture we deploy for clients.",
    status: "live",
    tags: ["24/7 automation", "multi-model", "zero maintenance"],
  },
  {
    title: "Collabor8",
    description:
      "Music collaboration platform built end-to-end with AI. Real-time Kanban workflow from idea to master. Dark glassmorphic UI.",
    status: "live",
    tags: ["full-stack app", "real-time", "AI-assisted"],
  },
  {
    title: "Pure Gold",
    description:
      "Trading journal and signals platform for crypto and forex traders. Designed and shipped with AI agents, from zero to production.",
    status: "building",
    tags: ["shipped product", "analytics", "production"],
  },
  {
    title: "Forge Tools",
    description:
      "Free AI readiness assessment and 50+ point security scanner for businesses. Scan your site, get a grade, and see exactly what to fix before adopting AI.",
    status: "live",
    tags: ["lead gen", "security scanner", "AI readiness"],
  },
];

export const pricing: PricingTier[] = [
  {
    title: "Strategy Session",
    problem: "\"I know AI could help us, but I don't know where to start.\"",
    description:
      "A 90-minute deep dive into your workflow, team, and goals. You walk away with a prioritized roadmap of exactly where AI fits and what to build first.",
    includes: [
      "Full workflow audit",
      "AI opportunity mapping",
      "Written roadmap with priorities",
      "30-day action plan",
    ],
    cta: "Book a Strategy Session",
  },
  {
    title: "Humanized AI Documents",
    problem: "\"Our AI-generated content reads like... AI-generated content.\"",
    description:
      "Send us your AI draft. We rewrite it so the phrasing, rhythm, and structure feel natural. No detectable patterns, no robotic hedging. Just writing that reads like a person who knows the subject sat down and wrote it.",
    includes: [
      "Light — $75, up to 1,500 words",
      "Standard — $150, up to 5,000 words",
      "Premium — $350, up to 15,000 words",
      "Brand voice calibration",
    ],
    cta: "Get Started",
  },
  {
    title: "Build Sprint",
    problem: "\"We need this built, and we need it fast.\"",
    description:
      "A 2-4 week focused engagement. We scope it, build it, and hand it off. AI agents, automations, internal tools. Fixed scope, fixed price.",
    includes: [
      "Scoping and architecture",
      "Full build and deployment",
      "Documentation and handoff",
      "2 weeks post-launch support",
    ],
    cta: "Start a Build Sprint",
  },
  {
    title: "Fractional AI Lead",
    problem: "\"We need someone owning AI for us, not just advising.\"",
    description:
      "Ongoing monthly engagement. We embed with your team as your AI lead. Weekly check-ins, continuous improvements, new automations as needs emerge.",
    includes: [
      "Weekly strategy syncs",
      "Continuous AI integration",
      "Team training and enablement",
      "Priority Slack/Discord access",
    ],
    cta: "Explore a Retainer",
  },
];

export const newsletter = {
  headline: "The Forge Log",
  description:
    "Weekly dispatches on building products with AI. The wins, the failures, and the real numbers. No fluff, no hustle porn. Just what's actually working.",
  placeholder: "your@email.com",
  cta: "Subscribe",
  note: "Free. Unsubscribe anytime. No spam, ever.",
};

export const contact = {
  headline: "Let's Talk",
  description:
    "Start with a 30-minute intro call. From there, we'll decide whether a paid 90-minute strategy session, build sprint, or deeper engagement makes the most sense.",
  qualifiers: [
    "You have a product idea but need help with AI-first architecture",
    "Your team is drowning in manual work that AI could automate",
    "You want to integrate LLMs into your workflow — not just chat, but real execution",
    "You need someone who can manage the project end-to-end, not just advise",
  ],
  cta: { label: "Book an Intro Call", href: "https://calendly.com/smgreiner9/30min" },
};

export const footer = {
  copyright: `© ${new Date().getFullYear()} By Forge Studios LLC`,
  socials: [
    { label: "X / Twitter", href: "https://x.com/J3ndrix_" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/forge-ai-consulting" },
    { label: "GitHub", href: "https://github.com/smgreiner9-creator" },
  ] as SocialLink[],
};
