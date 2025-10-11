import Link from "next/link";
import type { ReactNode } from "react";

export function ChatShell({
  children,
  backHref = "/",
}: {
  children: ReactNode;
  backHref?: string;
}) {
  const fontStack =
    'ui-sans-serif, -apple-system, system-ui, "Segoe UI", "Noto Sans", Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif';

  return (
    <main className="relative min-h-screen bg-background px-4 py-12 text-body sm:px-6">
      <div className="relative mx-auto w-full max-w-4xl pb-12 pt-24">
        <Link
          href={backHref}
          className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full border border-[#e9d7c8] bg-[#f5e8dd] text-[#8c6a52] shadow-none transition hover:bg-[#ecd8c8] hover:text-[#74563f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d9b69c] sm:right-8 sm:top-8"
          aria-label="Close"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </Link>
        <div
          className="mx-auto w-full max-w-[820px] rounded-3xl border border-[#9dcce4] bg-[#bde0f2] px-4 py-6 shadow-[0px_18px_36px_-20px_rgba(0,0,0,0.25)] sm:px-10 sm:py-10"
          style={{ fontFamily: fontStack }}
        >
          {children}
        </div>
      </div>
    </main>
  );
}
