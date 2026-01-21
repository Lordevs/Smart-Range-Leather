"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { motion } from "motion/react";

const socialLinks = [
  { icon: Facebook, href: "#", name: "Facebook" },
  { icon: Instagram, href: "#", name: "Instagram" },
  { icon: Linkedin, href: "#", name: "LinkedIn" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Catalogue", href: "/catalogue" },
  { name: "Contact", href: "/contact" },
];

const productLinks = [
  { name: "Leather Jackets", href: "/products/leather-jackets" },
  { name: "Shearling Jackets", href: "/products/shearling-jackets" },
  { name: "Leather Bags", href: "/products/leather-bags" },
  { name: "Accessories", href: "/products/accessories" },
  { name: "Custom Collections", href: "/products/custom-collections" },
];

export function Footer() {
  return (
    <footer className="w-full bg-[#1A1A1A] text-white pt-20 pb-10 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8">
            <Link href="/" className="block">
              <Image
                src="/logo.svg"
                alt="Smart Range Leather"
                width={150}
                height={60}
                className="h-16 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-secondary/80 text-sm leading-relaxed max-w-xs">
              Premium leather manufacturing for global brands since 2004.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center bg-primary rounded-sm transition-transform hover:scale-110">
                  <social.icon className="w-5 h-5 text-primary-foreground" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8">
            <h3 className="text-primary font-bold uppercase tracking-wider text-sm">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-secondary/80 hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8">
            <h3 className="text-primary font-bold uppercase tracking-wider text-sm">
              Products
            </h3>
            <ul className="space-y-4">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-secondary/80 hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8">
            <h3 className="text-primary font-bold uppercase tracking-wider text-sm">
              Contact
            </h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 text-secondary/80 text-sm group cursor-pointer hover:text-primary transition-colors">
                <Mail className="w-5 h-5 text-primary shrink-0 transition-transform group-hover:scale-110" />
                <span>info@smartrangeleather.com</span>
              </li>
              <li className="flex items-center gap-4 text-secondary/80 text-sm group cursor-pointer hover:text-primary transition-colors">
                <Phone className="w-5 h-5 text-primary shrink-0 transition-transform group-hover:scale-110" />
                <span>+92 XXX XXXXXXX</span>
              </li>
              <li className="flex items-start gap-4 text-secondary/80 text-sm group cursor-pointer hover:text-primary transition-colors">
                <MapPin className="w-5 h-5 text-primary shrink-0 transition-transform group-hover:scale-110" />
                <span>Pakistan</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}>
          <Separator className="bg-white/10 mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-secondary/40 text-[13px]">
              © 2026 Smart Range Leather. All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link
                href="/privacy-policy"
                className="text-secondary/40 hover:text-primary transition-colors text-[13px]">
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-secondary/40 hover:text-primary transition-colors text-[13px]">
                Terms
              </Link>
              <Link
                href="/sitemap"
                className="text-secondary/40 hover:text-primary transition-colors text-[13px]">
                Sitemap
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
