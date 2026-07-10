import type { Metadata } from "next";
import { Fraunces, Caveat, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yashaswini Kulshrestha — Backend + Agentic AI Engineer",
  description:
    "Backend engineer building agentic AI systems where the model proposes and deterministic rules decide. Spring Boot, LangGraph, LLM systems.",
  metadataBase: new URL("https://yashaswini.dev"),
  openGraph: {
    title: "Yashaswini Kulshrestha — Backend + Agentic AI Engineer",
    description:
      "Backend engineer building agentic AI systems where the model proposes and deterministic rules decide.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${caveat.variable} ${inter.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-bg-base text-text-primary">
        {children}
      </body>
    </html>
  );
}
