"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useTransform, animate } from "motion/react";

interface CounterProps {
  value: string;
}

export function Counter({ value }: CounterProps) {
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
        duration: 3,
        ease: [0.22, 1, 0.36, 1],
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
