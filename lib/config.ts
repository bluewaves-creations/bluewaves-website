import type { StartScreenPrompt } from "@openai/chatkit";

export const WORKFLOW_ID = process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Can Bluewaves build AI tools for my team?",
    prompt: "How can Bluewaves craft AI tools for my business within a Wave?",
    icon: "square-code",
  },
  {
    label: "How do Waves work?",
    prompt: "Explain how Bluewaves delivers projects in Waves.",
    icon: "compass",
  },
  {
    label: "Show me Gizmo Phoenix",
    prompt: "Describe Gizmo Phoenix and what problems it solves.",
    icon: "sparkle-double",
  },
  {
    label: "Who leads Bluewaves?",
    prompt: "Tell me about the Bluewaves founding team.",
    icon: "profile-card",
  },
  {
    label: "What does it cost?",
    prompt: "Give me a sense of pricing to start a Wave with Bluewaves.",
    icon: "chart",
  },
];

export const PLACEHOLDER_INPUT = "Ask Gizmo";

export const GREETING = "Discover Bluewaves…";
