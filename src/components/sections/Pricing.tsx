import { pricing, contact } from "@/lib/content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function Pricing() {
  return (
    <SectionWrapper id="services">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="gradient-text font-serif text-3xl font-semibold md:text-4xl">
          How We Work Together
        </h2>
        <p className="mt-4 text-body">
          three ways in, depending on where you are.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {pricing.map((tier) => (
          <Card key={tier.title} className="flex flex-col">
            <h3 className="font-serif text-xl font-semibold text-text">
              {tier.title}
            </h3>
            <p className="mt-3 text-sm italic text-muted">{tier.problem}</p>
            <p className="mt-4 text-sm leading-relaxed text-body">
              {tier.description}
            </p>
            <div className="mt-4 flex flex-1 flex-wrap gap-2">
              {tier.includes.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-bg-alt px-3 py-1 font-mono text-xs text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <Button
                href={contact.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center"
              >
                {tier.cta}
              </Button>
              <p className="mt-2 text-center text-xs text-muted">
                starts with a free 30-minute intro call
              </p>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
