"use client";

import Image from "next/image";
import { Mail } from "lucide-react";
import { ReactNode, useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { DownloadCatalogueDialog } from "./download-catalogue-dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { motion } from "motion/react";

interface GridItem {
  title: string;
  description?: string;
  image: string;
  images?: string[];
  link?: string;
  gridClassName?: string;
}

interface ItemGridSectionProps {
  tag?: string;
  title: ReactNode;
  description?: string;
  items: GridItem[];
  buttonLabel?: string;
  onButtonClick?: () => void;
  className?: string;
  gridClassName?: string;
  imageClassName?: string;
  footer?: ReactNode;
  showDownloadButton?: boolean;
}

function GridItemCarousel({
  images,
  title,
  imageClassName,
}: {
  images: string[];
  title: string;
  imageClassName?: string;
}) {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));

  return (
    <div className="w-full h-full relative group/carousel">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full"
        opts={{
          loop: true,
        }}>
        <CarouselContent className="h-full ml-0" wrapperClassName="h-full">
          {images.map((image, index) => (
            <CarouselItem key={index} className="h-full pl-0 basis-full">
              <div className="relative h-full w-full">
                <Image
                  src={image}
                  alt={`${title} - image ${index + 1}`}
                  fill
                  className={cn("object-cover", imageClassName)}
                  priority={index === 0}
                  suppressHydrationWarning
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Navigation Arrows */}
        <div className="">
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-gray-500/10 text-white border-0 backdrop-blur-sm transition-all hover:bg-[#FFCC80] hover:text-[#6C3403] z-60 pointer-events-auto" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-gray-500/10 text-white border-0 backdrop-blur-sm transition-all hover:bg-[#FFCC80] hover:text-[#6C3403] z-60 pointer-events-auto" />
        </div>
      </Carousel>
    </div>
  );
}

export function ItemGridSection({
  tag,
  title,
  description,
  items,
  buttonLabel,
  onButtonClick,
  className,
  gridClassName,
  imageClassName,
  footer,
  showDownloadButton,
}: ItemGridSectionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect if device is mobile on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleCardClick = (index: number) => {
    if (isMobile) {
      setExpandedIndex(expandedIndex === index ? null : index);
    }
  };
  return (
    <section className={cn("w-full bg-white py-20 px-6", className)}>
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-16 flex flex-col items-center text-center space-y-6">
          {tag && (
            <div className="inline-block border-b border-[#6C3403]">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#6C3403]">
                {tag}
              </span>
            </div>
          )}
          <h2 className="text-5xl font-normal leading-tight text-[#1a1a1a] md:text-6xl font-serif">
            {title}
          </h2>
          {description && (
            <p className="max-w-2xl text-lg text-[#6b6b6b] leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Grid Section */}
        <div
          className={cn(
            "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3",
            gridClassName,
          )}>
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 1.2,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}>
              <motion.div
                initial="initial"
                whileHover={!isMobile ? "hover" : undefined}
                animate={
                  isMobile && expandedIndex === index ? "hover" : "initial"
                }
                onClick={() => handleCardClick(index)}
                style={{
                  WebkitMaskImage: "-webkit-radial-gradient(white, black)",
                }}
                className="group relative overflow-hidden rounded-[2.5rem] bg-[#f8f8f8] h-[580px] cursor-pointer isolate transform-gpu backface-hidden transition-all duration-300 hover:z-30">
                {/* Image Container */}
                <div className="h-full w-full overflow-hidden">
                  <motion.div
                    variants={{
                      initial: { scale: 1 },
                      hover: { scale: 1.08 },
                    }}
                    transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
                    className="h-full w-full bg-[#F4F2EC] relative">
                    {item.images && item.images.length > 0 ? (
                      <GridItemCarousel
                        images={item.images}
                        title={item.title}
                        imageClassName={imageClassName}
                      />
                    ) : (
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={600}
                        height={500}
                        className={cn(
                          "h-full w-full object-cover",
                          imageClassName,
                        )}
                        suppressHydrationWarning
                      />
                    )}
                  </motion.div>
                </div>

                {/* Static Bottom Title (Initially visible, hides by sliding down) */}
                <motion.div
                  variants={{
                    initial: { y: 0, opacity: 1 },
                    hover: { y: 100, opacity: 0 },
                  }}
                  transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
                  className="absolute bottom-0 left-0 right-0 bg-[#FFCC80] flex items-center justify-center px-4 text-center z-10 h-24">
                  <h3 className="text-xl font-bold text-[#6C3403] font-serif uppercase tracking-tight leading-tight">
                    {item.title}
                  </h3>
                </motion.div>

                {/* Hover Content Overlay (Peach Box - Slides Up) */}
                <motion.div
                  variants={{
                    initial: { y: "100%" },
                    hover: { y: "0%" },
                  }}
                  transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
                  className="absolute inset-0 flex flex-col justify-end z-20 pointer-events-none">
                  <div className="bg-[#FFCC80]/95 backdrop-blur-sm p-8 min-h-[40%] flex flex-col space-y-4 pointer-events-auto">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-[#6C3403] font-serif text-center leading-tight underline decoration-2 underline-offset-8">
                        {item.title}
                      </h3>
                    </div>
                    {item.description && (
                      <p className="text-[#6C3403] text-lg leading-relaxed font-medium">
                        {item.description}
                      </p>
                    )}
                    {showDownloadButton && (
                      <div
                        className="pt-4"
                        onClick={(e) => e.stopPropagation()}>
                        <DownloadCatalogueDialog
                          buttonLabel="DOWNLOAD CATALOGUE"
                          className="w-full bg-[#6C3403] text-white hover:bg-[#5a2b02] h-12 py-0!"
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Footer Button or Custom Footer */}
        {footer ? (
          <div className="mt-16 flex justify-center">{footer}</div>
        ) : (
          buttonLabel && (
            <div className="mt-16 flex justify-center">
              <Button
                onClick={onButtonClick}
                className="group flex items-center space-x-3  rounded-full bg-[#6C3403] px-12! py-7! text-sm font-bold tracking-widest text-[#fdfbf8] transition-all hover:bg-[#5a2b02] shadow-lg">
                <Mail className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                <span>{buttonLabel}</span>
              </Button>
            </div>
          )
        )}
      </div>
    </section>
  );
}
