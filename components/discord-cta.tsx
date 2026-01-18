"use client"

import { motion } from "framer-motion"
import { MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DiscordCta() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl mb-12"
        >
            <a
                href="#"
                className="group flex items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 p-4 sm:p-6 shadow-lg shadow-indigo-500/20 transition-all hover:shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-0.5"
            >
                <div className="flex items-center gap-4">
                    <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                        <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-medium text-indigo-200 uppercase tracking-wider">🔥 Community</span>
                        </div>
                        <p className="text-white font-semibold">
                            Get direct help from ProofLayer founders and early builders
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-white font-medium whitespace-nowrap">
                    <span className="hidden sm:inline">Join Discord</span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </div>
            </a>
        </motion.div>
    )
}
