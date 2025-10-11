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
    <div className="mx-auto w-full max-w-[780px] space-y-6 px-8 text-lg leading-relaxed">
      <h1 className="bg-gradient-to-r from-[#454343] via-[#5c5a5a] to-[#807d7d] bg-clip-text text-3xl font-semibold text-transparent">
        Something went sideways
      </h1>
      <p className="text-[#807d7d]">{message}</p>
      <div className="flex flex-wrap gap-4 text-sm">
        <Link
          href="/chat"
          className="inline-flex items-center rounded-full border border-[#d6b69b] bg-[#d6b69b] px-5 py-2 font-medium text-black shadow-sm transition hover:bg-[#c8a48a]"
        >
          Try Gizmo again
        </Link>
        <Link
          href="/quota"
          className="inline-flex items-center rounded-full border border-[#e5dfda] bg-white px-5 py-2 font-medium text-[#6c5544] shadow-sm transition hover:border-[#d9b69c]"
        >
          Contact the team
        </Link>
        <Link
          href="/"
          className="inline-flex items-center rounded-full border border-[#e5dfda] bg-white px-5 py-2 font-medium text-[#6c5544] shadow-sm transition hover:border-[#d9b69c]"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
