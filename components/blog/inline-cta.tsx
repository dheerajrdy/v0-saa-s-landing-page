"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"

interface InlineCtaProps {
  variant?: "default" | "compact"
  headline?: string
  subtext?: string
}

export function InlineCta({
  variant = "default",
  headline = "Ready to protect your voice AI?",
  subtext = "Get started with ProofLayer in under 5 minutes.",
}: InlineCtaProps) {
  if (variant === "compact") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="my-10 rounded-xl bg-gradient-to-r from-indigo-50 to-violet-50 border border-indigo-100 p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <div>
          <h4 className="font-semibold text-gray-900 mb-1">{headline}</h4>
          <p className="text-sm text-gray-600">{subtext}</p>
        </div>
        <a href="mailto:hello@proof-layer.com?subject=Start Free Trial">
          <Button className="rounded-full bg-indigo-600 hover:bg-indigo-700 text-white whitespace-nowrap">
            <Zap className="mr-2 h-4 w-4" />
            Start Free Trial
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="my-10 rounded-xl bg-gradient-to-r from-indigo-50 to-violet-50 border border-indigo-100 p-8 text-center"
    >
      <h4 className="text-xl font-semibold text-gray-900 mb-2">{headline}</h4>
      <p className="text-gray-600 mb-6">{subtext}</p>
      <a href="mailto:hello@proof-layer.com?subject=Start Free Trial">
        <Button className="rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 text-white shadow-lg shadow-indigo-500/25">
          <Zap className="mr-2 h-4 w-4" />
          Start Free Trial
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </a>
    </motion.div>
  )
}
