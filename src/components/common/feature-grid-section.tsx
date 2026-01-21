"use client";

import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface FeatureItem {
    icon: LucideIcon;
    title: string;
    description: string;
}

interface FeatureGridSectionProps {
    tag?: string;
    title: ReactNode;
    features: FeatureItem[];
    className?: string;
}

export function FeatureGridSection({
    tag,
    title,
    features,
    className,
}: FeatureGridSectionProps) {
    return (
        <section className={cn("w-full bg-white py-24 px-6 md:px-12", className)}>
            <div className="mx-auto max-w-7xl">
                {/* Header Section */}
                <div className="mb-20 flex flex-col items-center text-center space-y-6">
                    {tag && (
                        <div className="inline-block border-b border-[#B8641A] pb-1">
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B8641A]">
                                {tag}
                            </span>
                        </div>
                    )}
                    <h2 className="max-w-3xl text-4xl font-normal leading-tight text-[#1a1a1a] md:text-5xl lg:text-6xl font-serif">
                        {title}
                    </h2>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-2">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="flex items-start space-x-6 max-w-lg mx-auto"
                        >
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center">
                                <feature.icon className="h-8 w-8 text-[#B8641A]" strokeWidth={1.5} />
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-xl font-medium text-[#1a1a1a] font-serif">
                                    {feature.title}
                                </h3>
                                <p className="text-base text-[#6B6B6B] leading-relaxed max-w-sm">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
