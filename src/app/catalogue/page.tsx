import { ApproachSection } from "@/components/about-us/approach-section";
import CatalogueHeroSection from "@/components/catalogue/catalogue-hero-section";
import { HomeCatalogueCTA } from "@/components/shared/home-catalogue-cta";
import { HomeCertificationsSection } from "@/components/shared/home-certifications-section";
import { HomeManufacturingProcess } from "@/components/shared/home-manufacturing-process";
import { CatalogueProductSection } from "@/components/catalogue/catalogue-product-section";
import { HomeSustainabilitySection } from "@/components/shared/home-sustainability-section";

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
