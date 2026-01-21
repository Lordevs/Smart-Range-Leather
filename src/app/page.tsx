import HomeHeroSection from "@/components/home-hero-section";
import { StatsSection } from "@/components/common/stats-section";
import { AboutSection } from "@/components/about-section";
import { OurProductsSection } from "@/components/our-products-section";
import { WhyChooseUs } from "@/components/common/why-choose-us";
import { HomeCapabilitiesSection } from "@/components/home-capabilities-section";
import { ManufacturingProcess } from "@/components/common/manufacturing-process";
import { HomeSustainabilitySection } from "@/components/home-sustainability-section";
import { HomeCertificationsSection } from "@/components/home-certifications-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HomeHeroSection />
      <StatsSection />
      <AboutSection />
      <OurProductsSection />
      <WhyChooseUs />
      <HomeCapabilitiesSection />
      <ManufacturingProcess />
      <HomeCertificationsSection />
      <HomeSustainabilitySection />
    </main>
  );
}
