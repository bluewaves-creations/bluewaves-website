import { StartScreenPrompt } from "@openai/chatkit";

export const WORKFLOW_ID = process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Can Bluewaves build AI tools for my team?",
    prompt: "How can Bluewaves craft AI tools for my business within a Wave?",
    icon: "circle-question",
  },
  {
    label: "How do Waves work?",
    prompt: "Explain how Bluewaves delivers projects in Waves.",
    icon: "circle-question",
  },
  {
    label: "Show me Gizmo Phoenix",
    prompt: "Describe Gizmo Phoenix and what problems it solves.",
    icon: "circle-question",
  },
  {
    label: "Who leads Bluewaves?",
    prompt: "Tell me about the Bluewaves founding team.",
    icon: "circle-question",
  },
  {
    label: "What does it cost?",
    prompt: "Give me a sense of pricing to start a Wave with Bluewaves.",
    icon: "circle-question",
  },
];

export const PLACEHOLDER_INPUT = "Ask Gizmo";

export const GREETING = "Discover Bluewaves…";
