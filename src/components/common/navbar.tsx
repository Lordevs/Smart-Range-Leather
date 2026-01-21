"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/nav-items";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { ROUTES } from "@/constants/route";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <Link href={ROUTES.HOME} className="shrink-0">
          <Image
            src="/logo.svg"
            alt="Smart Range Leather"
            width={100}
            height={100}
            className="h-14 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center gap-10">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-md font-medium transition-all duration-200 hover:text-muted-foreground tracking-wide",
                  isActive
                    ? "text-accent-foreground border-b-2 border-accent-foreground"
                    : "text-accent-foreground",
                )}>
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* CTA Button & Mobile Menu */}
        <div className="flex items-center gap-4">
          <Button className="hidden sm:flex h-12 rounded-full bg-primary px-8 text-md font-bold text-primary-foreground hover:bg-[#FFC46B] shadow-sm transition-all hover:gap-3 gap-2">
            Request a Quote
            <ArrowRight className="h-5 w-5 stroke-[2.5px]" />
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-gray-700">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 ">
                <SheetTitle className="text-left"></SheetTitle>
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-lg font-medium px-4 transition-colors hover:text-accent-foreground",
                      pathname === item.href
                        ? "text-accent-foreground"
                        : "text-accent-foreground",
                    )}>
                    {item.name}
                  </Link>
                ))}
                <div className="mt-4 pt-6 border-t px-4 border-secondary">
                  <Button className="w-full h-12 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/80 gap-2">
                    Request a Quote
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
