import { useCallback, useEffect, useMemo, useState } from "react";

type QuotaRecord = {
  count: number;
  resetAt: number;
};

const STORAGE_KEY = "bw.chat.dailyQuota";
const UPDATE_EVENT = "bw-chat-quota-update";
const DEFAULT_MAX = 7;
const DEFAULT_WINDOW_MS = 24 * 60 * 60 * 1000;

const isBrowser = typeof window !== "undefined";

const createRecord = (now: number, windowMs: number): QuotaRecord => ({
  count: 0,
  resetAt: now + windowMs,
});

const persistRecord = (record: QuotaRecord) => {
  if (!isBrowser) {
    return;
  }
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  window.dispatchEvent(new Event(UPDATE_EVENT));
};

const normalizeRecord = (
  raw: unknown,
  windowMs: number,
  now: number
): { record: QuotaRecord; changed: boolean } => {
  let candidate: QuotaRecord | null = null;
  if (
    raw &&
    typeof raw === "object" &&
    "count" in raw &&
    "resetAt" in raw &&
    typeof (raw as { count: unknown }).count === "number" &&
    typeof (raw as { resetAt: unknown }).resetAt === "number" &&
    Number.isFinite((raw as { count: number }).count) &&
    Number.isFinite((raw as { resetAt: number }).resetAt)
  ) {
    candidate = {
      count: Math.max(0, Math.floor((raw as { count: number }).count)),
      resetAt: (raw as { resetAt: number }).resetAt,
    };
  }

  if (!candidate || candidate.resetAt <= now) {
    return { record: createRecord(now, windowMs), changed: true };
  }

  return { record: candidate, changed: false };
};

const readStoredValue = (): unknown => {
  if (!isBrowser) {
    return null;
  }
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return null;
    }
    return JSON.parse(stored) as unknown;
  } catch {
    return null;
  }
};

const syncRecordWithStorage = (windowMs: number, now: number): QuotaRecord => {
  const raw = readStoredValue();
  const { record, changed } = normalizeRecord(raw, windowMs, now);
  if (changed && isBrowser) {
    persistRecord(record);
  }
  return record;
};

const consumeSlot = (
  max: number,
  windowMs: number
): { record: QuotaRecord; allowed: boolean } => {
  if (!isBrowser) {
    return { record: createRecord(Date.now(), windowMs), allowed: false };
  }

  const base = syncRecordWithStorage(windowMs, Date.now());
  if (base.count >= max) {
    persistRecord(base);
    return { record: base, allowed: false };
  }

  const record = { ...base, count: base.count + 1 };
  persistRecord(record);
  return { record, allowed: true };
};

export type UseChatQuotaOptions = {
  max?: number;
  windowMs?: number;
};

export type UseChatQuotaResult = {
  count: number;
  remaining: number;
  resetAt: number;
  windowMs: number;
  max: number;
  isExceeded: boolean;
  consume: () => boolean;
  refresh: () => void;
};

export function useChatQuota(
  options?: UseChatQuotaOptions
): UseChatQuotaResult {
  const max = options?.max ?? DEFAULT_MAX;
  const windowMs = options?.windowMs ?? DEFAULT_WINDOW_MS;

  const [record, setRecord] = useState<QuotaRecord>(() =>
    createRecord(Date.now(), windowMs)
  );

  const refresh = useCallback(() => {
    if (!isBrowser) {
      return;
    }
    const latest = syncRecordWithStorage(windowMs, Date.now());
    setRecord(latest);
  }, [windowMs]);

  const consume = useCallback(() => {
    const { record: updated, allowed } = consumeSlot(max, windowMs);
    setRecord(updated);
    return allowed;
  }, [max, windowMs]);

  useEffect(() => {
    if (!isBrowser) {
      return;
    }
    const handleStorage = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY) {
        refresh();
      }
    };
    const handleCustom = () => {
      refresh();
    };
    window.addEventListener("storage", handleStorage);
    window.addEventListener(UPDATE_EVENT, handleCustom as EventListener);
    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener(UPDATE_EVENT, handleCustom as EventListener);
    };
  }, [refresh]);

  useEffect(() => {
    // Hydrate state from localStorage after first client render.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    refresh();
  }, [refresh]);

  const remaining = useMemo(
    () => Math.max(0, max - record.count),
    [max, record.count]
  );

  return {
    count: record.count,
    remaining,
    resetAt: record.resetAt,
    windowMs,
    max,
    isExceeded: record.count >= max,
    consume,
    refresh,
  };
}

export function formatQuotaCountdown(resetAt: number): string {
  const diffMs = Math.max(0, resetAt - Date.now());
  const totalMinutes = Math.ceil(diffMs / 60000);
  if (totalMinutes <= 1) {
    return "about a minute";
  }
  if (totalMinutes < 60) {
    return `${totalMinutes} minute${totalMinutes === 1 ? "" : "s"}`;
  }
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (minutes === 0) {
    return `${hours} hour${hours === 1 ? "" : "s"}`;
  }
  return `${hours}h ${minutes}m`;
}
