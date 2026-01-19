"use client"

import { motion } from "framer-motion"
import { Check, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"

const tiers = [
    {
        name: "Starter",
        description: "For teams exploring voice AI compliance",
        calls: "1,000",
        latency: "<50ms",
        features: {
            sso: false,
            auditLogs: false,
            dedicatedSupport: false,
        },
    },
    {
        name: "Growth",
        description: "For production voice AI deployments",
        calls: "10,000",
        latency: "<50ms",
        popular: true,
        features: {
            sso: true,
            auditLogs: true,
            dedicatedSupport: false,
        },
    },
    {
        name: "Enterprise",
        description: "For mission-critical compliance needs",
        calls: "Unlimited",
        latency: "<30ms",
        features: {
            sso: true,
            auditLogs: true,
            dedicatedSupport: true,
        },
    },
]

export function PricingSection() {
    return (
        <section className="px-4 py-24 sm:px-6 lg:px-8 bg-[#FAFAFA]" id="pricing">
            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        No hidden fees. No compliance surprises. Pay for what you use.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative rounded-2xl border bg-white p-8 ${tier.popular
                                ? "border-indigo-500 shadow-xl shadow-indigo-500/10"
                                : "border-gray-200"
                                }`}
                        >
                            {tier.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-xs font-medium rounded-full">
                                    Most Popular
                                </div>
                            )}
                            <div className="text-center mb-6">
                                <h3 className="text-xl font-bold text-gray-900">{tier.name}</h3>
                                <p className="text-sm text-gray-500 mt-1">{tier.description}</p>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span className="text-sm text-gray-500">Calls/month</span>
                                    <span className="font-semibold text-gray-900">{tier.calls}</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span className="text-sm text-gray-500">Latency</span>
                                    <span className="font-semibold text-gray-900">{tier.latency}</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span className="text-sm text-gray-500">SSO</span>
                                    {tier.features.sso ? (
                                        <Check className="h-4 w-4 text-emerald-500" />
                                    ) : (
                                        <Minus className="h-4 w-4 text-gray-300" />
                                    )}
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span className="text-sm text-gray-500">Audit Logs</span>
                                    {tier.features.auditLogs ? (
                                        <Check className="h-4 w-4 text-emerald-500" />
                                    ) : (
                                        <Minus className="h-4 w-4 text-gray-300" />
                                    )}
                                </div>
                                <div className="flex justify-between items-center py-2">
                                    <span className="text-sm text-gray-500">Dedicated Support</span>
                                    {tier.features.dedicatedSupport ? (
                                        <Check className="h-4 w-4 text-emerald-500" />
                                    ) : (
                                        <Minus className="h-4 w-4 text-gray-300" />
                                    )}
                                </div>
                            </div>

                            <a href="mailto:hello@proof-layer.com?subject=Pricing Inquiry - ${tier.name} Plan">
                                <Button
                                    className={`w-full rounded-full ${tier.popular
                                        ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white hover:from-indigo-600 hover:to-violet-600"
                                        : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                                        }`}
                                >
                                    Contact for Pricing
                                </Button>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
