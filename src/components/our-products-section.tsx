"use client";

import { ItemGridSection } from "./common/item-grid-section";

const products = [
    {
        title: "Leather Jackets and Coats",
        image: "/images/products/leather-jackets-and-coats.png",
    },
    {
        title: "Shearling and Aviator Jackets",
        image: "/images/products/shearling-and-aviatorjackets.png",
    },
    {
        title: "Leather Bags and Small Goods",
        image: "/images/products/leather-bags-and-small-goods.png",
    },
    {
        title: "Leather Accessories",
        image: "/images/products/leather-accessories.png",
    },
    {
        title: "Custom and Private Label Collections",
        image: "/images/products/custom-and-private-cabel-collections.png",
    },
];

export function OurProductsSection() {
    return (
        <ItemGridSection
            tag="Our Products"
            title={
                <>
                    What We <span className="text-[#6C3403]">Manufacture</span>
                </>
            }
            items={products}
            buttonLabel="DOWNLOAD CATALOGUE"
            onButtonClick={() => console.log("Downloading catalogue...")}
        />
    );
}
