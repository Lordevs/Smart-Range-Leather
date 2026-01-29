"use client";

import { CertificationsSection } from "../common/certifications-section";
// certification
const certifications = [
  {
    title: "ISO 9001:2015",
    subtitle: "QUALITY MANAGEMENT",
  },
  {
    title: "ISO 14001:2015",
    subtitle: "ENVIRONMENTAL MANAGEMENT",
  },
  {
    title: "ISO 45001:2018",
    subtitle: "OCCUPATIONAL HEALTH & SAFETY",
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
