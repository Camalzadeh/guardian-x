import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { AboutSection } from "@/components/about-section"
import { DeviceShowcaseSection } from "@/components/device-showcase-section"
import { ServicesSection } from "@/components/services-section"
import { TeamSection } from "@/components/team-section"
import { AchievementsSection } from "@/components/achievements-section"
import { AdvantagesSection } from "@/components/advantages-section"
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
      <ProblemSection />
      <AboutSection />
      <DeviceShowcaseSection />
      <ServicesSection />
      <TeamSection />
      <AchievementsSection />
      <AdvantagesSection />
      <CommitmentSection />
      <TargetAudienceSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
