"use client";

import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const faqs = [
  {
    q: "What processes can you outsource?",
    a: "We cover the full spectrum of back-office functions — HR, Payroll, Finance, Accounts, CRM Administration, and Marketing Operations. If it's process-driven and repeatable, we can handle it.",
  },
  {
    q: "How do you ensure data security?",
    a: "All our BPO operations follow ISO 27001 guidelines. Data is accessed through secured VPN channels, with role-based access controls and NDA-bound contracts for every engagement.",
  },
  {
    q: "Do I need to provide your team with computers?",
    a: "No. Our teams work from our infrastructure. You only provide secure access credentials to your systems and a point of contact for escalations.",
  },
  {
    q: "Can we start with just one process?",
    a: "Absolutely. Most clients start with payroll or accounts payable, see the results in 60 days, and then expand. There's no minimum scope requirement.",
  },
  {
    q: "What are your pricing models?",
    a: "We offer FTE-based (per-person per-month), transaction-based, and hybrid pricing. We'll recommend the best model after a free process audit tailored to your operations.",
  },
  {
    q: "Is there a lock-in period?",
    a: "Our standard contracts are 12 months with a 90-day exit clause. We keep clients by delivering results, not by locking them in.",
  },
];

export default function BpoFaqAccordion() {
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Common Questions"
          title={"Everything You Need to Know\nAbout BPO with Karmic"}
          align="center"
        />

        <Accordion.Root
          type="single"
          collapsible
          value={openItem}
          onValueChange={setOpenItem}
          className="space-y-3"
        >
          {faqs.map((faq, i) => (
            <Accordion.Item
              key={i}
              value={`item-${i}`}
              className="bg-[#F8FAFC] border border-[#E0E7FF] rounded-xl overflow-hidden
                data-[state=open]:bg-white data-[state=open]:border-[#4F46E5]/30
                data-[state=open]:shadow-md transition-all duration-200"
            >
              <Accordion.Header>
                <Accordion.Trigger className="w-full flex items-center justify-between px-6 py-5 text-left group">
                  <span className="font-semibold text-[#0F172A] text-sm md:text-base pr-4">
                    {faq.q}
                  </span>
                  <span className="shrink-0 w-8 h-8 rounded-full bg-[#EEF2FF] flex items-center justify-center text-[#4F46E5] transition-colors group-data-[state=open]:bg-[#4F46E5] group-data-[state=open]:text-white">
                    {openItem === `item-${i}` ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content asChild forceMount>
                <AnimatePresence initial={false}>
                  {openItem === `item-${i}` && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5">
                        <div className="h-px bg-[#E0E7FF] mb-4" />
                        <p className="text-[#6B7280] text-sm leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
