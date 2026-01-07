import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { SocialProof } from "@/components/social-proof"
import { EvaluationEngine } from "@/components/evaluation-engine"
import { ComplianceSecurity } from "@/components/compliance-security"
import { HowItWorks } from "@/components/how-it-works"
import { Pricing } from "@/components/pricing"
import { FinalCta } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <Header />
      <Hero />
      <SocialProof />
      <EvaluationEngine />
      <ComplianceSecurity />
      <HowItWorks />
      <Pricing />
      <FinalCta />
      <Footer />
    </main>
  )
}
