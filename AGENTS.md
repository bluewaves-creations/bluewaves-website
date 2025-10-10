# Repository Guidelines

## Project Structure & Module Organization
- `app/` contains the App Router entrypoints; `page.tsx` mounts `App.tsx`, while `api/create-session/route.ts` proxies ChatKit session creation.
- Shared UI lives in `components/`, React hooks in `hooks/`, and configuration constants in `lib/`. Keep new modules close to their consumers.
- Global styles and Tailwind utilities are defined in `app/globals.css`; static assets belong in `public/`. Create environment files from `.env.example` and never commit secrets.

## Build, Test, and Development Commands
- `npm run dev` (or `pnpm dev`) launches the Next.js dev server with the ChatKit widget for manual verification.
- `npm run build` compiles production assets; follow with `npm start` to smoke-test the optimized build.
- `npm run lint` runs ESLint with the Next.js config. Use `npm run lint -- --fix` before opening a PR.
- Run commands from the repo root so Next.js resolves aliases like `@/components`.

## Coding Style & Naming Conventions
- Codebase uses TypeScript, React Server/Client Components, and Tailwind CSS. Maintain 2-space indentation and prefer named exports for shared utilities.
- Component files are `PascalCase.tsx`, hooks are `useName.ts`, and config/util modules use `camelCase.ts`.
- Keep client-only logic behind `"use client"` directives and prefer `async`/`await` over promise chains in API routes.
- Allow ESLint to guide formatting; add targeted comments (`// eslint-disable-next-line`) only when justified with context in the review.

## Testing Guidelines
- No automated test runner is wired up yet. Provide manual QA notes (scenarios, environment values, screenshots) with each change.
- When adding tests, co-locate component specs under `components/__tests__/` and use React Testing Library with Vitest or Jest (document any tooling you introduce).
- Validate that `npm run dev` and the ChatKit session flow still succeed before submitting code.

## Commit & Pull Request Guidelines
- Follow an imperative tone and, when practical, Conventional Commits (`feat: add`, `fix: handle`). Keep commits scoped and logically grouped.
- Every PR needs a short summary, screenshots for UI updates, environment variable notes, and manual test evidence.
- Reference issue numbers in the PR body (e.g., `Closes #123`) and request review before merging.
- Rebase onto `main` to resolve conflicts; avoid merge commits in feature branches.

## Security & Configuration Tips
- Required secrets: `OPENAI_API_KEY` and `NEXT_PUBLIC_CHATKIT_WORKFLOW_ID`; optional `CHATKIT_API_BASE`. Store them in `.env.local` only.
- The session endpoint reads and sets cookies; keep logging minimal and remove debug logs before production.
- Rotate API keys immediately if they appear in git history or logs.
