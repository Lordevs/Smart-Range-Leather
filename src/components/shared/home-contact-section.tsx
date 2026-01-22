"use client";

import { ContactSection } from "../common/contact-section";

const locations = [
  {
    country: "United Kingdom",
    flag: "uk-flag.webp",
    type: "Office",
    address: "Unit 3 Dominion Works Dagenham, RM8 1RX.",
  },
  {
    country: "United Arab Emirates",
    flag: "united-arab-emirates.webp",
    type: "Office",
    address: "Business Bay Dubai, UAE",
  },
  {
    country: "United States of America",
    flag: "america.webp",
    type: "Office",
    address: "Dallas, Texas, USA.",
  },
  {
    country: "Turkey",
    flag: "turkey.webp",
    type: "Warehouse",
    address: "Zeytinburnu, Istanbul 34020.",
  },
  {
    country: "Pakistan",
    flag: "pakistan.webp",
    type: "Manufacturing Factory",
    address: "Toorabad, Daska Road Sialkot, Pakistan.",
  },
];

export function HomeContactSection() {
  return (
    <ContactSection
      tag="GET IN TOUCH"
      title="Ready to Manufacture Your Collection?"
      description="Whether you're launching a new brand or scaling production, we provide the expertise and reliability you need."
      contactInfo={{
        phone: "+44 123 456 7890",
        email: "info@smartrangeleather.com",
        hours: "Mon-Fri: 9AM-6PM GMT",
      }}
      locations={locations}
    />
  );
}
