function sanitizeHtml(html: string): string {
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/\bon\w+\s*=\s*["'][^"']*["']/gi, "")
    .replace(/javascript\s*:/gi, "");
}

export function BlogContent({ html }: { html: string }) {
  return (
    <div
      className="prose prose-neutral max-w-none
        prose-headings:font-serif prose-headings:text-text
        prose-p:text-body prose-p:leading-relaxed
        prose-a:text-accent prose-a:no-underline hover:prose-a:underline
        prose-blockquote:border-accent prose-blockquote:text-muted
        prose-strong:text-text
        prose-img:rounded-xl
        prose-li:text-body"
      dangerouslySetInnerHTML={{ __html: sanitizeHtml(html) }}
    />
  );
}
