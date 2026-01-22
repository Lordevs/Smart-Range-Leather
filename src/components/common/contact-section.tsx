"use client";

import { Phone, Mail, Clock, CheckCircle } from "lucide-react";
import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import Image from "next/image";

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
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });
  const [showThankYouModal, setShowThankYouModal] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleCloseModal = () => {
    setShowThankYouModal(false);
    setSubmitStatus({ type: null, message: "" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setShowThankYouModal(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          website: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section
      id="contact-form"
      className={cn("w-full bg-[#fdfbf8] py-24 px-6 md:px-12", className)}>
      <div className="mx-auto max-w-7xl">
        {/* Thank You Modal */}
        <Dialog open={showThankYouModal} onOpenChange={setShowThankYouModal}>
          <DialogContent className="sm:max-w-md border-0 bg-white">
            <div className="flex flex-col items-center text-center space-y-6">
              {/* Success Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}>
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}>
                <DialogHeader className="text-center">
                  <DialogTitle className="text-2xl font-serif text-[#1A1A1A]">
                    Thank You!
                  </DialogTitle>
                  <DialogDescription className="text-base text-[#6B6B6B] mt-2">
                    Your message has been sent successfully. We&lsquo;ve
                    received your inquiry and will get back to you as soon as
                    possible.
                  </DialogDescription>
                </DialogHeader>
              </motion.div>

              {/* Close Button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="w-full pt-4">
                <Button
                  onClick={handleCloseModal}
                  className="w-full bg-[#B8641A] text-white font-serif py-2 rounded-sm hover:bg-[#3D230B] transition-all">
                  Done
                </Button>
              </motion.div>
            </div>
          </DialogContent>
        </Dialog>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 flex flex-col items-center text-center space-y-6">
          {tag && (
            <div className="inline-block border-b border-[#B8641A]">
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
          className="mb-20 overflow-hidden bg-white shadow-[0_10px_50px_rgba(0,0,0,0.05)] border border-neutral-100 lg:flex items-stretch">
          {/* Left Column - info */}
          <div className="px-2 py-4 lg:w-115 flex flex-col">
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
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2 grow">
              <div className="space-y-2">
                <Label
                  htmlFor="firstName"
                  className="text-sm font-bold text-accent-foreground">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="Write your first name..."
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  disabled={isLoading}
                  className="border-0 border-b border-accent-foreground text-accent-foreground/79 placeholder:text-accent-foreground/63 py-2 px-0 rounded-none shadow-none focus-visible:border-accent-foreground focus-visible:ring-0 transition-all h-auto disabled:opacity-50"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="lastName"
                  className="text-sm font-bold text-accent-foreground">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Write your last name..."
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  disabled={isLoading}
                  className="border-0 border-b border-accent-foreground text-accent-foreground/79 placeholder:text-accent-foreground/63 py-2 px-0 rounded-none shadow-none focus-visible:border-accent-foreground focus-visible:ring-0 transition-all h-auto disabled:opacity-50"
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
                  placeholder="Write your email address..."
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isLoading}
                  className="border-0 border-b border-accent-foreground text-accent-foreground/79 placeholder:text-accent-foreground/63 py-2 px-0 rounded-none shadow-none focus-visible:border-accent-foreground focus-visible:ring-0 transition-all h-auto disabled:opacity-50"
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
                  placeholder="Write your phone number..."
                  value={formData.phone}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  className="border-0 border-b border-accent-foreground text-accent-foreground/79 placeholder:text-accent-foreground/63 py-2 px-0 rounded-none shadow-none focus-visible:border-accent-foreground focus-visible:ring-0 transition-all h-auto disabled:opacity-50"
                />
              </div>
              <div className="space-y-2 lg:mt-6">
                <Label
                  htmlFor="company"
                  className="text-sm font-bold text-accent-foreground">
                  Company Name
                </Label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Write your company name..."
                  value={formData.company}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  className="border-0 border-b border-accent-foreground text-accent-foreground/79 placeholder:text-accent-foreground/63 py-2 px-0 rounded-none shadow-none focus-visible:border-accent-foreground focus-visible:ring-0 transition-all h-auto disabled:opacity-50"
                />
              </div>
              <div className="space-y-2 lg:mt-6">
                <Label
                  htmlFor="website"
                  className="text-sm font-bold text-accent-foreground">
                  Website
                </Label>
                <Input
                  id="website"
                  type="url"
                  placeholder="Write your website..."
                  value={formData.website}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  className="border-0 border-b border-accent-foreground text-accent-foreground/79 placeholder:text-accent-foreground/63 py-2 px-0 rounded-none shadow-none focus-visible:border-accent-foreground focus-visible:ring-0 transition-all h-auto disabled:opacity-50"
                />
              </div>
              <div className="space-y-2 md:col-span-2 lg:mt-6">
                <Label
                  htmlFor="message"
                  className="text-sm font-bold text-accent-foreground">
                  Brief Description of your Interest
                </Label>
                <Textarea
                  id="message"
                  placeholder="Write your Interest..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  disabled={isLoading}
                  className="border-0 border-b border-accent-foreground text-accent-foreground/79 placeholder:text-accent-foreground/63 py-2 px-0 rounded-none shadow-none focus-visible:border-accent-foreground focus-visible:ring-0 transition-all min-h-0 h-auto field-sizing-content bg-transparent resize-none disabled:opacity-50"
                />
              </div>

              {/* Status Messages */}
              {submitStatus.type && (
                <div className="md:col-span-2">
                  <div
                    className={cn(
                      "p-4 rounded-lg text-sm font-medium",
                      submitStatus.type === "success"
                        ? "bg-green-100 text-green-800 border border-green-300"
                        : "bg-red-100 text-red-800 border border-red-300",
                    )}>
                    {submitStatus.message}
                  </div>
                </div>
              )}

              <div className="md:col-span-2 flex justify-end pt-12 items-end">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="bg-accent-foreground text-white px-12 py-4 rounded-sm text-xl font-serif hover:bg-[#3D230B] transition-all shadow-lg active:scale-95 h-auto disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer">
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>
        </motion.div>

        {/* Locations Grid */}
        <div className="space-y-20">
          {/* Our Offices and Operations */}
          <div className="space-y-8">
            <h3 className="text-5xl font-normal text-accent-foreground font-serif ">
              Our Offices and Operations.
            </h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-20">
              {locations
                .filter((loc) => loc.type === "Office")
                .map((loc, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="rounded-lg bg-white p-8 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-neutral-50 space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl overflow-hidden w-10 h-8 flex items-center justify-center">
                        <Image
                          src={`/images/flags/${loc.flag}`}
                          alt={loc.country}
                          width={16}
                          height={16}
                          className="w-full h-full object-cover"
                          suppressHydrationWarning
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

          {/* Our Production Houses */}
          <div className="space-y-8">
            <h3 className="text-5xl font-normal text-accent-foreground font-serif">
              Our Production Houses.
            </h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt">
              {locations
                .filter((loc) => loc.type === "Warehouse" || loc.type === "Manufacturing Factory")
                .map((loc, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="rounded-lg bg-white p-8 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-neutral-50 space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl overflow-hidden w-10 h-8 flex items-center justify-center">
                        <Image
                          src={`/images/flags/${loc.flag}`}
                          alt={loc.country}
                          width={16}
                          height={16}
                          className="w-full h-full object-cover"
                          suppressHydrationWarning
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
      </div>
    </section>
  );
}
