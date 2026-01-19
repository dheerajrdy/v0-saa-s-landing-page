"use client"

import { motion } from "framer-motion"
import { FileText, Mic, Volume2, Bot, MessageSquare, CheckCircle, ArrowRight } from "lucide-react"

const steps = [
    {
        icon: FileText,
        label: "Text Probes",
        sublabel: "Garak",
        color: "gray",
        description: "Adversarial text prompts",
    },
    {
        icon: Volume2,
        label: "Audio Synthesis",
        sublabel: "Proof Layer",
        color: "indigo",
        description: "Stress • Accent • Whisper",
    },
    {
        icon: Bot,
        label: "Voice Agent",
        sublabel: "Attack",
        color: "rose",
        description: "Probes via proxy",
    },
    {
        icon: MessageSquare,
        label: "ASR Capture",
        sublabel: "Detector",
        color: "emerald",
        description: "Transcribe & analyze",
    },
]

const colorClasses = {
    gray: {
        bg: "bg-gray-100",
        border: "border-gray-200",
        iconBg: "bg-gray-200",
        iconColor: "text-gray-600",
        text: "text-gray-700",
    },
    indigo: {
        bg: "bg-indigo-50",
        border: "border-indigo-200",
        iconBg: "bg-indigo-100",
        iconColor: "text-indigo-600",
        text: "text-indigo-700",
    },
    rose: {
        bg: "bg-rose-50",
        border: "border-rose-200",
        iconBg: "bg-rose-100",
        iconColor: "text-rose-600",
        text: "text-rose-700",
    },
    emerald: {
        bg: "bg-emerald-50",
        border: "border-emerald-200",
        iconBg: "bg-emerald-100",
        iconColor: "text-emerald-600",
        text: "text-emerald-700",
    },
}

export function GarakIntegrationDiagram() {
    return (
        <div className="my-12">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-8"
            >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Garak Voice Red-Teaming</h3>
                <p className="text-sm text-gray-500">Text-to-audio translation adapter for adversarial probing</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-lg"
            >
                {/* Desktop: Horizontal Pipeline */}
                <div className="hidden md:flex items-center justify-between gap-2">
                    {steps.map((step, index) => {
                        const Icon = step.icon
                        const colors = colorClasses[step.color as keyof typeof colorClasses]
                        const isLast = index === steps.length - 1

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + index * 0.15 }}
                                className="flex items-center"
                            >
                                {/* Step Card */}
                                <div className={`flex flex-col items-center p-4 rounded-xl ${colors.bg} border ${colors.border} min-w-[120px]`}>
                                    <div className={`h-12 w-12 rounded-xl ${colors.iconBg} flex items-center justify-center mb-2`}>
                                        <Icon className={`h-6 w-6 ${colors.iconColor}`} />
                                    </div>
                                    <span className={`text-sm font-semibold ${colors.text}`}>{step.label}</span>
                                    <span className="text-xs text-gray-500">{step.sublabel}</span>
                                    <span className="text-[10px] text-gray-400 mt-1 text-center">{step.description}</span>
                                </div>

                                {/* Arrow */}
                                {!isLast && (
                                    <motion.div
                                        initial={{ opacity: 0, scaleX: 0 }}
                                        whileInView={{ opacity: 1, scaleX: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 + index * 0.1 }}
                                        className="flex items-center mx-2"
                                    >
                                        <div className="h-0.5 w-8 bg-gray-300" />
                                        <ArrowRight className="h-4 w-4 text-gray-400 -ml-1" />
                                    </motion.div>
                                )}
                            </motion.div>
                        )
                    })}
                </div>

                {/* Mobile: Vertical Pipeline */}
                <div className="md:hidden space-y-3">
                    {steps.map((step, index) => {
                        const Icon = step.icon
                        const colors = colorClasses[step.color as keyof typeof colorClasses]
                        const isLast = index === steps.length - 1

                        return (
                            <div key={index}>
                                <div className={`flex items-center gap-3 p-3 rounded-xl ${colors.bg} border ${colors.border}`}>
                                    <div className={`h-10 w-10 rounded-lg ${colors.iconBg} flex items-center justify-center shrink-0`}>
                                        <Icon className={`h-5 w-5 ${colors.iconColor}`} />
                                    </div>
                                    <div>
                                        <span className={`text-sm font-semibold ${colors.text}`}>{step.label}</span>
                                        <span className="text-xs text-gray-500 block">{step.description}</span>
                                    </div>
                                </div>
                                {!isLast && (
                                    <div className="flex justify-center py-1">
                                        <div className="h-4 w-0.5 bg-gray-200" />
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>

                {/* Result Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="mt-6 flex justify-center"
                >
                    <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-4 py-2">
                        <CheckCircle className="h-4 w-4 text-emerald-500" />
                        <span className="text-sm text-emerald-700">Results fed back to Garak detectors for scoring</span>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}
