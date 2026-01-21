import HomeHeroSection from "@/components/home-hero-section";
import { StatsSection } from "@/components/common/stats-section";
import { AboutSection } from "@/components/about-section";
import { WhyChooseUs } from "@/components/common/why-choose-us";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HomeHeroSection />
      <StatsSection />
      <AboutSection />
      <WhyChooseUs />
    </main>
  );
}
