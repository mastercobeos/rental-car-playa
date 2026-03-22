import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FleetSection } from "@/components/fleet-section"
import { FeaturesSection } from "@/components/features-section"
import { ReviewsSection } from "@/components/reviews-section"
import { ContactFAQSection } from "@/components/contact-faq-section"
import { Footer } from "@/components/footer"
import { SEOSchemas } from "@/components/seo-schemas"

export default function HomePage() {
  return (
    <>
      <SEOSchemas />
      <main>
        <Header />
        <HeroSection />
        <FleetSection />
        <FeaturesSection />
        <ReviewsSection />
        <ContactFAQSection />
        <Footer />
      </main>
    </>
  )
}
