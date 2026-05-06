"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import MagneticButton from "@/components/shared/MagneticButton";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuSections = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "HRO & Business Functions", href: "/services/hro-outsourcing" },
      { label: "HR Outsourcing", href: "/services/hro-outsourcing/hr-outsourcing" },
      { label: "Finance & Accounts", href: "/services/hro-outsourcing/finance-accounts" },
      { label: "CRM & Sales Ops", href: "/services/hro-outsourcing/crm-sales-ops" },
      { label: "Marketing Services", href: "/services/hro-outsourcing/marketing-services" },
      { label: "E-Learning", href: "/services/elearning" },
      { label: "Global Workforce", href: "/services/global-workforce" },
      { label: "Corporate Apparel", href: "/services/corporate-apparel" },
      { label: "AI Automation", href: "/services/ai-automation" },
    ],
  },
  {
    label: "Programs",
    href: "/programs",
    children: [
      { label: "Business-Stack Leadership", href: "/programs/business-stack" },
      { label: "Data Zenmaster & Analytics", href: "/programs/data-zenmaster" },
      { label: "Generative AI Suites", href: "/programs/gen-ai" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
  },
  {
    label: "Initiatives",
    href: "/initiatives",
    children: [
      { label: "Swabhimaan — Rural Entrepreneurs", href: "/initiatives/swabhimaan" },
      { label: "Marketplace", href: "/initiatives/swabhimaan/marketplace" },
      { label: "Research & Impact", href: "/initiatives/swabhimaan/research" },
      { label: "Success Stories", href: "/initiatives/swabhimaan/stories" },
    ],
  },
  {
    label: "Why Karmic",
    href: "/why-karmic",
  },
  {
    label: "Careers",
    href: "/careers",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (label: string) => {
    setExpandedSection((prev) => (prev === label ? null : label));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[99]"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-[100] overflow-y-auto"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <img src="/logo-full.png" alt="Karmic Konnexions" className="h-10 w-auto object-contain" />
              <button
                onClick={onClose}
                className="p-2 text-text-muted hover:text-text-primary transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="p-6">
              {menuSections.map((section) => (
                <div key={section.label} className="border-b border-border/50">
                  {section.children ? (
                    <>
                      <button
                        onClick={() => toggleSection(section.label)}
                        className="flex items-center justify-between w-full py-4 text-lg font-medium text-text-primary"
                      >
                        {section.label}
                        <ChevronDown
                          className={`w-5 h-5 transition-transform ${
                            expandedSection === section.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {expandedSection === section.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pb-4 pl-4 space-y-1">
                              {section.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={onClose}
                                  className="block py-2.5 text-text-secondary hover:text-primary transition-colors"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={section.href}
                      onClick={onClose}
                      className="block py-4 text-lg font-medium text-text-primary hover:text-primary transition-colors"
                    >
                      {section.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="p-6 mt-auto">
              <MagneticButton
                href="/get-proposal"
                variant="primary"
                className="w-full justify-center py-4 text-lg"
              >
                Get a Proposal
              </MagneticButton>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
