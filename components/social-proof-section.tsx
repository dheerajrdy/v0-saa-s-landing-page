"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const integrations = [
    { name: "Retell AI", logo: "https://cdn.prod.website-files.com/65cf99990ba1a3e79ec2e449/66c48826a2d31cbb99e14f50_cropped%20logo.svg" },
    { name: "Twilio", logo: "https://www.vectorlogo.zone/logos/twilio/twilio-icon.svg" },
    { name: "LiveKit", logo: "https://livekit.io/images/livekit-mark.svg" },
    { name: "OpenAI", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
    { name: "Anthropic", logo: "https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg" },
]

const testimonials = [
    {
        quote: "We deployed 15 voice agents in 3 weeks. Zero compliance incidents.",
        author: "VP Operations",
        company: "Series B Fintech",
    },
    {
        quote: "The kill switch saved us from a jailbreak attempt on day one.",
        author: "CISO",
        company: "Regional Bank",
    },
]

export function SocialProofSection() {
    return (
        <section className="px-4 py-20 sm:px-6 lg:px-8 bg-white border-y border-gray-100">
            <div className="mx-auto max-w-7xl">
                {/* Testimonials */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-8">
                        Trusted by Compliance Teams
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="rounded-2xl border border-gray-200 bg-gray-50 p-6 text-left"
                            >
                                <p className="text-gray-700 italic mb-4">"{t.quote}"</p>
                                <p className="text-sm text-gray-500">
                                    — <span className="font-medium text-gray-700">{t.author}</span>, {t.company}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Integration Logos */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center"
                >
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-8">
                        Integrates with
                    </h3>
                    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
                        {integrations.map((integration, i) => (
                            <div
                                key={integration.name}
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                            >
                                <span className="text-sm font-medium">{integration.name}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
