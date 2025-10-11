"use client";

import { useState } from "react";

type QuotaContactFormProps = {
  resetLabel: string;
};

export function QuotaContactForm({ resetLabel }: QuotaContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(data?.error ?? "Failed to send message");
      }

      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Something went wrong"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative z-10 mx-auto w-full max-w-xl bg-transparent text-left"
    >
      <h3 className="bg-gradient-to-r from-[#454343] via-[#5c5a5a] to-[#807d7d] bg-clip-text text-2xl font-semibold text-transparent">
        Time to talk to the team!
      </h3>
      <p className="mt-4 text-base leading-relaxed text-[#807d7d]">
        Gizmo has had a big chat day and is taking a break until tomorrow ({resetLabel} from now). If you&apos;d like the Bluewaves team to jump in, send us a quick note below and we will get back to you.
      </p>
      <div className="mt-8 space-y-6 text-[#6c5544]">
        <label className="block">
          <span className="mb-2 block text-base font-semibold text-transparent bg-gradient-to-r from-[#454343] via-[#5c5a5a] to-[#807d7d] bg-clip-text">Name</span>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full rounded-xl border border-[#e5dfda] bg-white/85 px-5 py-3 text-base text-[#6c5544] shadow-inner focus:border-[#d9b69c] focus:outline-none"
            placeholder="Your name"
            autoComplete="name"
            required
            disabled={success}
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-base font-semibold text-transparent bg-gradient-to-r from-[#454343] via-[#5c5a5a] to-[#807d7d] bg-clip-text">Email</span>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-xl border border-[#e5dfda] bg-white/85 px-5 py-3 text-base text-[#6c5544] shadow-inner focus:border-[#d9b69c] focus:outline-none"
            placeholder="you@company.com"
            autoComplete="email"
            required
            disabled={success}
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-base font-semibold text-transparent bg-gradient-to-r from-[#454343] via-[#5c5a5a] to-[#807d7d] bg-clip-text">Message</span>
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="min-h-[140px] w-full rounded-2xl border border-[#e5dfda] bg-white/85 px-5 py-3 text-base text-[#6c5544] shadow-inner focus:border-[#d9b69c] focus:outline-none"
            placeholder="Tell us what you were trying to do..."
            required
            disabled={success}
          />
        </label>
      </div>
      {error ? (
        <p className="mt-4 text-sm text-[#b15c5c]">{error}</p>
      ) : null}
      <div className="mt-8 flex items-center justify-between text-sm">
        <button
          type="submit"
          className="inline-flex items-center rounded-full bg-[#d6b69b] px-5 py-2 font-medium text-black shadow-sm transition hover:bg-[#c8a48a] disabled:cursor-not-allowed disabled:bg-[#e8ded7]"
          disabled={isSubmitting || success}
        >
          {isSubmitting ? "Sending…" : "Send"}
        </button>
        <a
          href="mailto:hello@bluewaves.boutique"
          className="text-[#8f8b87] underline decoration-[#bf9980] decoration-2 underline-offset-4 hover:decoration-[#a67858]"
        >
          Or email hello@bluewaves.boutique
        </a>
      </div>
      {success ? (
        <p className="mt-6 text-base leading-relaxed text-[#807d7d]">
          Thanks for reaching out—Érica, Bertrand or Bernardo will follow up soon.
        </p>
      ) : null}
    </form>
  );
}
