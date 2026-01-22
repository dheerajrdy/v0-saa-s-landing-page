import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProblemGrid } from "@/components/problem-grid"
import { Features } from "@/components/features"
import { PricingSection } from "@/components/pricing-section"
import { SocialProofSection } from "@/components/social-proof-section"
import { FinalCta } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-gray-900">
      <Header />
      <Hero />
      <ProblemGrid />
      <Features />
      <PricingSection />
      <SocialProofSection />
      <FinalCta />
      <Footer />
    </main>
  )
}
