"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { SecurityAnimation } from "@/components/security-animation"

export function Hero() {
  return (
    <section className="relative px-4 pt-44 pb-32 sm:px-6 lg:px-8 lg:pt-56 lg:pb-48">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-5xl text-[52px] font-extrabold leading-[1.0] tracking-tighter text-gray-900 sm:text-[80px] lg:text-[96px] xl:text-[112px]"
          >
            Ultra secure{" "}
            <span className="text-indigo-600">voice AI</span>
            <br />
            for healthcare.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-2xl text-xl leading-relaxed text-gray-400 sm:text-2xl lg:text-[28px] lg:leading-relaxed"
          >
            Red teaming, guardrails, and security for voice AI agents.
            Purpose-built for healthcare.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:gap-6"
          >
            <a
              href="https://calendly.com/divyachitimalla/intro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-gray-900 px-10 py-4 text-base font-medium text-white transition-all hover:bg-gray-800 hover:scale-[1.02]"
            >
              Book a Call
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-base font-medium text-gray-500 transition-colors hover:text-gray-900"
            >
              Learn more
              <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-24 w-full lg:mt-32"
          >
            <SecurityAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
