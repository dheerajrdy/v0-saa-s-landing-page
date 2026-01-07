import { ArrowRight, Mic, Shield, Activity, CheckCircle } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: <Mic className="h-6 w-6" />,
      title: "Input",
      description: "Voice agent receives user audio",
      color: "cyan",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Neo AI Guardrails",
      description: "Real-time PII redaction & fraud detection",
      color: "purple",
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Neo AI Evals",
      description: "Flow scoring & acoustic analysis",
      color: "blue",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Safe Output",
      description: "Verified, compliant response delivery",
      color: "emerald",
    },
  ]

  return (
    <section id="how-it-works" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">How It Works</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            End-to-end acoustic assurance for every voice interaction
          </p>
        </div>

        <div className="relative">
          {/* Connection line - desktop only */}
          <div className="absolute top-16 left-0 right-0 hidden h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-${step.color}-500 bg-[#0a0a0f] text-${step.color}-400`}
                  >
                    {step.icon}
                  </div>
                  <h3 className="mb-2 font-semibold text-white">{step.title}</h3>
                  <p className="text-sm text-gray-400">{step.description}</p>
                </div>

                {/* Arrow for mobile/tablet */}
                {index < steps.length - 1 && (
                  <div className="mt-4 flex justify-center sm:hidden">
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
            <span className="font-mono text-xs text-gray-500">barge-in-test.py</span>
          </div>
          <pre className="overflow-x-auto p-4 font-mono text-sm">
            <code className="text-gray-300">
              <span className="text-purple-400">from</span> neo_ai <span className="text-purple-400">import</span>{" "}
              EvalClient, PersonaSwarm{"\n\n"}
              <span className="text-gray-500"># Initialize the eval client</span>
              {"\n"}
              client = EvalClient(target=<span className="text-cyan-400">"wss://your-agent.vapi.ai"</span>){"\n\n"}
              <span className="text-gray-500"># Run barge-in stress test</span>
              {"\n"}
              results = client.run_test({"\n"}
              {"  "}persona=PersonaSwarm.INTERRUPTER,{"\n"}
              {"  "}delays=[<span className="text-cyan-400">150</span>, <span className="text-cyan-400">300</span>,{" "}
              <span className="text-cyan-400">500</span>], <span className="text-gray-500"># ms</span>
              {"\n"}
              {"  "}iterations=<span className="text-cyan-400">20</span>
              {"\n"}){"\n\n"}
              <span className="text-purple-400">print</span>(f<span className="text-cyan-400">"Flow Score: </span>
              {"{"}results.flow_score{"}"}
              <span className="text-cyan-400">"</span>){"\n"}
              <span className="text-purple-400">print</span>(f
              <span className="text-cyan-400">"Recovery Time P99: </span>
              {"{"}results.recovery_p99{"}"}
              <span className="text-cyan-400">ms"</span>)
            </code>
          </pre>
        </div>
      </div>
    </section>
  )
}
