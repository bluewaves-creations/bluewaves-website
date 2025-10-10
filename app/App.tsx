"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { ChatKitPanel, type FactAction } from "@/components/ChatKitPanel";

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const headingGradient =
    "block w-fit bg-gradient-to-r from-[#454343] via-[#5c5a5a] to-[#807d7d] bg-clip-text text-transparent";
  const composerShellClasses =
    "flex w-[min(90vw,680px)] items-center justify-between rounded-full border border-[#e5dfda] bg-white/60 px-8 py-3 text-[15px] leading-none text-[#8f8b87] shadow-[0px_18px_36px_-20px_rgba(0,0,0,0.35)] backdrop-blur-lg"
      + " hover:border-[#d9b69c] hover:bg-white/75 transition";

  const handleWidgetAction = useCallback(async (action: FactAction) => {
    if (process.env.NODE_ENV !== "production") {
      console.info("[ChatKitPanel] widget action", action);
    }
  }, []);

  const handleResponseEnd = useCallback(() => {
    if (process.env.NODE_ENV !== "production") {
      console.debug("[ChatKitPanel] response end");
    }
  }, []);

  return (
    <main className="relative min-h-screen bg-background px-6 py-12 pb-32 text-body">
      <div className="pointer-events-none fixed bottom-10 right-6 w-[66vw] max-w-[720px] opacity-20">
        <Image
          src="/bluewaves-logo.webp"
          alt="Bluewaves logo watermark"
          width={1200}
          height={900}
          sizes="(max-width: 1200px) 66vw, 720px"
          priority
        />
      </div>
      <div className="mx-auto w-full max-w-3xl space-y-6 text-lg leading-relaxed">
        <h1
          className={`mb-16 text-center text-3xl font-semibold ${headingGradient} mx-auto`}
        >
          We craft AI products you can actually use.
        </h1>
        <p>When consultants deliver slides, we deliver products.</p>
        <p>When it usually needs months to show value, we need three weeks.</p>
        <p>When most talk about transformation, we just hand you the right tools.</p>
        <p>We&apos;re Bluewaves. Three friends who believe work should make people proud.</p>
        <h2 className={`mt-8 text-2xl font-semibold ${headingGradient}`}>
          To the forgotten ones
        </h2>
        <p>
          Small and medium businesses are drowning in AI promises while big corporations surf ahead. Only a small fraction of European SMEs use AI at all. Not because they don&apos;t want to—because nobody&apos;s building for them.
        </p>
        <p>
          Consulting companies sell strategies. Vendors push platforms. Everyone talks transformation. Meanwhile, a warehouse manager in Brussels just needs an AI that understands inventory. A boutique owner in Lisbon needs automated invoices. A startup in Stockholm needs compliance checks that don&apos;t require a PhD to configure.
        </p>
        <p>They don&apos;t need slides. They need tools that work for them.</p>
        <h2 className={`mt-8 text-2xl font-semibold ${headingGradient}`}>
          What We Build
        </h2>
        <p>
          <strong>Gizmo Phoenix</strong> — Your AI colleagues, ready to work
          <br />
          Chat with specialized custom agents that handle real tasks. Invoice processing, compliance checks, customer insights—all through conversation. No complex setup. No per-seat licenses. Just a shared token pool your whole team can use. Works where you work, with your documents, your physical spaces, even in your pocket.
        </p>
        <p>
          <strong>AI Personal Trainer</strong> — Learn by doing, not reading
          <br />
          Our personal training app lives inside ChatGPT. Real situations, practical guides, instant results. Start using AI productively today in your business, not after a three-day workshop. When you&apos;re ready for more, move seamlessly to Gizmo Phoenix.
        </p>
        <p>
          <strong>Masterclasses</strong> — For those who need to know
          <br />
          Sometimes leaders need the full picture. We run focused sessions on generative AI, compliance, and strategic implementation. Premium knowledge, delivered efficiently. These fund our mission to democratize AI for everyone else.
        </p>
        <h2 className={`mt-8 text-2xl font-semibold ${headingGradient}`}>
          How We Work
        </h2>
        <h3 className={`mt-2 text-xl font-semibold ${headingGradient}`}>
          Waves, Not Waterfalls
        </h3>
        <p>
          Every delivery is a Wave. Three to six weeks from start to launch. Week one, you see progress. Week three, you have working tools. No status meetings. No progress reports. Just steady craft and weekly reveals.
        </p>
        <p>
          We learned this from the ocean—timing matters more than force. Organizations have natural rhythms. We match them.
        </p>
        <h3 className={`text-xl font-semibold ${headingGradient}`}>Built to Stay</h3>
        <p>
          Your Gizmos aren’t proofs of concept. They are colleagues your team will name. Your tools aren&apos;t pilots. They&apos;re applications you&apos;ll use tomorrow morning. When we leave, our products stay and keep working.
        </p>
        <p>
          Teams name their Gizmos: Klaus, Sofia, Erik. They send thank-you notes. They refuse to give them up. That&apos;s how we measure success.
        </p>
        <h3 className={`text-xl font-semibold ${headingGradient}`}>
          Craft Over Complexity
        </h3>
        <p>
          We&apos;ve been building what works for 25+ years. AI platforms that millions use. Systems that transformed European enterprises. But here&apos;s what experience taught us: complexity is laziness. The best solution is always the simplest one that actually works.
        </p>
        <p>
          No eighteen-month roadmaps. No transformation theater. No change management consultants. Just tools that feel like breathing, not drowning.
        </p>
        <h2 className={`mt-8 text-2xl font-semibold ${headingGradient}`}>
          The Difference
        </h2>
        <p>
          We don&apos;t theorize about digital transformation. We hand you tomorrow&apos;s tools today. We don&apos;t prepare organizations for change. We give them products so good, change happens naturally.
        </p>
        <h2 className={`mt-8 text-2xl font-semibold ${headingGradient}`}>
          Who We Are
        </h2>
        <p>Three friends who asked one question: &quot;Are people happy?&quot;</p>
        <p>
          <strong>Bertrand</strong> built AI systems for decades. Serial entrepreneur. PhD. Lived everywhere from Budapest winters to Ericeira summers. Still codes like he surfs—reading patterns, finding flow, making it look easy.
        </p>
        <p>
          <strong>Érica</strong> reads organizations like surfers read waves. Psychology through understanding, not theory. She knows why people resist tools and how to build ones they&apos;ll love. Speaks rarely, but when she does, companies change direction.
        </p>
        <p>
          <strong>Bernardo</strong> makes our Portuguese craft speak Swedish, resonate in Milan, land perfectly in Berlin. He doesn&apos;t just translate languages—he translates dreams. The bridge between building and belonging.
        </p>
        <p>
          Together, we&apos;re craftsmen in the age of AI. We measure success in smiles, not metrics. We deliver in weeks, not quarters. We build products, not strategies.
        </p>
        <h2 className={`mt-8 text-2xl font-semibold ${headingGradient}`}>Ready?</h2>
        <p>
          The next wave starts in three weeks.
        </p>
        <p>
          You&apos;ll have working AI tools before others finish their requirement documents. Your team will adopt naturally what others force through change management. You&apos;ll be using tomorrow&apos;s approach while competitors study yesterday&apos;s trends.
        </p>
        <p>
          We keep it simple: We build. You use. Everyone benefits.
        </p>
        <p>No discovery phases. No strategic alignments. No transformation journey.</p>
        <p>Just AI that works. Tools your team names. Results you can touch.</p>
        <p>
          <span className="mr-4 font-semibold text-body">
            Start your wave →
          </span>
          <a
            href="mailto:hello@bluewaves.boutique"
            className="underline decoration-[#bf9980] decoration-2 underline-offset-4 hover:decoration-[#a67858]"
          >
            hello@bluewaves.boutique
          </a>
        </p>
        <hr className="my-8 border-slate-300/60" />
        <p>
          <em>
            We&apos;re Bluewaves. We craft AI products for the millions of businesses that consultants forgot. From our base between Lisbon&apos;s energy and Ericeira&apos;s waves, we&apos;re proving that the future doesn&apos;t need to be complicated. It just needs to work.
          </em>
        </p>
        <p>
          <em>For humans.</em>
        </p>
        <div className="mt-14 flex items-center gap-6 text-sm text-[#8f8b87]">
          <a
            href="https://www.linkedin.com/company/bluewaves/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 transition hover:text-[#6c5544]"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#e5dfda] bg-white/70 text-[#6c5544] shadow-sm">
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M4.98 3.5a2.23 2.23 0 1 1 0 4.46 2.23 2.23 0 0 1 0-4.46ZM3 9h3.96v12H3zm6.82 0H14v1.7h.05c.58-1.1 2-2.26 4.11-2.26C21.1 8.44 22 10.35 22 13.4V21H18v-6.93c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.8-2.65 3.64V21h-3.96z" />
              </svg>
            </span>
            LinkedIn
          </a>
          <a
            href="https://www.youtube.com/@bluewavesboutique"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 transition hover:text-[#6c5544]"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#e5dfda] bg-white/70 text-[#6c5544] shadow-sm">
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M21.58 7.2a2.4 2.4 0 0 0-1.69-1.7C18.03 5 12 5 12 5s-6.03 0-7.89.5A2.4 2.4 0 0 0 2.42 7.2C2 9.07 2 12 2 12s0 2.93.42 4.8c.2.8.84 1.43 1.69 1.69C5.97 19 12 19 12 19s6.03 0 7.89-.5c.85-.26 1.49-.9 1.69-1.7.42-1.86.42-4.8.42-4.8s0-2.93-.42-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
              </svg>
            </span>
            YouTube
          </a>
        </div>
      </div>
      <button
        type="button"
        onClick={() => setIsChatOpen(true)}
        className={`group fixed bottom-10 left-1/2 -translate-x-1/2 transform ${composerShellClasses} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d9b69c]`}
        aria-label="Open chat"
      >
        <span
          className="font-medium tracking-wide"
          style={{ fontFamily: "Inter, Arial, sans-serif" }}
        >
          Ask Gizmo
        </span>
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d6b69b] text-black shadow-sm transition group-hover:bg-[#c8a48a]">
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 5v14m0-14 5 5m-5-5-5 5" />
          </svg>
        </span>
      </button>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-[#312c29]/50 px-4 py-8 backdrop-blur transition-opacity ${
          isChatOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0 invisible"
        }`}
        role="dialog"
        aria-modal="true"
        aria-hidden={isChatOpen ? "false" : "true"}
      >
        <div className="relative w-full max-w-4xl rounded-[40px] bg-[#fcfafa] px-8 pb-8 pt-16 shadow-2xl">
          {isChatOpen ? null : (
            <span className="sr-only">Chat is closed</span>
          )}
          <div className={isChatOpen ? "block" : "hidden"}>
            <button
              type="button"
              onClick={() => setIsChatOpen(false)}
              className="absolute right-8 top-8 z-50 flex h-9 w-9 items-center justify-center rounded-full border border-[#e9d7c8] bg-[#f5e8dd] text-[#8c6a52] shadow-none transition hover:bg-[#ecd8c8] hover:text-[#74563f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d9b69c]"
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
            </button>
          </div>
          <ChatKitPanel
            onWidgetAction={handleWidgetAction}
            onResponseEnd={handleResponseEnd}
          />
        </div>
      </div>
    </main>
  );
}
