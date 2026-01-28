import { DynamicHeroSection } from "@/components/common/dynamic-hero-section";
import { ROUTES } from "@/constants/route";

export default function ContactUsHeroSection() {
  return (
    <DynamicHeroSection
      imageSrc="/images/hero-imgs/contact-us.webp"
      imageAlt="Contact Us"
      title="Request a Quote"
      subtext={
        <>
          Share your product details and quantity. <br /> We&apos;ll reply with
          pricing, MOQ options, sampling timeline, and lead time.
        </>
      }
      primaryButtonLabel="Request a Quote"
      primaryButtonHref={ROUTES.CONTACT_FORM}
      secondaryButtonLabel="Chat on WhatsApp"
      secondaryButtonHref={process.env.NEXT_PUBLIC_WHATSAPP_URL}
      overlayGradient=""
      contentClassName="text-center flex flex-col items-center"
      buttonContainerClassName="flex justify-center"
    />
  );
}
