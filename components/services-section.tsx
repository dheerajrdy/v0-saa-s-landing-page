"use client"

import { motion } from "framer-motion"
import { Shield, Mic, Code, Check, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Shield,
    badge: "AI Red Teaming",
    accentColor: "rose",
    title: "Chat Agent Security",
    description:
      "Automated red teaming and runtime guardrails for chat-based AI agents. Find prompt injection, jailbreaks, and data exfiltration before attackers do.",
    differentiator: "Goes beyond keyword blocking — behavioral analysis at inference time.",
    features: [
      "50+ attack vectors tested automatically",
      "Bidirectional input & output guardrails",
      "Hallucination detection and grounding",
    ],
    linkText: "How we detect prompt injection",
    blogSlug: "/blog/deepfake-detection",
  },
  {
    icon: Mic,
    badge: "Voice Security",
    accentColor: "amber",
    title: "Voice Agent Security",
    description:
      "Audio-native security for speech-to-speech agents. Detect deepfakes, voice injection, and synthetic speech threats in real-time.",
    differentiator: "Audio-native detection. No transcription. No latency penalty.",
    features: [
      "Deepfake and synthetic voice detection",
      "Audio-native prompt injection defense",
      "Voice biometric verification",
    ],
    linkText: "How we detect deepfakes",
    blogSlug: "/blog/voice-ai-security",
  },
  {
    icon: Code,
    badge: "Code Security",
    accentColor: "violet",
    title: "Coding Agent Security",
    description:
      "Pre-execution code review for LLM outputs. Catch injection vulnerabilities, supply chain risks, and insecure patterns before they ship.",
    differentiator: "Catches what static analysis misses — LLM-specific vulnerability patterns.",
    features: [
      "Pre-execution code review for LLM outputs",
      "Supply chain risk detection",
      "Insecure pattern identification",
    ],
    linkText: "How we secure coding agents",
    blogSlug: "/blog/coding-agent-security",
  },
]

const accentClasses = {
  rose: {
    badgeBg: "bg-rose-50",
    badgeText: "text-rose-600",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-500",
    borderColor: "border-l-rose-400",
  },
  amber: {
    badgeBg: "bg-amber-50",
    badgeText: "text-amber-600",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
    borderColor: "border-l-amber-400",
  },
  violet: {
    badgeBg: "bg-violet-50",
    badgeText: "text-violet-600",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-500",
    borderColor: "border-l-violet-400",
  },
}

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 px-4 py-32 sm:px-6 lg:px-8 lg:py-48">
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
            Three Pillars
          </span>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl lg:text-[64px] lg:leading-[1.05]">
            Test before you ship.
            <br />
            Protect at runtime.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-gray-400 lg:text-2xl lg:leading-relaxed">
            Purpose-built security for chat agents, voice agents, and coding agents.
            Test before deployment, protect at runtime.
          </p>
        </motion.div>

        {/* Service cards - 3 column grid */}
        <div className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
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
                className="group relative flex flex-col rounded-3xl border border-gray-100/80 bg-white p-10 transition-all duration-300 hover:shadow-xl lg:p-12"
              >
                {/* Icon */}
                <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl ${colors.iconBg}`}>
                  <Icon className={`h-8 w-8 ${colors.iconColor}`} />
                </div>

                {/* Badge */}
                <span className={`mb-4 inline-flex w-fit items-center rounded-full px-4 py-1.5 text-sm font-medium ${colors.badgeBg} ${colors.badgeText}`}>
                  {service.badge}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-base leading-relaxed text-gray-500 lg:text-lg">
                  {service.description}
                </p>

                {/* Differentiator */}
                <div className={`mt-6 rounded-r-lg border-l-[3px] ${colors.borderColor} bg-gray-50/80 px-4 py-3`}>
                  <p className="text-sm font-medium text-gray-800">{service.differentiator}</p>
                </div>

                {/* Divider */}
                <div className="my-8 h-px bg-gray-100/60 flex-grow" />

                {/* Features */}
                <ul className="space-y-4">
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
                        <Check className="h-4 w-4 text-indigo-600" />
                      </div>
                      <span className="text-base text-gray-600">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Learn more link */}
                <Link href={service.blogSlug} className="mt-10 flex items-center gap-2 text-base font-medium text-indigo-600 transition-colors">
                  <span>{service.linkText}</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
