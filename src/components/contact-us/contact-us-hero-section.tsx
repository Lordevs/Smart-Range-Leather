import { DynamicHeroSection } from "@/components/common/dynamic-hero-section";
import { ROUTES } from "@/constants/route";

export default function ContactUsHeroSection() {
  return (
    <DynamicHeroSection
      imageSrc="/images/hero-imgs/contact-us.webp"
      imageAlt="Contact Us"
      title="Contact Us"
      subtext="Let&apos;s discuss your needs for premium leather products. We provide high-quality, tailored solutions, from custom designs to expert craftsmanship. Share your preferences, and we&apos;ll guide you to the perfect fit."
      primaryButtonLabel="View our Capibilities"
      primaryButtonHref={ROUTES.ABOUT}
      secondaryButtonLabel=""
      overlayGradient=""
      contentClassName="text-center flex flex-col items-center"
      buttonContainerClassName="flex justify-center"
    />
  );
}
