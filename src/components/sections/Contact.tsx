import { contact } from "@/lib/content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";

export function Contact() {
  return (
    <SectionWrapper id="contact" alt>
      <div className="mx-auto max-w-xl text-center">
        <h2 className="gradient-text font-serif text-3xl font-semibold md:text-4xl">
          {contact.headline}
        </h2>
        <p className="mt-4 text-body">{contact.description}</p>

        <div className="mt-8 text-left">
          <p className="text-sm font-medium text-text">
            this might be a good fit if:
          </p>
          <ul className="mt-3 space-y-2">
            {contact.qualifiers.map((q) => (
              <li key={q} className="flex items-start gap-2 text-sm text-body">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {q}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <Button
            href={contact.cta.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contact.cta.label}
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
