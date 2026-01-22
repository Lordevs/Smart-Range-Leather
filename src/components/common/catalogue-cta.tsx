"use client";

import { DownloadCatalogueDialog } from "./download-catalogue-dialog";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface CatalogueCTAProps {
  title?: string;
  description?: string;
  buttonLabel?: string;
  dialogTitle?: string;
  dialogDescription?: string;
  className?: string;
}

export function CatalogueCTA({
  title = "Download the Full Leather Manufacturing Catalogue",
  description = "Access our full catalogue for expanded product ranges and manufacturing details. Complete the short form to begin your download.",
  buttonLabel = "DOWNLOAD ALL CATALOGUE",
  dialogTitle = "Download Our Full Catalogue",
  dialogDescription = "Enter your details to access the full Smart Range Leather catalogue.",
  className,
}: CatalogueCTAProps) {
  return (
    <section
      className={cn(
        "w-full bg-foreground py-20 px-6 text-center overflow-hidden",
        className,
      )}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-4xl rounded-3xl space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-3xl md:text-5xl text-secondary leading-tight">
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-secondary/70 text-lg max-w-2xl mx-auto leading-relaxed">
          {description}
        </motion.p>

        <DownloadCatalogueDialog
          buttonLabel={buttonLabel}
          dialogTitle={dialogTitle}
          dialogDescription={dialogDescription}
        />
      </motion.div>
    </section>
  );
}
