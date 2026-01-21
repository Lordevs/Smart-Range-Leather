import HomeHeroSection from "@/components/home-hero-section";
import { StatsSection } from "@/components/common/stats-section";
import { AboutSection } from "@/components/about-section";
import { OurProductsSection } from "@/components/our-products-section";
import { OurServicesSection } from "@/components/our-services-section";
import { HomeWhyChooseUs } from "@/components/home-why-choose-us";
import { HomeManufacturingProcess } from "@/components/home-manufacturing-process";
import { HomeCapabilitiesSection } from "@/components/home-capabilities-section";
import { HomeClientsSection } from "@/components/home-clients-section";
import { HomeSustainabilitySection } from "@/components/home-sustainability-section";
import { HomeCertificationsSection } from "@/components/home-certifications-section";
import { HomeCatalogueCTA } from "@/components/home-catalogue-cta";
import { HomeContactSection } from "@/components/home-contact-section";

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
