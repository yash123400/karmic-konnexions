"use client";

import RevealSection from "@/components/shared/RevealSection";

type Status = "managed" | "upcoming" | "completed";

const calendarItems: { filing: string; due: string; status: Status }[] = [
  { filing: "GSTR-1", due: "11th Monthly", status: "managed" },
  { filing: "GSTR-3B", due: "20th Monthly", status: "managed" },
  { filing: "PF Return", due: "15th Monthly", status: "managed" },
  { filing: "ESIC Return", due: "15th Monthly", status: "managed" },
  { filing: "TDS Return (Q1)", due: "Jul 31", status: "completed" },
  { filing: "TDS Return (Q2)", due: "Oct 31", status: "completed" },
  { filing: "TDS Return (Q3)", due: "Jan 31", status: "upcoming" },
  { filing: "TDS Return (Q4)", due: "May 31", status: "managed" },
  { filing: "Advance Tax (Q1)", due: "Jun 15", status: "completed" },
  { filing: "Advance Tax (Q2)", due: "Sep 15", status: "completed" },
  { filing: "Advance Tax (Q3)", due: "Dec 15", status: "upcoming" },
  { filing: "Advance Tax (Q4)", due: "Mar 15", status: "managed" },
  { filing: "PT Return", due: "State-wise", status: "managed" },
  { filing: "Annual GSTR-9", due: "Dec 31", status: "upcoming" },
  { filing: "Form 16", due: "Jun 15", status: "completed" },
  { filing: "Form 16A", due: "15 days post-Q", status: "managed" },
  { filing: "ROC Annual Return", due: "Nov 29", status: "upcoming" },
  { filing: "IT Return (Company)", due: "Oct 31", status: "managed" },
  { filing: "MSME Samadhaan", due: "Ongoing", status: "managed" },
  { filing: "Labour Welfare Fund", due: "Dec 31", status: "managed" },
  { filing: "GSTR-2B Recon", due: "Monthly", status: "managed" },
  { filing: "26AS Reconciliation", due: "Quarterly", status: "managed" },
  { filing: "Shop & Estab. Renewal", due: "Annual", status: "managed" },
  { filing: "Form 26QB (TDS-Property)", due: "30 days", status: "managed" },
];

const statusConfig: Record<Status, { label: string; bg: string; text: string; dot: string }> = {
  managed: {
    label: "Karmic Managed",
    bg: "bg-[#EEF2FF]",
    text: "text-[#4F46E5]",
    dot: "bg-[#4F46E5]",
  },
  upcoming: {
    label: "Upcoming",
    bg: "bg-[#FFF7ED]",
    text: "text-[#F97316]",
    dot: "bg-[#F97316]",
  },
  completed: {
    label: "Completed",
    bg: "bg-[#DCFCE7]",
    text: "text-[#16A34A]",
    dot: "bg-[#22C55E]",
  },
};

export default function FaComplianceCalendar() {
  return (
    <section className="py-20 bg-[#0F172A] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#4F46E5]/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealSection>
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
            We Never Miss a Compliance Deadline. Ever.
          </h2>
          <p className="text-[#94A3B8] text-sm text-center mb-10">
            Every filing below is tracked, prepared, and submitted by our CA-led compliance team.
          </p>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.entries(statusConfig).map(([key, cfg]) => (
              <div key={key} className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${cfg.dot}`} />
                <span className="text-[#94A3B8] text-xs font-medium">{cfg.label}</span>
              </div>
            ))}
          </div>
        </RevealSection>

        <RevealSection delay={0.15}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {calendarItems.map((item, i) => {
              const cfg = statusConfig[item.status];
              return (
                <div
                  key={i}
                  className="bg-[#1E293B] border border-[#334155] rounded-xl p-4 hover:border-[#4F46E5]/40
                    hover:bg-[#1E293B]/80 transition-all duration-200 group"
                >
                  <p className="text-white font-semibold text-sm mb-1 group-hover:text-[#A5B4FC] transition-colors">
                    {item.filing}
                  </p>
                  <p className="text-[#64748B] text-xs mb-2.5">{item.due}</p>
                  <span
                    className={`inline-flex items-center gap-1.5 text-[10px] font-bold px-2 py-1 rounded-full ${cfg.bg} ${cfg.text}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
                    {cfg.label}
                  </span>
                </div>
              );
            })}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
