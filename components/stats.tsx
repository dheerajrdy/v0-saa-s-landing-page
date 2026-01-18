"use client"

import { motion } from "framer-motion"

const stats = [
    {
        value: "50+",
        label: "Active Deployments",
        description: "Powering production voice AI agents",
    },
    {
        value: "<50ms",
        label: "Added Latency",
        description: "Real-time analysis without blocking",
    },
    {
        value: "100%",
        label: "Audit Coverage",
        description: "Every voice interaction logged",
    },
    {
        value: "SOC2",
        label: "Compliance Ready",
        description: "HIPAA & GDPR certified",
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
}

export function Stats() {
    return (
        <section className="relative px-4 py-20 sm:px-6 lg:px-8 bg-gray-900">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-violet-900/20" />

            <div className="relative mx-auto max-w-7xl">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <span className="inline-flex items-center rounded-full bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-400 ring-1 ring-inset ring-indigo-500/20 mb-4">
                        Proven Performance
                    </span>
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Real-time protection at{" "}
                        <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                            scale.
                        </span>
                    </h2>
                </motion.div>

                {/* Stats grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="relative group"
                        >
                            <div className="h-full rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 text-center transition-all duration-300 hover:bg-white/10 hover:border-white/20">
                                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm font-semibold text-indigo-400 uppercase tracking-wide mb-1">
                                    {stat.label}
                                </div>
                                <div className="text-xs text-gray-400">
                                    {stat.description}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
