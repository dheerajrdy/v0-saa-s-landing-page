import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { SocialProof } from "@/components/social-proof"
import { Stats } from "@/components/stats"
import { ProblemGrid } from "@/components/problem-grid"
import { WedgeDiagram } from "@/components/wedge-diagram"
import { Integration } from "@/components/integration"
import { Features } from "@/components/features"
import { UseCases } from "@/components/use-cases"
import { FinalCta } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-gray-900">
      <Header />
      <Hero />
      <SocialProof />
      <Stats />
      <ProblemGrid />
      <WedgeDiagram />
      <Integration />
      <Features />
      <UseCases />
      <FinalCta />
      <Footer />
    </main>
  )
}
