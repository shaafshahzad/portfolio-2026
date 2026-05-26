# Portfolio 2026

Private, early-stage rebuild of Shaaf Shahzad's portfolio.

This is intentionally barebones for now: one App Router page, Tailwind styling,
TypeScript, ESLint, and Bun for package management.

## Getting Started

Install dependencies and run the development server:

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

Start with `app/page.tsx` when shaping the first version.

## Existing Portfolio Context

The previous portfolio at `/Users/shaaf/repos/portfolio` is a Next 14 app with:

- App Router pages for home, projects, and resume.
- Tailwind styling with a restrained dark visual direction.
- Project data split across `lib/completedProjects.ts` and `lib/ongoingProjects.ts`.
- A contact-first homepage with copy-to-clipboard email behavior.
- PostHog analytics routed through a same-origin `/relay` proxy.

Keep this repo minimal until the next direction is clear. Useful later carryovers:
project inventory, contact flow, resume route, and the `/relay` analytics shape.

## Scripts

```bash
bun dev
bun run lint
bun run build
```
