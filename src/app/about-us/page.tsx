import AboutUsHeroSection from "@/components/about-us/about-us-hero-section";
import { OurStorySection } from "@/components/about-us/our-story-section";
import { StatsSection } from "@/components/common/stats-section";
import { ApproachSection } from "@/components/about-us/approach-section";
import { HomeManufacturingProcess } from "@/components/home-manufacturing-process";
import { HomeCapabilitiesSection } from "@/components/home-capabilities-section";
import { HomeClientsSection } from "@/components/home-clients-section";
import { HomeWhyChooseUs } from "@/components/home-why-choose-us";
import { HomeSustainabilitySection } from "@/components/home-sustainability-section";

export default function AboutUs() {
    return (
        <main className="min-h-screen">
            <AboutUsHeroSection />
            <StatsSection />
            <OurStorySection />
            <ApproachSection />
            <HomeManufacturingProcess />
            <HomeCapabilitiesSection />
            <HomeSustainabilitySection />
            <HomeClientsSection />
            <HomeWhyChooseUs />
        </main>
    );
}
