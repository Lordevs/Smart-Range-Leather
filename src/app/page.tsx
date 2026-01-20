import { StatsSection } from "@/components/common/stats-section";
import { AboutSection } from "@/components/about-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdfbf8]">
      <AboutSection />
      <StatsSection />
    </main>
  );
}
