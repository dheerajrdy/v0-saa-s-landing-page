"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { WaveformAnimation } from "@/components/waveform-animation"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-32 pb-20 sm:px-6 lg:px-8 lg:pt-40 lg:pb-28">
      {/* Decorative blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="blob blob-purple absolute top-20 left-1/4 h-[400px] w-[400px]" />
        <div className="blob blob-blue absolute top-40 right-1/4 h-[300px] w-[300px]" />
        <div className="blob blob-orange absolute bottom-20 left-1/3 h-[250px] w-[250px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-sm text-indigo-600"
          >
            <Sparkles className="h-4 w-4" />
            <span>Audio-Native Safety Platform</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-4xl text-5xl font-bold leading-tight tracking-tight text-gray-900 sm:text-6xl lg:text-7xl"
          >
            Real-time Security for{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              Voice AI
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl"
          >
            Audio-native safety that actually works. Detect injection attacks, deepfakes, and policy violations in real-time.
          </motion.p>

          {/* Value props */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-4 flex flex-wrap justify-center gap-4 text-sm"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Privacy-First
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-50 px-3 py-1 text-violet-700">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
              Zero Latency
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1 text-orange-700">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              SOC2 Ready
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-8 text-white shadow-lg shadow-indigo-500/25 transition-all hover:shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-0.5 hover:scale-105 font-medium"
            >
              Start for Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all"
            >
              Request Demo
            </Button>
          </motion.div>

          {/* Hero Visual - Waveform Animation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 w-full"
          >
            <WaveformAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
