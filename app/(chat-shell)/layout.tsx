import type { ReactNode } from "react";
import { ChatShell } from "@/components/ChatShell";

export default function ChatShellLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <ChatShell>{children}</ChatShell>;
}
