"use client";

import { useState } from "react";
import { ROUTES } from "@/constants/route";
import { DynamicHeroSection } from "../common/dynamic-hero-section";
import { DownloadCatalogueDialog } from "../common/download-catalogue-dialog";

export default function HeroSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <DynamicHeroSection
        imageSrc="/images/hero-imgs/hero.webp"
        imageAlt="Leather Craftsmanship"
        videoSrc="/videos/smart-range.mp4"
        title={
          <>
            <span className="text-primary">Low MOQ</span> Leather Jackets and{" "}
            <br className="hidden md:block" />
            Accessories <span className="text-primary">Manufacturer</span>
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
        onSecondaryButtonClick={() => setIsDialogOpen(true)}
        overlayGradient="linear-gradient(to right, rgba(10, 5, 0, 0.89) 0%, rgba(10, 5, 0, 0.89) 50%, rgba(6, 6, 6, 0.74) 100%)"
      />
      <DownloadCatalogueDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        showTrigger={false}
        dialogTitle="Request Samples & Catalogue"
        dialogDescription="Enter your details below to request samples and access our full catalogue."
      />
    </>
  );
}
