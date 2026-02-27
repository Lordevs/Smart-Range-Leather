"use client";

import { CertificationsSection } from "../common/certifications-section";
// certification
const certifications = [
  {
    title: "ISO 9001:2015",
    subtitle: "QUALITY MANAGEMENT",
    link: "https://www.iso.org/standard/62085.html",
  },
  {
    title: "ISO 14001:2015",
    subtitle: "ENVIRONMENTAL MANAGEMENT",
    link: "https://www.iso.org/standard/60857.html",
  },
  {
    title: "ISO 45001:2018",
    subtitle: "OCCUPATIONAL HEALTH & SAFETY",
    link: "https://www.iso.org/standard/63787.html",
  },
];

export function HomeCertificationsSection() {
  return (
    <CertificationsSection
      title={
        <>
          Certified Quality <br />
          <span className="text-accent-foreground">You Can Trust</span>
        </>
      }
      description="Operating under internationally recognised quality, environmental, and safety standards"
      items={certifications}
    />
  );
}
