"use client"

import { motion } from "framer-motion"
import { Check, Minus } from "lucide-react"

const capabilities = [
  { feature: "AI-generated code scanning", prooflayer: true, generic: false, diy: false },
  { feature: "Package hallucination detection", prooflayer: true, generic: false, diy: false },
  { feature: "Search guardrails (inbound + outbound)", prooflayer: true, generic: false, diy: false },
  { feature: "Indirect prompt injection detection", prooflayer: true, generic: true, diy: false },
  { feature: "Runtime guardrails", prooflayer: true, generic: true, diy: false },
  { feature: "Supply chain risk analysis", prooflayer: true, generic: false, diy: false },
  { feature: "CI/CD pipeline integration", prooflayer: true, generic: false, diy: false },
  { feature: "Under 5 min integration", prooflayer: true, generic: false, diy: false },
  { feature: "SOC 2 / HIPAA compliance", prooflayer: true, generic: true, diy: false },
  { feature: "Open-source scanner", prooflayer: true, generic: false, diy: true },
]

function FeatureCheck({ enabled }: { enabled: boolean }) {
  return enabled ? (
    <Check className="h-4 w-4 text-indigo-500" />
  ) : (
    <Minus className="h-4 w-4 text-gray-300" />
  )
}

export function WhyProofLayer() {
  return (
    <section className="px-4 py-32 sm:px-6 lg:px-8 lg:py-48">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-600/80">
            Why ProofLayer
          </span>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl lg:text-[64px] lg:leading-[1.05]">
            Built for agents.
            <br />
            Not retrofitted.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-gray-400 lg:text-2xl lg:leading-relaxed">
            Generic LLM security tools don&apos;t understand code or search. ProofLayer is built
            from the ground up for coding agents and agent search pipelines.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 overflow-hidden rounded-2xl border border-gray-100 bg-white"
        >
          {/* Table header */}
          <div className="grid grid-cols-4 border-b border-gray-100 bg-gray-50/80 px-6 py-4 text-sm font-semibold text-gray-900">
            <div className="col-span-1">Capability</div>
            <div className="text-center">ProofLayer</div>
            <div className="text-center">Generic LLM Security</div>
            <div className="text-center">DIY / Open Source</div>
          </div>

          {/* Table rows */}
          {capabilities.map((cap, index) => (
            <div
              key={cap.feature}
              className={`grid grid-cols-4 items-center px-6 py-3.5 text-sm ${
                index < capabilities.length - 1 ? "border-b border-gray-50" : ""
              } ${index % 2 === 0 ? "" : "bg-gray-50/40"}`}
            >
              <div className="col-span-1 font-medium text-gray-700">{cap.feature}</div>
              <div className="flex justify-center">
                <FeatureCheck enabled={cap.prooflayer} />
              </div>
              <div className="flex justify-center">
                <FeatureCheck enabled={cap.generic} />
              </div>
              <div className="flex justify-center">
                <FeatureCheck enabled={cap.diy} />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
