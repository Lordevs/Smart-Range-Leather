"use client";

import { useEffect, useRef, useState } from "react";
import { TrendingUp, Package, Clock, BookOpen } from "lucide-react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "motion/react";

interface CounterProps {
  value: string;
}

function Counter({ value }: CounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Parse the number and suffix
  const numMatch = value.match(/([\d,.]+)/);
  const suffixMatch = value.match(/[^\d,.]+/);

  const target = numMatch ? parseFloat(numMatch[0].replace(/,/g, "")) : 0;
  const suffix = suffixMatch ? suffixMatch[0] : "";

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    // Re-format with commas if the original had them
    const val = Math.round(latest);
    if (value.includes(",")) {
      return val.toLocaleString();
    }
    return val;
  });

  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, {
        duration: 5,
        ease: [0.22, 1, 0.36, 1], // Very gradual deceleration
      });
      return controls.stop;
    }
  }, [isInView, target, count]);

  useEffect(() => {
    return rounded.on("change", (v) => setDisplayValue(v.toString()));
  }, [rounded]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

const stats = [
  {
    icon: TrendingUp,
    value: "20+",
    label: "Years in Leather Manufacturing",
  },
  {
    icon: Package,
    value: "100,000+",
    label: "Items Produced Annually",
  },
  {
    icon: Clock,
    value: "98%",
    label: "On-Time Delivery Rate",
  },
  {
    icon: BookOpen,
    value: "500+",
    label: "Designs Available In-House",
  },
];

export function StatsSection() {
  return (
    <div className="w-full px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-8 rounded-[2.5rem] bg-foreground p-12 md:grid-cols-2 lg:grid-cols-4 lg:p-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group flex flex-col items-center text-center space-y-4 transition-all duration-300 hover:scale-105">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <stat.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
              </div>
              <div className="space-y-4">
                <h3 className="text-5xl font-serif font-normal tracking-tight text-white md:text-6xl">
                  <Counter value={stat.value} />
                </h3>
                <p className="text-sm font-medium text-white/70 leading-relaxed mx-auto uppercase tracking-widest max-w-[200px]">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
