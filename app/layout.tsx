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
  title: "ProofLayer - Diligence, Automated",
  description:
    "Audio-native safety for voice AI that actually works. Protect your voice agents from prompt injection, deepfakes, and unauthorized actions. Privacy. Safety. Fairness.",
  keywords: ["voice AI security", "deepfake detection", "audio security", "speech-to-speech", "AI safety", "voice agent protection", "prompt injection"],
  authors: [{ name: "ProofLayer" }],
  openGraph: {
    title: "ProofLayer - Diligence, Automated",
    description: "Audio-native safety for voice AI that actually works. Privacy. Safety. Fairness.",
    type: "website",
    siteName: "ProofLayer",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProofLayer - Diligence, Automated",
    description: "Audio-native safety for voice AI that actually works.",
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
