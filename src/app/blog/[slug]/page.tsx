import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BlogContent } from "@/components/blog/BlogContent";
import { BlogNewsletter } from "@/components/blog/BlogNewsletter";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  category: string;
  bannerUrl: string | null;
  author: string;
  createdAt: string;
  updatedAt?: string;
  tags: string[];
}

async function getPost(slug: string): Promise<BlogPost | null> {
  const res = await fetch(`https://tools.byforge.dev/api/blog/${slug}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data.post || null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Not Found" };

  return {
    title: `${post.title} - By Forge`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      ...(post.bannerUrl && { images: [{ url: post.bannerUrl }] }),
    },
  };
}

import { categoryLabels } from "@/lib/blog";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const date = new Date(post.createdAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const updatedDate =
    post.updatedAt && post.updatedAt !== post.createdAt
      ? new Date(post.updatedAt).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })
      : null;

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/blog"
        className="text-sm text-muted transition-colors hover:text-text"
      >
        &larr; Back to blog
      </Link>

      <div className="mt-6 flex items-center gap-2 text-xs text-muted">
        <span className="rounded-full bg-bg-alt px-2 py-0.5 font-mono">
          {categoryLabels[post.category] || post.category}
        </span>
        <span>{date}</span>
        {updatedDate && <><span>&middot;</span><span>Updated {updatedDate}</span></>}
        <span>&middot;</span>
        <span>By {post.author}</span>
      </div>

      <h1 className="mt-4 font-serif text-3xl font-bold text-text md:text-4xl">
        {post.title}
      </h1>

      {post.bannerUrl && (
        <div className="mt-8 overflow-hidden rounded-xl">
          <img
            src={post.bannerUrl}
            alt=""
            className="w-full object-cover"
          />
        </div>
      )}

      <div className="mt-8">
        <BlogContent html={post.body} />
      </div>

      {post.tags.length > 0 && (
        <div className="mt-10 flex flex-wrap gap-2 border-t border-border pt-6">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-bg-alt px-3 py-1 text-xs text-muted">
              {tag}
            </span>
          ))}
        </div>
      )}

      <BlogNewsletter />
    </article>
  );
}
