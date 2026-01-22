"use client";

import {
  ShoppingBag,
  BookOpen,
  Clock,
  Palette,
  Factory,
  CircleCheck,
} from "lucide-react";
import { WhyChooseUs, Feature } from "../common/why-choose-us";

const features: Feature[] = [
  {
    icon: ShoppingBag,
    title: "Low Minimum Order Quantities",
    description:
      "Flexible production runs designed to support startups, growing brands, and test collections.",
  },
  {
    icon: BookOpen,
    title: "Extensive Design Library",
    description:
      "Hundreds of ready-to-produce patterns and styles to accelerate development.",
  },
  {
    icon: Clock,
    title: "Fast & Reliable Lead Times",
    description:
      "Streamlined manufacturing processes that deliver faster turnaround times.",
  },
  {
    icon: Palette,
    title: "Full Material Customisation",
    description:
      "Source, process, or custom finish any leather type, lining, hardware, or trim.",
  },
  {
    icon: Factory,
    title: "Vertically Integrated",
    description:
      "Greater quality control, cost efficiency, and production transparency.",
  },
  {
    icon: CircleCheck,
    title: "Quality Assurance",
    description:
      "Rigorous inspection processes ensuring the highest standards of craftsmanship.",
  },
];

export function HomeWhyChooseUs() {
  return (
    <WhyChooseUs
      badge="WHY CHOOSE US"
      title={
        <>
          Why Brands Choose <br />
          <span className="text-accent-foreground">Smart Range Leather</span>
        </>
      }
      features={features}
    />
  );
}
