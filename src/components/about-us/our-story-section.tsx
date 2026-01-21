import { cn } from "@/lib/utils";

interface OurStorySectionProps {
    className?: string;
}

export function OurStorySection({ className }: OurStorySectionProps) {
    return (
        <section className={cn("w-full py-24 px-6 md:px-12 lg:py-32", className)}>
            <div className="mx-auto max-w-7xl">
                <div className="space-y-8">
                    {/* Tag */}
                    <div className="inline-block border-b border-accent-foreground">
                        <span className="text-sm uppercase tracking-[0.2em] text-accent-foreground">
                            Our Story
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-5xl font-normal leading-tight md:text-7xl font-serif">
                        <span className="text-[#6C3403]">A Global Leader</span>{" "}
                        <span className="text-[#1A1A1A]">in Premium Leather</span>
                    </h2>

                    {/* Description Paragraphs */}
                    <div className="space-y-6 px-4 text-2xl leading-relaxed text-[#6B6B6B] font-normal">
                        <p>
                            Smart Range Leather is a global leader in premium leather apparel, shearling jackets, luggage, and accessories. Known for exceptional quality and innovative design, we combine skilled craftsmanship with advanced manufacturing to create products that balance style, durability, and comfort.
                        </p>
                        <p>
                            With decades of industry experience, our vertically integrated production system gives us complete control over every stage — from hide selection and processing to stitching and finishing. This ensures consistent quality, precise detailing, and the authentic texture and feel our clients expect.
                        </p>
                        <p>
                            Every piece we create is crafted by expert artisans who blend traditional techniques with modern technology. From design development to final finishing, each step is carefully monitored to maintain our high standards.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
