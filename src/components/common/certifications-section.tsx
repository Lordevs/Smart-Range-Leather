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
    <section
      className={cn("w-full bg-secondary py-28 px-6 md:px-12", className)}>
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-20 flex flex-col items-center text-center space-y-6">
          {tag && (
            <div className="inline-block border-b border-[#B8641A]">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B8641A]">
                {tag}
              </span>
            </div>
          )}
          <h2 className="max-w-4xl text-5xl font-normal leading-[1.1] text-foreground md:text-6xl lg:text-7xl font-serif">
            {title}
          </h2>
          {description && (
            <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Certification Cards Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="group flex flex-col items-center text-center bg-white p-12 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all hover:shadow-[0_20px_60px_rgb(0,0,0,0.05)] h-full rounded-2xl">
              <div className="mb-10">
                <div className="h-16 w-16 rounded-xl flex items-center justify-center transition-colors group-hover:bg-[#6C3403]/10">
                  <Award
                    className="h-12 w-12 text-[#B8641A]"
                    strokeWidth={1.2}
                  />
                </div>
              </div>

              <div className="grow space-y-3">
                <h3 className="text-2xl md:text-3xl font-normal text-foreground font-serif leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#B8641A]">
                  {item.subtitle}
                </p>
              </div>

              <div className="mt-14 pt-8 border-t border-black/5 w-full flex justify-center">
                <button className="group/btn flex items-center space-x-3 text-xs font-bold uppercase tracking-[0.2em] text-[#B8641A] transition-all hover:gap-4">
                  <span>LEARN MORE</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
