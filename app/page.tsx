import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WhySection } from "@/components/why-section"
import { ServicesSection } from "@/components/services-section"
import { FinalCta } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      <Hero />
      <WhySection />
      <ServicesSection />
      <FinalCta />
      <Footer />
    </main>
  )
}
