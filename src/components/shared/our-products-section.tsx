"use client";

import { ItemGridSection } from "../common/item-grid-section";
import { DownloadCatalogueDialog } from "../common/download-catalogue-dialog";

const products = [
  {
    title: "Leather Jackets and Coats",
    description:
      "Premium handcrafted leather outerwear, blending timeless style with contemporary design and superior quality.",
    image: "/images/products/leather-jackets-and-coats.webp",
  },
  {
    title: "Shearling and Aviator Jackets",
    description:
      "Luxurious shearling and classic aviator styles, engineered for warmth and refined aesthetic appeal.",
    image: "/images/products/shearling-and-aviatorjackets.webp",
  },
  {
    title: "Leather Bags and Small Goods",
    description:
      "Exquisite leather bags and daily essentials, showcasing impeccable craftsmanship and functional luxury.",
    image: "/images/products/leather-bags-and-small-goods.webp",
  },
  {
    title: "Leather Accessories",
    description:
      "Sophisticated belts, gloves, and small leather items designed to complement a premium lifestyle.",
    image: "/images/products/leather-accessories.webp",
  },
  {
    title: "Custom and Private Label Collections",
    description:
      "Bespoke manufacturing solutions tailored to your brand's unique specifications and design vision.",
    image: "/images/products/custom-and-private-cabel-collections.webp",
  },
];

export function OurProductsSection() {
  return (
    <ItemGridSection
      tag="Our Products"
      title={
        <>
          What We <span className="text-[#6C3403]">Manufacture</span>
        </>
      }
      items={products}
      footer={
        <DownloadCatalogueDialog className="bg-[#6C3403] px-12! text-sm tracking-widest text-[#fdfbf8] hover:bg-[#5a2b02]" />
      }
    />
  );
}
