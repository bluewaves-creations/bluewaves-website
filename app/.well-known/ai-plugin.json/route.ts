import { NextResponse } from "next/server";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://bluewaves.boutique";

const manifest = {
  schema_version: "v1",
  name_for_human: "Bluewaves Concierge",
  name_for_model: "bluewaves_concierge",
  description_for_human:
    "Discover Bluewaves offerings, contact the team, and learn how Waves deliver production-ready AI tools.",
  description_for_model:
    "Use the contact endpoint to share context with the Bluewaves team or explain Bluewaves services to users.",
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
