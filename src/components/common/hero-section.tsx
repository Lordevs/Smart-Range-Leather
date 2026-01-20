"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[calc(100vh-64px)] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/leather-craftsmanship.png"
        alt="Leather Craftsmanship"
        fill
        className="object-cover"
        priority
      />
      {/* Overlay: Darker gradient to make text pop */}
      <div className="absolute inset-0 bg-linear-to-tr from-primary-foreground/80 via-primary-foreground/40 to-transparent lg:from-primary-foreground/90 lg:via-primary-foreground/60" />

      {/* Content */}
      <div className="container relative mx-auto flex h-full flex-col justify-center px-6 lg:px-12">
        <div className="max-w-7xl space-y-10">
          <h1 className="text-4xl text-white md:text-6xl lg:text-7xl leading-[1.1] font-medium tracking-tight">
            High Quality Leather Manufacturing{" "}
            <br className="hidden md:block" />
            for{" "}
            <span className="text-primary font-serif brightness-110 drop-shadow-[0_0_15px_rgba(255,209,139,0.3)]">
              Global Brands
            </span>{" "}
            and{" "}
            <span className="text-primary font-serif brightness-110 drop-shadow-[0_0_15px_rgba(255,209,139,0.3)]">
              Retailers
            </span>
          </h1>

          <p className="max-w-2xl text-lg text-white/90 md:text-xl font-light leading-relaxed tracking-wide">
            Premium leather garments, shearling, bags, and accessories,
            manufactured with precision, flexibility, and uncompromising
            quality.
          </p>

          {/* Features with gold dots */}
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4 text-sm md:text-base font-medium text-white/80">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span>Over 20 years of manufacturing excellence</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span>Low MOQs</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span>On-time global delivery</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
            <Button
              size="lg"
              className="h-13 rounded-full bg-primary px-12 text-lg font-bold text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 gap-3">
              Request a Quote
              <ArrowRight className="h-6 w-6 stroke-[2.5px]" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-16 rounded-full border-white/40 bg-black/30 px-12 text-lg font-bold text-white backdrop-blur-md hover:bg-white/10 transition-all hover:scale-105">
              Explore Our Capabilities
            </Button>
          </div>
        </div>

        {/* Mouse/Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 transition-opacity duration-1000">
          <div className="w-[30px] h-[50px] border-2 border-white/40 rounded-full flex justify-center items-start pt-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-scroll" />
          </div>
        </div>
      </div>
    </section>
  );
}
