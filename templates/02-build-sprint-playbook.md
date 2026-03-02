# Build Sprint Playbook
## forge studios — build sprint delivery guide

---

## Overview

A 2-4 week focused engagement. You scope it, build it, hand it off. AI agents, automations, internal tools, workflow integrations. Fixed scope, fixed price. You benefit from being fast with AI — the client pays for the outcome, not your hours.

---

## Phase 1: Scoping (days 1-3, before contract)

### Discovery Call (30-60 min)
If the client came through a strategy session, you already have context. If not, run a shortened discovery:

- what's the specific problem we're solving?
- what does "done" look like? (get them to describe the end state)
- who on their team will be involved?
- what systems/tools does this need to integrate with?
- what's the timeline pressure? (nice-to-have vs. urgent)

### Write the Scope Document
This is your contract's backbone. Be specific — scope creep kills sprints.

> ## Project Scope: [project name]
>
> **Client:** [company name]
> **Date:** [date]
> **Sprint Duration:** [2/3/4] weeks
>
> ### Problem Statement
> [2-3 sentences describing the problem in the client's words]
>
> ### Deliverables
> 1. [specific deliverable — e.g., "AI agent that triages incoming support emails and drafts responses"]
> 2. [specific deliverable — e.g., "dashboard showing triage accuracy and response times"]
> 3. [specific deliverable — e.g., "documentation for team to manage and update the agent"]
>
> ### What's Included
> - [list each thing they get]
> - deployment to their infrastructure
> - documentation and handoff session
> - 2 weeks post-launch support (bug fixes only, no new features)
>
> ### What's NOT Included
> - [be explicit — e.g., "redesigning the existing CRM interface"]
> - [e.g., "ongoing maintenance after the 2-week support window"]
> - [e.g., "training datasets — client provides these"]
>
> ### Timeline
> - Week 1: [milestone]
> - Week 2: [milestone]
> - Week 3: [milestone — if applicable]
> - Week 4: testing, handoff, documentation
>
> ### Investment
> $[amount] — 50% upfront, 50% on delivery
>
> ### Acceptance Criteria
> The project is considered complete when:
> - [ ] [specific, testable condition]
> - [ ] [specific, testable condition]
> - [ ] [specific, testable condition]

### Pricing the Sprint
**Internal formula (do not share with client):**

1. estimate your actual build time (be honest with yourself)
2. add 30% buffer for unknowns and client back-and-forth
3. multiply by your target rate ($150-200/hr equivalent)
4. round to a clean number
5. sanity check: does the outcome justify the price from the client's perspective?

**Pricing guidance:**
- simple automation (1 workflow, 1 integration): $3,000-4,000
- moderate build (agent + dashboard + docs): $5,000-6,000
- complex system (multi-agent, multiple integrations): $7,000-8,000

**Payment terms:** always 50/50. half upfront before work begins, half on delivery. non-negotiable. this protects both sides.

---

## Phase 2: Build (weeks 1-3)

### Week 1: Foundation

**Monday — kickoff**
- 30-min kickoff call with client
- confirm scope, access credentials, integration points
- set up the project (repo, environments, accounts)
- establish communication channel (slack channel or discord)

**Daily rhythm:**
- build in focused blocks
- use AI (aiden, claude code) to accelerate — this is your edge
- document as you go (don't leave it all for the end)

**End of week 1 deliverable:**
- core functionality working in a staging/dev environment
- send a quick loom video or screenshot to the client showing progress
- no formal meeting needed — async update is fine

### Week 2: Integration and Polish

**Focus:**
- connect to client's systems (APIs, databases, tools)
- handle edge cases and error states
- build any UI/dashboard components
- write basic tests for critical paths

**Mid-sprint check-in (30 min call):**
- demo what's built so far
- get feedback on anything that needs adjustment
- flag any scope questions early: "this is what we agreed to, this is where we are, anything you want to adjust?"

**Scope creep defense:**
When the client says "could we also add..."
- if it's small (< 2 hours): do it, don't mention it. builds goodwill.
- if it's medium (2-8 hours): "absolutely, i'd add that as a phase 2 item after we ship the core. want me to note it down?"
- if it's large (> 8 hours): "that's a great idea. it's outside our current scope, but i can put together a separate sprint proposal for it."

Never say no. Always say "yes, and here's how we'd approach that."

### Week 3-4: Testing, Documentation, Handoff

**Testing checklist:**
- [ ] happy path works end-to-end
- [ ] error handling works (bad inputs, API failures, edge cases)
- [ ] performance is acceptable under expected load
- [ ] security basics (no exposed credentials, input sanitization)

**Documentation to deliver:**
1. **Setup guide** — how to deploy/run the system
2. **User guide** — how the team uses it day-to-day
3. **Architecture overview** — what's built, how pieces connect, where things live
4. **Troubleshooting** — common issues and how to resolve them

**Handoff call (45-60 min):**
- walk through the final product live
- screen share the documentation
- answer questions
- confirm acceptance criteria are met (get verbal or written confirmation)
- explain what the 2-week support window covers

---

## Phase 3: Post-Launch Support (2 weeks)

### What's Covered
- bug fixes (something broke that was working during handoff)
- configuration issues (environment variables, API keys, permissions)
- clarification questions about the documentation

### What's NOT Covered
- new features or enhancements
- changes to scope that weren't in the original agreement
- issues caused by changes the client made to the system

### Response Time
- acknowledge within 4 hours during business hours
- fix within 24-48 hours depending on severity
- communicate clearly if something takes longer

---

## After the Sprint

### Follow-Up Sequence
- **Day of handoff:** send invoice for remaining 50%
- **Week 1 post-launch:** check in — "how's everything running? any questions?"
- **Week 2 post-launch:** "support window closes this week. everything solid?"
- **Week 4 post-launch:** plant the seed — "now that [project] is running, there might be other areas where AI could help. happy to chat if you're thinking about next steps."

### Converting to Retainer
After a successful sprint, the retainer pitch is natural:

> "you've seen what we can build in a few weeks. imagine having that capacity on tap every month — continuous improvements, new automations, someone owning the AI side of your business. that's what the fractional AI lead engagement looks like. want me to put together what that would look like for you?"

**Target:** 20-30% of sprint clients convert to retainers. If you're below 15%, the sprint deliverable isn't impressive enough. If above 40%, you're leaving money on the table by not pitching sooner.

---

## Internal Checklist

### Before Starting
- [ ] scope document signed
- [ ] 50% payment received
- [ ] access credentials received (APIs, repos, environments)
- [ ] communication channel set up
- [ ] kickoff call scheduled

### Before Handoff
- [ ] all acceptance criteria met
- [ ] documentation written
- [ ] code pushed to client's repo or deployed to their environment
- [ ] handoff call completed
- [ ] client confirms delivery
- [ ] final invoice sent

### After Sprint
- [ ] follow-up email sent (week 1)
- [ ] support window communicated (week 2)
- [ ] retainer conversation opened (week 4)
- [ ] project added to portfolio / case study drafted
