"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export interface CapabilityItem {
  id: string;
  title: string;
  icon: LucideIcon;
  image: string;
}

interface CapabilitiesSectionProps {
  tag?: string;
  title: React.ReactNode;
  description: string;
  items: CapabilityItem[];
  buttonLabel?: string;
  onButtonClick?: () => void;
  className?: string;
}

export function CapabilitiesSection({
  tag,
  title,
  description,
  items,
  buttonLabel = "View Full Capabilities",
  onButtonClick,
  className,
}: CapabilitiesSectionProps) {
  const [activeItem, setActiveItem] = useState<CapabilityItem>(items[0]);

  return (
    <section
      className={cn("w-full bg-[#121212] py-20 px-6 lg:py-32", className)}>
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
          {/* Left Content */}
          <div className="order-2 md:order-1 flex flex-col space-y-10">
            <div className="space-y-6">
              {tag && (
                <div className="inline-block rounded-full bg-primary/20 px-4 py-1.5 backdrop-blur-sm border border-white/10">
                  <span className="text-xs uppercase text-primary font-bold tracking-widest">
                    {tag}
                  </span>
                </div>
              )}
              <h2 className="text-4xl font-normal leading-tight text-white md:text-5xl lg:text-6xl font-serif">
                {title}
              </h2>
              <p className="max-w-xl text-lg leading-relaxed text-[#d4d4d4]">
                {description}
              </p>
            </div>

            {/* Capability List */}
            <div className="flex flex-col space-y-2">
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveItem(item)}
                  className={cn(
                    "group flex items-center space-x-5 py-3 transition-all duration-300 text-left relative overflow-hidden hover:bg-white/2",
                  )}>
                  <div
                    className={cn(
                      "flex h-10 w-12 items-center justify-center rounded-[3px] transition-colors duration-300",
                      activeItem.id === item.id
                        ? "bg-primary/10 text-primary"
                        : "bg-white/5 text-white/40 group-hover:text-white/60",
                    )}>
                    <item.icon className="h-5.5 w-5.5" />
                  </div>
                  <span
                    className={cn(
                      "text-lg font-medium tracking-wide transition-colors duration-300",
                      activeItem.id === item.id
                        ? "text-primary"
                        : "text-white/40 group-hover:text-white/70",
                    )}>
                    {item.title}
                  </span>

                  {/* Subtle underline for active item */}
                  {activeItem.id === item.id && (
                    <motion.div
                      layoutId="active-border"
                      className="absolute bottom-0 left-0 h-[3px] w-full bg-primary"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            <div>
              <Button
                onClick={onButtonClick}
                className="group flex items-center space-x-3 rounded-full bg-primary px-4! py-7 text-lg tracking-wider text-accent-foreground transition-all hover:bg-primary/90 hover:scale-[1.02]">
                <span>{buttonLabel}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Right Content - Animated Image */}
          <div className="order-1 md:order-2 md:sticky md:top-32">
            <div className="relative aspect-square w-full">
              {/* Decorative accent block from reference image */}
              <div className="absolute -top-8 md:-top-10 -left-4 md:-left-8 h-40 w-40 rounded-xl bg-[#FE9A00]/20" />

              <div className="relative h-full w-full overflow-hidden rounded-xl shadow-2xl mt-4">
                {/* Decorative glows inside the image container */}
                <div className="absolute -top-10 -left-10 h-32 w-32 rounded-xl bg-[#6C3403]/20 blur-3xl" />
                <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-xl bg-primary/10 blur-3xl" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeItem.id}
                    initial={{ opacity: 0, x: 20, scale: 1.05 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -20, scale: 0.95 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute inset-0">
                    <Image
                      src={activeItem.image}
                      alt={activeItem.title}
                      fill
                      className="object-cover"
                      priority
                    />
                    {/* Subtle overlay to soften the image and match the theme */}
                    <div className="absolute inset-0 bg-linear-to-tr from-[#121212]/30 to-transparent" />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
