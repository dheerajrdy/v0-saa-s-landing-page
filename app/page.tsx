import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { CompatibilityBar } from "@/components/compatibility-bar"
import { WhySection } from "@/components/why-section"
import { DemoSection } from "@/components/demo-section"
import { WhyProofLayer } from "@/components/why-prooflayer"
import { FinalCta } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white bg-dot-pattern text-gray-900">
      {/* Ambient glow behind hero */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/4 h-[600px] w-[900px] rounded-full bg-indigo-400/[0.04] blur-[100px]" />
      </div>

      <div className="relative">
        <Header />
        <Hero />
        <CompatibilityBar />
        <WhySection />
        <DemoSection />
        <WhyProofLayer />
        <FinalCta />
        <Footer />
      </div>
    </main>
  )
}
