"use client";

import React, { useState } from "react";
import { Mail, FileText, X } from "lucide-react";
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
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  showTrigger?: boolean;
}

export function DownloadCatalogueDialog({
  buttonLabel = "DOWNLOAD ALL CATALOGUE",
  dialogTitle = "Download Our Full Catalogue",
  dialogDescription = "Enter your details to access the full Smart Range Leather catalogue.",
  className,
  open,
  onOpenChange,
  showTrigger = true,
}: DownloadCatalogueDialogProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    message: "",
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev: typeof formData) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/catalogue", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Request submitted successfully!",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          website: "",
          message: "",
        });
        setSelectedFile(null);
        // Optionally close dialog after success
        setTimeout(() => {
          onOpenChange?.(false);
          setSubmitStatus({ type: null, message: "" });
        }, 2000);
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to submit request.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {showTrigger && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
          <DialogTrigger asChild>
            <Button
              className={cn(
                "h-14 px-10! py-7! rounded-full bg-primary text-xs font-bold tracking-[0.15em] text-primary-foreground hover:bg-primary/90 transition-all gap-3 shadow-lg group cursor-pointer",
                className,
              )}>
              {buttonLabel}
              <Mail className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </Button>
          </DialogTrigger>
        </motion.div>
      )}
      <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden border-none rounded-none bg-secondary max-h-[90vh] overflow-y-auto">
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

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 group">
                <Label
                  htmlFor="firstName"
                  className="text-[15px] font-serif text-accent-foreground opacity-80">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  disabled={isLoading}
                  className="border-t-0 border-l-0 border-r-0 border-b-[1.5px] border-primary-foreground/30 rounded-none bg-transparent px-0 h-auto focus-visible:ring-0 focus-visible:border-[#6C3403] transition-all placeholder:text-[#6b6b6b]/40"
                />
              </div>

              <div className="space-y-2 group">
                <Label
                  htmlFor="lastName"
                  className="text-[15px] font-serif text-accent-foreground opacity-80">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  disabled={isLoading}
                  className="border-t-0 border-l-0 border-r-0 border-b-[1.5px] border-primary-foreground/30 rounded-none bg-transparent px-0 h-auto focus-visible:ring-0 focus-visible:border-[#6C3403] transition-all placeholder:text-[#6b6b6b]/40"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 group">
                <Label
                  htmlFor="email"
                  className="text-[15px] font-serif text-[#6C3403] opacity-80">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isLoading}
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
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  disabled={isLoading}
                  className="border-t-0 border-l-0 border-r-0 border-b-[1.5px] border-primary-foreground/30 rounded-none bg-transparent px-0 h-auto focus-visible:ring-0 focus-visible:border-primary-foreground transition-all placeholder:text-secondary/40"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 group">
                <Label
                  htmlFor="company"
                  className="text-[15px] font-serif text-accent-foreground opacity-80">
                  Company Name
                </Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  disabled={isLoading}
                  className="border-t-0 border-l-0 border-r-0 border-b-[1.5px] border-primary-foreground/30 rounded-none bg-transparent px-0 h-auto focus-visible:ring-0 focus-visible:border-[#6C3403] transition-all placeholder:text-[#6b6b6b]/40"
                />
              </div>

              <div className="space-y-2 group">
                <Label
                  htmlFor="website"
                  className="text-[15px] font-serif text-accent-foreground opacity-80">
                  Website (Optional)
                </Label>
                <Input
                  id="website"
                  type="url"
                  value={formData.website}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  className="border-t-0 border-l-0 border-r-0 border-b-[1.5px] border-primary-foreground/30 rounded-none bg-transparent px-0 h-auto focus-visible:ring-0 focus-visible:border-[#6C3403] transition-all placeholder:text-[#6b6b6b]/40"
                />
              </div>
            </div>

            <div className="space-y-2 group">
              <Label
                htmlFor="message"
                className="text-[15px] font-serif text-accent-foreground opacity-80">
                Brief Description of your Interest
              </Label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                disabled={isLoading}
                rows={1}
                className="w-full border-t-0 border-l-0 border-r-0 border-b-[1.5px] border-primary-foreground/30 rounded-none bg-transparent px-0 h-auto focus-visible:ring-0 focus-visible:border-[#6C3403] focus:outline-none transition-all placeholder:text-[#6b6b6b]/40 resize-none"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Label
                  htmlFor="file-upload"
                  className="flex items-center gap-2 px-4 py-2 border border-dashed border-primary-foreground/30 rounded-lg cursor-pointer hover:bg-primary-foreground/5 transition-all">
                  <span className="text-sm font-medium text-accent-foreground opacity-80">
                    {selectedFile ? "Change File" : "Attach File"}
                  </span>
                  <Input
                    id="file-upload"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={handleFileChange}
                    disabled={isLoading}
                  />
                </Label>
                {selectedFile && (
                  <div className="flex items-center gap-2 bg-white/50 px-3 py-1.5 rounded-full border border-primary-foreground/10">
                    {selectedFile.type === "application/pdf" ? (
                      <FileText className="h-4 w-4 text-red-600" />
                    ) : (
                      <FileText className="h-4 w-4 text-blue-600" />
                    )}
                    <span className="text-xs font-medium text-accent-foreground truncate max-w-[150px]">
                      {selectedFile.name}
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedFile(null)}
                      className="text-accent-foreground/50 hover:text-red-600 transition-colors">
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {submitStatus.type && (
              <div
                className={cn(
                  "p-4 rounded text-sm font-medium text-center",
                  submitStatus.type === "success"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800",
                )}>
                {submitStatus.message}
              </div>
            )}

            <div className="pt-4 flex justify-center">
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-16 rounded-[40px] bg-primary-foreground text-secondary text-xs font-bold tracking-[0.2em] hover:bg-accent-foreground transition-all gap-3 shadow-xl group cursor-pointer disabled:opacity-50">
                <Mail className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                {isLoading ? "SUBMITTING..." : "REQUEST CATALOGUE"}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
