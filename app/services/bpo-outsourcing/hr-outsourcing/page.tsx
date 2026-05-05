import { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { buildServiceSchema, buildBreadcrumbSchema } from "@/lib/schemas";
import HrHeroSection from "./_sections/HrHeroSection";
import HrScopeGrid from "./_sections/HrScopeGrid";
import HrStatsBar from "./_sections/HrStatsBar";
import HrWhoWeServe from "./_sections/HrWhoWeServe";
import HrProcessTimeline from "./_sections/HrProcessTimeline";
import HrComplianceCard from "./_sections/HrComplianceCard";
import HrTestimonial from "./_sections/HrTestimonial";
import HrPricing from "./_sections/HrPricing";
import HrRelatedServices from "./_sections/HrRelatedServices";
import HrCtaBanner from "./_sections/HrCtaBanner";

export const metadata: Metadata = {
  title: "HR & Payroll Outsourcing Services India | Karmic Konnexions",
  description:
    "Outsource your complete HR function — payroll, recruitment, compliance, and performance management — to certified HR professionals at Karmic Konnexions, Gurgaon.",
  keywords: [
    "HR outsourcing India",
    "payroll outsourcing Gurgaon",
    "HR BPO services",
    "payroll management company India",
  ],
};

export default function HROutsourcingPage() {
  return (
    <>
      <JsonLd data={buildServiceSchema({
        name: 'HR & Payroll Outsourcing Services',
        description: 'Full-cycle HR operations — payroll, statutory compliance, recruitment, performance management and HRMS technology — managed end-to-end by certified HR professionals.',
        serviceType: 'HR Outsourcing',
        url: '/services/bpo-outsourcing/hr-outsourcing',
      })} />
      <JsonLd data={buildBreadcrumbSchema([
        { name: 'Services', item: '/services' },
        { name: 'BPO Outsourcing', item: '/services/bpo-outsourcing' },
        { name: 'HR & Payroll Outsourcing', item: '/services/bpo-outsourcing/hr-outsourcing' },
      ])} />
      <HrHeroSection />
      <HrScopeGrid />
      <HrStatsBar />
      <HrWhoWeServe />
      <HrProcessTimeline />
      <HrComplianceCard />
      <HrTestimonial />
      <HrPricing />
      <HrRelatedServices />
      <HrCtaBanner />
    </>
  );
}
