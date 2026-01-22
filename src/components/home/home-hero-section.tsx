import { ROUTES } from "@/constants/route";
import { DynamicHeroSection } from "../common/dynamic-hero-section";

export default function HeroSection() {
  return (
    <DynamicHeroSection
      imageSrc="/images/leather-craftsmanship.png"
      imageAlt="Leather Craftsmanship"
      videoSrc="/videos/smart-range.mp4"
      title={
        <>
          High Quality Leather Manufacturing <br className="hidden md:block" />
          for{" "}
          <span className="text-primary border-b-3 border-primary">
            Global Brands
          </span>{" "}
          and{" "}
          <span className="text-primary border-b-3 border-primary">
            Retailers
          </span>
        </>
      }
      subtext="Premium leather garments, shearling, bags, and accessories, manufactured with precision, flexibility, and uncompromising quality."
      features={[
        "Over 20 years of manufacturing excellence",
        "Low MOQs",
        "On-time global delivery",
      ]}
      primaryButtonLabel="Request a Quote"
      primaryButtonHref={ROUTES.CONTACT_FORM}
      secondaryButtonLabel="Explore Our Capabilities"
      secondaryButtonHref={ROUTES.ABOUT}
      overlayGradient="linear-gradient(to right, rgba(10, 5, 0, 0.89) 0%, rgba(10, 5, 0, 0.89) 50%, rgba(6, 6, 6, 0.74) 100%)"
    />
  );
}
