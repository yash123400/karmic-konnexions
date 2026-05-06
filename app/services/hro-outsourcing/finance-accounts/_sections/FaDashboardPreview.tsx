"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import SectionHeader from "@/components/shared/SectionHeader";
import RevealSection from "@/components/shared/RevealSection";

// KPI data (values are in raw numbers, labels handle formatting)
const kpis = [
  {
    label: "Revenue",
    prefix: "₹",
    value: 42.6,
    suffix: "L",
    decimals: 1,
    change: "+12%",
    positive: true,
  },
  {
    label: "Expenses",
    prefix: "₹",
    value: 28.1,
    suffix: "L",
    decimals: 1,
    change: "−3%",
    positive: true, // cost reduction is positive
  },
  {
    label: "Net Profit",
    prefix: "₹",
    value: 14.5,
    suffix: "L",
    decimals: 1,
    change: "+28%",
    positive: true,
  },
];

// Simple SVG bar chart – 6 months of mock data
const bars = [
  { height: 38, label: "Oct" },
  { height: 52, label: "Nov" },
  { height: 46, label: "Dec" },
  { height: 61, label: "Jan" },
  { height: 55, label: "Feb" },
  { height: 78, label: "Mar" },
];

const MAX_H = 80; // viewBox height for bars

function MiniBarChart() {
  return (
    <div className="mt-4">
      <svg viewBox={`0 0 ${bars.length * 38} 90`} className="w-full h-24">
        {/* Grid lines */}
        {[0, 25, 50, 75].map((y) => (
          <line
            key={y}
            x1="0" y1={MAX_H - y} x2={bars.length * 38} y2={MAX_H - y}
            stroke="#E0E7FF" strokeWidth="1" strokeDasharray="3 3"
          />
        ))}
        {bars.map((bar, i) => (
          <g key={i}>
            {/* Bar */}
            <rect
              x={i * 38 + 6}
              y={MAX_H - bar.height}
              width={22}
              height={bar.height}
              rx={4}
              fill={i === bars.length - 1 ? "#4F46E5" : "#C7D2FE"}
            />
            {/* Label */}
            <text
              x={i * 38 + 17}
              y={88}
              textAnchor="middle"
              fontSize="8"
              fill="#94A3B8"
              fontFamily="Inter, sans-serif"
            >
              {bar.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export default function FaDashboardPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Real-time Insights"
          title={"You Get a Live Finance\nDashboard Every Month"}
          align="center"
        />

        {/* Dashboard card */}
        <RevealSection delay={0.1}>
          <div
            ref={ref}
            className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl border border-[#E0E7FF] overflow-hidden"
          >
            {/* Card header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#F1F5F9] bg-[#FAFBFF]">
              <div>
                <p className="text-xs text-[#94A3B8] font-medium uppercase tracking-wide">
                  Monthly MIS Report
                </p>
                <h3 className="font-bold text-[#0F172A] text-base">
                  March 2025
                </h3>
              </div>
              <div className="flex items-center gap-2 bg-[#DCFCE7] border border-[#BBF7D0] rounded-full px-3 py-1">
                <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                <span className="text-[#16A34A] text-xs font-bold">Live</span>
              </div>
            </div>

            {/* KPI row */}
            <div className="grid grid-cols-3 divide-x divide-[#F1F5F9] border-b border-[#F1F5F9]">
              {kpis.map((kpi, i) => (
                <div key={i} className="px-6 py-5">
                  <p className="text-xs text-[#94A3B8] font-medium mb-1">{kpi.label}</p>
                  <div className="text-2xl font-black text-[#0F172A] tabular-nums">
                    {kpi.prefix}
                    <AnimatedCounter
                      value={isInView ? kpi.value : 0}
                      suffix={kpi.suffix}
                      className="text-2xl font-black text-[#0F172A]"
                    />
                  </div>
                  <span
                    className={`inline-block mt-1 text-xs font-semibold px-2 py-0.5 rounded-full
                      ${kpi.positive
                        ? "bg-[#DCFCE7] text-[#16A34A]"
                        : "bg-[#FEE2E2] text-[#DC2626]"
                      }`}
                  >
                    {kpi.change} vs last month
                  </span>
                </div>
              ))}
            </div>

            {/* Bar chart */}
            <div className="px-6 pt-4 pb-2">
              <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide mb-1">
                Revenue Trend (Last 6 Months)
              </p>
              <MiniBarChart />
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-6 py-3 bg-[#F8FAFC] border-t border-[#F1F5F9]">
              <span className="text-xs text-[#94A3B8]">
                Next MIS due:{" "}
                <span className="font-semibold text-[#374151]">April 5</span>
              </span>
              <span className="text-xs text-[#94A3B8]">
                Generated by{" "}
                <span className="font-semibold text-[#4F46E5]">
                  Karmic Finance Team
                </span>
              </span>
            </div>
          </div>
        </RevealSection>

        {/* Caption */}
        <RevealSection delay={0.25}>
          <p className="text-center text-[#6B7280] text-sm mt-6 max-w-xl mx-auto">
            Every client receives a customised MIS dashboard tailored to their
            reporting needs — P&amp;L, cash flow, budget vs actual, and more.
          </p>
        </RevealSection>
      </div>
    </section>
  );
}
