import { NextResponse } from "next/server";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://bluewaves.boutique";

const openApiSpec = {
  openapi: "3.1.0",
  info: {
    title: "Bluewaves API",
    version: "1.0.0",
    description:
      "Lightweight API for the Bluewaves website. Use the contact endpoint to send a message to the Bluewaves team.",
    contact: {
      email: "hello@bluewaves.boutique",
      url: baseUrl,
    },
  },
  servers: [
    {
      url: baseUrl,
      description: "Production",
    },
  ],
  paths: {
    "/api/contact": {
      post: {
        summary: "Send a message to the Bluewaves team",
        operationId: "sendContactMessage",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["name", "email", "message"],
                properties: {
                  name: {
                    type: "string",
                    description: "Sender's name",
                    example: "Avery Waves",
                  },
                  email: {
                    type: "string",
                    format: "email",
                    description: "Sender's email address",
                    example: "avery@example.com",
                  },
                  message: {
                    type: "string",
                    description: "Context or question for the Bluewaves team",
                    example: "We'd like to start a Momentum Wave focused on compliance automation.",
                  },
                },
              },
            },
          },
        },
        responses: {
          "200": {
            description: "Message accepted and queued for follow-up",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    ok: {
                      type: "boolean",
                    },
                  },
                },
              },
            },
          },
          "4XX": {
            description: "Validation error",
          },
          "5XX": {
            description: "Unexpected failure",
          },
        },
      },
    },
  },
};

export async function GET() {
  return NextResponse.json(openApiSpec);
}
