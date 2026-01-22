"use client";

import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface WhyChooseUsProps {
  badge?: string;
  title: React.ReactNode;
  features: Feature[];
  className?: string;
}

export function WhyChooseUs({
  badge,
  title,
  features = [],
  className,
}: WhyChooseUsProps) {
  return (
    <section className={cn("w-full py-24 bg-card overflow-hidden", className)}>
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20">
          {badge && (
            <div className="inline-block border-b border-[#6C3403] mb-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#6C3403]">
                {badge}
              </span>
            </div>
          )}
          <h2 className="font-serif text-xl leading-[1.1] text-foreground md:text-5xl lg:text-7xl mx-auto max-w-5xl">
            {title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}>
              <Card className="group rounded-[2.5rem]  h-full gap-0 border-border/50 bg-background p-10 shadow-[0px_2px_8px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-black/5 hover:shadow-xl">
                <CardHeader className="mb-1 p-0">
                  <div className="bg-primary/40 flex h-14 w-14 items-center justify-center rounded-full transition-colors duration-300 group-hover:bg-primary/80">
                    <feature.icon
                      className="text-primary-foreground h-6 w-6"
                      strokeWidth={1.5}
                    />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 p-0">
                  <CardTitle className="text-foreground text-2xl font-normal max-w-50 leading-tight tracking-tight">
                    {feature.title}
                  </CardTitle>
                  <p className="text-muted-foreground max-w-50 text-[15px] font-medium leading-relaxed opacity-90">
                    {feature.description}
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
