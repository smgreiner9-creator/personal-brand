import type { NavLink, LaneCard, ProjectCard, PricingTier, SocialLink } from "@/types";

export const siteConfig = {
  name: "forge studios",
  title: "forge studios // AI-augmented product studio",
  description:
    "a decade in frontend tech startups. now i build products with AI agents. strategy meets execution.",
  url: "https://byforge.dev",
  ogImage: "/og-image.png",
  twitterHandle: "@J3ndrix_",
};

export const navLinks: NavLink[] = [
  { label: "what i do", href: "#what-i-do" },
  { label: "projects", href: "#projects" },
  { label: "services", href: "#services" },
  { label: "newsletter", href: "#newsletter" },
  { label: "contact", href: "#contact" },
];

export const hero = {
  headline: "Strategy meets AI.\nProducts get shipped.",
  subhead:
    "a decade inside frontend tech startups taught me what makes products win. AI doesn't replace that instinct, it accelerates it.",
  paragraphs: [
    "i've spent 10+ years in tech. product marketing, IT project management, growth, go-to-market. startups and enterprise environments where shipping on time was the only option.",
    "that background gave me two things most builders don't have: the strategic eye to know what will resonate, and the operational discipline to actually deliver it on scope and on schedule.",
    "now i build with AI agents. i describe the product and the positioning, my AI co-founder aiden handles research and execution, and i make the judgment calls that turn code into something people actually want.",
  ],
  tagline: "I strategize. AI executes. We ship.",
  ctaPrimary: { label: "Book a Call", href: "#contact" },
  ctaSecondary: { label: "See My Work", href: "#projects" },
};

export const lanes: LaneCard[] = [
  {
    title: "AI consulting",
    description:
      "i help founders and teams ship faster by integrating AI agents into their workflow. not as a toy, but as a force multiplier.",
    points: [
      "AI agent architecture & deployment",
      "workflow automation with LLMs",
      "product strategy with AI-first thinking",
    ],
  },
  {
    title: "trading tools",
    description:
      "custom signals, automated scanning, and trading infrastructure built for serious traders who want an edge.",
    points: [
      "tradingview pine script strategies",
      "automated chart scanning & alerts",
      "trading journal platforms",
    ],
  },
  {
    title: "music tech",
    description:
      "building collabor8, a platform where musicians collaborate on songs from idea to master, with AI-assisted workflows.",
    points: [
      "real-time collaboration tools",
      "AI-assisted mixing & mastering",
      "music production workflows",
    ],
  },
];

export const projects: ProjectCard[] = [
  {
    title: "aiden",
    description:
      "my AI cto. an autonomous agent that handles research, execution, trading analysis, and content. running 24/7 across multiple models.",
    status: "live",
    tags: ["openclaw", "multi-model", "autonomous"],
  },
  {
    title: "collabor8",
    description:
      "music collaboration platform where the song is the unit of work. dark glassmorphic ui, real-time kanban from idea to master.",
    status: "building",
    tags: ["next.js", "supabase", "real-time"],
  },
  {
    title: "pure gold",
    description:
      "trading journal and signals platform for crypto and forex traders. vibe coded with AI from zero to shipped.",
    status: "live",
    tags: ["trading", "pine script", "analytics"],
  },
  {
    title: "droidclaw",
    description:
      "phone agent running on a pixel 6 pro. posts to x, manages apps, executes tasks, all via adb over tailscale. zero api cost.",
    status: "live",
    tags: ["android", "adb", "automation"],
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
];

export const newsletter = {
  headline: "the forge log",
  description:
    "weekly dispatches on building products with AI. the wins, the failures, and the real numbers. no fluff, no hustle porn. just what's actually working.",
  buttondownUsername: "jen", // Update with actual Buttondown username
  placeholder: "your@email.com",
  cta: "Subscribe",
  note: "free. unsubscribe anytime. no spam, ever.",
};

export const contact = {
  headline: "let's talk",
  description:
    "i take on a small number of consulting projects where product strategy meets AI execution. if you're a founder or team looking to ship faster with AI, let's see if it's a fit.",
  qualifiers: [
    "you have a product idea but need help with AI-first architecture",
    "your team is drowning in manual work that AI could automate",
    "you want to integrate LLMs into your workflow. not just chat, but real execution",
    "you need someone who can manage the project end-to-end, not just advise",
  ],
  cta: { label: "Book a 30-Min Call", href: "https://calendly.com/smgreiner9/30min" }, // Update with actual Cal.com link
};

export const footer = {
  copyright: `© ${new Date().getFullYear()} forge studios. built with AI.`,
  socials: [
    { label: "x / twitter", href: "https://x.com/J3ndrix_" },
    { label: "github", href: "https://github.com/smgreiner9-creator" },
  ] as SocialLink[],
};
