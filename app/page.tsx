import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { DeviceShowcaseSection } from "@/components/device-showcase-section"
import { ServicesSection } from "@/components/services-section"
import { CommitmentSection } from "@/components/commitment-section"
import { TargetAudienceSection } from "@/components/target-audience-section"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <DeviceShowcaseSection />
      <ServicesSection />
      <CommitmentSection />
      <TargetAudienceSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
