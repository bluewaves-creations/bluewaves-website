"use client";

import Link from "next/link";
import { useCallback } from "react";
import { ChatKitPanel } from "@/components/ChatKitPanel";

export default function ChatPage() {
  const handleWidgetAction = useCallback(async () => {}, []);
  const handleResponseEnd = useCallback(() => {}, []);

  return (
    <main className="relative min-h-screen bg-background px-6 py-12 text-body">
      <div className="mx-auto w-full max-w-4xl px-4 pb-12 pt-16">
        <Link
          href="/"
          className="absolute right-8 top-8 flex h-9 w-9 items-center justify-center rounded-full border border-[#e9d7c8] bg-[#f5e8dd] text-[#8c6a52] shadow-none transition hover:bg-[#ecd8c8] hover:text-[#74563f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d9b69c]"
          aria-label="Close chat"
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
        <ChatKitPanel
          onWidgetAction={handleWidgetAction}
          onResponseEnd={handleResponseEnd}
        />
      </div>
    </main>
  );
}
