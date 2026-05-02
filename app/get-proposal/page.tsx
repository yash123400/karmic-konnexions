import { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import RevealSection from "@/components/shared/RevealSection";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Get a Proposal",
  description: "Request a customised outsourcing proposal from Karmic Konnexions.",
};

export default function GetProposalPage() {
  return (
    <>
      <PageHero
        title="Get a Proposal"
        subtitle="Request a customised outsourcing proposal from Karmic Konnexions."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Get Proposal', href: '/get-proposal' }]}
      />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="border-2 border-dashed border-primary/20 rounded-2xl p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-primary-tint flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-3">
                Page Coming Soon
              </h3>
              <p className="text-text-muted max-w-md mx-auto">
                We&apos;re building something amazing. This page will be available shortly with full content and features.
              </p>
            </div>
          </RevealSection>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
