"use client";

import { useMemo } from "react";
import { QuotaContactForm } from "@/components/QuotaContactForm";
import { formatQuotaCountdown, useChatQuota } from "@/hooks/useChatQuota";

export default function QuotaPage() {
  const { resetAt } = useChatQuota();
  const resetLabel = useMemo(() => formatQuotaCountdown(resetAt), [resetAt]);

  return <QuotaContactForm resetLabel={resetLabel} />;
}
