import HeroSection from "@/components/home/HeroSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhyKarmic from "@/components/home/WhyKarmic";
import IndustriesStrip from "@/components/home/IndustriesStrip";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";
import { ClientsStrip } from "@/components/shared/ClientsStrip";
import { hroClients, rpoClients, elearningClients } from "@/lib/clients";

export default function HomePage() {
  const allClients = [...hroClients, ...rpoClients, ...elearningClients];

  return (
    <>
      <HeroSection />
      <div className="border-t border-white/5 mx-auto max-w-7xl px-4">
        <ClientsStrip clients={allClients} label="Our Clients Across Industries" speed={40} />
      </div>
      <ServicesGrid />
      <WhyKarmic />
      <IndustriesStrip />
      <ProcessTimeline />
      <Testimonials />
      <CTABanner />
    </>
  );
}
