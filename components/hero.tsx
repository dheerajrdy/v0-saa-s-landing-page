"use client"

import { motion } from "framer-motion"
import { Shield, Mic, Code } from "lucide-react"
import { WaitlistForm } from "@/components/waitlist-form"
import { SecurityAnimation } from "@/components/security-animation"

const services = [
  { icon: Shield, label: "AI Red Teaming", color: "text-rose-500 bg-rose-50" },
  { icon: Mic, label: "Voice Security", color: "text-amber-500 bg-amber-50" },
  { icon: Code, label: "Code Security", color: "text-violet-500 bg-violet-50" },
]

export function Hero() {
  return (
    <section className="relative px-4 pt-32 pb-20 sm:px-6 lg:px-8 lg:pt-44 lg:pb-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-sm text-indigo-700"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            Now accepting early access partners
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-4xl text-5xl font-semibold leading-[1.1] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl"
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
            className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-500 sm:text-xl"
          >
            Red teaming, runtime guardrails, and code security for text agents,
            voice agents, and coding agents. One platform.
          </motion.p>

          {/* Waitlist Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 w-full max-w-md"
          >
            <WaitlistForm variant="hero" />
          </motion.div>

          {/* Service pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 flex flex-wrap justify-center gap-3"
          >
            {services.map((service) => (
              <div
                key={service.label}
                className="inline-flex items-center gap-2.5 rounded-xl border border-gray-100 bg-white px-5 py-3 shadow-sm"
              >
                <div className={`rounded-lg p-1.5 ${service.color}`}>
                  <service.icon className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium text-gray-700">{service.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 w-full"
          >
            <SecurityAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
