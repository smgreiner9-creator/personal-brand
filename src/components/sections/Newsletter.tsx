"use client";

import { useState } from "react";
import { newsletter } from "@/lib/content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://tools.byforge.dev/api/gate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "newsletter" }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <SectionWrapper id="newsletter">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="gradient-text font-serif text-3xl font-semibold md:text-4xl">
          {newsletter.headline}
        </h2>
        <p className="mt-4 text-body">{newsletter.description}</p>

        {status === "success" ? (
          <p className="mt-8 text-sm font-medium text-accent">
            You&apos;re on the list. Watch your inbox.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder={newsletter.placeholder}
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover disabled:opacity-50"
            >
              {status === "loading" ? "..." : newsletter.cta}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="mt-3 text-xs text-red-500">Something went wrong. Please try again.</p>
        )}
        <p className="mt-3 text-xs text-muted">{newsletter.note}</p>
      </div>
    </SectionWrapper>
  );
}
