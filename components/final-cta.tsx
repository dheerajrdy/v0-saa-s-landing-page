"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Zap } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function FinalCta() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-500 to-violet-500 p-8 text-center sm:p-12 shadow-xl"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Ready to deploy compliant voice AI?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-indigo-100">
              Get started in minutes. No compliance nightmare. No liability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="rounded-full bg-white px-8 text-indigo-600 hover:bg-indigo-50 font-medium shadow-lg"
              >
                <Zap className="mr-2 h-4 w-4" />
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Talk to an Expert
              </Button>
            </div>

            {/* Secondary links */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/docs" className="text-indigo-200 hover:text-white transition-colors">
                Read the Docs
              </Link>
              <Link href="/case-studies" className="text-indigo-200 hover:text-white transition-colors">
                View Case Studies
              </Link>
              <Link href="/blog" className="text-indigo-200 hover:text-white transition-colors">
                Read the Blog
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
