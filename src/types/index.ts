export interface NavLink {
  label: string;
  href: string;
}

export interface LaneCard {
  title: string;
  description: string;
  points: string[];
}

export interface ProjectCard {
  title: string;
  description: string;
  status: "live" | "building" | "coming-soon";
  tags: string[];
  link?: string;
}

export interface PricingTier {
  title: string;
  problem: string;
  description: string;
  includes: string[];
  cta: string;
}

export interface SocialLink {
  label: string;
  href: string;
}
