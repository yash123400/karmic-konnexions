import { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { buildServiceSchema, buildBreadcrumbSchema } from "@/lib/schemas";
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
      <JsonLd data={buildServiceSchema({
        name: 'CRM & Sales Operations Outsourcing',
        description: 'Outsource your CRM management, pipeline reporting, lead qualification, and sales operations to expert teams. Karmic Konnexions keeps your revenue engine running.',
        serviceType: 'CRM Outsourcing',
        url: '/services/bpo-outsourcing/crm-sales-ops',
      })} />
      <JsonLd data={buildBreadcrumbSchema([
        { name: 'Services', item: '/services' },
        { name: 'BPO Outsourcing', item: '/services/bpo-outsourcing' },
        { name: 'CRM & Sales Ops', item: '/services/bpo-outsourcing/crm-sales-ops' },
      ])} />
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
