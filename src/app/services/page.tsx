import { StatsSection } from "@/components/common/stats-section";
import { HomeCapabilitiesSection } from "@/components/shared/home-capabilities-section";
import { HomeClientsSection } from "@/components/shared/home-clients-section";
import { HomeManufacturingProcess } from "@/components/shared/home-manufacturing-process";
import { HomeSustainabilitySection } from "@/components/shared/home-sustainability-section";
import { HomeWhyChooseUs } from "@/components/shared/home-why-choose-us";
import { OurServicesSection } from "@/components/shared/our-services-section";
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
