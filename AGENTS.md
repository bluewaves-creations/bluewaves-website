# Repository Guidelines

## Project Structure & Module Organization
- `app/App.tsx` renders the marketing page and CTA; `app/chat/page.tsx` hosts the ChatKit experience; `app/quota/page.tsx` and `app/chat/error/page.tsx` handle quota and failure fallbacks.
- API routes: `app/api/create-session/route.ts` (ChatKit sessions) and `app/api/contact/route.ts` (Resend contact form).
- Discovery helpers: `app/.well-known/ai-plugin.json/route.ts` (plugin manifest), `app/openapi.json/route.ts` (OpenAPI spec), `app/sitemap.ts`, and `app/robots.ts`.
- Reusable UI sits in `components/` (`ChatKitPanel`, `QuotaContactForm`, `ErrorOverlay`), hooks in `hooks/` (notably `useChatQuota`), and shared constants in `lib/`.
- Global Tailwind setup lives in `app/globals.css`; background assets and icons go in `public/` (e.g., `bluewaves-logo.webp`).

## Build, Test, and Development Commands
- Prefer pnpm: `pnpm dev`, `pnpm build`, `pnpm start`, `pnpm lint`. The repo supports npm as well, but pnpm is the default.
- Launching `pnpm dev` spins up ChatKit, watermark artwork, and quota form; use it to validate both copy and assistant flow.
- Run `pnpm lint` (with `--fix` when appropriate) before submitting changes.

## Coding Style & Naming Conventions
- All UI modules are client components (`"use client"`); keep new components in PascalCase and colocate styles with markup.
- Maintain gradient headings by using the shared `headingGradient` class; match spacing conventions already present in `App.tsx`.
- API routes (`app/api/*`) run on the edge (sessions) or Node.js (Resend). Prefer async/await and structured logging.
- Let Tailwind guide layout; avoid inline styles unless necessary for Next Image sizing.

## Testing Guidelines
- No automated suite yet; provide manual QA notes (desktop + mobile screenshots, quota behaviour, Resend email confirmation) in PRs.
- When adding tests, prefer React Testing Library + Vitest colocated near components. Document setup in the PR.
- Always verify: landing page renders, ChatKit opens, quota overlay triggers after 7 questions, contact form sends successfully (or mock).

## Commit & Pull Request Guidelines
- Imperative, Conventional-Commit style summaries (`feat:`, `fix:`, `refactor:`) are preferred.
- Include before/after screenshots or screen recordings, plus note which environment variables/keys were required for QA.
- Call out any Resend or ChatKit sandbox limitations discovered during testing.
- Rebase frequently; avoid merge commits. Ensure `pnpm lint` (and any added tests) pass before requesting review.

## Security & Configuration Tips
- Required secrets: `NEXT_PUBLIC_SITE_URL`, `OPENAI_API_KEY`, `NEXT_PUBLIC_CHATKIT_WORKFLOW_ID`, `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `RESEND_TO_EMAIL`. Keep them in `.env.local` (never commit).
- `useChatQuota` relies on localStorage—treat it as a UX guard. For hardened deployments, add server-side throttling.
- `app/api/create-session` pins the workflow ID; do not reintroduce client-provided overrides.
- Resend route sends plain HTML + text; sanitize new fields if added and monitor API usage.
