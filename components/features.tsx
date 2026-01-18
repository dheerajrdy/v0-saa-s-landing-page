"use client"

import { motion } from "framer-motion"
import { Zap, Fingerprint, ShieldCheck, FileText, Globe, Lock } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Real-time Analysis",
    description: "Under 50ms latency. We audit the stream without blocking the conversation.",
    color: "indigo",
    size: "large",
  },
  {
    icon: Fingerprint,
    title: "Voice Authentication",
    description: "Verify speaker identity and detect synthetic clones in real-time.",
    color: "violet",
    size: "small",
  },
  {
    icon: ShieldCheck,
    title: "Policy Enforcement",
    description: "Define guardrails for what your agent can and cannot do.",
    color: "emerald",
    size: "small",
  },
  {
    icon: FileText,
    title: "Compliance Ready",
    description: "SOC2, HIPAA, GDPR audit logs built-in from day one.",
    color: "orange",
    size: "small",
  },
  {
    icon: Globe,
    title: "Multi-provider",
    description: "Works with OpenAI, Google, Twilio, LiveKit, and more.",
    color: "blue",
    size: "small",
  },
  {
    icon: Lock,
    title: "Zero Trust",
    description: "Every request verified. Every response validated. No exceptions.",
    color: "rose",
    size: "large",
  },
]

const colorClasses = {
  indigo: {
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-500",
    ring: "ring-indigo-100",
    gradient: "from-indigo-50",
  },
  violet: {
    iconBg: "bg-violet-50",
    iconColor: "text-violet-500",
    ring: "ring-violet-100",
    gradient: "from-violet-50",
  },
  emerald: {
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-500",
    ring: "ring-emerald-100",
    gradient: "from-emerald-50",
  },
  orange: {
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
    ring: "ring-orange-100",
    gradient: "from-orange-50",
  },
  blue: {
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
    ring: "ring-blue-100",
    gradient: "from-blue-50",
  },
  rose: {
    iconBg: "bg-rose-50",
    iconColor: "text-rose-500",
    ring: "ring-rose-100",
    gradient: "from-rose-50",
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

export function Features() {
  return (
    <section id="features" className="relative px-4 py-24 sm:px-6 lg:px-8 bg-[#FAFAFA]">
      {/* Decorative blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="blob blob-purple absolute top-1/4 right-0 h-[400px] w-[400px]" />
        <div className="blob blob-orange absolute bottom-1/4 left-0 h-[300px] w-[300px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-600 mb-4">
            Capabilities
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Built for the{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              audio-native era.
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Purpose-built detection and enforcement for voice AI. Security that understands audio, not just text.
          </p>
        </motion.div>

        {/* Feature bento grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            const colors = colorClasses[feature.color as keyof typeof colorClasses]

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`group ${feature.size === "large" ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className={`h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ${colors.ring} transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden relative`}>
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  <div className="relative">
                    {/* Icon */}
                    <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${colors.iconBg}`}>
                      <Icon className={`h-6 w-6 ${colors.iconColor}`} />
                    </div>

                    {/* Title */}
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
