import { DynamicHeroSection } from "./common/dynamic-hero-section";

export default function HeroSection() {
  return (
    <DynamicHeroSection
      imageSrc="/images/leather-craftsmanship.png"
      imageAlt="Leather Craftsmanship"
      videoSrc="/videos/smart-range.mp4"
      title={
        <>
          High Quality Leather Manufacturing <br className="hidden md:block" />
          for <span className="text-primary">Global Brands</span> and <span className="text-primary">Retailers</span>
        </>
      }
      subtext="Premium leather garments, shearling, bags, and accessories, manufactured with precision, flexibility, and uncompromising quality."
      features={[
        "Over 20 years of manufacturing excellence",
        "Low MOQs",
        "On-time global delivery"
      ]}
      primaryButtonLabel="Request a Quote"
      secondaryButtonLabel="Explore Our Capabilities"
      overlayGradient="linear-gradient(to right, rgba(71, 53, 24, 0.82) 0%, rgba(71, 53, 24, 0.82) 50%, rgba(71, 53, 24, 0.5) 100%)"
    />
  );
}
