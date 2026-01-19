import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProblemGrid } from "@/components/problem-grid"
import { WedgeDiagram } from "@/components/wedge-diagram"
import { Integration } from "@/components/integration"
import { Features } from "@/components/features"
import { Pricing } from "@/components/pricing"
import { FinalCta } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-gray-900">
      <Header />
      <Hero />
      <ProblemGrid />
      <WedgeDiagram />
      <Integration />
      <Features />
      <Pricing />
      <FinalCta />
      <Footer />
    </main>
  )
}
