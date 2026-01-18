"use client"

import { motion } from "framer-motion"
import { ShieldAlert, Mic, Bot, FileWarning, Zap, Lock } from "lucide-react"

const reasons = [
  {
    icon: Zap,
    title: "REAL-TIME ANALYSIS",
    description: "Under 50ms latency. We audit the stream without blocking the conversation.",
    color: "indigo",
  },
  {
    icon: ShieldAlert,
    title: "INJECTION DETECTION",
    description: "Detect manipulation attempts and prompt injection in audio streams.",
    color: "violet",
  },
  {
    icon: Mic,
    title: "DEEPFAKE PROTECTION",
    description: "Verify speaker identity and detect synthetic clones in real-time.",
    color: "rose",
  },
  {
    icon: Lock,
    title: "POLICY ENFORCEMENT",
    description: "Define guardrails for what your agent can and cannot do.",
    color: "emerald",
  },
  {
    icon: Bot,
    title: "ZERO INFRASTRUCTURE",
    description: "Fully managed. No GPU required. Just point your stream to us.",
    color: "orange",
  },
  {
    icon: FileWarning,
    title: "COMPLIANCE READY",
    description: "SOC2, HIPAA, GDPR audit logs built-in from day one.",
    color: "blue",
  },
]

const colorClasses = {
  indigo: {
    iconBg: "bg-indigo-500/10",
    iconColor: "text-indigo-400",
    ring: "ring-indigo-500/20",
  },
  violet: {
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-400",
    ring: "ring-violet-500/20",
  },
  rose: {
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-400",
    ring: "ring-rose-500/20",
  },
  emerald: {
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    ring: "ring-emerald-500/20",
  },
  orange: {
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-400",
    ring: "ring-orange-500/20",
  },
  blue: {
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
    ring: "ring-blue-500/20",
  },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function ProblemGrid() {
  return (
    <section id="product" className="relative px-4 py-24 sm:px-6 lg:px-8 bg-gray-900">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-violet-900/20" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center rounded-full bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-400 ring-1 ring-inset ring-orange-500/20 mb-4">
            Why ProofLayer?
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Voice AI has a{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              blind spot.
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Text-based safety tools miss what makes voice unique. We built protection for the audio-native era.
          </p>
        </motion.div>

        {/* Reason cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            const colors = colorClasses[reason.color as keyof typeof colorClasses]

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group"
              >
                <div className={`h-full rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1`}>
                  {/* Icon */}
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${colors.iconBg} ring-1 ring-inset ${colors.ring}`}>
                    <Icon className={`h-6 w-6 ${colors.iconColor}`} />
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 text-sm font-bold text-white uppercase tracking-wide">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
