"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import RevealSection from "@/components/shared/RevealSection";
import { CheckCircle2, ChevronRight } from "lucide-react";

const quarters = [
  {
    id: 1,
    title: "Quarter 1",
    label: "Foundation & Assessment (0–90 Days)",
    deliverables: [
      "Conduct HR diagnostic & gap analysis (policies, PMS, KRA)",
      "Review and refine HR policies, processes, and frameworks",
      "Establish governance & escalation matrix",
      "Conduct baseline engagement survey",
      "Strengthen recruitment process & onboarding templates",
    ],
    outcomes: [
      "HR compliance checklist 100%",
      "Engagement baseline score established",
      "Recruitment cycle time below target",
    ],
  },
  {
    id: 2,
    title: "Quarter 2",
    label: "Engagement & Capability Building (90–180 Days)",
    deliverables: [
      "Grievance mechanism fully operational",
      "KRA & PMS definition completed",
      "Launch L&D/CoE pilot programs",
      "Engagement initiatives: pulse surveys, recognition programs",
    ],
    outcomes: [
      "Engagement +10%",
      "Grievance SLA <7 days",
      "50% enrolled in skilling programs",
    ],
  },
  {
    id: 3,
    title: "Quarter 3",
    label: "Performance & Optimization (180–270 Days)",
    deliverables: [
      "PMS linked to rewards & recognition",
      "Talent mapping & succession planning",
      "HR dashboards & analytics deployed",
      "Recruitment & onboarding optimization",
    ],
    outcomes: [
      "PMS adoption >75%",
      "Succession plans for critical roles",
      "Engagement +15%",
    ],
  },
  {
    id: 4,
    title: "Quarter 4",
    label: "HR Excellence & Scaling (270–360 Days)",
    deliverables: [
      "Scale Centre of Excellence initiatives",
      "Conduct full HR audit & compliance check",
      "Workforce planning for next fiscal year",
      "Automation & digitalization expansion",
    ],
    outcomes: [
      "CoE maturity index achieved",
      "Engagement +20%",
      "HR audit compliance 100%",
    ],
  },
];

export default function HrRoadmap() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[var(--text-primary)]">
              Your 360-Day HR Transformation Roadmap
            </h2>
            <p className="text-lg text-[var(--text-secondary)] mt-4 max-w-2xl mx-auto">
              A structured, milestone-driven journey from audit to excellence.
            </p>
          </div>
        </RevealSection>

        {/* Roadmap Tabs (Horizontal on Desktop, Vertical on Mobile) */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Tabs Navigation */}
          <div className="flex flex-col sm:flex-row lg:flex-col w-full lg:w-1/3 gap-3 shrink-0">
            {quarters.map((q) => {
              const isActive = activeTab === q.id;
              return (
                <button
                  key={q.id}
                  onClick={() => setActiveTab(q.id)}
                  className={`w-full text-left p-5 rounded-xl font-bold transition-all duration-300 flex items-center justify-between border ${
                    isActive
                      ? "bg-[var(--primary)] text-white border-[var(--primary)] shadow-lg shadow-indigo-500/20"
                      : "bg-[var(--primary-tint)] text-[var(--primary)] border-[var(--border-color)] hover:bg-indigo-100/70"
                  }`}
                >
                  <span className="flex flex-col">
                    <span className="text-xs uppercase opacity-85 tracking-wider">{q.title}</span>
                    <span className="text-sm mt-1">{q.label.split(" (")[0]}</span>
                  </span>
                  <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${isActive ? "rotate-90 sm:rotate-0" : ""}`} />
                </button>
              );
            })}
          </div>

          {/* Active Content Display */}
          <div className="w-full lg:w-2/3 bg-slate-50 border border-[var(--border-color)] rounded-2xl p-6 sm:p-8 min-h-[380px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col h-full justify-between"
              >
                <div>
                  <h3 className="text-xl font-black text-[var(--text-primary)] mb-2">
                    {quarters[activeTab - 1].title}: {quarters[activeTab - 1].label}
                  </h3>
                  <div className="h-px bg-slate-200 my-4" />
                  
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-3">
                    Key Deliverables
                  </h4>
                  <ul className="space-y-3">
                    {quarters[activeTab - 1].deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[var(--primary)] shrink-0 mt-0.5" />
                        <span className="text-sm text-[var(--text-secondary)]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-3">
                    Target Outcomes
                  </h4>
                  <div className="bg-indigo-50/50 border border-indigo-100 rounded-xl p-4">
                    <div className="flex flex-wrap gap-2">
                      {quarters[activeTab - 1].outcomes.map((outcome, idx) => (
                        <span key={idx} className="inline-flex items-center gap-1.5 bg-white border border-indigo-100 px-3 py-1.5 rounded-full text-xs font-medium text-[var(--primary)] shadow-sm">
                          🎯 {outcome}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
