"use client"

import { motion } from "framer-motion"
import { Shield, Mic, Code, Check, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Shield,
    badge: "AI Red Teaming",
    accentColor: "rose",
    title: "Text Agent Security",
    description:
      "Automated red teaming and runtime guardrails for text-based AI agents. Find prompt injection, jailbreaks, and data exfiltration before attackers do.",
    features: [
      "50+ attack vectors tested automatically",
      "Bidirectional input & output guardrails",
      "Hallucination detection and grounding",
      "OWASP & NIST compliance mapping",
    ],
  },
  {
    icon: Mic,
    badge: "Voice Security",
    accentColor: "amber",
    title: "Voice Agent Security",
    description:
      "Audio-native security for speech-to-speech agents. Detect deepfakes, voice injection, and synthetic speech threats in real-time.",
    features: [
      "Deepfake and synthetic voice detection",
      "Audio-native prompt injection defense",
      "Voice biometric verification",
      "Works with OpenAI, Twilio, LiveKit",
    ],
  },
  {
    icon: Code,
    badge: "Code Security",
    accentColor: "violet",
    title: "Code Agent Security",
    description:
      "Pre-execution code review for LLM outputs. Catch injection vulnerabilities, supply chain risks, and insecure patterns before they ship.",
    features: [
      "Pre-execution code review for LLM outputs",
      "Supply chain risk detection",
      "Insecure pattern identification",
      "Works with Cursor, Copilot, Claude Code",
    ],
  },
]

const accentClasses = {
  rose: {
    border: "border-t-rose-500",
    badgeBg: "bg-rose-50",
    badgeText: "text-rose-600",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-500",
    hoverRing: "hover:ring-rose-100",
  },
  amber: {
    border: "border-t-amber-500",
    badgeBg: "bg-amber-50",
    badgeText: "text-amber-600",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
    hoverRing: "hover:ring-amber-100",
  },
  violet: {
    border: "border-t-violet-500",
    badgeBg: "bg-violet-50",
    badgeText: "text-violet-600",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-500",
    hoverRing: "hover:ring-violet-100",
  },
}

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
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
            Three Pillars
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Comprehensive security.
            <br />
            Every modality.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-500">
            Purpose-built security for text agents, voice agents, and coding agents.
            Test before deployment, protect at runtime.
          </p>
        </motion.div>

        {/* Service cards - 3 column grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const colors = accentClasses[service.accentColor as keyof typeof accentClasses]
            const Icon = service.icon

            return (
              <motion.div
                key={service.badge}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative flex flex-col rounded-2xl border border-gray-100 border-t-4 ${colors.border} bg-white p-8 ring-1 ring-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${colors.hoverRing}`}
              >
                {/* Icon */}
                <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl ${colors.iconBg}`}>
                  <Icon className={`h-7 w-7 ${colors.iconColor}`} />
                </div>

                {/* Badge */}
                <span className={`mb-3 inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-medium ${colors.badgeBg} ${colors.badgeText}`}>
                  {service.badge}
                </span>

                {/* Title */}
                <h3 className="text-xl font-semibold tracking-tight text-gray-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-gray-500 flex-grow">
                  {service.description}
                </p>

                {/* Divider */}
                <div className="my-6 h-px bg-gray-100" />

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <motion.li
                      key={fIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + fIndex * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-0.5 rounded-full bg-indigo-50 p-1">
                        <Check className="h-3.5 w-3.5 text-indigo-600" />
                      </div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Learn more link */}
                <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-gray-400 group-hover:text-indigo-600 transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
