"use client";

import {
    Layers,
    PenTool,
    FlaskConical,
    Scissors,
    Droplets,
    Wrench,
    ClipboardCheck,
    Truck
} from "lucide-react";
import { CapabilitiesSection, CapabilityItem } from "./common/capabilities-section";

const capabilities: CapabilityItem[] = [
    {
        id: "sourcing",
        title: "Leather sourcing and selection",
        icon: Layers,
        image: "/images/leather-craftsmanship.png",
    },
    {
        id: "pattern",
        title: "Pattern making and grading",
        icon: PenTool,
        image: "/images/services/pattern-making-and-sample-development.png",
    },
    {
        id: "sampling",
        title: "Sampling and prototyping",
        icon: FlaskConical,
        image: "/images/services/product-design-and-development.png",
    },
    {
        id: "cutting",
        title: "Cutting and stitching",
        icon: Scissors,
        image: "/images/services/leather-bags-and-small-goods.png",
    },
    {
        id: "finishing",
        title: "Washing, dyeing, and finishing",
        icon: Droplets,
        image: "/images/services/finishing-quality-control-and-compliance.png",
    },
    {
        id: "hardware",
        title: "Hardware and accessory integration",
        icon: Wrench,
        image: "/images/services/private-label-manufacturing.png",
    },
    {
        id: "inspection",
        title: "Quality inspection and packing",
        icon: ClipboardCheck,
        image: "/images/about-us.png",
    },
    {
        id: "logistics",
        title: "Global logistics support",
        icon: Truck,
        image: "/images/services/global-logistics-and-export-support.png",
    },
];

export function HomeCapabilitiesSection() {
    return (
        <CapabilitiesSection
            tag="Full Service Manufacturing"
            title="End-to-End Leather Manufacturing Capabilities"
            description="From raw material to finished product, we provide comprehensive manufacturing services that ensure quality at every stage."
            items={capabilities}
        />
    );
}
