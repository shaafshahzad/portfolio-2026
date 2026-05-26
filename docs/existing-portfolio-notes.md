# Existing Portfolio Notes

Source inspected: `/Users/shaaf/repos/portfolio`.

## Current Stack

- Next.js 14 App Router
- React 18
- Tailwind CSS
- Framer Motion
- Radix icons
- React PDF tooling
- PostHog analytics

## Content Shape

- Home page is contact-first and centered around `shaaf.m.shahzad@gmail.com`.
- Navigation links to `Projects` and `Resume`.
- Projects are currently stored as simple arrays:
  - `lib/completedProjects.ts`
  - `lib/ongoingProjects.ts`
- Completed projects listed there:
  - DeepEnd
  - Intellex
  - Geography Gauntlet
  - Project 4.0
  - Spotify Music Display
  - Canadian Health Statistics Analysis
  - Streeks
- Ongoing project listed there:
  - Project Inosculation

## Useful Carryovers

- Keep projects as structured data, but consider moving toward richer metadata
  before building the final UI.
- Preserve an obvious contact path.
- Recreate the resume route once updated resume content is ready.
- Reuse the validated PostHog same-origin proxy shape when analytics are added:
  `/relay` rewrites in `next.config`, with the client `api_host` set to
  `/relay`.

## Deliberately Not Copied Yet

- Full visual system
- Animation layer
- Project gallery
- Resume PDF route
- PostHog dependency and proxy configuration
