import { ROUTES } from "@/constants/route";
import { TextWithImageSection } from "../common/text-with-image-section";

export function AboutSection() {
  return (
    <TextWithImageSection
      tag="About Us"
      title={
        <>
          Manufacturing <br />
          <span className="text-[#6C3403]">Leather Products</span> <br />
          Built to Last
        </>
      }
      description={[
        "Smart Range Leather is a vertically integrated leather factory manufacturer specialising in premium leather garments, shearling jackets, bags, and accessories.",
        "From sourcing top-grade hides to final finishing, every stage of production is handled with precision, consistency, and craftsmanship.",
        "We don't just manufacture products. We help brands bring leather collections to market with confidence.",
      ]}
      buttonHref={ROUTES.ABOUT}
      imageSrc="/images/services/private-label-manufacturing.webp"
      imageAlt="Leather Workshop"
      accentColor="#6C3403"
      circleColor="#ffcc80"
    />
  );
}
