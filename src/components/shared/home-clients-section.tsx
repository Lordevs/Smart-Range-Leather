"use client";

import {
  Store,
  ShoppingCart,
  Building2,
  MousePointer2,
  Package,
} from "lucide-react";
import { ClientSegmentsSection } from "../common/client-segments-section";

const clientSegments = [
  {
    icon: Store,
    title: "Fashion Brands",
    description: "From emerging designers to established labels",
  },
  {
    icon: ShoppingCart,
    title: "Retail Chains",
    description: "Multi-location retailers requiring consistent quality",
  },
  {
    icon: Building2,
    title: "Private Label",
    description: "Custom collections for diverse market segments",
  },
  {
    icon: MousePointer2,
    title: "E-commerce Brands",
    description: "Online retailers needing flexible MOQs",
  },
  {
    icon: Package,
    title: "Wholesalers",
    description: "Volume buyers seeking competitive pricing",
  },
];

const stats = [
  { value: "20+", label: "COUNTRIES SERVED" },
  { value: "500+", label: "CLIENTS" },
  { value: "98%", label: "SATISFACTION" },
  { value: "24/7", label: "SUPPORT" },
];

export function HomeClientsSection() {
  return (
    <ClientSegmentsSection
      tag="CLIENTS"
      title="Trusted by Brands Worldwide"
      segments={clientSegments}
      highlightCard={{
        title: "Based in Pakistan",
        description:
          "Serving global markets with efficient logistics and competitive pricing",
      }}
      stats={stats}
    />
  );
}
