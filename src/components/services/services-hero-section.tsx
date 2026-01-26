"use client";

import { useState } from "react";
import { ROUTES } from "@/constants/route";
import { DynamicHeroSection } from "../common/dynamic-hero-section";
import { DownloadCatalogueDialog } from "../common/download-catalogue-dialog";

export default function ServicesHeroSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <DynamicHeroSection
        imageSrc="/images/services/hero-services.webp"
        imageAlt="Our Services"
        title="Manufacturing Services"
        subtext="At Smart Range Leather, we provide OEM/ODM and private label manufacturing for leather garments and accessories. From product development and sampling to bulk production, QC, and export-ready delivery"
        primaryButtonLabel="Request a Quote"
        primaryButtonHref={ROUTES.CONTACT_FORM}
        secondaryButtonLabel="Request Samples"
        onSecondaryButtonClick={() => setIsDialogOpen(true)}
        overlayGradient=""
        contentClassName="text-center flex flex-col items-center"
        buttonContainerClassName="flex justify-center"
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
