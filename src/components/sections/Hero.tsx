"use client";

import { useCallback, useRef } from "react";
import { hero } from "@/lib/content";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const visualRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = visualRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    el.style.setProperty("--mx", `${x}`);
    el.style.setProperty("--my", `${y}`);
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = visualRef.current;
    if (!el) return;
    el.style.setProperty("--mx", "0");
    el.style.setProperty("--my", "0");
  }, []);

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Ambient gradient orb */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 40%, rgba(79, 70, 229, 0.07) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(79, 70, 229, 0.04) 0%, transparent 50%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16">
        {/* Left — interactive forge visual */}
        <div className="order-2 flex items-center justify-center md:order-1">
          <div
            ref={visualRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="forge-visual relative h-80 w-full max-w-md cursor-default md:h-96"
            style={{ "--mx": "0", "--my": "0" } as React.CSSProperties}
          >
            {/* Orbiting rings — tilt with mouse */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="forge-ring-outer absolute h-72 w-72 rounded-full border border-accent/10 md:h-80 md:w-80" />
              <div className="forge-ring-inner absolute h-48 w-48 rounded-full border border-accent/20 md:h-56 md:w-56" />
            </div>

            {/* Center glow — shifts with mouse */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="forge-core forge-reactive-glow h-20 w-20 rounded-full bg-accent/10 blur-xl md:h-24 md:w-24" />
              <div className="forge-reactive-dot absolute h-3 w-3 rounded-full bg-accent shadow-lg shadow-accent/30" />
            </div>

            {/* Floating nodes — scatter on hover */}
            <div className="forge-node-1 absolute left-[15%] top-[20%] h-2 w-2 rounded-full bg-accent/40" />
            <div className="forge-node-2 absolute right-[20%] top-[30%] h-1.5 w-1.5 rounded-full bg-accent/30" />
            <div className="forge-node-3 absolute bottom-[25%] left-[25%] h-2.5 w-2.5 rounded-full bg-accent/20" />
            <div className="forge-node-4 absolute bottom-[20%] right-[15%] h-2 w-2 rounded-full bg-accent/35" />

            {/* Label chips — drift with mouse */}
            <div className="forge-chip absolute left-[5%] top-[45%] rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted shadow-sm">
              strategy
            </div>
            <div className="forge-chip-delay absolute bottom-[35%] right-[5%] rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted shadow-sm">
              execution
            </div>
            <div className="forge-chip-delay-2 absolute right-[25%] top-[12%] rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted shadow-sm">
              AI agents
            </div>
          </div>
        </div>

        {/* Right — copy */}
        <div className="order-1 md:order-2">
          <h1 className="gradient-text whitespace-pre-line font-serif text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            {hero.headline}
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-body md:text-xl">
            {hero.subhead}
          </p>

          <p className="mt-8 text-base leading-relaxed text-body">
            {hero.paragraph}
          </p>

          <p className="gradient-text mt-8 font-serif text-lg font-semibold">
            {hero.tagline}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={hero.ctaPrimary.href}>{hero.ctaPrimary.label}</Button>
            <Button variant="secondary" href={hero.ctaSecondary.href}>
              {hero.ctaSecondary.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
