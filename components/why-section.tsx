"use client"

import { motion } from "framer-motion"

const featuredStat = {
  number: "3 sec",
  text: "of audio is enough to clone any voice with high fidelity",
  source: "MIT Technology Review",
}

const stats = [
  {
    number: "60%",
    text: "of LLM applications are vulnerable to prompt injection attacks",
    source: "OWASP 2025",
  },
  {
    number: "43",
    text: "agent framework components found with known supply chain vulnerabilities",
    source: "Barracuda Security 2025",
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
            AI agents are powerful.
            <br />
            And dangerously exposed.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-gray-400 lg:text-2xl lg:leading-relaxed">
            Every AI agent you deploy — text, voice, or code — is a new attack surface.
            Without purpose-built security, you&apos;re shipping vulnerabilities to production.
          </p>
        </motion.div>

        {/* Stat cards */}
        <div className="mt-24 grid gap-10 lg:mt-28 lg:grid-cols-3 lg:gap-12">
          {/* Featured stat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-rose-100/80 bg-rose-50/40 p-8 text-center lg:p-10 lg:text-left"
          >
            <span className="text-7xl font-extrabold tracking-tight text-gray-900 sm:text-8xl lg:text-[96px]">{featuredStat.number}</span>
            <p className="mt-5 text-lg leading-relaxed text-gray-600 lg:text-xl">{featuredStat.text}</p>
            <p className="mt-6 text-sm font-medium uppercase tracking-wider text-gray-400">{featuredStat.source}</p>
          </motion.div>

          {/* Supporting stats */}
          {stats.map((stat, index) => (
            <motion.div
              key={stat.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
              className="p-4 text-center lg:p-6 lg:text-left"
            >
              <span className="text-6xl font-extrabold tracking-tight text-gray-900 sm:text-7xl lg:text-8xl">{stat.number}</span>
              <p className="mt-5 text-lg leading-relaxed text-gray-500 lg:text-xl">{stat.text}</p>
              <p className="mt-6 text-sm font-medium uppercase tracking-wider text-gray-300">{stat.source}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
