import type { Metadata } from "next";
import { Tinos } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import { ScrollToTop } from "@/components/common/scroll-to-top";

const tinos = Tinos({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-tinos",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_FRONTEND_URL || "https://www.smartrangeleather.com",
  ),
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_FRONTEND_URL || "https://www.smartrangeleather.com"}/`,
  },
  title: {
    default: "Smart Range Leather - Premium Leather Manufacturing & Export",
    template: "%s | Smart Range Leather",
  },
  description:
    "Leading vertically integrated leather manufacturer specializing in custom leather jackets, shearling garments, bags, and accessories. Premium quality with low MOQs and global delivery.",
  keywords: [
    "leather manufacturing",
    "custom leather jackets",
    "shearling coats manufacturer",
    "leather bags factory",
    "private label leather goods",
    "leather garments export",
    "vertically integrated leather factory",
    "luxury leather manufacturing",
    "Smart Range Leather",
    "Pakistan leather industry",
  ],
  authors: [{ name: "Smart Range Leather" }],
  creator: "Smart Range Leather",
  publisher: "Smart Range Leather",
  // Icons and logos
  icons: {
    icon: [
      { url: "/logo.svg", sizes: "32x32", type: "image/svg+xml" },
      { url: "/logo.svg", sizes: "16x16", type: "image/svg+xml" },
    ],
    apple: [{ url: "/logo.svg", sizes: "180x180", type: "image/svg+xml" }],
    other: [{ rel: "mask-icon", url: "/logo.svg", color: "#6C3403" }],
  },
  // Open Graph metadata
  openGraph: {
    title: "Smart Range Leather - Premium Leather Manufacturing & Export",
    description:
      "Specialising in high-end leather garments and accessories. Explore our vertically integrated manufacturing process, low MOQs, and global export capabilities.",
    url: `${process.env.NEXT_PUBLIC_FRONTEND_URL || "https://www.smartrangeleather.com"}/`,
    siteName: "Smart Range Leather",
    locale: "en_US",
    type: "website",
  },
  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Smart Range Leather | Premium Leather Factory",
    description:
      "Expertly crafted leather jackets, shearling, and accessories. Vertically integrated manufacturing for brands worldwide.",
    images: [
      `${process.env.NEXT_PUBLIC_FRONTEND_URL || "https://www.smartrangeleather.com"}/opengraph-image.png`,
    ],
  },
  // Additional meta tags
  other: {
    "msapplication-TileColor": "#6C3403",
    "msapplication-TileImage": `${process.env.NEXT_PUBLIC_FRONTEND_URL || "https://www.smartrangeleather.com"}/logo.svg`,
    "application-name": "Smart Range Leather",
    "apple-mobile-web-app-title": "Smart Range Leather",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${tinos.variable} font-sans antialiased`}
        suppressHydrationWarning>
        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NYY4K41WWM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NYY4K41WWM');
          `}
        </Script>
        <Navbar />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
