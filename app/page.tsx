import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import FinalCta from "@/components/final-cta"
import Footer from "@/components/footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}
