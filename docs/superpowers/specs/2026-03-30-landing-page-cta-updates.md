# Landing Page CTA Updates

**Date:** 2026-03-30
**Project:** byforge.dev (personal-brand repo)
**Scope:** Copy updates only — no layout, design, or structural changes

## Summary

Update the hero tagline and CTA labels across the site to better reflect Forge's strategy-to-execution identity, and clarify the booking flow so prospects understand the first call is a free intro.

## Changes

### 1. Hero Tagline

- **File:** `src/lib/content.ts` (hero section)
- **Current:** "Strategy meets AI. Products get shipped."
- **New:** "From strategy to system. AI that works."

### 2. CTA Button Labels

All "Book a Call" buttons become "Book an Intro Call". Same Calendly link (https://calendly.com/smgreiner9/30min), no URL changes.

Affected components:
- `src/components/layout/Header.tsx` — NavBar CTA
- `src/components/sections/Hero.tsx` — Hero primary CTA
- `src/components/layout/Footer.tsx` — Footer CTA
- `src/lib/content.ts` — CTA text is centralized here

### 3. Navigation — Toolbox Link

Add "Toolbox" to the site header linking to `https://tools.byforge.dev/toolbox`.

- **File:** `src/components/layout/Header.tsx`
- Positioned alongside existing nav links

### 4. Service Tier Subtext

Add a qualifier line beneath each service tier's CTA button: *"starts with a free 30-minute intro call"*

- **File:** `src/components/sections/Pricing.tsx`
- Applies to all three tiers: Strategy Session, Build Sprint, Fractional AI Lead
- Small muted text beneath the existing CTA button — no new components needed

## Out of Scope

- Service descriptions (no changes)
- "What I Do" section (no changes)
- Body copy beneath the hero (no changes)
- Calendly link or booking flow (no changes)
- Design, layout, or styling (no changes)
