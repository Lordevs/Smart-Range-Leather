import HomeHeroSection from "@/components/home-hero-section";
import { StatsSection } from "@/components/common/stats-section";
import { AboutSection } from "@/components/about-section";
import { OurProductsSection } from "@/components/our-products-section";
import { HomeWhyChooseUs } from "@/components/home-why-choose-us";
import { HomeManufacturingProcess } from "@/components/home-manufacturing-process";
import { HomeCapabilitiesSection } from "@/components/home-capabilities-section";
import { HomeCertificationsSection } from "@/components/home-certifications-section";
import { HomeCatalogueCTA } from "@/components/home-catalogue-cta";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HomeHeroSection />
      <StatsSection />
      <AboutSection />
      <HomeCatalogueCTA />
      <OurProductsSection />
      <HomeWhyChooseUs />
      <HomeCapabilitiesSection />
      <HomeManufacturingProcess />
      <HomeCertificationsSection />
    </main>
  );
}
