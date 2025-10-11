"use client";

import type { ReactNode } from "react";

type ErrorOverlayProps = {
  error: string | null;
  fallbackMessage?: ReactNode;
  onRetry?: (() => void) | null;
  retryLabel?: string;
};

export function ErrorOverlay({
  error,
  fallbackMessage,
  onRetry,
  retryLabel,
}: ErrorOverlayProps) {
  if (!error && !fallbackMessage) {
    return null;
  }

  const content = error ?? fallbackMessage;

  if (!content) {
    return null;
  }

  return (
    <div className="pointer-events-none absolute inset-0 z-10 flex h-full w-full flex-col justify-center rounded-[inherit] bg-white/85 p-6 text-center backdrop-blur">
      <div className="pointer-events-auto mx-auto w-full max-w-md rounded-xl bg-white px-6 py-4 text-lg font-medium text-slate-700">
        <div>{content}</div>
        {error && onRetry ? (
          <button
            type="button"
            className="mt-4 inline-flex items-center justify-center rounded-lg bg-cta px-4 py-2 text-sm font-semibold text-white shadow-none transition hover:bg-cta-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffe2e9]"
            onClick={onRetry}
          >
            {retryLabel ?? "Restart chat"}
          </button>
        ) : null}
      </div>
    </div>
  );
}
