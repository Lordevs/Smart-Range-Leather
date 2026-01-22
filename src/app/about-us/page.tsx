import AboutUsHeroSection from "@/components/about-us/about-us-hero-section";
import { OurStorySection } from "@/components/about-us/our-story-section";
import { StatsSection } from "@/components/common/stats-section";
import { ApproachSection } from "@/components/about-us/approach-section";
import { HomeManufacturingProcess } from "@/components/shared/home-manufacturing-process";
import { HomeCapabilitiesSection } from "@/components/shared/home-capabilities-section";
import { HomeClientsSection } from "@/components/shared/home-clients-section";
import { HomeWhyChooseUs } from "@/components/shared/home-why-choose-us";
import { HomeSustainabilitySection } from "@/components/shared/home-sustainability-section";

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
