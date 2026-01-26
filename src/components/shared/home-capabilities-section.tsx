"use client";

import {
  Layers,
  Ruler,
  TestTube,
  Scissors,
  Droplet,
  Wrench,
  ClipboardCheck,
  Package,
  Truck,
} from "lucide-react";
import { ROUTES } from "@/constants/route";
import {
  CapabilitiesSection,
  CapabilityItem,
} from "../common/capabilities-section";
import { MobileCapabilitiesSection } from "../common/mobile-capabilities-section";

const capabilities: CapabilityItem[] = [
  {
    id: "sourcing",
    title: "Sourcing",
    icon: Layers,
    image: "/images/capabilities/sourcing.webp",
  },
  {
    id: "designing",
    title: "Designing",
    icon: Ruler,
    image: "/images/capabilities/designing.webp",
  },
  {
    id: "tanning",
    title: "Tanning",
    icon: TestTube,
    image: "/images/capabilities/tanning.webp",
  },
  {
    id: "pattern",
    title: "Pattern Making",
    icon: Scissors,
    image: "/images/capabilities/pattern-making.webp",
  },
  {
    id: "cutting",
    title: "Cutting",
    icon: Droplet,
    image: "/images/capabilities/cutting-leather.webp",
  },
  {
    id: "stitching",
    title: "Stitching",
    icon: Wrench,
    image: "/images/capabilities/stitching.webp",
  },
  {
    id: "quality",
    title: "Quality Control",
    icon: ClipboardCheck,
    image: "/images/capabilities/quality-control.webp",
  },
  {
    id: "packing",
    title: "Packing",
    icon: Package,
    image: "/images/capabilities/packing.webp",
  },
  {
    id: "shipping",
    title: "Shipping",
    icon: Truck,
    image: "/images/capabilities/shipping.webp",
  },
];

export function HomeCapabilitiesSection() {
  return (
    <>
      {/* Mobile Version */}
      <div className="lg:hidden">
        <MobileCapabilitiesSection
          tag="Full Service Manufacturing"
          title="End-to-End Leather Manufacturing Capabilities"
          description="From raw material to finished product, we provide comprehensive manufacturing services that ensure quality at every stage."
          items={capabilities}
          buttonHref={ROUTES.ABOUT}
        />
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:block">
        <CapabilitiesSection
          tag="Full Service Manufacturing"
          title="End-to-End Leather Manufacturing Capabilities"
          description="From raw material to finished product, we provide comprehensive manufacturing services that ensure quality at every stage."
          items={capabilities}
          buttonHref={ROUTES.ABOUT}
        />
      </div>
    </>
  );
}
