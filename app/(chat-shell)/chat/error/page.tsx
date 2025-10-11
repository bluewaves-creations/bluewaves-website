import Link from "next/link";

export default async function ChatErrorPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
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
          className="inline-flex items-center rounded-full border border-[#f2a0a8] bg-[#f2a0a8] px-5 py-2 font-medium text-[#282828] shadow-sm transition hover:bg-[#e68f99]"
        >
          Try Gizmo again
        </Link>
        <Link
          href="/quota"
          className="inline-flex items-center rounded-full border border-[#f2a0a8] bg-white px-5 py-2 font-medium text-[#282828] shadow-sm transition hover:border-[#e68f99]"
        >
          Contact the team
        </Link>
        <Link
          href="/"
          className="inline-flex items-center rounded-full border border-[#f2a0a8] bg-white px-5 py-2 font-medium text-[#282828] shadow-sm transition hover:border-[#e68f99]"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
