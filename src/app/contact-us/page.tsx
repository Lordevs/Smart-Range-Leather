import ContactUsHeroSection from "@/components/contact-us/contact-us-hero-section";
import { StatsSection } from "@/components/common/stats-section";
import { HomeClientsSection } from "@/components/shared/home-clients-section";
import { HomeWhyChooseUs } from "@/components/shared/home-why-choose-us";
import { HomeSustainabilitySection } from "@/components/shared/home-sustainability-section";
import { HomeContactSection } from "@/components/shared/home-contact-section";

export default function ContactUs() {
  return (
    <main className="min-h-screen">
      <ContactUsHeroSection />
      <StatsSection />
      <HomeContactSection />
      <HomeSustainabilitySection />
      <HomeClientsSection />
      <HomeWhyChooseUs />
    </main>
  );
}
