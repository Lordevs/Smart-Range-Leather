"use client";

import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Counter } from "./counter";

interface SegmentItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface StatItem {
  value: string;
  label: string;
}

interface ClientSegmentsSectionProps {
  tag?: string;
  title: ReactNode;
  segments: SegmentItem[];
  highlightCard: {
    title: string;
    description: string;
  };
  stats: StatItem[];
  className?: string;
}

export function ClientSegmentsSection({
  tag,
  title,
  segments,
  stats,
  className,
}: ClientSegmentsSectionProps) {
  return (
    <section
      className={cn(
        "w-full bg-[#1A1A1A] py-24 px-6 md:px-12 text-white overflow-hidden",
        className,
      )}>
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 flex flex-col items-center text-center space-y-6">
          {tag && (
            <div className="inline-block border-b border-primary pb-1">
              <span className="text-xs uppercase tracking-[0.2em] text-primary">
                {tag}
              </span>
            </div>
          )}
          <h2 className="max-w-3xl text-4xl font-normal leading-tight md:text-5xl lg:text-6xl font-serif">
            {title}
          </h2>
        </motion.div>

        {/* Segments Grid */}
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-3 mb-24">
          {segments.map((segment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col items-center text-center space-y-6">
              <div className="flex h-12 w-12 items-center justify-center">
                <segment.icon
                  className="h-8 w-8 text-primary"
                  strokeWidth={1.5}
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-medium font-serif text-muted">
                  {segment.title}
                </h3>
                <p className="text-sm text-muted/60 leading-relaxed max-w-[280px]">
                  {segment.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Highlight Card */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="bg-[#FFD18B] p-10 flex flex-col justify-center space-y-4 text-accent-foreground max-w-[300px] rounded-sm mx-auto md:mx-0">
            <h3 className="text-2xl font-serif">{highlightCard.title}</h3>
            <p className="text-sm leading-relaxed">
              {highlightCard.description}
            </p>
          </motion.div> */}
        </div>

        {/* Stats Section */}
        <div className="pt-16 border-t border-white/10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1 + 0.3,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="space-y-2">
                <div className="text-4xl lg:text-5xl font-normal tracking-tight">
                  <Counter value={stat.value} />
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-primary font-inter">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
