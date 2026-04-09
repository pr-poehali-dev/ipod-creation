import { useState, useEffect } from "react"
import func2url from "../../backend/func2url.json"
import { Hero3DWebGL as Hero3D } from "@/components/hero-webgl"
import { FeaturesSection } from "@/components/features-section"
import { TechnologySection } from "@/components/technology-section"
import { ApplicationsTimeline } from "@/components/applications-timeline"
import { AboutSection } from "@/components/about-section"
import { SafetySection } from "@/components/safety-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ChatModal } from "@/components/chat-modal"
import { CursorGlow } from "@/components/cursor-glow"

export default function Index() {
  const [chatOpen, setChatOpen] = useState(false)

  useEffect(() => {
    const ping = () => fetch(func2url["keep-alive"]).catch(() => null)
    ping()
    const id = setInterval(ping, 4 * 60 * 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="dark">
      <Navbar onChatOpen={() => setChatOpen(true)} />
      <main>
        <Hero3D onChatOpen={() => setChatOpen(true)} />
        <FeaturesSection />
        <section id="technology">
          <TechnologySection />
        </section>
        <ApplicationsTimeline />
        <AboutSection />
        <section id="safety">
          <SafetySection />
        </section>
        <TestimonialsSection />
        <section id="faq">
          <FAQSection />
        </section>
        <CTASection onChatOpen={() => setChatOpen(true)} />
      </main>
      <Footer />
      <ChatModal open={chatOpen} onClose={() => setChatOpen(false)} />
      <CursorGlow />
    </div>
  )
}