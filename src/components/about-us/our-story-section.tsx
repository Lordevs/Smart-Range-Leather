"use client";

import { cn } from "@/lib/utils";
import { motion, Variants } from "motion/react";

interface OurStorySectionProps {
  className?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function OurStorySection({ className }: OurStorySectionProps) {
  return (
    <section className={cn("w-full py-24 px-6 md:px-12 lg:py-32", className)}>
      <motion.div
        className="mx-auto max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}>
        <motion.div className="space-y-8">
          {/* Tag */}
          <motion.div
            variants={itemVariants}
            className="inline-block border-b border-accent-foreground">
            <span className="text-sm uppercase tracking-[0.2em] text-accent-foreground">
              Our Story
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-5xl font-normal leading-tight md:text-7xl font-serif">
            <span className="text-[#6C3403]">A Global Leader</span>{" "}
            <span className="text-[#1A1A1A]">in Premium Leather</span>
          </motion.h2>

          {/* Description Paragraphs */}
          <motion.div className="space-y-6 px-4 text-2xl leading-relaxed text-[#6B6B6B] font-normal">
            <motion.p variants={itemVariants}>
              Smart Range Leather is a global leader in premium leather apparel,
              shearling jackets, luggage, and accessories. Known for exceptional
              quality and innovative design, we combine skilled craftsmanship
              with advanced manufacturing to create products that balance style,
              durability, and comfort.
            </motion.p>
            <motion.p variants={itemVariants}>
              With decades of industry experience, our vertically integrated
              production system gives us complete control over every stage —
              from hide selection and processing to stitching and finishing.
              This ensures consistent quality, precise detailing, and the
              authentic texture and feel our clients expect.
            </motion.p>
            <motion.p variants={itemVariants}>
              Every piece we create is crafted by expert artisans who blend
              traditional techniques with modern technology. From design
              development to final finishing, each step is carefully monitored
              to maintain our high standards.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
