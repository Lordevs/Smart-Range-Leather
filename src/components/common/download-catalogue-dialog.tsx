"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface DownloadCatalogueDialogProps {
  buttonLabel?: string;
  dialogTitle?: string;
  dialogDescription?: string;
  className?: string;
}

export function DownloadCatalogueDialog({
  buttonLabel = "DOWNLOAD ALL CATALOGUE",
  dialogTitle = "Download Our Full Catalogue",
  dialogDescription = "Enter your details to access the full Smart Range Leather catalogue.",
  className,
}: DownloadCatalogueDialogProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className={cn(
              "h-14 px-10! py-7!  rounded-full bg-primary text-xs font-bold tracking-[0.15em] text-primary-foreground hover:bg-primary/90 transition-all gap-3 shadow-lg group cursor-pointer",
              className,
            )}>
            {buttonLabel}
            <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden border-none rounded-none bg-secondary">
          <div className="p-6 md:p-10 ">
            <div className="flex justify-between items-start gap-4">
              <div className="space-y-3">
                <DialogTitle className="font-serif text-3xl md:text-4xl border-b-2 border-accent-foreground text-accent-foreground leading-tight font-normal">
                  {dialogTitle}
                </DialogTitle>
                <DialogDescription className="text-accent-foreground/70 pb-5 text-[15px] font-medium">
                  {dialogDescription}
                </DialogDescription>
              </div>
              <div className="shrink-0 pt-2">
                <Image
                  src="/logo.svg"
                  alt="Smart Range Leather"
                  width={100}
                  height={100}
                  className="h-14 w-auto object-contain opacity-80"
                  suppressHydrationWarning
                />
              </div>
            </div>

            <form className="space-y-8">
              <div className="space-y-2 group">
                <Label
                  htmlFor="name"
                  className="text-[15px] font-serif text-accent-foreground opacity-80">
                  Full Name
                </Label>
                <Input
                  id="name"
                  placeholder=""
                  className="border-t-0 border-l-0 border-r-0 border-b-[1.5px] border-primary-foreground/30 rounded-none bg-transparent px-0 h-auto focus-visible:ring-0 focus-visible:border-[#6C3403] transition-all placeholder:text-[#6b6b6b]/40"
                />
              </div>

              <div className="space-y-2 group">
                <Label
                  htmlFor="email"
                  className="text-[15px] font-serif text-[#6C3403] opacity-80">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder=""
                  className="border-t-0 border-l-0 border-r-0 border-b-[1.5px] border-primary-foreground/30 rounded-none bg-transparent px-0  h-auto focus-visible:ring-0 focus-visible:border-[#6C3403] transition-all placeholder:text-[#6b6b6b]/40"
                />
              </div>

              <div className="space-y-2 group">
                <Label
                  htmlFor="phone"
                  className="text-[15px] font-serif text-primary-foreground opacity-80">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder=""
                  className="border-t-0 border-l-0 border-r-0 border-b-[1.5px] border-primary-foreground/30 rounded-none bg-transparent px-0 h-auto focus-visible:ring-0 focus-visible:border-primary-foreground transition-all placeholder:text-secondary/40"
                />
              </div>

              <div className="pt-4 flex justify-center">
                <Button className="w-full h-16 rounded-[40px] bg-primary-foreground text-secondary text-xs font-bold tracking-[0.2em] hover:bg-accent-foreground transition-all gap-3 shadow-xl group">
                  DOWNLOAD CATALOGUE
                  <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                </Button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}
