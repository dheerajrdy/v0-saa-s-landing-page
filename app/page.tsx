import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WhySection } from "@/components/why-section"
import { HowItWorks } from "@/components/how-it-works"
import { ServicesSection } from "@/components/services-section"
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
        <WhySection />
        <HowItWorks />
        <ServicesSection />
        <FinalCta />
        <Footer />
      </div>
    </main>
  )
}
