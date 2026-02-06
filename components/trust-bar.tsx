"use client"

import { motion } from "framer-motion"

const trustSignals = [
  { metric: "1,400+", label: "Monthly npm downloads" },
  { metric: "84", label: "Security detection rules" },
  { metric: "50+", label: "Attack vectors tested" },
  { metric: "<5 min", label: "Integration time" },
]

export function TrustBar() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
            Trusted by security-conscious teams
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
          {trustSignals.map((signal, index) => (
            <motion.div
              key={signal.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <span className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {signal.metric}
              </span>
              <p className="mt-2 text-sm text-gray-500">{signal.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
