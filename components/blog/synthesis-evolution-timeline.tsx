"use client"

import { motion } from "framer-motion"
import { Radio, Cpu, Brain, Zap } from "lucide-react"

const timelineItems = [
    {
        era: "1960s-1990s",
        title: "Concatenative Synthesis",
        description: "Stitching pre-recorded phonemes together. Audible glitches at join points made detection trivial.",
        icon: Radio,
        color: "gray",
        detectability: "Easy",
        artifact: "Audible glitches",
    },
    {
        era: "2000s-2015",
        title: "Parametric (HMM)",
        description: "Mathematical models for speech generation. Smooth but robotic — the 'buzzy' voice era.",
        icon: Cpu,
        color: "blue",
        detectability: "Moderate",
        artifact: "Robotic timbre",
    },
    {
        era: "2016-2023",
        title: "Neural Synthesis",
        description: "WaveNet and neural vocoders cross the uncanny valley. Human perception begins to fail.",
        icon: Brain,
        color: "violet",
        detectability: "Hard",
        artifact: "Spectral patterns",
    },
    {
        era: "2024+",
        title: "Zero-Shot Cloning",
        description: "3 seconds of audio is enough. VALL-E, XTTS enable instant voice replication from any sample.",
        icon: Zap,
        color: "rose",
        detectability: "Very Hard",
        artifact: "Micro-prosodic",
    },
]

const colorClasses = {
    gray: {
        bg: "bg-gray-50",
        iconBg: "bg-gray-200",
        iconColor: "text-gray-600",
        line: "bg-gray-300",
        badge: "bg-gray-100 text-gray-700",
    },
    blue: {
        bg: "bg-blue-50",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        line: "bg-blue-300",
        badge: "bg-blue-100 text-blue-700",
    },
    violet: {
        bg: "bg-violet-50",
        iconBg: "bg-violet-100",
        iconColor: "text-violet-600",
        line: "bg-violet-300",
        badge: "bg-violet-100 text-violet-700",
    },
    rose: {
        bg: "bg-rose-50",
        iconBg: "bg-rose-100",
        iconColor: "text-rose-600",
        line: "bg-rose-400",
        badge: "bg-rose-100 text-rose-700",
    },
}

export function SynthesisEvolutionTimeline() {
    return (
        <div className="my-12">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-6"
            >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    The Evolution of Speech Synthesis
                </h3>
                <p className="text-sm text-gray-500">
                    From audible robots to undetectable deepfakes
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg"
            >
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-[23px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-200 via-violet-300 to-rose-400 hidden sm:block" />

                    <div className="space-y-6">
                        {timelineItems.map((item, index) => {
                            const Icon = item.icon
                            const colors = colorClasses[item.color as keyof typeof colorClasses]

                            return (
                                <motion.div
                                    key={item.era}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 }}
                                    className="relative flex gap-4"
                                >
                                    {/* Icon */}
                                    <div className={`relative z-10 shrink-0 h-12 w-12 rounded-xl ${colors.iconBg} flex items-center justify-center shadow-sm`}>
                                        <Icon className={`h-6 w-6 ${colors.iconColor}`} />
                                    </div>

                                    {/* Content */}
                                    <div className={`flex-1 rounded-xl ${colors.bg} p-4 border border-gray-100`}>
                                        <div className="flex flex-wrap items-center gap-2 mb-2">
                                            <span className="font-bold text-gray-900">{item.title}</span>
                                            <span className="text-xs text-gray-500 font-medium">{item.era}</span>
                                        </div>
                                        <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${colors.badge}`}>
                                                Detection: {item.detectability}
                                            </span>
                                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                                                Artifact: {item.artifact}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>

                {/* Bottom warning */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    className="mt-6 rounded-xl bg-rose-50 border border-rose-200 px-5 py-4 flex items-start gap-3"
                >
                    <Zap className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                        <p className="font-semibold text-rose-900 text-sm mb-1">The 3-Second Threshold</p>
                        <p className="text-sm text-rose-700">
                            Modern zero-shot models can clone any voice from just 3 seconds of audio — often scraped
                            from voicemails, social media, or webinar recordings. The &quot;training data&quot; for an attack
                            is now publicly available for most targets.
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}
