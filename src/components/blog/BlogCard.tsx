import Link from "next/link";
import { categoryLabels } from "@/lib/blog";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  bannerUrl: string | null;
  createdAt: string;
  tags: string[];
}

export function BlogCard({ slug, title, excerpt, category, bannerUrl, createdAt, tags }: BlogCardProps) {
  const date = new Date(createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link
      href={`/blog/${slug}`}
      className="group block rounded-xl border border-border bg-surface p-0 transition-all hover:border-accent/30 hover:shadow-lg"
    >
      {bannerUrl && (
        <div className="aspect-[2/1] overflow-hidden rounded-t-xl">
          <img
            src={bannerUrl}
            alt=""
            className="h-full w-full object-cover transition-transform group-hover:scale-[1.02]"
          />
        </div>
      )}
      <div className="p-5">
        <div className="flex items-center gap-2 text-xs text-muted">
          <span className="rounded-full bg-bg-alt px-2 py-0.5 font-mono">
            {categoryLabels[category] || category}
          </span>
          <span>{date}</span>
        </div>
        <h3 className="mt-2 font-serif text-lg font-semibold text-text group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="mt-1 text-sm text-body line-clamp-2">{excerpt}</p>
        {tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1">
            {tags.map((tag) => (
              <span key={tag} className="rounded bg-bg-alt px-1.5 py-0.5 text-xs text-muted">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
