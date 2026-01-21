"use client";

import { Phone, Mail, Clock } from "lucide-react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

interface LocationItem {
  country: string;
  flag: string; // URL or emoji
  type: string;
  address: string;
}

interface ContactSectionProps {
  tag?: string;
  title: ReactNode;
  description?: string;
  contactInfo: {
    phone: string;
    email: string;
    hours: string;
  };
  locations: LocationItem[];
  className?: string;
}

export function ContactSection({
  tag = "GET IN TOUCH",
  title,
  description,
  contactInfo,
  locations,
  className,
}: ContactSectionProps) {
  return (
    <section
      className={cn("w-full bg-[#fdfbf8] py-24 px-6 md:px-12", className)}>
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 flex flex-col items-center text-center space-y-6">
          {tag && (
            <div className="inline-block border-b border-[#B8641A] pb-1">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B8641A]">
                {tag}
              </span>
            </div>
          )}
          <h2 className="max-w-2xl text-4xl font-normal leading-tight text-[#1A1A1A] md:text-6xl font-serif">
            {title}
          </h2>
          {description && (
            <p className="max-w-xl text-base text-[#6B6B6B] leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>

        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-32 overflow-hidden bg-white shadow-[0_10px_50px_rgba(0,0,0,0.05)] border border-neutral-100 lg:flex items-stretch">
          {/* Left Column - info */}
          <div className="px-2 py-4 lg:w-[460px] flex flex-col">
            <div className="relative flex flex-col justify-between bg-[#FFD18B] p-10 overflow-hidden rounded-xl grow min-h-full">
              <div className="space-y-12 z-10">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold font-serif text-accent-foreground">
                    Contact Information
                  </h3>
                  <p className="text-accent-foreground/70 text-lg">
                    Say something to start a live chat!
                  </p>
                </div>

                <div className="space-y-10 pb-20">
                  <div className="flex items-center space-x-6 text-accent-foreground">
                    <Phone className="h-6 w-6" />
                    <span className="text-lg">{contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center space-x-6 text-accent-foreground">
                    <Mail className="h-6 w-6" />
                    <span className="text-lg">{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-6 text-accent-foreground">
                    <Clock className="h-6 w-6" />
                    <span className="text-lg">{contactInfo.hours}</span>
                  </div>
                </div>
              </div>

              {/* Decorative Overlapping Circles */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -bottom-16 -right-16 w-80 h-80 pointer-events-none">
                <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#552C07]" />
                <div className="absolute bottom-32 right-32 h-40 w-40 rounded-full bg-[#994903]/51" />
              </motion.div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="flex-1 p-10 lg:p-16 bg-white flex flex-col">
            <form className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2 grow">
              <div className="space-y-2">
                <Label
                  htmlFor="first-name"
                  className="text-sm font-bold text-accent-foreground">
                  First Name
                </Label>
                <Input
                  id="first-name"
                  type="text"
                  placeholder=" "
                  className="border-0 border-b border-accent-foreground text-accent-foreground/79 placeholder:text-accent-foreground/63 py-2 px-0 rounded-none shadow-none focus-visible:border-accent-foreground focus-visible:ring-0 transition-all h-auto"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="last-name"
                  className="text-sm font-bold text-accent-foreground">
                  Last Name
                </Label>
                <Input
                  id="last-name"
                  type="text"
                  placeholder="Doe"
                  className="border-0 border-b border-accent-foreground text-accent-foreground/79 placeholder:text-accent-foreground/63 py-2 px-0 rounded-none shadow-none focus-visible:border-accent-foreground focus-visible:ring-0 transition-all h-auto"
                />
              </div>
              <div className="space-y-2 lg:mt-6">
                <Label
                  htmlFor="email"
                  className="text-sm font-bold text-accent-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder=" "
                  className="border-0 border-b border-accent-foreground text-accent-foreground/79 placeholder:text-accent-foreground/63 py-2 px-0 rounded-none shadow-none focus-visible:border-accent-foreground focus-visible:ring-0 transition-all h-auto"
                />
              </div>
              <div className="space-y-2 lg:mt-6">
                <Label
                  htmlFor="phone"
                  className="text-sm font-bold text-accent-foreground">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 012 3456 789"
                  className="border-0 border-b border-accent-foreground text-accent-foreground/79 placeholder:text-accent-foreground/63 py-2 px-0 rounded-none shadow-none focus-visible:border-accent-foreground focus-visible:ring-0 transition-all h-auto"
                />
              </div>
              <div className="space-y-2 md:col-span-2 lg:mt-6">
                <Label
                  htmlFor="message"
                  className="text-sm font-bold text-accent-foreground">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Write your message.."
                  className="border-0 border-b border-accent-foreground text-accent-foreground/79 placeholder:text-accent-foreground/63 py-2 px-0 rounded-none shadow-none focus-visible:border-accent-foreground focus-visible:ring-0 transition-all min-h-0 h-auto field-sizing-content bg-transparent resize-none"
                />
              </div>
              <div className="md:col-span-2 flex justify-end pt-12 items-end">
                <Button className="bg-accent-foreground text-white px-12 py-4 rounded-sm text-xl font-serif hover:bg-[#3D230B] transition-all shadow-lg active:scale-95 h-auto">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </motion.div>

        {/* Locations Grid */}
        <div className="space-y-12">
          <h3 className="text-5xl font-normal text-accent-foreground font-serif">
            Our Locations
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {locations.map((loc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-lg bg-white p-8 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-neutral-50 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl overflow-hidden w-10 h-8 flex items-center justify-center">
                    <img
                      src={`/images/flags/${loc.flag}`}
                      alt={loc.country}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-2xl font-bold text-accent-foreground">
                    {loc.country}
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="inline-block border-b-2 border-accent-foreground">
                    <span className="text-base font-bold text-accent-foreground">
                      {loc.type}
                    </span>
                  </div>
                  <p className="text-lg text-accent-foreground">
                    {loc.address}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
