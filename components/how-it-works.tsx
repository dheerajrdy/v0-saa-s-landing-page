import { ArrowRight, Plug, Beaker, BarChart3 } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: <Plug className="h-6 w-6" />,
      title: "Connect",
      description: "Integrate NeoAI with your voice agent in minutes. Works with Vapi, Retell, LiveKit, and more.",
      color: "cyan",
    },
    {
      step: "02",
      icon: <Beaker className="h-6 w-6" />,
      title: "Test",
      description: "Run pre-production simulations across diverse personas. Catch issues before users do.",
      color: "purple",
    },
    {
      step: "03",
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Monitor",
      description: "Track production conversations in real-time. Get alerts on latency spikes and flow issues.",
      color: "emerald",
    },
  ]

  return (
    <section id="how-it-works" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-400">
            Simple. Seamless. Smart.
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">How It Works</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            End-to-end acoustic assurance for every voice interaction in three easy steps
          </p>
        </div>

        <div className="relative">
          {/* Connection line - desktop only */}
          <div className="absolute top-20 left-0 right-0 hidden h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 lg:block" />

          <div className="grid gap-8 sm:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="flex flex-col items-center text-center">
                  {/* Step number */}
                  <div className="mb-4 font-mono text-sm text-gray-500">{step.step}</div>

                  <div
                    className={`relative z-10 mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-${step.color}-500 bg-[#0a0a0f] text-${step.color}-400`}
                  >
                    {step.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-white">{step.title}</h3>
                  <p className="text-sm text-gray-400">{step.description}</p>
                </div>

                {/* Arrow for mobile/tablet */}
                {index < steps.length - 1 && (
                  <div className="mt-6 flex justify-center sm:hidden">
                    <ArrowRight className="h-5 w-5 rotate-90 text-gray-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Code snippet */}
        <div className="mt-16 overflow-hidden rounded-xl border border-white/10 bg-[#12121a]">
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-2">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <div className="h-3 w-3 rounded-full bg-green-500/80" />
            </div>
            <span className="font-mono text-xs text-gray-500">quick-start.py</span>
          </div>
          <pre className="overflow-x-auto p-4 font-mono text-sm">
            <code className="text-gray-300">
              <span className="text-purple-400">from</span> neo_ai <span className="text-purple-400">import</span>{" "}
              EvalClient{"\n\n"}
              <span className="text-gray-500"># Connect in one line</span>
              {"\n"}
              client = EvalClient(target=<span className="text-cyan-400">"wss://your-agent.vapi.ai"</span>){"\n\n"}
              <span className="text-gray-500"># Run your first test</span>
              {"\n"}
              results = client.quick_test(){"\n\n"}
              <span className="text-purple-400">print</span>(f<span className="text-cyan-400">"Flow Score: </span>
              {"{"}results.flow_score{"}"}
              <span className="text-cyan-400">"</span>)
            </code>
          </pre>
        </div>
      </div>
    </section>
  )
}
