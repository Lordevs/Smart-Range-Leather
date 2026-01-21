"use client";

import Image from "next/image";
import { Download } from "lucide-react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface GridItem {
  title: string;
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
            <div
              key={index}
              className="group relative overflow-hidden rounded-[2.5rem] bg-[#f8f8f8] transition-all hover:shadow-xl">
              <div className="aspect-4/5 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="bg-primary py-6 px-4 text-center">
                <h3 className="text-xl font-medium text-[#6C3403] font-serif">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Button */}
        {buttonLabel && (
          <div className="mt-16 flex justify-center">
            <Button
              onClick={onButtonClick}
              className="group flex items-center space-x-3 rounded-full bg-[#6C3403] w-68 py-7 text-sm tracking-[0.55px] text-[#fdfbf8] transition-all hover:bg-[#5a2b02] shadow-lg">
              <span>{buttonLabel}</span>
              <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
