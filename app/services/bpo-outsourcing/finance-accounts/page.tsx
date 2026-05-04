import { Metadata } from "next";
import FaHeroSection from "./_sections/FaHeroSection";
import FaScopeList from "./_sections/FaScopeList";
import FaStatsBar from "./_sections/FaStatsBar";
import FaDashboardPreview from "./_sections/FaDashboardPreview";
import FaToolsGrid from "./_sections/FaToolsGrid";
import FaProcessTimeline from "./_sections/FaProcessTimeline";
import FaComplianceCalendar from "./_sections/FaComplianceCalendar";
import FaTestimonial from "./_sections/FaTestimonial";
import FaRelatedAndCta from "./_sections/FaRelatedAndCta";

export const metadata: Metadata = {
  title: "Finance & Accounts Outsourcing Services | Karmic Konnexions",
  description:
    "Outsource your finance and accounts function — AP/AR, MIS reporting, tax compliance, and bookkeeping — to chartered-accountant-led teams at Karmic Konnexions.",
  keywords: [
    "finance outsourcing India",
    "accounts outsourcing Gurgaon",
    "bookkeeping services India",
    "MIS reporting outsourcing",
    "AP AR outsourcing",
  ],
};

export default function FinanceAccountsPage() {
  return (
    <>
      <FaHeroSection />
      <FaScopeList />
      <FaStatsBar />
      <FaDashboardPreview />
      <FaToolsGrid />
      <FaProcessTimeline />
      <FaComplianceCalendar />
      <FaTestimonial />
      <FaRelatedAndCta />
    </>
  );
}
