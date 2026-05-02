"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import MagneticButton from "@/components/shared/MagneticButton";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", megaMenu: true },
  { label: "Programs", href: "/programs", dropdown: "programs" },
  { label: "Industries", href: "/industries" },
  { label: "Initiatives", href: "/initiatives", dropdown: "initiatives" },
  { label: "Why Karmic", href: "/why-karmic" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const servicesMegaMenu = [
  {
    heading: "BPO Outsourcing",
    links: [
      { label: "HR Outsourcing", href: "/services/bpo-outsourcing/hr-outsourcing" },
      { label: "Finance & Accounts", href: "/services/bpo-outsourcing/finance-accounts" },
      { label: "CRM & Sales Ops", href: "/services/bpo-outsourcing/crm-sales-ops" },
      { label: "Marketing Services", href: "/services/bpo-outsourcing/marketing-services" },
    ],
  },
  {
    heading: "E-Learning",
    links: [
      { label: "LMS Platform", href: "/services/elearning/lms-platform" },
      { label: "Training Programs", href: "/services/elearning/training-programs" },
      { label: "Career Guidance", href: "/services/elearning/career-guidance" },
    ],
  },
  {
    heading: "Workforce & Apparel",
    links: [
      { label: "Talent Acquisition", href: "/services/global-workforce/talent-acquisition" },
      { label: "Contract Staffing", href: "/services/global-workforce/contract-staffing" },
      { label: "RPO", href: "/services/global-workforce/rpo" },
      { label: "Corporate Apparel", href: "/services/corporate-apparel" },
    ],
  },
  {
    heading: "AI & Technology",
    links: [
      { label: "AI Automation", href: "/services/ai-automation" },
      { label: "Technology Programs", href: "/programs" },
      { label: "Gen AI Suites", href: "/programs/gen-ai" },
    ],
  },
];

const programsDropdown = [
  { label: "Business-Stack Leadership", href: "/programs/business-stack" },
  { label: "Data Zenmaster & Analytics", href: "/programs/data-zenmaster" },
  { label: "Generative AI Suites", href: "/programs/gen-ai" },
];

const initiativesDropdown = [
  { label: "Swabhimaan — Rural Entrepreneurs", href: "/initiatives/swabhimaan" },
  { label: "Marketplace", href: "/initiatives/swabhimaan/marketplace" },
  { label: "Research & Impact", href: "/initiatives/swabhimaan/research" },
  { label: "Success Stories", href: "/initiatives/swabhimaan/stories" },
];

export default function Header() {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerRef = useRef<HTMLElement>(null);

  const bgOpacity = useTransform(scrollY, [0, 80], [0, 0.95]);
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const shadowOpacity = useTransform(scrollY, [0, 80], [0, 0.1]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <motion.header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 h-[88px] lg:h-[96px]"
        style={{
          backgroundColor: useTransform(bgOpacity, (v) => `rgba(255,255,255,${v})`),
          borderBottom: useTransform(borderOpacity, (v) => `1px solid rgba(224,231,255,${v})`),
          boxShadow: useTransform(shadowOpacity, (v) => `0 1px 3px rgba(0,0,0,${v})`),
          backdropFilter: useTransform(scrollY, [0, 80], ["blur(0px)", "blur(12px)"]),
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 py-2">
            <img src="/logo-full.png" alt="Karmic Konnexions" className="h-16 lg:h-20 w-auto object-contain mix-blend-multiply" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setHoveredItem(link.label)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-lg transition-colors inline-flex items-center gap-1",
                    isActive(link.href)
                      ? "text-primary font-semibold"
                      : "text-text-secondary hover:text-primary"
                  )}
                >
                  {link.label}
                  {(link.megaMenu || link.dropdown) && (
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>

                {/* Services Mega Menu */}
                {link.megaMenu && (
                  <AnimatePresence>
                    {hoveredItem === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[720px] bg-white rounded-2xl shadow-2xl border border-border p-8 grid grid-cols-4 gap-8"
                      >
                        {servicesMegaMenu.map((col) => (
                          <div key={col.heading}>
                            <h4 className="font-bold text-text-primary text-sm mb-3">
                              {col.heading}
                            </h4>
                            <ul className="space-y-2">
                              {col.links.map((l) => (
                                <li key={l.href}>
                                  <Link
                                    href={l.href}
                                    className="text-sm text-text-secondary hover:text-primary transition-colors"
                                  >
                                    {l.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}

                {/* Programs Dropdown */}
                {link.dropdown === "programs" && (
                  <AnimatePresence>
                    {hoveredItem === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-border p-3"
                      >
                        {programsDropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2.5 text-sm text-text-secondary hover:text-primary hover:bg-primary-tint rounded-lg transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}

                {/* Initiatives Dropdown */}
                {link.dropdown === "initiatives" && (
                  <AnimatePresence>
                    {hoveredItem === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-border p-3"
                      >
                        {initiativesDropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2.5 text-sm text-text-secondary hover:text-primary hover:bg-primary-tint rounded-lg transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <div className="hidden xl:block">
              <MagneticButton href="/get-proposal" variant="primary" className="px-5 py-2.5 text-sm">
                Get a Proposal
              </MagneticButton>
            </div>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="xl:hidden p-2 text-text-secondary hover:text-primary transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
