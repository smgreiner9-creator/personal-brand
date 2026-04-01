import type { Metadata } from "next";
import { BlogCard } from "@/components/blog/BlogCard";

export const metadata: Metadata = {
  title: "Blog - Forge AI",
  description: "Insights on building products with AI. Strategy, case studies, tutorials, and real numbers.",
};

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  bannerUrl: string | null;
  createdAt: string;
  tags: string[];
}

async function getPosts(): Promise<BlogPost[]> {
  const res = await fetch("https://tools.byforge.dev/api/blog", {
    next: { revalidate: 60 },
  });
  if (!res.ok) return [];
  const data = await res.json();
  return data.posts || [];
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="gradient-text font-serif text-3xl font-semibold md:text-4xl">
        the forge log
      </h1>
      <p className="mt-3 text-body">
        insights on building products with AI. the wins, the failures, and the real numbers.
      </p>

      {posts.length === 0 ? (
        <p className="mt-12 text-center text-muted">No posts yet. Check back soon.</p>
      ) : (
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      )}
    </section>
  );
}
