import { ClientSegmentsSection } from "@/components/common/client-segments-section";
import { StatsSection } from "@/components/common/stats-section";
import { HomeCapabilitiesSection } from "@/components/home-capabilities-section";
import { HomeClientsSection } from "@/components/home-clients-section";
import { HomeManufacturingProcess } from "@/components/home-manufacturing-process";
import { HomeSustainabilitySection } from "@/components/home-sustainability-section";
import { HomeWhyChooseUs } from "@/components/home-why-choose-us";
import { OurServicesSection } from "@/components/our-services-section";
import ServicesHeroSection from "@/components/services/services-hero-section";

export default function Services() {
  return (
    <div>
      <ServicesHeroSection />
      <OurServicesSection />
      <StatsSection />
      <HomeManufacturingProcess />
      <HomeCapabilitiesSection />
      <HomeSustainabilitySection />
      <HomeClientsSection />
      <HomeWhyChooseUs />
    </div>
  );
}
