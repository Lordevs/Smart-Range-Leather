"use client";

import Image from "next/image";
import { Download } from "lucide-react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

import { motion } from "motion/react";

interface GridItem {
  title: string;
  description?: string;
  image: string;
  link?: string;
}

interface ItemGridSectionProps {
  tag?: string;
  title: ReactNode;
  description?: string;
  items: GridItem[];
  buttonLabel?: string;
  onButtonClick?: () => void;
  className?: string;
}

export function ItemGridSection({
  tag,
  title,
  description,
  items,
  buttonLabel,
  onButtonClick,
  className,
}: ItemGridSectionProps) {
  return (
    <section className={cn("w-full bg-white py-20 px-6", className)}>
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-16 flex flex-col items-center text-center space-y-6">
          {tag && (
            <div className="inline-block border-b border-[#6C3403] pb-1">
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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                whileHover="hover"
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
                    className="h-full w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={500}
                      height={600}
                      className="h-full w-full object-cover"
                    />
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
                  className="absolute inset-0 flex flex-col justify-end z-20">
                  <div className="bg-[#FFCC80] p-10 min-h-[50%] flex flex-col space-y-6">
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
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Footer Button */}
        {buttonLabel && (
          <div className="mt-16 flex justify-center">
            <Button
              onClick={onButtonClick}
              className="group flex items-center space-x-3  rounded-full bg-[#6C3403] px-12! py-7! text-sm font-bold tracking-widest text-[#fdfbf8] transition-all hover:bg-[#5a2b02] shadow-lg">
              <span>{buttonLabel}</span>
              <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
