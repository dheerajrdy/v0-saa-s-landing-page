"use client"

import { motion } from "framer-motion"
import { Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const tiers = [
    {
        name: "Starter",
        price: "$0",
        description: "Perfect for experimenting and side projects.",
        features: [
            "Up to 1,000 minutes/month",
            "Standard voice selection",
            "Community support",
            "Basic analytics",
        ],
        cta: "Start Building",
        color: "indigo",
    },
    {
        name: "Pro",
        price: "$99",
        period: "/month",
        description: "For startups scaling their voice operations.",
        features: [
            "Up to 10,000 minutes/month",
            "Premium neural voices",
            "Priority email support",
            "Advanced analytics & logs",
            "Custom vocabulary",
        ],
        cta: "Get Started",
        popular: true,
        color: "violet",
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "Dedicated infrastructure for high-volume needs.",
        features: [
            "Unlimited volume",
            "Custom voice cloning",
            "Dedicated success manager",
            "SSO & audit logs",
            "SLA guarantees",
            "On-premise deployment options",
        ],
        cta: "Contact Sales",
        color: "emerald",
    },
]

const colorClasses = {
    indigo: {
        badge: "bg-indigo-50 text-indigo-700 ring-indigo-600/10",
        button: "bg-indigo-600 hover:bg-indigo-500",
        ring: "ring-indigo-200",
    },
    violet: {
        badge: "bg-violet-50 text-violet-700 ring-violet-600/10",
        button: "bg-violet-600 hover:bg-violet-500",
        ring: "ring-violet-200",
    },
    emerald: {
        badge: "bg-emerald-50 text-emerald-700 ring-emerald-600/10",
        button: "bg-emerald-600 hover:bg-emerald-500",
        ring: "ring-emerald-200",
    },
}

export function Pricing() {
    return (
        <section id="pricing" className="relative py-24 sm:py-32 bg-white overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
                        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                            Simple, transparent pricing
                        </p>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-6 text-lg leading-8 text-gray-600"
                    >
                        Choose the plan that fits your scale. No hidden fees.
                    </motion.p>
                </div>
                <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-3 lg:gap-x-8">
                    {tiers.map((tier, tierIdx) => {
                        const colors = colorClasses[tier.color as keyof typeof colorClasses]

                        return (
                            <motion.div
                                key={tier.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: tierIdx * 0.1 + 0.2 }}
                                className={`relative flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 ${tier.popular ? 'lg:z-10 lg:rounded-b-none lg:shadow-xl lg:ring-2 lg:ring-indigo-600' : 'lg:mt-8'
                                    } ${tier.name === 'Enterprise' ? 'lg:rounded-r-3xl' : ''} ${tier.name === 'Starter' ? 'lg:rounded-l-3xl' : ''}`}
                            >
                                <div>
                                    <div className="flex items-center justify-between gap-x-4">
                                        <h3 id={tier.name} className={`text-lg font-semibold leading-8 ${tier.popular ? 'text-indigo-600' : 'text-gray-900'}`}>
                                            {tier.name}
                                        </h3>
                                        {tier.popular && (
                                            <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
                                                Most popular
                                            </span>
                                        )}
                                    </div>
                                    <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                                    <p className="mt-6 flex items-baseline gap-x-1">
                                        <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.price}</span>
                                        {tier.period && <span className="text-sm font-semibold leading-6 text-gray-600">{tier.period}</span>}
                                    </p>
                                    <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                                        {tier.features.map((feature) => (
                                            <li key={feature} className="flex gap-x-3">
                                                <Check className={`h-6 w-5 flex-none ${tier.popular ? 'text-indigo-600' : 'text-gray-600'}`} aria-hidden="true" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <a
                                    href="#"
                                    aria-describedby={tier.name}
                                    className={`mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${tier.popular
                                            ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600'
                                            : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'
                                        }`}
                                >
                                    {tier.cta}
                                </a>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
