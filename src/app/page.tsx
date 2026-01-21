import HomeHeroSection from "@/components/home-hero-section";
import { StatsSection } from "@/components/common/stats-section";
import { AboutSection } from "@/components/about-section";
import { OurProductsSection } from "@/components/our-products-section";
import { HomeCapabilitiesSection } from "@/components/home-capabilities-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HomeHeroSection />
      <StatsSection />
      <AboutSection />
      <OurProductsSection />
      <HomeCapabilitiesSection />
    </main>
  );
}
