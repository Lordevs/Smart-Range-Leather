"use client";

import { DynamicHeroSection } from "@/components/common/dynamic-hero-section";

export default function ContactUsHeroSection() {
  return (
    <DynamicHeroSection
      imageSrc="/images/hero-imgs/contact-us.png"
      imageAlt="Contact Us"
      title="Contact Us"
      subtext="Let's discuss your leather product needs."
      primaryButtonLabel=""
      secondaryButtonLabel=""
      overlayGradient=""
      contentClassName="text-center flex flex-col items-center"
      buttonContainerClassName="flex justify-center"
    />
  );
}
