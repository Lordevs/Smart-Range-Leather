"use client";

import { ItemGridSection } from "../common/item-grid-section";
import { DownloadCatalogueDialog } from "../common/download-catalogue-dialog";

const products = [
  {
    title: "Leather Jackets and Coats (Men and Women)",
    description:
      "Premium  leather outerwear, blending timeless style with contemporary design and superior quality.",
    image:
      "/images/products/jackets/leather-jackets-and-Coats-men-and-women.png",
    images: [
      "/images/products/jackets/1.png",
      "/images/products/jackets/2.png",
      "/images/products/jackets/3.png",
      "/images/products/jackets/4.png",
      "/images/products/jackets/5.png",
    ],
  },
  {
    title: "Leather Bags",
    description:
      "Exquisite leather bags and daily essentials, showcasing impeccable craftsmanship and functional luxury.",
    image: "/images/products/bags/leather-bags.webp",
    images: [
      "/images/products/bags/1.png",
      "/images/products/bags/2.png",
      "/images/products/bags/3.png",
    ],
  },
  {
    title: "Leather Pants and Skirts",
    description:
      "Statement leather apparel designed for a perfect silhouette, blending edgy modern style with high-end luxury.",
    image: "/images/products/pants/leather-pants-and-skirts.webp",
    images: [
      "/images/products/pants/1.png",
      "/images/products/pants/2.png",
      "/images/products/pants/3.png",
    ],
  },
  {
    title: "Shearling Jackets and Coats",
    description:
      "Luxurious shearling and classic aviator styles, engineered for warmth and refined aesthetic appeal.",
    image: "/images/products/shearling/shearling-jackets-and-coats.webp",
    images: [
      "/images/products/shearling/1.png",
      "/images/products/shearling/2.png",
      "/images/products/shearling/3.png",
      "/images/products/shearling/4.png",
      "/images/products/shearling/5.png",
      "/images/products/shearling/6.png",
    ],
  },
  {
    title: "Leather Belts",
    description:
      "Finely finished leather belts that combine robust functionality with a polished look for every occasion.",
    image: "/images/products/belts/leather-belts.webp",
    images: [
      "/images/products/belts/1.png",
      "/images/products/belts/2.png",
      "/images/products/belts/3.png",
    ],
  },
  {
    title: "Wallets and Small Goods",
    description:
      "Elegantly designed wallets and accessories, meticulously crafted from the finest leather for lasting sophistication.",
    image: "/images/products/wallets/wallets-and-small-goods.png",
    images: [
      "/images/products/wallets/1.png",
      "/images/products/wallets/2.png",
      "/images/products/wallets/3.png",
    ],
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
