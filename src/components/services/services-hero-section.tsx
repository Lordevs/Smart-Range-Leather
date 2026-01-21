"use client";

import { DynamicHeroSection } from "../common/dynamic-hero-section";

export default function ServicesHeroSection() {
  return (
    <DynamicHeroSection
      imageSrc="/images/our-services.png"
      imageAlt="Our Services"
      title="Our Service"
      subtext="At Smart Range Leather, we deliver premium craftsmanship and efficient, scalable solutions across the leather supply chain."
      primaryButtonLabel="Request a Quote"
      secondaryButtonLabel="Explore Our Capabilities"
      overlayGradient=""
      contentClassName="text-center flex flex-col items-center"
      buttonContainerClassName="flex justify-center"
    />
  );
}
