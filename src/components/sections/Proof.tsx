import { projects } from "@/lib/content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function Proof() {
  return (
    <SectionWrapper id="projects">
      <h2 className="gradient-text font-serif text-3xl font-semibold md:text-4xl">
        What We&apos;ve Built
      </h2>
      <p className="mt-4 max-w-2xl text-body">
        Real projects, shipped with AI. This is the same architecture and process we bring to client work.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title}>
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-serif text-xl font-semibold text-text">
                {project.title}
              </h3>
              <Badge status={project.status} />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-body">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded bg-bg-alt px-2 py-0.5 font-mono text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
