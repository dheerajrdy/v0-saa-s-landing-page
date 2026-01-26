"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

const scanLines = [
  { text: "$ prooflayer scan --agent customer-support-v2", type: "command" as const, delay: 0 },
  { text: "", type: "blank" as const, delay: 400 },
  { text: "Scanning agent configuration...", type: "info" as const, delay: 600 },
  { text: "Testing 47 attack vectors...", type: "info" as const, delay: 1200 },
  { text: "", type: "blank" as const, delay: 1600 },
  { text: "RESULTS", type: "header" as const, delay: 2000 },
  { text: "────────────────────────────────────────", type: "divider" as const, delay: 2100 },
  { text: "Prompt Injection      12 tests   PASS", type: "pass" as const, delay: 2400 },
  { text: "Data Exfiltration      8 tests   PASS", type: "pass" as const, delay: 2600 },
  { text: "Jailbreak Attempts    15 tests   2 FOUND", type: "warn" as const, delay: 2800 },
  { text: "Hallucination Risk     6 tests   PASS", type: "pass" as const, delay: 3000 },
  { text: "Voice Deepfake         4 tests   PASS", type: "pass" as const, delay: 3200 },
  { text: "Code Injection         2 tests   1 FOUND", type: "warn" as const, delay: 3400 },
  { text: "", type: "blank" as const, delay: 3600 },
  { text: "3 vulnerabilities detected. Generating guardrails...", type: "info" as const, delay: 3800 },
  { text: "Guardrails deployed. Agent secured. ✓", type: "success" as const, delay: 4400 },
]

export function SecurityAnimation() {
  const [visibleLines, setVisibleLines] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isInView) return

    const timeouts: NodeJS.Timeout[] = []

    scanLines.forEach((line, index) => {
      const timeout = setTimeout(() => {
        setVisibleLines(index + 1)
      }, line.delay)
      timeouts.push(timeout)
    })

    return () => timeouts.forEach(clearTimeout)
  }, [isInView])

  const getLineColor = (type: string) => {
    switch (type) {
      case "command": return "text-indigo-400"
      case "header": return "text-white font-semibold"
      case "divider": return "text-gray-600"
      case "pass": return "text-gray-300"
      case "warn": return "text-amber-400"
      case "success": return "text-indigo-400 font-medium"
      case "info": return "text-gray-400"
      default: return "text-gray-500"
    }
  }

  const renderLine = (line: typeof scanLines[0]) => {
    if (line.type === "blank") return "\u00A0"

    if (line.type === "pass") {
      const parts = line.text.split("PASS")
      return (
        <>
          <span className="text-gray-400">{parts[0]}</span>
          <span className="text-indigo-400">PASS</span>
        </>
      )
    }

    if (line.type === "warn") {
      const match = line.text.match(/(.*?)(\d+ FOUND)$/)
      if (match) {
        return (
          <>
            <span className="text-gray-400">{match[1]}</span>
            <span className="text-amber-400">{match[2]}</span>
          </>
        )
      }
    }

    return line.text
  }

  return (
    <div ref={ref} className="mx-auto max-w-2xl">
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-gray-100 px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-amber-400" />
            <div className="h-3 w-3 rounded-full bg-indigo-400" />
          </div>
          <span className="ml-2 text-xs text-gray-400 font-mono">ProofLayer Security Scanner</span>
        </div>

        {/* Terminal body */}
        <div className="bg-gray-950 p-5 font-mono text-[13px] leading-relaxed min-h-[380px]">
          {scanLines.slice(0, visibleLines).map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.15 }}
              className={getLineColor(line.type)}
            >
              {renderLine(line)}
            </motion.div>
          ))}
          {visibleLines < scanLines.length && isInView && (
            <span className="inline-block h-4 w-1.5 animate-pulse bg-indigo-400" />
          )}
        </div>
      </div>
    </div>
  )
}
