"use client";

import { Leaf, RefreshCcw, ShieldCheck, Droplets } from "lucide-react";
import { FeatureGridSection } from "./common/feature-grid-section";

const sustainabilityFeatures = [
    {
        icon: Leaf,
        title: "Responsible Leather Sourcing",
        description: "We source leather from certified suppliers who follow ethical and sustainable practices.",
    },
    {
        icon: RefreshCcw,
        title: "Reduced Waste Production",
        description: "Implementing efficient cutting techniques and material optimization to minimize waste.",
    },
    {
        icon: ShieldCheck,
        title: "Safe Working Conditions",
        description: "Providing a safe, fair, and supportive environment for all our team members.",
    },
    {
        icon: Droplets,
        title: "Eco-Friendly Finishing",
        description: "Using environmentally conscious dyeing and finishing techniques.",
    },
];

export function HomeSustainabilitySection() {
    return (
        <FeatureGridSection
            tag="SUSTAINABILITY"
            title={
                <>
                    Responsible Leather <br />
                    <span className="text-accent-foreground">Manufacturing</span>
                </>
            }
            features={sustainabilityFeatures}
        />
    );
}
