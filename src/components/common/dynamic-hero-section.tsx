"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DynamicHeroSectionProps {
    imageSrc?: string;
    imageAlt?: string;
    videoSrc?: string;
    title: ReactNode;
    subtext: string;
    features?: string[];
    primaryButtonLabel?: string;
    onPrimaryButtonClick?: () => void;
    secondaryButtonLabel?: string;
    onSecondaryButtonClick?: () => void;
    overlayGradient?: string; // e.g. 'linear-gradient(to right, ...)'
    height?: string; // e.g. '94vh'
    className?: string;
    contentClassName?: string;
    buttonContainerClassName?: string;
}

export function DynamicHeroSection({
    imageSrc,
    imageAlt = "Hero Background",
    videoSrc,
    title,
    subtext,
    features = [],
    primaryButtonLabel,
    onPrimaryButtonClick,
    secondaryButtonLabel,
    onSecondaryButtonClick,
    overlayGradient = "linear-gradient(to right, rgba(71, 53, 24, 0.82) 0%, rgba(71, 53, 24, 0.82) 50%, rgba(71, 53, 24, 0.5) 100%)",
    height = "94vh",
    className,
    contentClassName,
    buttonContainerClassName,
}: DynamicHeroSectionProps) {
    return (
        <section
            className={cn("relative w-full overflow-hidden", className)}
            style={{ height }}>
            {/* Background Media */}
            <div className="absolute inset-0">
                {imageSrc && (
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        className="object-cover"
                        priority
                    />
                )}
                {videoSrc && (
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 h-full w-full object-cover">
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                )}
            </div>

            {/* Overlay */}
            {overlayGradient && (
                <div
                    className="absolute inset-0 z-10"
                    style={{ background: overlayGradient }}
                />
            )}

            {/* Content */}
            <div className={cn("container relative z-20 mx-auto flex h-full flex-col justify-center px-6 lg:px-12", contentClassName)}>
                <div className="max-w-[1300px] space-y-12">
                    {/* Heading */}
                    <div className="space-y-6">
                        <h1 className="text-5xl text-white md:text-6xl leading-[1.05] font-bold tracking-tight font-serif">
                            {title}
                        </h1>

                        {/* Subtext */}
                        <p className="max-w-5xl text-lg text-white/85 md:text-3xl font-normal leading-[1.4] tracking-wide">
                            {subtext}
                        </p>
                    </div>

                    {/* List/Features */}
                    {features.length > 0 && (
                        <div className="flex flex-wrap items-center gap-x-12 gap-y-4 text-base font-normal text-white/80 italic">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Buttons */}
                    <div className={cn("flex flex-col sm:flex-row items-center gap-5 pt-4", buttonContainerClassName)}>
                        {primaryButtonLabel && (
                            <Button
                                size="lg"
                                onClick={onPrimaryButtonClick}
                                className="h-14 rounded-full bg-primary w-52 text-base text-[#6C3403] hover:bg-primary/90 transition-all gap-3 border-none flex items-center justify-center">
                                {primaryButtonLabel}
                                <ArrowRight className="h-4 w-4 stroke-[3px]" />
                            </Button>
                        )}
                        {secondaryButtonLabel && (
                            <Button
                                size="lg"
                                variant="outline"
                                onClick={onSecondaryButtonClick}
                                className="h-14 rounded-full border-white/60 bg-[#2b2015] px-10 text-base text-white hover:bg-white/10 transition-all flex items-center justify-center">
                                {secondaryButtonLabel}
                            </Button>
                        )}
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
                    <div className="w-[28px] h-[46px] border-2 border-white/40 rounded-full flex justify-center items-start pt-2">
                        <div className="w-1.5 h-2.5 bg-white/60 rounded-full animate-bounce" />
                    </div>
                </div>
            </div>
        </section>
    );
}
