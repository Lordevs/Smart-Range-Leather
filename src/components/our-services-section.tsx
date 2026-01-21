"use client";

import { ItemGridSection } from "./common/item-grid-section";

const services = [
    {
        title: "Product Design & Development",
        image: "/images/services/product-design-and-development.png",
    },
    {
        title: "Private Label Manufacturing",
        image: "/images/services/private-label-manufacturing.png",
    },
    {
        title: "Leather Bags and Small Goods",
        image: "/images/services/leather-bags-and-small-goods.png",
    },
    {
        title: "Pattern Making & Sample Development",
        image: "/images/services/pattern-making-and-sample-development.png",
    },
    {
        title: "Global Logistics & Export Support",
        image: "/images/services/global-logistics-and-export-support.png",
    },
    {
        title: "Finishing, Quality Control & Compliance",
        image: "/images/services/finishing-quality-control-and-compliance.png",
    },
];

export function OurServicesSection() {
    return (
        <ItemGridSection
            tag="What We Do"
            title={
                <>
                    Our Core <span className="text-[#6C3403]">Service Offerings</span>
                </>
            }
            items={services}
            buttonLabel="DOWNLOAD SERVICES"
            onButtonClick={() => console.log("Downloading services...")}
        />
    );
}
