# Landing Page CTA Updates Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update hero tagline, CTA labels, add toolbox nav link, and add service tier subtext on byforge.dev

**Architecture:** Pure copy/content changes across `content.ts` (centralized copy) and `Header.tsx` (hardcoded CTA button). No new components, no layout changes.

**Tech Stack:** Next.js 16, React 19, TypeScript

---

### Task 1: Update Hero Tagline and CTA in content.ts

**Files:**
- Modify: `src/lib/content.ts:22-31`

- [ ] **Step 1: Update the hero headline**

In `src/lib/content.ts`, change line 23:

```typescript
// Before
headline: "Strategy meets AI.\nProducts get shipped.",

// After
headline: "From strategy to system.\nAI that works.",
```

- [ ] **Step 2: Update the hero primary CTA label**

In `src/lib/content.ts`, change line 29:

```typescript
// Before
ctaPrimary: { label: "Book a Call", href: "https://calendly.com/smgreiner9/30min" },

// After
ctaPrimary: { label: "Book an Intro Call", href: "https://calendly.com/smgreiner9/30min" },
```

- [ ] **Step 3: Run the dev server and verify**

Run: `cd /Users/jendrypto/codes/personal-brand && npm run dev`

Open `http://localhost:3000`. Verify:
- Hero reads "From strategy to system. AI that works."
- Hero CTA button reads "Book an Intro Call"
- Calendly link still works

- [ ] **Step 4: Commit**

```bash
cd /Users/jendrypto/codes/personal-brand
git add src/lib/content.ts
git commit -m "copy: update hero tagline and CTA to reflect strategy-to-execution identity"
```

---

### Task 2: Update Header CTA Labels and Add Toolbox Nav Link

**Files:**
- Modify: `src/lib/content.ts:14-20`
- Modify: `src/components/layout/Header.tsx:28-35,69-76`

- [ ] **Step 1: Add Toolbox nav link to content.ts**

In `src/lib/content.ts`, add the toolbox link to the `navLinks` array. Change lines 14-20:

```typescript
export const navLinks: NavLink[] = [
  { label: "what i do", href: "#what-i-do" },
  { label: "projects", href: "#projects" },
  { label: "services", href: "#services" },
  { label: "newsletter", href: "#newsletter" },
  { label: "tools", href: "https://tools.byforge.dev" },
  { label: "toolbox", href: "https://tools.byforge.dev/toolbox" },
];
```

- [ ] **Step 2: Update the desktop nav CTA button in Header.tsx**

In `src/components/layout/Header.tsx`, change the desktop nav Button (lines 28-35):

```tsx
<Button
  href={siteConfig.calendly}
  target="_blank"
  rel="noopener noreferrer"
  className="!px-4 !py-1.5 text-sm"
>
  Book an Intro Call
</Button>
```

- [ ] **Step 3: Update the mobile nav CTA button in Header.tsx**

In `src/components/layout/Header.tsx`, change the mobile nav Button (lines 69-76):

```tsx
<Button
  href={siteConfig.calendly}
  target="_blank"
  rel="noopener noreferrer"
  className="w-full text-center text-sm"
>
  Book an Intro Call
</Button>
```

- [ ] **Step 4: Verify in browser**

Check `http://localhost:3000`:
- Desktop nav shows "toolbox" link alongside existing links
- Desktop nav CTA reads "Book an Intro Call"
- Mobile hamburger menu shows "toolbox" link
- Mobile CTA reads "Book an Intro Call"
- "toolbox" link navigates to `https://tools.byforge.dev/toolbox`

- [ ] **Step 5: Commit**

```bash
cd /Users/jendrypto/codes/personal-brand
git add src/lib/content.ts src/components/layout/Header.tsx
git commit -m "copy: update nav CTA labels and add toolbox link"
```

---

### Task 3: Add Service Tier Subtext

**Files:**
- Modify: `src/components/sections/Pricing.tsx:38-47`

- [ ] **Step 1: Add subtext beneath each tier's CTA button**

In `src/components/sections/Pricing.tsx`, replace the `<div className="mt-6">` block (lines 38-47) with:

```tsx
<div className="mt-6">
  <Button
    href={contact.cta.href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-full text-center"
  >
    {tier.cta}
  </Button>
  <p className="mt-2 text-center text-xs text-muted">
    starts with a free 30-minute intro call
  </p>
</div>
```

- [ ] **Step 2: Verify in browser**

Check `http://localhost:3000/#services`:
- All three tier cards show the subtext "starts with a free 30-minute intro call" beneath their CTA buttons
- Subtext is small, muted, centered — visually subordinate to the button
- No layout breakage on mobile

- [ ] **Step 3: Run build to verify no errors**

Run: `cd /Users/jendrypto/codes/personal-brand && npm run build`

Expected: Build completes with no errors.

- [ ] **Step 4: Commit**

```bash
cd /Users/jendrypto/codes/personal-brand
git add src/components/sections/Pricing.tsx
git commit -m "copy: add intro call subtext beneath service tier CTAs"
```

---

### Task 4: Final Verification

- [ ] **Step 1: Full build check**

Run: `cd /Users/jendrypto/codes/personal-brand && npm run build`

Expected: Clean build, no errors, no warnings.

- [ ] **Step 2: Visual check of all changes**

Open `http://localhost:3000` and verify all four changes:
1. Hero tagline: "From strategy to system. AI that works."
2. All CTA buttons: "Book an Intro Call" (header desktop, header mobile, hero)
3. Nav: "toolbox" link present, points to tools.byforge.dev/toolbox
4. Service tiers: subtext "starts with a free 30-minute intro call" beneath all three CTA buttons
5. Footer: No CTA button exists (footer only has socials) — no change needed
