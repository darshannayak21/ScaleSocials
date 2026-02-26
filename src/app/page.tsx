import { HeroSection } from "../components/sections/HeroSection";
import { AboutSection } from "../components/sections/AboutSection";
import { ServicesSection } from "../components/sections/ServicesSection";
import { FoundersSection } from "../components/sections/FoundersSection";
import { PortfolioSection } from "../components/sections/PortfolioSection";
import { WhyChooseUsSection } from "../components/sections/WhyChooseUsSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { ContactSection } from "../components/sections/ContactSection";
import { Footer } from "../components/ui/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden bg-white">
      <HeroSection />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 space-y-32 py-24">
        <AboutSection />
        <ServicesSection />
        <FoundersSection />
        <PortfolioSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <ContactSection />
      </div>

      <Footer />
    </main>
  );
}
