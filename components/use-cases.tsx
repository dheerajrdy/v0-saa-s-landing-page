"use client"

import { motion } from "framer-motion"
import { Headphones, Heart, Building2, Bot } from "lucide-react"

const useCases = [
    {
        icon: Headphones,
        title: "Voice AI Assistants",
        description: "Real-time safety for customer service bots and virtual agents.",
        color: "indigo",
    },
    {
        icon: Heart,
        title: "Healthcare Voice Apps",
        description: "HIPAA-compliant voice interactions for telehealth and patient care.",
        color: "rose",
    },
    {
        icon: Building2,
        title: "Financial Services",
        description: "Fraud detection and compliance in voice transactions.",
        color: "emerald",
    },
    {
        icon: Bot,
        title: "Enterprise Agents",
        description: "Policy enforcement for internal tools and automation.",
        color: "violet",
    },
]

const colorClasses = {
    indigo: {
        iconBg: "bg-indigo-500/10",
        iconColor: "text-indigo-400",
        ring: "ring-indigo-500/20",
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
    violet: {
        iconBg: "bg-violet-500/10",
        iconColor: "text-violet-400",
        ring: "ring-violet-500/20",
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

export function UseCases() {
    return (
        <section className="relative px-4 py-24 sm:px-6 lg:px-8 bg-gray-900">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-900/10 via-transparent to-indigo-900/10" />

            <div className="relative mx-auto max-w-7xl">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center rounded-full bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-400 ring-1 ring-inset ring-violet-500/20 mb-4">
                        Use Cases
                    </span>
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Built for{" "}
                        <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                            mission-critical
                        </span>{" "}
                        voice AI.
                    </h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                        Where teams are putting ProofLayer to work today.
                    </p>
                </motion.div>

                {/* Use cases grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {useCases.map((useCase, index) => {
                        const Icon = useCase.icon
                        const colors = colorClasses[useCase.color as keyof typeof colorClasses]

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
                                    <h3 className="mb-2 text-lg font-semibold text-white">
                                        {useCase.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        {useCase.description}
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
