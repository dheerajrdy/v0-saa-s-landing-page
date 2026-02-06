"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function FinalCta() {
  return (
    <section id="waitlist" className="scroll-mt-24 bg-gray-50/50 px-4 py-36 sm:px-6 lg:px-8 lg:py-52">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-extrabold tracking-tighter text-gray-900 sm:text-6xl lg:text-[72px] lg:leading-[1.05]">
            Launching an AI agent?
            <br />
            Secure it first.
          </h2>
          <p className="mt-8 text-xl text-gray-400 sm:text-2xl lg:text-[28px] lg:leading-relaxed">
            Get a security assessment before you ship to production.
          </p>
          <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:justify-center sm:gap-6">
            <a
              href="https://dashboard.proof-layer.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-gray-900 px-10 py-4 text-base font-medium text-white transition-all hover:bg-gray-800 hover:scale-[1.02]"
            >
              Start Free
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="https://calendly.com/divyachitimalla/intro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-gray-200 bg-white px-8 py-4 text-base font-medium text-gray-700 transition-all hover:bg-gray-50 hover:border-gray-300"
            >
              Book a Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
