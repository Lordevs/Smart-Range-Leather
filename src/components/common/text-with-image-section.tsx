"use client";

import Link from "next/link";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface TextWithImageSectionProps {
  tag?: string;
  title: ReactNode;
  description: ReactNode[];
  imageSrc: string;
  imageAlt: string;
  buttonText?: string;
  onButtonClick?: () => void;
  buttonHref?: string;
  reverse?: boolean;
  className?: string;
  backgroundColor?: string;
  accentColor?: string; // e.g. #6C3403
  circleColor?: string; // e.g. #ffcc80
}

export function TextWithImageSection({
  tag,
  title,
  description,
  imageSrc,
  imageAlt,
  buttonText = "LEARN MORE",
  onButtonClick,
  buttonHref,
  reverse = false,
  className,
  backgroundColor = "#fdfbf8",
  accentColor = "#6C3403",
  circleColor = "#ffcc80",
}: TextWithImageSectionProps) {
  return (
    <section
      className={cn(
        "w-full py-20 px-6 lg:py-32 bg-[#faf7f0] overflow-hidden",
        className,
      )}
      style={{ backgroundColor }}>
      <div className="mx-auto max-w-7xl">
        <div
          className={cn(
            "grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center",
            reverse ? "lg:direction-rtl" : "",
          )}>
          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "flex flex-col space-y-10",
              reverse ? "lg:order-2" : "lg:order-1",
            )}>
            <div className="space-y-6">
              {tag && (
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="inline-block border-b pb-1 origin-left"
                  style={{ borderColor: accentColor }}>
                  <span
                    className="text-xs font-bold uppercase tracking-[0.2em]"
                    style={{ color: accentColor }}>
                    {tag}
                  </span>
                </motion.div>
              )}
              <h2 className="text-6xl font-normal leading-[1.05] tracking-tight text-[#1a1a1a] md:text-7xl font-serif">
                {title}
              </h2>
            </div>

            <div className="max-w-xl space-y-6 text-lg leading-relaxed text-[#6b6b6b]">
              {description.map((para, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}>
                  {para}
                </motion.p>
              ))}
            </div>

            {buttonText && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}>
                {buttonHref ? (
                  <Link
                    href={buttonHref}
                    className="group flex w-fit items-center space-x-3 rounded-full border-2 px-6 py-4 text-sm font-semibold tracking-wider transition-all hover:text-[#fdfbf8]"
                    style={{
                      borderColor: accentColor,
                      color: accentColor,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = accentColor;
                      e.currentTarget.style.color = backgroundColor;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = accentColor;
                    }}>
                    <span>{buttonText}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                ) : (
                  <button
                    onClick={onButtonClick}
                    className="group flex items-center space-x-3 rounded-full border-2 px-6 py-4 text-sm font-semibold tracking-wider transition-all hover:text-[#fdfbf8]"
                    style={{
                      borderColor: accentColor,
                      color: accentColor,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = accentColor;
                      e.currentTarget.style.color = backgroundColor;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = accentColor;
                    }}>
                    <span>{buttonText}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                )}
              </motion.div>
            )}
          </motion.div>

          {/* Image side */}
          <div
            className={cn(
              "relative flex justify-center",
              reverse
                ? "lg:order-1 lg:justify-start"
                : "lg:order-2 lg:justify-end",
            )}>
            {/* The decorative circle */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="absolute -top-16 left-0 h-32 w-32 rounded-full lg:-top-18 lg:left-6"
              style={{ backgroundColor: circleColor }}
            />

            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, x: reverse ? -50 : 50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 overflow-hidden rounded-[40px] shadow-[-20px_20px_60px_-15px_rgba(0,0,0,0.15)]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={550}
                height={650}
                className="h-[600px] w-full object-cover grayscale-[0.1] contrast-[1.05] transition-transform duration-1000 hover:scale-105 md:h-[650px]"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
