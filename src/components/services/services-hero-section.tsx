import { ROUTES } from "@/constants/route";
import { DynamicHeroSection } from "../common/dynamic-hero-section";

export default function ServicesHeroSection() {
  return (
    <DynamicHeroSection
      imageSrc="/images/services/hero-services.webp"
      imageAlt="Our Services"
      title="Manufacturing Services"
      subtext="At Smart Range Leather, we provide OEM/ODM and private label manufacturing for leather garments and accessories. From product development and sampling to bulk production, QC, and export-ready delivery"
      primaryButtonLabel="Request a Quote"
      primaryButtonHref={ROUTES.CONTACT_FORM}
      secondaryButtonLabel="Request Samples"
      secondaryButtonHref={ROUTES.ABOUT}
      overlayGradient=""
      contentClassName="text-center flex flex-col items-center"
      buttonContainerClassName="flex justify-center"
    />
  );
}
