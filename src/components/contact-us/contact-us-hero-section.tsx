import { DynamicHeroSection } from "@/components/common/dynamic-hero-section";
import { ROUTES } from "@/constants/route";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";

export default function ContactUsHeroSection() {
  return (
    <DynamicHeroSection
      imageSrc="/images/hero-imgs/contact-us.png"
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
      secondaryButtonHref={process.env.NEXT_PUBLIC_WHATSAPP_URL}
      secondaryButtonLabel="Chat on What'sApp"
      secondaryButtonIcon={WhatsAppIcon}
      secondaryButtonClassName="bg-green-500 text-white hover:bg-green-600"
      contentClassName="text-center flex flex-col items-center"
      buttonContainerClassName="flex justify-center"
    />
  );
}
