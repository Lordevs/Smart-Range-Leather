"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";
import { ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface DynamicHeroSectionProps {
  imageSrc?: string;
  imageAlt?: string;
  videoSrc?: string;
  title: ReactNode;
  subtext: string;
  features?: string[];
  primaryButtonLabel?: string;
  onPrimaryButtonClick?: () => void;
  primaryButtonIcon?: LucideIcon | null;
  secondaryButtonLabel?: string;
  onSecondaryButtonClick?: () => void;
  secondaryButtonIcon?: LucideIcon | null;
  bottomText?: ReactNode;
  overlayGradient?: string; // e.g. 'linear-gradient(to right, ...)'
  height?: string; // e.g. '94vh'
  className?: string;
  contentClassName?: string;
  buttonContainerClassName?: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function DynamicHeroSection({
  imageSrc,
  imageAlt = "Hero Background",
  videoSrc,
  title,
  subtext,
  features = [],
  primaryButtonLabel,
  onPrimaryButtonClick,
  primaryButtonIcon: PrimaryIcon = ArrowRight,
  secondaryButtonLabel,
  onSecondaryButtonClick,
  secondaryButtonIcon: SecondaryIcon,
  bottomText,
  overlayGradient = "linear-gradient(to right, rgba(71, 53, 24, 0.82) 0%, rgba(71, 53, 24, 0.82) 50%, rgba(71, 53, 24, 0.5) 100%)",
  height = "94vh",
  className,
  contentClassName,
  buttonContainerClassName,
}: DynamicHeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToNext = () => {
    if (sectionRef.current) {
      const nextElement = sectionRef.current.nextElementSibling;
      if (nextElement) {
        nextElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      className={cn("relative w-full overflow-hidden", className)}
      style={{ height }}>
      {/* Background Media */}
      <div className="absolute inset-0">
        {imageSrc && (
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative h-full w-full">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
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
      <div
        className={cn(
          "container relative z-20 mx-auto flex h-full flex-col justify-center px-6 lg:px-12",
          contentClassName,
        )}>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-[1300px] space-y-12">
          {/* Heading */}
          <div className="space-y-6">
            <motion.h1
              variants={fadeInUp}
              className="text-5xl text-white md:text-6xl lg:text-7xl leading-[1.05] font-bold tracking-tight font-serif">
              {title}
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={fadeInUp}
              className="max-w-5xl text-lg text-white/85 md:text-3xl font-normal leading-[1.4] tracking-wide">
              {subtext}
            </motion.p>
          </div>

          {/* List/Features */}
          {features.length > 0 && (
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-x-12 gap-y-4 text-base font-normal text-white/80 italic">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </motion.div>
          )}

          {/* Buttons & Bottom Text */}
          <motion.div className="space-y-8">
            <div
              className={cn(
                "flex flex-col sm:flex-row items-center gap-5 pt-4",
                buttonContainerClassName,
              )}>
              {primaryButtonLabel && (
                <Button
                  size="lg"
                  onClick={onPrimaryButtonClick}
                  className="h-14 cursor-pointer rounded-full bg-primary w-52 text-[17px] text-[#6C3403] hover:bg-primary/90 transition-all gap-3 border-none flex items-center justify-center">
                  {primaryButtonLabel}
                  {PrimaryIcon && (
                    <PrimaryIcon className="h-4 w-4 stroke-[3px]" />
                  )}
                </Button>
              )}
              {secondaryButtonLabel && (
                <Button
                  size="lg"
                  onClick={onSecondaryButtonClick}
                  className="h-14 rounded-full border-white/60 bg-secondary  text-[17px] cursor-pointer px-10 text-base text-primary-foreground hover:bg-secondary/90 transition-all flex items-center justify-center gap-3">
                  {secondaryButtonLabel}
                  {SecondaryIcon && (
                    <SecondaryIcon className="h-4 w-4 stroke-[3px]" />
                  )}
                </Button>
              )}
            </div>

            {/* Bottom Text */}
            {bottomText && (
              <motion.div
                variants={fadeInUp}
                className="text-white/60 text-2xl mt-4 font-medium tracking-wide">
                {bottomText}
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          onClick={scrollToNext}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer group/scroll">
          <div className="w-[28px] h-[46px] border-2 border-white/40 rounded-full flex justify-center items-start pt-2 transition-colors group-hover/scroll:border-white/60">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1.5 h-2.5 bg-white/60 rounded-full group-hover:bg-white/80"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
