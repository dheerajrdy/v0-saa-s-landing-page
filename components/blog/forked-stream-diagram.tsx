"use client"

import { motion } from "framer-motion"
import { Phone, Shield, Bot, Activity, Mic, Clock, ArrowRight, ArrowDown, Zap } from "lucide-react"

export function ForkedStreamDiagram() {
    return (
        <div className="my-12">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-8"
            >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Forked Stream Topology</h3>
                <p className="text-sm text-gray-500">Zero latency inference path with parallel safety analysis</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl border border-gray-200 bg-white p-6 md:p-10 shadow-lg overflow-hidden"
            >
                {/* Desktop Layout */}
                <div className="hidden md:block">
                    <div className="flex items-start justify-between gap-4">
                        {/* Ingress */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col items-center"
                        >
                            <div className="h-16 w-16 rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center">
                                <Phone className="h-8 w-8 text-gray-500" />
                            </div>
                            <span className="mt-2 text-sm font-medium text-gray-900">Ingress</span>
                            <span className="text-xs text-gray-500">Twilio / LiveKit</span>
                        </motion.div>

                        {/* Arrow to Junction */}
                        <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            whileInView={{ opacity: 1, scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex items-center mt-6"
                        >
                            <div className="h-0.5 w-12 bg-gradient-to-r from-gray-300 to-indigo-400" />
                            <ArrowRight className="h-4 w-4 text-indigo-500 -ml-1" />
                        </motion.div>

                        {/* Junction - Fork Point */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col items-center relative"
                        >
                            <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/25">
                                <Shield className="h-10 w-10 text-white" />
                            </div>
                            <span className="mt-2 text-sm font-semibold text-indigo-600">Junction</span>
                            <span className="text-xs text-gray-500">Frame Duplication</span>

                            {/* Fork lines emanating */}
                            <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-20">
                                <svg className="w-full h-full" viewBox="0 0 32 80">
                                    <motion.path
                                        d="M0 40 L16 40 L32 15"
                                        fill="none"
                                        stroke="url(#fastGradient)"
                                        strokeWidth="2"
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5, duration: 0.5 }}
                                    />
                                    <motion.path
                                        d="M0 40 L16 40 L32 65"
                                        fill="none"
                                        stroke="url(#safetyGradient)"
                                        strokeWidth="2"
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5, duration: 0.5 }}
                                    />
                                    <defs>
                                        <linearGradient id="fastGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#818cf8" />
                                            <stop offset="100%" stopColor="#10b981" />
                                        </linearGradient>
                                        <linearGradient id="safetyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#818cf8" />
                                            <stop offset="100%" stopColor="#f59e0b" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </motion.div>

                        {/* Two Paths */}
                        <div className="flex flex-col gap-6 ml-8">
                            {/* Fast Path (Stream A) */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                                className="flex items-center gap-3"
                            >
                                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-200">
                                    <Zap className="h-4 w-4 text-emerald-500" />
                                    <div>
                                        <span className="text-xs font-semibold text-emerald-700 block">Stream A: Fast Path</span>
                                        <span className="text-[10px] text-emerald-600">~0ms added latency</span>
                                    </div>
                                </div>
                                <ArrowRight className="h-4 w-4 text-emerald-400" />
                                <div className="h-12 w-12 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center">
                                    <Bot className="h-6 w-6 text-emerald-600" />
                                </div>
                                <span className="text-xs text-gray-600">S2S Model</span>
                            </motion.div>

                            {/* Safety Path (Stream B) */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.7 }}
                                className="flex items-center gap-3"
                            >
                                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 border border-amber-200">
                                    <Activity className="h-4 w-4 text-amber-500" />
                                    <div>
                                        <span className="text-xs font-semibold text-amber-700 block">Stream B: Safety Path</span>
                                        <span className="text-[10px] text-amber-600">Ring Buffer → Async Analysis</span>
                                    </div>
                                </div>
                                <ArrowRight className="h-4 w-4 text-amber-400" />
                                <div className="flex items-center gap-1">
                                    <div className="h-10 w-10 rounded-lg bg-amber-100 border border-amber-200 flex items-center justify-center">
                                        <Mic className="h-5 w-5 text-amber-600" />
                                    </div>
                                    <div className="h-10 w-10 rounded-lg bg-rose-100 border border-rose-200 flex items-center justify-center">
                                        <Activity className="h-5 w-5 text-rose-500" />
                                    </div>
                                </div>
                                <span className="text-xs text-gray-600">ASR + Emotion</span>
                            </motion.div>
                        </div>

                        {/* Egress */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-col items-center ml-4"
                        >
                            <div className="h-16 w-16 rounded-2xl bg-violet-100 border border-violet-200 flex items-center justify-center">
                                <Clock className="h-8 w-8 text-violet-500" />
                            </div>
                            <span className="mt-2 text-sm font-medium text-gray-900">Egress</span>
                            <span className="text-xs text-gray-500">Jitter Buffer</span>
                            <span className="text-[10px] text-violet-600 mt-1">50-100ms</span>
                        </motion.div>
                    </div>

                    {/* Decision Banner */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.9 }}
                        className="mt-8 flex justify-center"
                    >
                        <div className="inline-flex items-center gap-3 rounded-full bg-gray-100 px-5 py-2.5 text-sm">
                            <span className="text-gray-600">Violation detected?</span>
                            <span className="h-1 w-1 rounded-full bg-gray-400" />
                            <span className="text-rose-600 font-medium">Packet drop + Safety audio injection</span>
                        </div>
                    </motion.div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden space-y-4">
                    {/* Ingress */}
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
                        <div className="h-12 w-12 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center">
                            <Phone className="h-6 w-6 text-gray-500" />
                        </div>
                        <div>
                            <span className="text-sm font-medium text-gray-900">1. Ingress</span>
                            <span className="text-xs text-gray-500 block">Audio from Twilio/LiveKit</span>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <ArrowDown className="h-5 w-5 text-gray-400" />
                    </div>

                    {/* Junction */}
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-indigo-50 border border-indigo-100">
                        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
                            <Shield className="h-6 w-6 text-white" />
                        </div>
                        <div>
                            <span className="text-sm font-semibold text-indigo-600">2. Junction</span>
                            <span className="text-xs text-gray-600 block">Frame duplicated in memory</span>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <ArrowDown className="h-5 w-5 text-gray-400" />
                    </div>

                    {/* Streams */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100">
                            <div className="flex items-center gap-2 mb-2">
                                <Zap className="h-4 w-4 text-emerald-500" />
                                <span className="text-xs font-semibold text-emerald-700">Fast Path</span>
                            </div>
                            <span className="text-[10px] text-emerald-600">~0ms → S2S Model</span>
                        </div>
                        <div className="p-3 rounded-xl bg-amber-50 border border-amber-100">
                            <div className="flex items-center gap-2 mb-2">
                                <Activity className="h-4 w-4 text-amber-500" />
                                <span className="text-xs font-semibold text-amber-700">Safety Path</span>
                            </div>
                            <span className="text-[10px] text-amber-600">ASR + Analysis</span>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <ArrowDown className="h-5 w-5 text-gray-400" />
                    </div>

                    {/* Egress */}
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-violet-50 border border-violet-100">
                        <div className="h-12 w-12 rounded-xl bg-violet-100 border border-violet-200 flex items-center justify-center">
                            <Clock className="h-6 w-6 text-violet-500" />
                        </div>
                        <div>
                            <span className="text-sm font-medium text-gray-900">3. Egress</span>
                            <span className="text-xs text-gray-500 block">Jitter Buffer (50-100ms)</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
