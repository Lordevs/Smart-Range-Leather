"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export interface CapabilityItem {
  id: string;
  title: string;
  icon: LucideIcon;
  image: string;
}

interface MobileCapabilitiesSectionProps {
  tag?: string;
  title: React.ReactNode;
  description: string;
  items: CapabilityItem[];
  buttonLabel?: string;
  onButtonClick?: () => void;
  buttonHref?: string;
  className?: string;
}

export function MobileCapabilitiesSection({
  tag,
  title,
  description,
  items,
  buttonLabel = "View Full Capabilities",
  onButtonClick,
  buttonHref,
  className,
}: MobileCapabilitiesSectionProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(1);
  const [count, setCount] = useState(items.length);

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  );

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className={cn("w-full bg-[#121212] py-20 px-6", className)}>
      <div className="mx-auto max-w-7xl">
        <div className="space-y-10">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6 text-center">
            {tag && (
              <div className="inline-block rounded-full bg-primary/20 px-4 py-1.5 backdrop-blur-sm border border-white/10">
                <span className="text-xs uppercase text-primary font-bold tracking-widest">
                  {tag}
                </span>
              </div>
            )}
            <h2 className="text-4xl font-normal leading-tight text-white md:text-5xl font-serif">
              {title}
            </h2>
            <p className="max-w-xl mx-auto text-lg leading-relaxed text-[#d4d4d4]">
              {description}
            </p>
          </motion.div>

          {/* Image Carousel with Overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative">
            <Carousel
              setApi={setApi}
              className="w-full max-w-md mx-auto"
              plugins={[plugin.current]}
              opts={{
                align: "start",
                loop: true,
              }}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}>
              <CarouselContent>
                {items.map((item, index) => (
                  <CarouselItem key={item.id}>
                    <div className="p-1">
                      <div className="relative aspect-square w-full overflow-hidden rounded-xl shadow-2xl">
                        {/* Image */}
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                          priority={index === 0}
                          suppressHydrationWarning
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                        {/* Capability Text Overlay at Bottom */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                          <div className="flex items-center space-x-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/20 backdrop-blur-sm border border-primary/30">
                              <item.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-bold text-white font-serif leading-tight flex-1">
                              {item.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Navigation Arrows on Image */}
              <CarouselPrevious className="left-4 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white" />
              <CarouselNext className="right-4 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white" />
            </Carousel>

            {/* Pagination Counter */}
            <div className="flex justify-center mt-6">
              <div className="inline-flex items-center space-x-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2">
                <span className="text-sm font-medium text-white">
                  {current} / {count}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Button */}
          <div className="flex justify-center pt-6">
            {buttonHref ? (
              <Link href={buttonHref}>
                <Button className="group flex items-center space-x-3 rounded-full bg-primary px-8 py-6 text-base tracking-wider text-accent-foreground transition-all hover:bg-primary/90 hover:scale-[1.02] cursor-pointer">
                  <span>{buttonLabel}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            ) : (
              <Button
                onClick={onButtonClick}
                className="group flex items-center space-x-3 rounded-full bg-primary px-8 py-6 text-base tracking-wider text-accent-foreground transition-all hover:bg-primary/90 hover:scale-[1.02] cursor-pointer">
                <span>{buttonLabel}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
