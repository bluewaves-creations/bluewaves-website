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
      className="relative z-10 w-full bg-transparent text-left"
    >
      <h3 className="text-3xl font-semibold text-[#282828]">
        Time to talk to the team!
      </h3>
      <p className="mt-4 text-[#5d5d5d]">
        Gizmo has had a big chat day and is taking a break until tomorrow ({resetLabel} from now). If you&apos;d like the Bluewaves team to jump in, send us a quick note below and we will get back to you.
      </p>
      <div className="mt-8 space-y-6 text-[#5d5d5d]">
        <label className="block">
          <span className="mb-2 block text-base font-semibold text-[#282828]">
            Name
          </span>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full rounded-xl border border-[#b5d4e4] bg-white px-5 py-3 text-[18px] text-[#282828] shadow-inner focus:border-[#f2a0a8] focus:outline-none"
            placeholder="Your name"
            autoComplete="name"
            required
            disabled={success}
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-base font-semibold text-[#282828]">
            Email
          </span>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-xl border border-[#b5d4e4] bg-white px-5 py-3 text-[18px] text-[#282828] shadow-inner focus:border-[#f2a0a8] focus:outline-none"
            placeholder="you@company.com"
            autoComplete="email"
            required
            disabled={success}
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-base font-semibold text-[#282828]">
            Message
          </span>
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="min-h-[140px] w-full rounded-2xl border border-[#b5d4e4] bg-white px-5 py-3 text-[18px] text-[#282828] shadow-inner focus:border-[#f2a0a8] focus:outline-none"
            placeholder="Tell us what you were trying to do..."
            required
            disabled={success}
          />
        </label>
      </div>
      {error ? (
        <p className="mt-4 text-sm text-[#c94f5d]">{error}</p>
      ) : null}
      <div className="mt-8 flex flex-col gap-4 text-[18px] sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex items-center rounded-full bg-[#f2a0a8] px-5 py-2 text-[18px] font-medium text-[#282828] shadow-sm transition hover:bg-[#e68f99] disabled:cursor-not-allowed disabled:bg-[#f4b9bf]"
          disabled={isSubmitting || success}
        >
          {isSubmitting ? "Sending…" : "Send"}
        </button>
        <a
          href="mailto:hello@bluewaves.boutique"
          className="text-[#5d5d5d] underline decoration-[#f2a0a8] decoration-2 underline-offset-4 hover:decoration-[#e68f99]"
        >
          Or email hello@bluewaves.boutique
        </a>
      </div>
      {success ? (
        <p className="mt-6 text-[#5d5d5d]">
          Thanks for reaching out—Érica, Bertrand or Bernardo will follow up soon.
        </p>
      ) : null}
    </form>
  );
}
