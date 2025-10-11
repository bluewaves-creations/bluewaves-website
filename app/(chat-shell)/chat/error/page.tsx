import Link from "next/link";

type ErrorPageSearchParams = Record<string, string | string[] | undefined>;

export const runtime = "nodejs";

export default async function ChatErrorPage({
  searchParams,
}: {
  searchParams: Promise<ErrorPageSearchParams>;
}) {
  const params = await searchParams;
  const raw = params?.message;
  const message = Array.isArray(raw)
    ? raw[0] ??
      "We couldn’t start Gizmo right now. Please try again or drop us a note."
    : raw ??
      "We couldn’t start Gizmo right now. Please try again or drop us a note.";

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold text-[#282828]">
        Something went sideways
      </h1>
      <p className="text-[#5d5d5d]">{message}</p>
      <div className="flex flex-wrap gap-4 text-sm text-[#5d5d5d]">
        <Link
          href="/chat"
          className="inline-flex items-center rounded-full bg-cta px-5 py-2 text-[18px] font-medium text-white shadow-sm transition hover:bg-cta-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffe2e9]"
        >
          Try Gizmo again
        </Link>
        <Link
          href="/quota"
          className="inline-flex items-center rounded-full bg-white px-5 py-2 text-[18px] font-medium text-[#282828] shadow-sm transition hover:bg-[#fff5f8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffe2e9]"
        >
          Contact the team
        </Link>
        <Link
          href="/"
          className="inline-flex items-center rounded-full bg-white px-5 py-2 text-[18px] font-medium text-[#282828] shadow-sm transition hover:bg-[#fff5f8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffe2e9]"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
