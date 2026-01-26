import { ROUTES } from "@/constants/route";
import { DynamicHeroSection } from "../common/dynamic-hero-section";

export default function HeroSection() {
  return (
    <DynamicHeroSection
      imageSrc="/images/hero-imgs/hero.webp"
      imageAlt="Leather Craftsmanship"
      videoSrc="/videos/smart-range.mp4"
      title={
        <>
          <span className="text-primary">Low MOQ</span> Leather Jackets and{" "}
          <br className="hidden md:block" />
          Accessories <span className="text-primary">Manufacturer</span>
          {/* for{" "}
          <span className="text-primary border-b-3 border-primary">
            Global Brands
          </span>{" "}
          and{" "}
          <span className="text-primary border-b-3 border-primary">
            Retailers
          </span> */}
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
      secondaryButtonLabel="Request Samples"
      secondaryButtonHref={ROUTES.ABOUT}
      overlayGradient="linear-gradient(to right, rgba(10, 5, 0, 0.89) 0%, rgba(10, 5, 0, 0.89) 50%, rgba(6, 6, 6, 0.74) 100%)"
    />
  );
}
