import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY ?? "");
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ?? "Bluewaves Website <hello@bluewaves.boutique>";
const TO_EMAIL =
  process.env.RESEND_TO_EMAIL ?? "hello@bluewaves.boutique";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

export async function POST(request: Request): Promise<Response> {
  try {
    if (request.method !== "POST") {
      return NextResponse.json(
        { error: "Method Not Allowed" },
        { status: 405, headers: { "Allow": "POST" } }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("[contact] missing RESEND_API_KEY");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const payload = (await request.json().catch(() => ({}))) as ContactPayload;
    const name = typeof payload.name === "string" ? payload.name.trim() : "";
    const email = typeof payload.email === "string" ? payload.email.trim() : "";
    const message =
      typeof payload.message === "string" ? payload.message.trim() : "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (name.length > 200) {
      return NextResponse.json(
        { error: "Name is too long." },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { error: "Message is too long." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: "Bluewaves website contact",
      replyTo: email,
      text: buildPlainText({ name, email, message }),
      html: buildHtml({ name, email, message }),
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("[contact] failed to send email", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}

function validateEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function buildPlainText({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}): string {
  return `New contact from Bluewaves website
Name: ${name}
Email: ${email}

Message:
${message}
`;
}

function buildHtml({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}): string {
  return `
    <div style="font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.5; color: #494949;">
      <h2 style="margin: 0 0 16px; font-size: 18px; color: #2f2f2f;">New contact from Bluewaves website</h2>
      <p style="margin: 4px 0;"><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p style="margin: 4px 0;"><strong>Email:</strong> ${escapeHtml(email)}</p>
      <hr style="margin: 16px 0; border: none; border-top: 1px solid #e3dfdc;" />
      <p style="margin: 0 0 8px; font-weight: 600;">Message</p>
      <pre style="white-space: pre-wrap; font-family: inherit; margin: 0; background: #f8f5f3; padding: 12px; border-radius: 12px; border: 1px solid #e5dfda;">
${escapeHtml(message)}
      </pre>
    </div>
  `;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
