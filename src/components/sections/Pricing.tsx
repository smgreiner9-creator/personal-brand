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
        <p className="mt-4 text-body">{contact.description}</p>
        <div className="mt-6 inline-flex flex-wrap justify-center gap-x-6 gap-y-2 text-left">
          {contact.qualifiers.map((q) => (
            <span key={q} className="flex items-center gap-2 text-sm text-body">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {q}
            </span>
          ))}
        </div>
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
            <ul className="mt-5 flex-1 space-y-2">
              {tier.includes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-body"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button
                href={contact.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center"
              >
                {tier.cta}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
