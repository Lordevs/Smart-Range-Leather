"use client";

import { Download } from "lucide-react";
import { DynamicHeroSection } from "../common/dynamic-hero-section";
import { DownloadCatalogueDialog } from "../common/download-catalogue-dialog";

export default function HeroSection() {
  return (
    <>
      <DynamicHeroSection
        imageSrc="/images/hero-imgs/hero.webp"
        imageAlt="Leather Craftsmanship"
        title={
          <>
            Leather Product Catalogue for <br />
            <span className="text-primary border-b-3 border-primary">
              Brands
            </span>{" "}
            and{" "}
            <span className="text-primary border-b-3 border-primary">
              Retailers
            </span>
          </>
        }
        subtext="Explore a selection of leather products manufactured by Smart Range Leather. This catalogue highlights key product types, but it is not a limitation of what we produce. If it is made from leather, we can manufacture it."
        primaryButtonLabel="Download Catalogue"
        primaryButtonIcon={Download}
        primaryButton={
          <DownloadCatalogueDialog
            buttonLabel="Download Catalogue"
            className="min-w-52 text-[17px] text-[#6C3403] font-medium"
          />
        }
        bottomText="Low minimum order quantities. Custom manufacturing. Global delivery."
        secondaryButtonLabel=""
        overlayGradient=""
      />
    </>
  );
}
