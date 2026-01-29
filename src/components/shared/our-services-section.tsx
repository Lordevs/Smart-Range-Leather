"use client";

import { ItemGridSection } from "../common/item-grid-section";

const services = [
  {
    title: "Product Development (OEM/ODM)",
    description:
      "Creative, tailored, trend-focused designs with fast sampling, prototyping, and technical development to bring your ideas to life.",
    image: "/images/services/product-design-and-development.webp",
    images: [
      "/images/services/product-design-and-development.webp",
      "/images/services/pattern-making-and-sample-development.webp",
    ],
  },
  {
    title: "Private Label Manufacturing",
    description:
      "Full-scale production solutions for your brand, maintaining the highest quality standards from start to finish.",
    image: "/images/services/private-label-manufacturing.webp",
    images: [
      "/images/services/private-label-manufacturing.webp",
      "/images/services/finishing-quality-control-and-compliance.webp",
    ],
  },
  {
    title: "Materials and Hardware Sourcing",
    description:
      "Expert craftsmanship in creating premium leather bags, wallets, and accessories with attention to every stitch.",
    image: "/images/services/leather-bags-and-small-goods.webp",
  },
  {
    title: "Pattern Making and Sampling",
    description:
      "Transforming concepts into precision patterns and physical samples to ensure perfect fit and functionality.",
    image: "/images/services/pattern-making-and-sampling.webp",
    images: [
      "/images/services/pattern-making-and-sampling.webp",
      "/images/services/pattern-making-and-sample-development.webp",
    ],
  },
  {
    title: "Export Packing and Shipping Support",
    description:
      "Seamless international shipping and compliance support to deliver your products anywhere in the world.",
    image: "/images/services/global-logistics-and-export-support.webp",
  },
  {
    title: "Quality Control and Compliance",
    description:
      "Rigorous inspection and finishing processes to meet international safety and quality standards.",
    image: "/images/services/finishing-quality-control-and-compliance.webp",
  },
];

export function OurServicesSection() {
  return (
    <ItemGridSection
      tag="What We Do"
      title={
        <>
          Our Core <span className="text-[#6C3403]">Service Offerings</span>
        </>
      }
      items={services}
    />
  );
}
