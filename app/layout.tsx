import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Inter, JetBrains_Mono } from 'next/font/google'

// Initialize fonts - Clean, modern sans-serif
const inter = Inter({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700"],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ["400", "500"],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: "ProofLayer - Ship Secure AI Agents",
  description:
    "Complete security testing for AI agents. Find vulnerabilities before production with automated red teaming, bidirectional guardrails, and compliance-ready testing. OWASP & NIST compliant.",
  keywords: ["AI agent security", "red teaming", "prompt injection", "AI security testing", "guardrails", "agent testing", "LLM security", "AI compliance", "OWASP", "NIST"],
  authors: [{ name: "ProofLayer" }],
  openGraph: {
    title: "ProofLayer - Ship Secure AI Agents",
    description: "Complete security testing for AI agents. Find vulnerabilities before production.",
    type: "website",
    siteName: "ProofLayer",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProofLayer - Ship Secure AI Agents",
    description: "Complete security testing for AI agents. Find vulnerabilities before production.",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
