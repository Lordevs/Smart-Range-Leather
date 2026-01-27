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
            <span className="text-primary border-b-2 border-primary">
              Low MOQ
            </span>{" "}
            Leather Jackets and <br className="hidden md:block" />
            Accessories{" "}
            <span className="text-primary border-b-2 border-primary">
              Manufacturer
            </span>
          </>
        }
        subtext="OEM/ODM and private label production for brands and retailers. Fast sampling, reliable lead times, ISO-certified quality systems, and worldwide shipping."
        features={[
          "Over 30 Years of Manufacturing Excellence",
          "Fast Sampling",
          "On-time Global Delivery",
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
