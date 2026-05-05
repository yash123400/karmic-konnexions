import { Metadata } from "next";
import MktgHeroSection from "./_sections/MktgHeroSection";
import MktgServicesList from "./_sections/MktgServicesList";
import MktgComparison from "./_sections/MktgComparison";
import MktgContentOutput from "./_sections/MktgContentOutput";
import MktgStatsBar from "./_sections/MktgStatsBar";
import MktgToolsGrid from "./_sections/MktgToolsGrid";
import MktgTestimonial from "./_sections/MktgTestimonial";
import MktgRelatedServices from "./_sections/MktgRelatedServices";
import MktgPricingCta from "./_sections/MktgPricingCta";

export const metadata: Metadata = {
  title: "Marketing Services Outsourcing | Karmic Konnexions",
  description:
    "Outsource your content, email marketing, social media, and campaign analytics to a dedicated marketing operations team. Consistent execution without the agency markup.",
  keywords: [
    "marketing outsourcing India",
    "content marketing outsourcing",
    "email marketing outsourcing",
    "social media outsourcing",
    "marketing ops BPO",
  ],
};

export default function MarketingServicesPage() {
  return (
    <>
      <MktgHeroSection />
      <MktgServicesList />
      <MktgComparison />
      <MktgContentOutput />
      <MktgStatsBar />
      <MktgToolsGrid />
      <MktgTestimonial />
      <MktgRelatedServices />
      <MktgPricingCta />
    </>
  );
}
