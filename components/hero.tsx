import { Button } from "@/components/ui/button"
import { ArrowRight, AudioWaveform as Waveform } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-32 pb-20 sm:px-6 lg:px-8 lg:pt-40 lg:pb-32">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm text-cyan-400">
            <Waveform className="h-4 w-4" />
            <span>Acoustic-Native Evaluation Platform</span>
          </div>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Evaluate Voice AI.{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Before It Breaks.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-gray-400 text-balance sm:text-xl">
            Launch voice agents that work in every scenario. Pre-production testing, real-time monitoring, 
            and acoustic-native evals—metrics invisible to text-based tools.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="bg-cyan-500 text-black hover:bg-cyan-400">
              Start Building
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-700 bg-transparent text-white hover:bg-white/10">
              Book Demo
            </Button>
          </div>

          {/* Hero Visual - Audio Waveform Visualization */}
          <div className="mt-16 w-full max-w-4xl">
            <div className="relative rounded-xl border border-white/10 bg-[#12121a] p-6 shadow-2xl">
              <div className="absolute -top-px left-20 right-20 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-500/80" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <div className="h-3 w-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="font-mono text-xs text-gray-500">neo-eval-session-042</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                  <span className="font-mono text-xs text-green-500">LIVE</span>
                </div>
              </div>

              {/* Waveform visualization */}
              <div className="flex h-32 items-center justify-center gap-0.5">
                {Array.from({ length: 80 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-1 rounded-full bg-gradient-to-t from-cyan-500/50 to-cyan-400"
                    style={{
                      height: `${Math.sin(i * 0.15) * 40 + 50 + Math.random() * 20}%`,
                      opacity: 0.3 + Math.random() * 0.7,
                    }}
                  />
                ))}
              </div>

              {/* Metrics bar */}
              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-4 sm:grid-cols-4">
                <div>
                  <div className="font-mono text-xs text-gray-500">FLOW SCORE</div>
                  <div className="mt-1 font-mono text-2xl font-bold text-cyan-400">94</div>
                </div>
                <div>
                  <div className="font-mono text-xs text-gray-500">P99 LATENCY</div>
                  <div className="mt-1 font-mono text-2xl font-bold text-green-400">287ms</div>
                </div>
                <div>
                  <div className="font-mono text-xs text-gray-500">BARGE-IN</div>
                  <div className="mt-1 font-mono text-2xl font-bold text-blue-400">98%</div>
                </div>
                <div>
                  <div className="font-mono text-xs text-gray-500">FALSE TRIGGERS</div>
                  <div className="mt-1 font-mono text-2xl font-bold text-emerald-400">0.2%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
