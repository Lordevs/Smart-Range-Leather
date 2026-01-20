import type { Metadata } from "next";
import { Tinos } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/navbar";

const tinos = Tinos({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-tinos",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Smart Range Leather",
  description: "Smart Range Leather",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${tinos.variable} font-sans antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
