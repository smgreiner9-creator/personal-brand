import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function ReadinessCTA() {
  return (
    <SectionWrapper id="get-started">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="gradient-text font-serif text-3xl font-semibold md:text-4xl">
          are you ready for AI?
        </h2>
        <p className="mt-4 text-body">
          most businesses know AI can help. few know where to start. take our free AI readiness
          scorecard and get a clear picture of where you stand, what to prioritize, and where
          the biggest opportunities are hiding in your workflow.
        </p>
        <p className="mt-3 text-sm text-muted">
          takes 2 minutes. no fluff. just a scored breakdown of your AI readiness across 8 dimensions.
        </p>
        <a
          href="https://tools.byforge.dev/readiness"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-lg bg-accent px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
        >
          Take the AI Readiness Scorecard
        </a>
      </div>
    </SectionWrapper>
  );
}
