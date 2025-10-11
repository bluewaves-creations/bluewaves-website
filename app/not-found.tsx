import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center px-6 py-16 text-body sm:px-8">
      <div className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8f8b87]">
          404
        </p>
        <h1 className="text-4xl font-semibold text-[#282828]">
          We couldn’t find that page.
        </h1>
        <p className="text-lg text-[#5d5d5d]">
          The link might be out of date, or the page could have moved. Try heading back to our home
          base, or jump straight into a conversation with Gizmo.
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-[#5d5d5d]">
          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-cta px-5 py-2 text-[18px] font-medium text-white shadow-sm transition hover:bg-cta-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffe2e9]"
          >
            Visit the homepage
          </Link>
          <Link
            href="/chat"
            className="inline-flex items-center rounded-full bg-white px-5 py-2 text-[18px] font-medium text-[#282828] shadow-sm transition hover:bg-[#fff5f8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffe2e9]"
          >
            Open chat with Gizmo
          </Link>
          <Link
            href="/quota"
            className="inline-flex items-center rounded-full bg-white px-5 py-2 text-[18px] font-medium text-[#282828] shadow-sm transition hover:bg-[#fff5f8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffe2e9]"
          >
            Contact the team
          </Link>
        </div>
      </div>
    </main>
  );
}
