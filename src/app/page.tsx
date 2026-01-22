import HomeHeroSection from "@/components/home/home-hero-section";
import { StatsSection } from "@/components/common/stats-section";
import { AboutSection } from "@/components/shared/about-section";
import { OurProductsSection } from "@/components/shared/our-products-section";
import { HomeWhyChooseUs } from "@/components/shared/home-why-choose-us";
import { HomeManufacturingProcess } from "@/components/shared/home-manufacturing-process";
import { HomeCapabilitiesSection } from "@/components/shared/home-capabilities-section";
import { HomeClientsSection } from "@/components/shared/home-clients-section";
import { HomeSustainabilitySection } from "@/components/shared/home-sustainability-section";
import { HomeCertificationsSection } from "@/components/shared/home-certifications-section";
;import { HomeContactSection } from "@/components/shared/home-contact-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HomeHeroSection />
      <StatsSection />
      <AboutSection />
      <OurProductsSection />
      <HomeWhyChooseUs />
      <HomeCapabilitiesSection />
      <HomeManufacturingProcess />
      <HomeCertificationsSection />
      <HomeSustainabilitySection />
      <HomeClientsSection />
      <HomeContactSection />
    </main>
  );
}
