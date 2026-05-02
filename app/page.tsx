import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhyKarmic from "@/components/home/WhyKarmic";
import IndustriesStrip from "@/components/home/IndustriesStrip";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ServicesGrid />
      <WhyKarmic />
      <IndustriesStrip />
      <ProcessTimeline />
      <Testimonials />
      <CTABanner />
    </>
  );
}
