"use client";

import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ManufacturingProcessProps {
  tag?: string;
  title: React.ReactNode;
  steps: ProcessStep[];
  className?: string;
}

export function ManufacturingProcess({
  tag,
  title,
  steps = [],
  className,
}: ManufacturingProcessProps) {
  return (
    <section className={cn("w-full py-24 overflow-hidden", className)}>
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24 space-y-6">
          {tag && (
            <div className="inline-block border-b border-[#B8641A] pb-1">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B8641A]">
                {tag}
              </span>
            </div>
          )}
          <h2 className="font-serif text-5xl leading-[1.1] text-foreground md:text-6xl lg:text-7xl mx-auto max-w-5xl">
            {title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}>
              <Card className="bg-transparent border-none shadow-none p-0 max-w-xs">
                <span className="text-6xl md:text-6xl font-serif text-[#B8641A]/40 block font-light">
                  {step.number}
                </span>
                <CardContent className="p-0 space-y-4">
                  <h3 className="text-xl max-w-40 font-medium text-foreground leading-snug tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground max-w-40 text-[14px] leading-relaxed font-medium opacity-80">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
