import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function Pricing() {
  const plans = [
    {
      name: "Developer",
      price: "Free",
      description: "For individual developers exploring acoustic evals",
      features: ["100 eval minutes/month", "Basic Flow Score", "Community support", "Public dashboard"],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Startup",
      price: "$299",
      period: "/month",
      description: "For teams shipping production voice agents",
      features: [
        "10,000 eval minutes/month",
        "Full Persona Swarm access",
        "Latency histograms & P99",
        "Prompt versioning",
        "Slack integration",
        "Priority support",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For organizations with compliance requirements",
      features: [
        "Unlimited eval minutes",
        "Edge deployment (VPC)",
        "Federated learning",
        "SOC2/HIPAA/GDPR compliance",
        "Custom personas",
        "Dedicated support",
        "SLA guarantee",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="border-t border-white/5 bg-[#08080c] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Simple, Transparent Pricing</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">Start free, scale as you grow. No hidden fees.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl border p-6 ${
                plan.highlighted
                  ? "border-cyan-500/50 bg-gradient-to-b from-cyan-500/10 to-transparent"
                  : "border-white/10 bg-[#12121a]"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-cyan-500 px-3 py-1 text-xs font-medium text-black">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                <div className="mt-2 flex items-baseline">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="ml-1 text-gray-400">{plan.period}</span>}
                </div>
                <p className="mt-2 text-sm text-gray-400">{plan.description}</p>
              </div>

              <ul className="mb-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.highlighted
                    ? "bg-cyan-500 text-black hover:bg-cyan-400"
                    : "border-gray-700 bg-transparent text-white hover:bg-white/10"
                }`}
                variant={plan.highlighted ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
