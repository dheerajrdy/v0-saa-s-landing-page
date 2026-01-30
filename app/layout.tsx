import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Inter, JetBrains_Mono } from 'next/font/google'

// Initialize fonts - Clean, modern sans-serif
const inter = Inter({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700", "800"],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ["400", "500"],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: "ProofLayer — Security for Every AI Agent",
  description:
    "Pre-deployment testing and runtime guardrails for text agents, voice agents, and coding agents. One platform to secure every AI agent.",
  keywords: ["AI agent security", "red teaming", "prompt injection", "AI guardrails", "voice AI security", "coding agent security", "LLM security", "AI code review", "code generation security", "OWASP", "NIST"],
  authors: [{ name: "ProofLayer" }],
  openGraph: {
    title: "ProofLayer — Security for Every AI Agent",
    description: "Pre-deployment testing and runtime guardrails for text agents, voice agents, and coding agents.",
    type: "website",
    siteName: "ProofLayer",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProofLayer — Security for Every AI Agent",
    description: "Pre-deployment testing and runtime guardrails for text agents, voice agents, and coding agents.",
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
  verification: {
    google: "Jz2fsslsGoqDXMCaGZSWwv3lgWXir845IhkKayJCw64",
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
