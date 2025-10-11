"use client";

import { useCallback } from "react";
import { ChatKitPanel } from "@/components/ChatKitPanel";

export default function ChatPage() {
  const handleWidgetAction = useCallback(async () => {}, []);
  const handleResponseEnd = useCallback(() => {}, []);

  return (
    <div className="mx-auto w-full max-w-[780px]">
      <ChatKitPanel
        onWidgetAction={handleWidgetAction}
        onResponseEnd={handleResponseEnd}
      />
    </div>
  );
}
