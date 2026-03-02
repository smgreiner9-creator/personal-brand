import { lanes } from "@/lib/content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function WhatIDo() {
  return (
    <SectionWrapper id="what-i-do" alt>
      <h2 className="gradient-text font-serif text-3xl font-semibold md:text-4xl">
        What I Do
      </h2>
      <p className="mt-4 max-w-2xl text-body">
        three lanes, one method: strategy meets AI execution.
      </p>

      <div className="mt-12 space-y-10 md:space-y-0 md:divide-y md:divide-border">
        {lanes.map((lane, i) => (
          <div
            key={lane.title}
            className={`grid gap-4 md:grid-cols-[200px_1fr] md:gap-12 ${i > 0 ? "md:pt-10" : ""} md:pb-6`}
          >
            <h3 className="font-serif text-xl font-semibold text-text md:pt-0.5">
              {lane.title}
            </h3>
            <div>
              <p className="text-sm leading-relaxed text-body">
                {lane.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {lane.points.map((point) => (
                  <span
                    key={point}
                    className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
