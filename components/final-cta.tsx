"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
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
            <div className="mb-6 inline-flex items-center justify-center rounded-full bg-white/20 p-3">
              <Sparkles className="h-6 w-6 text-white" />
            </div>

            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Stay ahead of voice threats
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-indigo-100">
              Read our latest research on detecting deepfakes and securing voice agents.
            </p>

            <Link href="/blog">
              <Button
                size="lg"
                className="rounded-full bg-white px-8 text-indigo-600 hover:bg-indigo-50 font-medium shadow-lg"
              >
                Read the Blog
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
