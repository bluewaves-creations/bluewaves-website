# Bluewaves Website

This project powers the Bluewaves marketing site and ChatKit demo. It pairs a bespoke Next.js landing page with an embedded ChatKit experience backed by OpenAI-hosted workflows. Contributors can evolve both the storytelling and the assistant UI from this single codebase.

## Key Features

- **Brand-forward landing page** crafted in `app/App.tsx` with gradient typography, watermark art, and responsive layout.
- **ChatKit modal** (`components/ChatKitPanel.tsx`) theming that mirrors the site palette and respects per-user quotas.
- **Daily quota UX** with a Resend-backed contact form so site visitors can reach the team once they hit the seven-message limit.
- **API routes** for ChatKit session creation and contact form delivery (`app/api/create-session/route.ts`, `app/api/contact/route.ts`).
- **Reusable hooks** including `useChatQuota` for client-side rate limiting.

## Getting Started

Install dependencies with your preferred package manager (pnpm shown):

```bash
pnpm install
```

Create `.env.local` from the example:

```bash
cp .env.example .env.local
```

Populate the following variables:

- `OPENAI_API_KEY` – server key scoped to the Agent Builder project
- `NEXT_PUBLIC_CHATKIT_WORKFLOW_ID` – workflow powering the demo experience
- `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `RESEND_TO_EMAIL` – credentials for the quota contact form
- *(optional)* `CHATKIT_API_BASE` for non-standard API environments

Start the dev server:

```bash
pnpm dev
```

Visit `http://localhost:3000` to explore the landing page, open the chat modal, and verify quota behaviour.

## Customization Tips

- **Marketing copy & visuals** live in `app/App.tsx` and assets under `public/`.
- **Chat prompts & branding** are defined in `lib/config.ts` and `components/ChatKitPanel.tsx`.
- **Quota behaviour** is powered by `hooks/useChatQuota.ts`; tweak limits or storage strategy there.
- **Contact form** styles live in `components/QuotaContactForm.tsx`; email delivery is handled in `app/api/contact/route.ts`.

## References

- [ChatKit JavaScript Library](http://openai.github.io/chatkit-js/)
- [Advanced Self-Hosting Examples](https://github.com/openai/openai-chatkit-advanced-samples)
