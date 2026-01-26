"use client"

import { motion } from "framer-motion"

const stats = [
  {
    number: "60%",
    text: "of LLM applications are vulnerable to prompt injection attacks",
    source: "OWASP 2025",
  },
  {
    number: "3 sec",
    text: "of audio is enough to clone any voice with high fidelity",
    source: "MIT Technology Review",
  },
  {
    number: "43",
    text: "agent framework components found with known supply chain vulnerabilities",
    source: "Barracuda Security 2025",
  },
]

export function WhySection() {
  return (
    <section className="bg-gray-50 px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-indigo-600">
            The Problem
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            AI agents are powerful.
            <br />
            And dangerously exposed.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-500">
            Every AI agent you deploy — text, voice, or code — is a new attack surface.
            Without purpose-built security, you&apos;re shipping vulnerabilities to production.
          </p>
        </motion.div>

        {/* Stat cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-gray-100 bg-white p-8"
            >
              <span className="text-4xl font-bold text-gray-900">{stat.number}</span>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{stat.text}</p>
              <p className="mt-4 text-xs text-gray-400">{stat.source}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
