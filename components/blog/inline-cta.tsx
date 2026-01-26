"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface InlineCtaProps {
  variant?: "default" | "compact"
  headline?: string
  subtext?: string
}

export function InlineCta({
  variant = "default",
  headline = "Ready to secure your AI agents?",
  subtext = "Join the waitlist for early access to ProofLayer.",
}: InlineCtaProps) {
  if (variant === "compact") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="my-10 rounded-xl bg-emerald-50 border border-emerald-100 p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <div>
          <h4 className="font-semibold text-gray-900 mb-1">{headline}</h4>
          <p className="text-sm text-gray-600">{subtext}</p>
        </div>
        <Link
          href="/#waitlist"
          className="inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-5 py-2.5 whitespace-nowrap transition-colors"
        >
          Join Waitlist
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="my-10 rounded-xl bg-emerald-50 border border-emerald-100 p-8 text-center"
    >
      <h4 className="text-xl font-semibold text-gray-900 mb-2">{headline}</h4>
      <p className="text-gray-600 mb-6">{subtext}</p>
      <Link
        href="/#waitlist"
        className="inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-6 py-3 transition-colors"
      >
        Get Early Access
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </motion.div>
  )
}
