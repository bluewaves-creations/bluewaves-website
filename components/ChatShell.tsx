import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type ChatShellProps = {
  children: ReactNode;
  backHref?: string;
  showCloseButton?: boolean;
};

export function ChatShell({
  children,
  backHref = "/",
  showCloseButton = true,
}: ChatShellProps) {
  const fontStack =
    'ui-sans-serif, -apple-system, system-ui, "Segoe UI", "Noto Sans", Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif';

  return (
    <main className="relative min-h-screen bg-background px-4 py-12 text-body sm:px-6">
      <div className="pointer-events-none fixed bottom-10 right-6 w-[66vw] max-w-[720px] opacity-20">
        <Image
          src="/bluewaves-logo.webp"
          alt="Bluewaves logo watermark"
          width={1200}
          height={900}
          sizes="(max-width: 1200px) 66vw, 720px"
          priority={false}
        />
      </div>
      <div className="relative mx-auto w-full max-w-[820px] pb-12 pt-24">
        <div
          className="relative w-full rounded-3xl bg-[#eadbd1] px-4 py-6 text-[18px] leading-relaxed text-[#5d5d5d] sm:px-10 sm:py-10"
          style={{ fontFamily: fontStack }}
        >
          {showCloseButton ? (
            <Link
              href={backHref}
              className="absolute right-1 top-1 flex h-9 w-9 items-center justify-center rounded-full border border-[#f0e2d8] text-[#8c6a52] transition hover:bg-[#f5e8dd] hover:text-[#74563f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d9b69c] sm:right-2 sm:top-2"
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
          ) : null}
          {children}
        </div>
      </div>
    </main>
  );
}
