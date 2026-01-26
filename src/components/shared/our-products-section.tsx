"use client";

import { ItemGridSection } from "../common/item-grid-section";
import { DownloadCatalogueDialog } from "../common/download-catalogue-dialog";

const products = [
  {
    title: "Leather Jackets and Coats (Men and Women)",
    description:
      "Premium handcrafted leather outerwear, blending timeless style with contemporary design and superior quality.",
    image: "/images/products/leather-jackets-and-Coats-men-and-women.png",
  },
  {
    title: "Leather Bags",
    description:
      "Exquisite leather bags and daily essentials, showcasing impeccable craftsmanship and functional luxury.",
    image: "/images/products/leather-bags.webp",
  },
  {
    title: "Leather Pants and Skirts",
    description:
      "Statement leather apparel designed for a perfect silhouette, blending edgy modern style with high-end luxury.",
    image: "/images/products/leather-pants-and-skirts.webp",
  },
  {
    title: "Shearling Jackets and Coats",
    description:
      "Luxurious shearling and classic aviator styles, engineered for warmth and refined aesthetic appeal.",
    image: "/images/products/shearling-jackets-and-coats.webp",
  },
  {
    title: "Leather Belts",
    description:
      "Finely finished leather belts that combine robust functionality with a polished look for every occasion.",
    image: "/images/products/leather-belts.webp",
  },
  {
    title: "Wallets and Small Goods",
    description:
      "Elegantly designed wallets and accessories, meticulously crafted from the finest leather for lasting sophistication.",
    image: "/images/products/wallets-and-Small-goods.png",
  },
];

export function OurProductsSection() {
  return (
    <ItemGridSection
      tag="Our Products"
      gridClassName="lg:grid-cols-3"
      title={
        <>
          What We <span className="text-[#6C3403]">Manufacture</span>
        </>
      }
      items={products}
      imageClassName="object-contain"
      footer={
        <DownloadCatalogueDialog
          buttonLabel="Request Catalogue"
          className="bg-[#6C3403] text-[#fdfbf8] hover:bg-[#5a2b02]! px-12! py-7! tracking-widest!"
        />
      }
    />
  );
}
