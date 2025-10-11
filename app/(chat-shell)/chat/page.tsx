"use client";

import { useCallback } from "react";
import { ChatKitPanel } from "@/components/ChatKitPanel";

export default function ChatPage() {
  const handleWidgetAction = useCallback(async () => {}, []);
  const handleResponseEnd = useCallback(() => {}, []);

  return (
    <ChatKitPanel
      onWidgetAction={handleWidgetAction}
      onResponseEnd={handleResponseEnd}
    />
  );
}
