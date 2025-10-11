import { NextResponse } from "next/server";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://bluewaves.boutique";

const manifest = {
  schema_version: "v1",
  name_for_human: "Bluewaves Concierge",
  name_for_model: "bluewaves_concierge",
  description_for_human:
    "Explore Gizmo Phoenix AI colleagues, the AI Personal Trainer, and connect with the Bluewaves team to launch a Wave.",
  description_for_model:
    "Help users understand Gizmo Phoenix, the AI Personal Trainer, and how Waves ship production-ready tools. Offer the contact endpoint for follow-up.",
  auth: {
    type: "none",
  },
  api: {
    type: "openapi",
    url: `${baseUrl}/openapi.json`,
    is_user_authenticated: false,
  },
  logo_url: `${baseUrl}/bluewaves-logo.webp`,
  contact_email: "hello@bluewaves.boutique",
  legal_info_url: `${baseUrl}/`,
};

export async function GET() {
  return NextResponse.json(manifest);
}
