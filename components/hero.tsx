"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { SecurityAnimation } from "@/components/security-animation"

export function Hero() {
  return (
    <section className="relative px-4 pt-36 pb-24 sm:px-6 lg:px-8 lg:pt-48 lg:pb-40">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-3xl text-5xl font-extrabold leading-[1.1] tracking-tighter text-gray-900 sm:text-7xl lg:text-8xl"
          >
            Security for{" "}
            <span className="text-indigo-600">every</span>
            <br />
            AI agent.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-6 max-w-2xl text-xl leading-relaxed text-gray-400 sm:text-2xl"
          >
            Red teaming, guardrails, and code security.
            One platform for every AI agent.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-6"
          >
            <a
              href="https://calendly.com/divyachitimalla/intro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-gray-800"
            >
              Book a Call
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
            >
              Learn more
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 w-full lg:mt-24"
          >
            <SecurityAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
