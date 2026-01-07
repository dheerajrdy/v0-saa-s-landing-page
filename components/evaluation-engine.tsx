import type React from "react"
import { Activity, MessageSquareWarning, Clock, Shield, Zap } from "lucide-react"

export function EvaluationEngine() {
  const questionCards = [
    {
      icon: <MessageSquareWarning className="h-5 w-5" />,
      question: "Your prompt broke the conversation flow?",
      description: "Test how prompt changes impact conversational quality before they hit production.",
    },
    {
      icon: <Clock className="h-5 w-5" />,
      question: "Latency spikes killing user experience?",
      description: "Monitor P99 latency in real-time and catch issues before users notice.",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      question: "Barge-ins causing agent confusion?",
      description: "Stress test with interruptive synthetic personas at 150ms, 300ms, and 500ms intervals.",
    },
    {
      icon: <Shield className="h-5 w-5" />,
      question: "Compliance checks getting skipped?",
      description: "Automated evaluation for safety guardrails and required disclaimers.",
    },
  ]

  return (
    <section id="features" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-400">
            <Activity className="h-3 w-3" />
            EVALUATION ENGINE
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">The Acoustic Eval Suite</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Developer-centric tooling that quantifies the "vibe" of your voice agent. Not just what it says—how it
            sounds.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Main eval dashboard mockup */}
          <div className="rounded-xl border border-white/10 bg-[#12121a] p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono text-sm text-gray-400">Flow Scorecard</span>
              <span className="rounded bg-green-500/20 px-2 py-0.5 font-mono text-xs text-green-400">PASSING</span>
            </div>

            <div className="space-y-4">
              {[
                { label: "Interruption Recovery", value: 92, color: "cyan" },
                { label: "Latency Consistency", value: 88, color: "blue" },
                { label: "False Trigger Rate", value: 96, color: "emerald" },
                { label: "Stop Command Compliance", value: 94, color: "purple" },
              ].map((metric) => (
                <div key={metric.label}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-gray-400">{metric.label}</span>
                    <span className={`font-mono text-${metric.color}-400`}>{metric.value}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/5">
                    <div
                      className={`h-full rounded-full bg-${metric.color}-500`}
                      style={{ width: `${metric.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Latency histogram */}
            <div className="mt-6 border-t border-white/10 pt-4">
              <div className="mb-2 font-mono text-xs text-gray-500">LATENCY HISTOGRAM (ms)</div>
              <div className="flex h-20 items-end justify-between gap-1">
                {[12, 45, 78, 95, 82, 56, 34, 18, 8, 4, 2, 1].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-cyan-500/30 to-cyan-400"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="mt-1 flex justify-between font-mono text-xs text-gray-600">
                <span>0</span>
                <span>200</span>
                <span>400</span>
                <span>600</span>
                <span>800+</span>
              </div>
            </div>
          </div>

          {/* Question-driven feature cards (Cekura style) */}
          <div className="grid gap-4 sm:grid-cols-2">
            {questionCards.map((card) => (
              <QuestionCard
                key={card.question}
                icon={card.icon}
                question={card.question}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function QuestionCard({
  icon,
  question,
  description,
}: {
  icon: React.ReactNode
  question: string
  description: string
}) {
  return (
    <div className="group rounded-xl border border-white/10 bg-[#12121a] p-5 transition-all hover:border-cyan-500/30 hover:bg-[#12121a]/80">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 transition-colors group-hover:bg-cyan-500/20">
        {icon}
      </div>
      <h3 className="mb-2 font-semibold text-white">{question}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  )
}
