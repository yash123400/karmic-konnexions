import { Metadata } from "next";
import CrmHeroSection from "./_sections/CrmHeroSection";
import CrmPainPoints from "./_sections/CrmPainPoints";
import CrmServicesGrid from "./_sections/CrmServicesGrid";
import CrmToolsGrid from "./_sections/CrmToolsGrid";
import CrmStatsBar from "./_sections/CrmStatsBar";
import CrmRelatedServices from "./_sections/CrmRelatedServices";
import CrmTestimonialCta from "./_sections/CrmTestimonialCta";

export const metadata: Metadata = {
  title: "CRM & Sales Operations Outsourcing | Karmic Konnexions",
  description:
    "Outsource your CRM management, pipeline reporting, lead qualification, and sales operations to expert teams. Karmic Konnexions keeps your revenue engine running.",
  keywords: [
    "CRM outsourcing India",
    "sales operations outsourcing",
    "Salesforce outsourcing",
    "Zoho CRM management",
    "lead management outsourcing",
  ],
};

export default function CrmSalesOpsPage() {
  return (
    <>
      <CrmHeroSection />
      <CrmPainPoints />
      <CrmServicesGrid />
      <CrmToolsGrid />
      <CrmStatsBar />
      <CrmRelatedServices />
      <CrmTestimonialCta />
    </>
  );
}
