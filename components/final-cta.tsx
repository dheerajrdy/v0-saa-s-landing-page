"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function FinalCta() {
  return (
    <section id="waitlist" className="scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Secure your AI agents before launch.
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Join the companies building secure AI. Get early access to ProofLayer.
          </p>
          <div className="mt-8">
            <a
              href="https://calendly.com/divyachitimalla/intro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
            >
              Book a Call
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
