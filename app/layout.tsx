import Script from "next/script";
import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { StructuredData } from "@/app/StructuredData";
import "./globals.css";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://bluewaves.boutique";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Bluewaves – AI products you can actually use",
  description:
    "Bluewaves delivers production-ready AI tools in weeks, combining ChatKit workflows with a focused Wave delivery model.",
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: "Bluewaves – AI products you can actually use",
    description:
      "Waves, not slides. Discover Gizmo Phoenix, AI Personal Trainer, and how Bluewaves ships AI tools in weeks.",
    url: baseUrl,
    siteName: "Bluewaves",
    type: "website",
    images: [
      {
        url: `${baseUrl}/bluewaves-logo.webp`,
        width: 1200,
        height: 900,
        alt: "Bluewaves logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bluewaves – AI products you can actually use",
    description:
      "Waves, not slides. Discover Gizmo Phoenix, AI Personal Trainer, and how Bluewaves ships AI tools in weeks.",
    images: [`${baseUrl}/bluewaves-logo.webp`],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.png" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png" }],
  },
};

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://cdn.platform.openai.com/deployments/chatkit/chatkit.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className={`antialiased ${merriweather.className}`}>
        {children}
        <StructuredData />
        <Analytics />
      </body>
    </html>
  );
}
