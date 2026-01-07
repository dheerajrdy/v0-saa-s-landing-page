import { Button } from "@/components/ui/button"
import { ArrowRight, AudioWaveform as Waveform } from "lucide-react"

export function FinalCta() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 via-[#12121a] to-purple-500/10 p-8 text-center sm:p-12">
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
          <div className="absolute bottom-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

          <div className="mb-6 inline-flex items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 p-3">
            <Waveform className="h-6 w-6 text-cyan-400" />
          </div>

          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Ready to Ship Voice Agents{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">That Work?</span>
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-gray-400">
            Join the engineering teams building voice agents that users actually want to talk to. Get your Flow Score in
            under 5 minutes.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-cyan-500 text-black hover:bg-cyan-400">
              Start Building Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-700 bg-transparent text-white hover:bg-white/10">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
