"use client"

import { motion } from "framer-motion"

const stats = [
  {
    number: "41%",
    text: "of all new code is now AI-generated",
    source: "GitHub 2025",
  },
  {
    number: "62%",
    text: "of AI-generated code has security vulnerabilities",
    source: "Stanford Research",
  },
  {
    number: "10,000+",
    text: "new security findings from AI-generated code every month",
    source: "Industry Data",
  },
]

export function WhySection() {
  return (
    <section className="px-4 py-32 sm:px-6 lg:px-8 lg:py-48">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-600/80">
            The Problem
          </span>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl lg:text-[64px] lg:leading-[1.05]">
            AI is writing code faster
            <br />
            than anyone can review it.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-gray-400 lg:text-2xl lg:leading-relaxed">
            Every AI coding agent you deploy is a new attack surface.
            Without purpose-built security, vulnerable code ships to production.
          </p>
        </motion.div>

        {/* Stat cards */}
        <div className="mt-24 grid gap-10 sm:grid-cols-2 lg:mt-28 lg:grid-cols-3 lg:gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-4 text-center lg:p-6 lg:text-left"
            >
              <span className="text-6xl font-extrabold tracking-tight text-gray-900 sm:text-7xl lg:text-8xl">{stat.number}</span>
              <p className="mt-5 text-lg leading-relaxed text-gray-500 lg:text-xl">{stat.text}</p>
              <p className="mt-6 text-sm font-medium uppercase tracking-wider text-gray-300">{stat.source}</p>
            </motion.div>
          ))}
        </div>

        {/* Contrast line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-16 max-w-3xl border-t border-gray-100 pt-12 text-center"
        >
          <p className="text-lg leading-relaxed text-gray-400">
            <span className="font-semibold text-gray-600">Snyk</span> and{" "}
            <span className="font-semibold text-gray-600">Semgrep</span> scan code after it&apos;s committed.
            By then, the vulnerable code has shipped.
            They were built for human developers, not autonomous agents.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
