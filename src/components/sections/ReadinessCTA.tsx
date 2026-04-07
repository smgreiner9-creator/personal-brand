"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const questions = [
  {
    text: "What's your current AI usage?",
    options: [
      { label: "None", score: 0 },
      { label: "Experimenting (ChatGPT, etc.)", score: 1 },
      { label: "Some tools integrated", score: 2 },
      { label: "AI embedded in workflows", score: 3 },
    ],
  },
  {
    text: "What's your team's biggest time sink?",
    options: [
      { label: "Customer support", score: 3 },
      { label: "Data entry & reporting", score: 3 },
      { label: "Content creation", score: 2 },
      { label: "Sales & outreach", score: 2 },
      { label: "Internal communication", score: 1 },
    ],
  },
  {
    text: "How would you describe your data readiness?",
    options: [
      { label: "No structured data", score: 0 },
      { label: "Data exists but siloed", score: 1 },
      { label: "Centralized, no pipeline", score: 2 },
      { label: "Clean data with APIs", score: 3 },
    ],
  },
  {
    text: "What's your timeline?",
    options: [
      { label: "Exploring (no urgency)", score: 1 },
      { label: "Want to start in 1-3 months", score: 2 },
      { label: "Need something now", score: 3 },
      { label: "Already behind competitors", score: 3 },
    ],
  },
];

const maxScore = 12;

function getGrade(pct: number): { letter: string; color: string; message: string } {
  if (pct >= 80) return { letter: "A", color: "text-green-600", message: "You're ahead of the curve. Time to scale what's working." };
  if (pct >= 60) return { letter: "B", color: "text-teal-600", message: "Strong foundation. A focused sprint could unlock serious ROI." };
  if (pct >= 40) return { letter: "C", color: "text-yellow-600", message: "You've got potential, but gaps are holding you back." };
  return { letter: "D", color: "text-orange-600", message: "There's a big opportunity here. You just need the right roadmap." };
}

export function ReadinessCTA() {
  const [step, setStep] = useState<"intro" | number | "result" | "captured">("intro");
  const [answers, setAnswers] = useState<number[]>([]);
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function handleSelect(score: number) {
    const next = [...answers, score];
    setAnswers(next);

    if (typeof step === "number" && step < questions.length - 1) {
      setTimeout(() => setStep(step + 1), 250);
    } else {
      setTimeout(() => setStep("result"), 250);
    }
  }

  const total = answers.reduce((a, b) => a + b, 0);
  const pct = Math.round((total / maxScore) * 100);
  const grade = getGrade(pct);

  // Intro state
  if (step === "intro") {
    return (
      <SectionWrapper id="get-started">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="gradient-text font-serif text-3xl font-semibold md:text-4xl">
            Are You Ready for AI?
          </h2>
          <p className="mt-4 text-body">
            Most businesses know AI can help. Few know where to start. Take our 4-question scorecard
            and get a clear picture of where you stand.
          </p>
          <button
            onClick={() => setStep(0)}
            className="mt-8 inline-block rounded-lg bg-accent px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Take the Scorecard
          </button>
          <p className="mt-3 text-xs text-muted">Takes 30 seconds. No signup required.</p>
        </div>
      </SectionWrapper>
    );
  }

  // Question state
  if (typeof step === "number") {
    const q = questions[step];
    return (
      <SectionWrapper id="get-started">
        <div className="mx-auto max-w-xl">
          {/* Progress */}
          <div className="mb-6 flex items-center gap-3">
            <div className="h-1.5 flex-1 rounded-full bg-bg-alt">
              <div
                className="h-1.5 rounded-full bg-accent transition-all duration-300"
                style={{ width: `${((step + 1) / questions.length) * 100}%` }}
              />
            </div>
            <span className="text-xs text-muted">{step + 1}/{questions.length}</span>
          </div>

          <h3 className="font-serif text-xl font-semibold text-text sm:text-2xl">{q.text}</h3>
          <div className="mt-6 grid gap-3">
            {q.options.map((opt) => (
              <button
                key={opt.label}
                onClick={() => handleSelect(opt.score)}
                className="rounded-lg border border-border bg-surface px-4 py-3 text-left text-sm font-medium text-text transition-all hover:border-accent hover:bg-accent/5"
              >
                {opt.label}
              </button>
            ))}
          </div>

          {step > 0 && (
            <button
              onClick={() => {
                setAnswers(answers.slice(0, -1));
                setStep(step - 1);
              }}
              className="mt-4 text-sm text-muted hover:text-text"
            >
              Back
            </button>
          )}
        </div>
      </SectionWrapper>
    );
  }

  // Result state (before email capture)
  if (step === "result") {
    return (
      <SectionWrapper id="get-started">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm font-medium text-muted">Your AI Readiness Score</p>
          <div className="mt-3 flex items-center justify-center gap-4">
            <span className={`font-serif text-6xl font-bold ${grade.color}`}>{grade.letter}</span>
            <span className="text-3xl font-bold text-text">{pct}/100</span>
          </div>
          <p className="mt-4 text-body">{grade.message}</p>
          <p className="mt-2 text-xs text-muted">
            Scored across AI adoption, automation opportunity, data readiness, and urgency.
          </p>

          <div className="mx-auto mt-8 max-w-md rounded-xl border border-border bg-surface p-6">
            <p className="text-sm font-medium text-text">
              Want the full breakdown with personalized recommendations?
            </p>
            <form
              className="mt-4 flex flex-col gap-3 sm:flex-row"
              onSubmit={async (e) => {
                e.preventDefault();
                setSubmitting(true);
                await fetch("https://tools.byforge.dev/api/gate", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ email, source: "readiness-mini" }),
                }).catch(() => {});
                setSubmitting(false);
                setStep("captured");
              }}
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-lg border border-border bg-bg px-4 py-2.5 text-sm text-text placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
              <button
                type="submit"
                disabled={submitting}
                className="whitespace-nowrap rounded-lg bg-accent px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover disabled:opacity-50"
              >
                {submitting ? "..." : "Get My Report"}
              </button>
            </form>
          </div>

          <p className="mt-4 text-xs text-muted">
            Want a deeper analysis? Take the <a href="https://tools.byforge.dev/readiness" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">full 8-question assessment</a> in our toolbox.
          </p>
        </div>
      </SectionWrapper>
    );
  }

  // Captured state
  return (
    <SectionWrapper id="get-started">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-sm font-medium text-muted">Your AI Readiness Score</p>
        <div className="mt-3 flex items-center justify-center gap-4">
          <span className={`font-serif text-6xl font-bold ${grade.color}`}>{grade.letter}</span>
          <span className="text-3xl font-bold text-text">{pct}/100</span>
        </div>
        <p className="mt-4 text-body">{grade.message}</p>
        <p className="mt-2 text-xs text-muted">
          scored across AI adoption, automation opportunity, data readiness, and urgency.
        </p>

        <div className="mx-auto mt-8 max-w-md space-y-3">
          <p className="text-sm font-medium text-accent">Check your inbox for the full breakdown.</p>
          <a
            href="https://calendly.com/smgreiner9/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-accent px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Book an Intro Call
          </a>
          <p className="text-xs text-muted">
            Want a deeper analysis? Take the <a href="https://tools.byforge.dev/readiness" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">full 8-question assessment</a> in our toolbox.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
