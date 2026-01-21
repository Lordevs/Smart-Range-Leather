import { AboutSection } from "@/components/about-section";
import { ApproachSection } from "@/components/about-us/approach-section";
import CatalogueHeroSection from "@/components/catalogue/catalogue-hero-section";
import { HomeCatalogueCTA } from "@/components/home-catalogue-cta";
import { HomeCertificationsSection } from "@/components/home-certifications-section";
import { HomeManufacturingProcess } from "@/components/home-manufacturing-process";
import { HomeSustainabilitySection } from "@/components/home-sustainability-section";
import { CatalogueProductSection } from "@/components/catalogue/catalogue-product-section";

export default function CataloguePage() {
  return (
    <div>
      <CatalogueHeroSection />
      <CatalogueProductSection />
      <ApproachSection />
      <HomeCatalogueCTA />
      <HomeManufacturingProcess />
      <HomeCertificationsSection />
      <HomeSustainabilitySection />
    </div>
  );
}
