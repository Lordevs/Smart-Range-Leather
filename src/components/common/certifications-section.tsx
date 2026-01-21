"use client";

import { Award, ArrowRight } from "lucide-react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface CertificationItem {
    title: string;
    subtitle: string;
    link?: string;
}

interface CertificationsSectionProps {
    tag?: string;
    title: ReactNode;
    description?: string;
    items: CertificationItem[];
    className?: string;
}

export function CertificationsSection({
    tag = "CERTIFICATIONS",
    title,
    description,
    items,
    className,
}: CertificationsSectionProps) {
    return (
        <section className={cn("w-full bg-secondary py-24 px-6 md:px-12", className)}>
            <div className="mx-auto max-w-7xl">
                {/* Header Section */}
                <div className="mb-20 flex flex-col items-center text-center space-y-6">
                    {tag && (
                        <div className="inline-block border-b border-[#B8641A]">
                            <span className="text-xs uppercase tracking-[0.2em] text-[#B8641A]">
                                {tag}
                            </span>
                        </div>
                    )}
                    <h2 className="max-w-3xl text-5xl font-normal leading-tight text-[#1a1a1a] md:text-6xl font-serif">
                        {title}
                    </h2>
                    {description && (
                        <p className="max-w-2xl text-lg text-[#6B6B6B] leading-relaxed">
                            {description}
                        </p>
                    )}
                </div>

                {/* Certification Cards Grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group flex flex-col bg-white p-12 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] h-full"
                        >
                            <div className="mb-8">
                                <Award className="h-10 w-10 text-[#B8641A]" strokeWidth={1.5} />
                            </div>

                            <div className="grow space-y-2">
                                <h3 className="text-2xl font-normal text-[#1a1a1a] font-serif">
                                    {item.title}
                                </h3>
                                <p className="text-xs font-bold uppercase tracking-wider text-[#B8641A]">
                                    {item.subtitle}
                                </p>
                            </div>

                            <div className="mt-12">
                                <button className="group/btn flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#1a1a1a] transition-colors hover:text-primary">
                                    <span>LEARN MORE</span>
                                    <ArrowRight className="h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
