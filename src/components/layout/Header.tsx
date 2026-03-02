"use client";

import { useState } from "react";
import { navLinks, siteConfig } from "@/lib/content";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/50 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="gradient-text font-serif text-lg font-semibold">
          {siteConfig.name}
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-body transition-colors hover:text-text"
            >
              {link.label}
            </a>
          ))}
          <Button
            href={siteConfig.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="!px-4 !py-1.5 text-sm"
          >
            Book a Call
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-5 bg-text transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-text transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-text transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-border bg-bg px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm text-body transition-colors hover:text-text"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 pt-3 border-t border-border">
            <Button
              href={siteConfig.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center text-sm"
            >
              Book a Call
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
