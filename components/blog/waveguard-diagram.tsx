"use client"

import { motion } from "framer-motion"
import { Activity, Filter, FileText, GitCompare, CheckCircle, XCircle, ArrowRight, ArrowDown } from "lucide-react"

export function WaveGuardDiagram() {
    return (
        <div className="my-12">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-8"
            >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">WaveGuard: Adversarial Defense</h3>
                <p className="text-sm text-gray-500">Parallel stream comparison detects adversarial perturbations</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl border border-gray-200 bg-white p-6 md:p-10 shadow-lg"
            >
                {/* Desktop Layout */}
                <div className="hidden md:block">
                    <div className="flex items-start gap-8">
                        {/* Input Audio */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col items-center"
                        >
                            <div className="h-16 w-16 rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center">
                                <Activity className="h-8 w-8 text-gray-500" />
                            </div>
                            <span className="mt-2 text-sm font-medium text-gray-900">Input Audio</span>
                            <span className="text-xs text-gray-500">Potentially adversarial</span>
                        </motion.div>

                        {/* Fork Arrow */}
                        <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            whileInView={{ opacity: 1, scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex items-center mt-6"
                        >
                            <div className="h-0.5 w-8 bg-gray-300" />
                            <ArrowRight className="h-4 w-4 text-gray-400 -ml-1" />
                        </motion.div>

                        {/* Two Parallel Streams */}
                        <div className="flex-1 space-y-4">
                            {/* Original Stream */}
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="flex items-center gap-3"
                            >
                                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-blue-50 border border-blue-200 min-w-[160px]">
                                    <Activity className="h-5 w-5 text-blue-500" />
                                    <div>
                                        <span className="text-xs font-semibold text-blue-700 block">Original Stream</span>
                                        <span className="text-[10px] text-blue-600">Unmodified audio</span>
                                    </div>
                                </div>
                                <ArrowRight className="h-4 w-4 text-gray-400" />
                                <div className="px-3 py-2 rounded-lg bg-blue-100 border border-blue-200">
                                    <span className="text-xs text-blue-700">ASR</span>
                                </div>
                                <ArrowRight className="h-4 w-4 text-gray-400" />
                                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 border border-gray-200">
                                    <FileText className="h-4 w-4 text-gray-500" />
                                    <span className="text-xs text-gray-700">Transcript A</span>
                                </div>
                            </motion.div>

                            {/* Sanitized Stream */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="flex items-center gap-3"
                            >
                                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-amber-50 border border-amber-200 min-w-[160px]">
                                    <Filter className="h-5 w-5 text-amber-500" />
                                    <div>
                                        <span className="text-xs font-semibold text-amber-700 block">Sanitized Stream</span>
                                        <span className="text-[10px] text-amber-600">Lossy transform</span>
                                    </div>
                                </div>
                                <ArrowRight className="h-4 w-4 text-gray-400" />
                                <div className="px-3 py-2 rounded-lg bg-amber-100 border border-amber-200">
                                    <span className="text-xs text-amber-700">ASR</span>
                                </div>
                                <ArrowRight className="h-4 w-4 text-gray-400" />
                                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 border border-gray-200">
                                    <FileText className="h-4 w-4 text-gray-500" />
                                    <span className="text-xs text-gray-700">Transcript B</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Comparison Arrow */}
                        <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            whileInView={{ opacity: 1, scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="flex items-center mt-10"
                        >
                            <div className="h-0.5 w-8 bg-gray-300" />
                            <ArrowRight className="h-4 w-4 text-gray-400 -ml-1" />
                        </motion.div>

                        {/* Comparator */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7 }}
                            className="flex flex-col items-center"
                        >
                            <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/25">
                                <GitCompare className="h-10 w-10 text-white" />
                            </div>
                            <span className="mt-2 text-sm font-semibold text-violet-600">Comparator</span>
                            <span className="text-xs text-gray-500">Divergence check</span>
                        </motion.div>
                    </div>

                    {/* Decision Outputs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                        className="mt-8 flex justify-center gap-6"
                    >
                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-200">
                            <CheckCircle className="h-5 w-5 text-emerald-500" />
                            <div>
                                <span className="text-sm font-medium text-emerald-700">Match</span>
                                <span className="text-xs text-emerald-600 block">Clean audio → Pass</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-50 border border-rose-200">
                            <XCircle className="h-5 w-5 text-rose-500" />
                            <div>
                                <span className="text-sm font-medium text-rose-700">Divergence</span>
                                <span className="text-xs text-rose-600 block">Adversarial → Use sanitized</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden space-y-4">
                    {/* Input */}
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
                        <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center">
                            <Activity className="h-5 w-5 text-gray-500" />
                        </div>
                        <div>
                            <span className="text-sm font-medium text-gray-900">Input Audio</span>
                            <span className="text-xs text-gray-500 block">Potentially adversarial</span>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <ArrowDown className="h-5 w-5 text-gray-400" />
                    </div>

                    {/* Two streams side by side */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 text-center">
                            <Activity className="h-5 w-5 text-blue-500 mx-auto mb-1" />
                            <span className="text-xs font-semibold text-blue-700 block">Original</span>
                            <span className="text-[10px] text-blue-600">→ ASR → Text A</span>
                        </div>
                        <div className="p-3 rounded-xl bg-amber-50 border border-amber-100 text-center">
                            <Filter className="h-5 w-5 text-amber-500 mx-auto mb-1" />
                            <span className="text-xs font-semibold text-amber-700 block">Sanitized</span>
                            <span className="text-[10px] text-amber-600">→ ASR → Text B</span>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <ArrowDown className="h-5 w-5 text-gray-400" />
                    </div>

                    {/* Comparator */}
                    <div className="flex justify-center">
                        <div className="flex flex-col items-center p-4 rounded-xl bg-violet-50 border border-violet-100">
                            <GitCompare className="h-8 w-8 text-violet-500 mb-2" />
                            <span className="text-sm font-semibold text-violet-700">Compare Transcripts</span>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <ArrowDown className="h-5 w-5 text-gray-400" />
                    </div>

                    {/* Decisions */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-center">
                            <CheckCircle className="h-5 w-5 text-emerald-500 mx-auto mb-1" />
                            <span className="text-xs font-semibold text-emerald-700">Match = Safe</span>
                        </div>
                        <div className="p-3 rounded-xl bg-rose-50 border border-rose-100 text-center">
                            <XCircle className="h-5 w-5 text-rose-500 mx-auto mb-1" />
                            <span className="text-xs font-semibold text-rose-700">Diverge = Block</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
