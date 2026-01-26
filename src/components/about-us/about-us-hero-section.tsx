"use client";

import { DynamicHeroSection } from "@/components/common/dynamic-hero-section";
import { ROUTES } from "@/constants/route";
// about us
export default function AboutUsHeroSection() {
  return (
    <DynamicHeroSection
      imageSrc="/images/hero-imgs/about-us.webp"
      imageAlt="About Us"
      title="Over 30 Years of Leather Manufacturing Experience"
      subtext="We manufacture leather garments and accessories for brands, retailers, and uniform suppliers. Low MOQs, fast sampling, ISO-certified systems, and global shipping support"
      primaryButtonLabel="Request a Quote"
      primaryButtonHref={ROUTES.CONTACT_FORM}
      secondaryButtonLabel=""
      overlayGradient=""
      contentClassName="text-center flex flex-col items-center"
      subtextClassName="mx-auto"
      buttonContainerClassName="flex justify-center"
    />
  );
}
