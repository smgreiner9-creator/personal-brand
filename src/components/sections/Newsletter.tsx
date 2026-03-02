import { newsletter } from "@/lib/content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function Newsletter() {
  return (
    <SectionWrapper id="newsletter">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="gradient-text font-serif text-3xl font-semibold md:text-4xl">
          {newsletter.headline}
        </h2>
        <p className="mt-4 text-body">{newsletter.description}</p>

        <form
          action={`https://buttondown.com/api/emails/embed-subscribe/${newsletter.buttondownUsername}`}
          method="post"
          target="_blank"
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            name="email"
            placeholder={newsletter.placeholder}
            required
            className="flex-1 rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
          <button
            type="submit"
            className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            {newsletter.cta}
          </button>
        </form>

        <p className="mt-3 text-xs text-muted">{newsletter.note}</p>
      </div>
    </SectionWrapper>
  );
}
