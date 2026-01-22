import type { Metadata } from "next";
// seo
export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover Smart Range Leather, a leading vertically integrated manufacturer with over 20 years of expertise in premium leather garments, bags, and accessories. Learn about our heritage, craftsmanship, and commitment to quality.",
  openGraph: {
    title: "About Smart Range Leather - Heritage & Craftsmanship",
    description:
      "Learn about our vertically integrated manufacturing process and how we help global brands bring premium leather collections to market with precision and quality.",
    url: `${process.env.NEXT_PUBLIC_FRONTEND_URL || "https://smartrangeleather.com"}/about-us`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_FRONTEND_URL || "https://smartrangeleather.com"}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "About Smart Range Leather",
      },
    ],
  },
  twitter: {
    title: "About Smart Range Leather - Premium Leather Factory",
    description:
      "20+ years of excellence in leather manufacturing. Discover our vertically integrated approach and craftmanship.",
  },
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
