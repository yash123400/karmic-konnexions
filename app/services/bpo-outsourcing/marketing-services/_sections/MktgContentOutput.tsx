"use client";

import RevealSection from "@/components/shared/RevealSection";
import SectionHeader from "@/components/shared/SectionHeader";

const rows = [
  { week: "Week 1", deliverable: "2 LinkedIn posts + 1 blog article", channel: "LinkedIn + Website" },
  { week: "Week 2", deliverable: "Email newsletter (500 subscribers)", channel: "Email (Mailchimp)" },
  { week: "Week 3", deliverable: "2 LinkedIn posts + 1 case study", channel: "LinkedIn + Website" },
  { week: "Week 4", deliverable: "Monthly analytics report + next month's content plan", channel: "Email to stakeholders" },
];

export default function MktgContentOutput() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Sample Output"
          title="What We Deliver Each Month"
          align="center"
        />

        <RevealSection delay={0.1}>
          <div className="mt-12 overflow-x-auto rounded-2xl border border-[#E0E7FF] shadow-sm">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-[#4F46E5]/5 border-b border-[#E0E7FF]">
                  <th className="py-4 px-6 font-bold text-[#0F172A] text-sm">Week</th>
                  <th className="py-4 px-6 font-bold text-[#0F172A] text-sm">Deliverable</th>
                  <th className="py-4 px-6 font-bold text-[#0F172A] text-sm">Channel</th>
                  <th className="py-4 px-6 font-bold text-[#0F172A] text-sm text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E0E7FF]">
                {rows.map((row, i) => (
                  <tr key={i} className="hover:bg-[#F8FAFC] transition-colors">
                    <td className="py-4 px-6 text-sm font-semibold text-[#374151]">
                      {row.week}
                    </td>
                    <td className="py-4 px-6 text-sm text-[#4B5563]">
                      {row.deliverable}
                    </td>
                    <td className="py-4 px-6 text-sm text-[#6B7280]">
                      {row.channel}
                    </td>
                    <td className="py-4 px-6 text-sm text-right">
                      <span className="inline-flex items-center gap-1.5 text-[#16A34A] font-semibold bg-[#DCFCE7] px-2.5 py-1 rounded-full text-xs">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        Delivered
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </RevealSection>

        <RevealSection delay={0.2}>
          <p className="text-center text-sm text-[#94A3B8] mt-6">
            Sample output for a Growth-tier marketing client. Actual deliverables customised to your channels and goals.
          </p>
        </RevealSection>
      </div>
    </section>
  );
}
