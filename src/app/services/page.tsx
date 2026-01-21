import { StatsSection } from "@/components/common/stats-section";
import { HomeCapabilitiesSection } from "@/components/home-capabilities-section";
import { HomeManufacturingProcess } from "@/components/home-manufacturing-process";
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
    </div>
  );
}
