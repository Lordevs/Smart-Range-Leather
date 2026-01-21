"use client";

import { DynamicHeroSection } from "@/components/common/dynamic-hero-section";

export default function AboutUsHeroSection() {
  return (
    <DynamicHeroSection
      imageSrc="/images/hero-imgs/about-us.png"
      imageAlt="About Us"
      title="Crafting Leather Excellence For Over Three Decades"
      subtext="Where timeless craftsmanship meets modern innovation. We transform premium leather into exceptional garments that tell your story."
      primaryButtonLabel="Request a Quote"
      secondaryButtonLabel=""
      overlayGradient=""
      contentClassName="text-center flex flex-col items-center"
      buttonContainerClassName="flex justify-center"
    />
  );
}
