"use client"

import { motion } from "framer-motion"

// Placeholder logos - in production these would be actual company logos
const trustedCompanies = [
    { name: "TechCorp", initial: "T" },
    { name: "VoiceAI", initial: "V" },
    { name: "SecureBot", initial: "S" },
    { name: "HealthTech", initial: "H" },
    { name: "FinServe", initial: "F" },
]

export function SocialProof() {
    return (
        <section className="relative px-4 py-12 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-8">
                        Trusted by innovative teams at
                    </p>

                    <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
                        {trustedCompanies.map((company, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                {/* Placeholder logo - replace with actual SVG logos */}
                                <div className="h-8 w-8 rounded-lg bg-gray-100 flex items-center justify-center">
                                    <span className="text-sm font-bold text-gray-400">{company.initial}</span>
                                </div>
                                <span className="text-lg font-semibold tracking-tight">{company.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
