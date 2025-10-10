import Script from "next/script";
import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgentKit demo",
  description: "Demo of ChatKit with hosted workflow",
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
        <Analytics />
      </body>
    </html>
  );
}
