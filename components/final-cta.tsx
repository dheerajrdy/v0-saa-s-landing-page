"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function FinalCta() {
  return (
    <section id="waitlist" className="scroll-mt-24 bg-gray-50/50 px-4 py-32 sm:px-6 lg:px-8 lg:py-40">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl lg:text-6xl">
            Secure your AI agents before launch.
          </h2>
          <p className="mt-6 text-lg text-gray-400 sm:text-xl">
            Join the companies building secure AI. Get early access to ProofLayer.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
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
              Explore our services
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
