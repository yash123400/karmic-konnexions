"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
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
      { label: "Full BPO Bundle", href: "/services/bpo-outsourcing" },
    ],
  },
  {
    heading: "E-Learning",
    links: [
      { label: "LMS Platform", href: "/services/elearning/lms-platform" },
      { label: "Training Programs", href: "/services/elearning/training-programs" },
      { label: "Career Guidance", href: "/services/elearning/career-guidance" },
      { label: "E-Learning Hub", href: "/services/elearning" },
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
      { label: "Technology Programs", href: "/services/technology" },
      { label: "Gen AI Suites", href: "/programs/gen-ai" },
    ],
  },
];

const programsDropdown = [
  { label: "Business-Stack Leadership", href: "/programs/business-stack" },
  { label: "Data Zenmaster & Analytics", href: "/programs/data-zenmaster" },
  { label: "Generative AI Suites", href: "/programs/gen-ai" },
  { divider: true },
  { label: "All Programs", href: "/programs" },
];

const initiativesDropdown = [
  { label: "Swabhimaan Initiative", href: "/initiatives/swabhimaan" },
  { label: "Online Marketplace", href: "/initiatives/swabhimaan/marketplace" },
  { label: "Research & Impact", href: "/initiatives/swabhimaan/research" },
  { label: "Success Stories", href: "/initiatives/swabhimaan/stories" },
  { divider: true },
  { label: "All Initiatives", href: "/initiatives" },
];

export default function Header() {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const { scrollY, scrollYProgress } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  // Scroll animations
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 0.95]);
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const shadowOpacity = useTransform(scrollY, [0, 80], [0, 0.05]);
  const blurAmount = useTransform(scrollY, [0, 80], [0, 12]);
  
  // Logo text scaling
  const logoScale = useTransform(scrollY, [0, 80], [1, 0.9]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const handleMouseEnter = (label: string) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredItem(label);
    }, 150);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
    }, 150);
  };

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setHoveredItem(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <motion.header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 h-[64px] lg:h-[72px] flex items-center transition-all duration-300 border-b border-transparent"
        style={{
          backgroundColor: useTransform(bgOpacity, (v) => `rgba(255, 255, 255, ${v})`),
          borderBottom: useTransform(borderOpacity, (v) => `1px solid rgba(224, 231, 255, ${v})`),
          boxShadow: useTransform(shadowOpacity, (v) => `0 1px 2px 0 rgba(0, 0, 0, ${v})`),
          backdropFilter: useTransform(blurAmount, (v) => `blur(${v}px)`),
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 py-2 group">
            <div className={cn(
              "relative w-[38px] h-[38px] overflow-hidden rounded-lg shadow-sm transition-all",
              !isScrolled && "brightness-[100] contrast-[100]"
            )}>
              <Image 
                src="/images/brand/logo-main.png" 
                alt="Karmic Konnexions Logo" 
                fill 
                className="object-cover"
              />
            </div>
            <motion.div style={{ scale: logoScale, transformOrigin: "left center" }} className="flex flex-col">
              <div className={cn(
                "font-bold text-base leading-none transition-colors",
                isScrolled ? "text-[#0F172A]" : "text-white"
              )}>
                Karmic Konnexions
              </div>
              <div className={cn(
                "text-[10px] tracking-wide mt-0.5 hidden sm:block transition-colors",
                isScrolled ? "text-[#6B7280]" : "text-white/60"
              )}>
                Global Consulting LLP
              </div>
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 h-full" aria-label="Main navigation">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative h-full flex items-center"
                onMouseEnter={() => handleMouseEnter(link.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "px-2 xl:px-3 py-2 text-[13px] xl:text-sm font-medium rounded-lg transition-all duration-300 inline-flex items-center gap-0.5 xl:gap-1",
                    isScrolled
                      ? isActive(link.href)
                        ? "text-[#4F46E5] font-semibold"
                        : "text-[#374151] hover:text-[#4F46E5] hover:bg-[#EEF2FF]"
                      : isActive(link.href)
                        ? "text-white font-semibold"
                        : "text-white/80 hover:text-white"
                  )}
                  aria-expanded={hoveredItem === link.label}
                  aria-haspopup={(link.megaMenu || link.dropdown) ? "true" : undefined}
                >
                  {link.label}
                  {(link.megaMenu || link.dropdown) && (
                    <ChevronDown className="w-3.5 h-3.5" />
                  )}
                </Link>

                {/* Services Mega Menu */}
                {link.megaMenu && (
                  <AnimatePresence>
                    {hoveredItem === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[95vw] max-w-[900px] bg-white rounded-2xl shadow-2xl border border-[#E0E7FF] p-8 z-[100]"
                        role="menu"
                      >
                        <div className="grid grid-cols-4 gap-8">
                          {servicesMegaMenu.map((col) => (
                            <div key={col.heading}>
                              <h4 className="text-xs font-bold uppercase tracking-widest text-[#F97316] mb-3">
                                {col.heading}
                              </h4>
                              <div className="flex flex-col space-y-0.5">
                                {col.links.map((l) => (
                                  <Link
                                    key={l.href}
                                    href={l.href}
                                    className="text-sm text-[#374151] hover:text-[#4F46E5] py-1.5 block rounded hover:bg-[#EEF2FF] px-2 -mx-2 transition-colors"
                                    role="menuitem"
                                  >
                                    {l.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Bottom strip */}
                        <div className="border-t border-[#E0E7FF] mt-6 pt-6">
                          <div className="bg-[#EEF2FF] rounded-xl p-4 flex items-center justify-between">
                            <span className="text-sm text-[#374151]">
                              Not sure where to start?
                            </span>
                            <Link
                              href="/get-proposal"
                              className="text-sm font-semibold text-[#4F46E5] hover:underline"
                            >
                              Get a free proposal →
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}

                {/* Programs Dropdown */}
                {link.dropdown === "programs" && (
                  <AnimatePresence>
                    {hoveredItem === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-0 w-[260px] bg-white rounded-2xl shadow-2xl border border-[#E0E7FF] p-3 z-[100]"
                        role="menu"
                      >
                        {programsDropdown.map((item, idx) => (
                          item.divider ? (
                            <div key={`div-${idx}`} className="h-px bg-[#E0E7FF] my-2 mx-2" />
                          ) : (
                            <Link
                              key={item.href}
                              href={item.href as string}
                              className="block px-3 py-2 text-sm text-[#374151] hover:text-[#4F46E5] hover:bg-[#EEF2FF] rounded-lg transition-colors"
                              role="menuitem"
                            >
                              {item.label}
                            </Link>
                          )
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
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-0 w-[280px] bg-white rounded-2xl shadow-2xl border border-[#E0E7FF] p-3 z-[100]"
                        role="menu"
                      >
                        {initiativesDropdown.map((item, idx) => (
                          item.divider ? (
                            <div key={`div-${idx}`} className="h-px bg-[#E0E7FF] my-2 mx-2" />
                          ) : (
                            <Link
                              key={item.href}
                              href={item.href as string}
                              className="block px-3 py-2 text-sm text-[#374151] hover:text-[#4F46E5] hover:bg-[#EEF2FF] rounded-lg transition-colors"
                              role="menuitem"
                            >
                              {item.label}
                            </Link>
                          )
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Right side CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <MagneticButton
                href="/get-proposal"
                className="bg-[#4F46E5] text-white px-5 py-2.5 text-sm font-semibold rounded-lg hover:bg-[#3730A3] transition-colors inline-block"
              >
                Get a Proposal
              </MagneticButton>
            </div>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#374151] hover:bg-[#EEF2FF] transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Top Right Brand Mark (Desktop) */}
            <div className="hidden lg:flex items-center pl-4 border-l border-slate-200">
              <div className="relative w-8 h-8 opacity-40 hover:opacity-100 transition-opacity">
                <Image 
                  src="/images/brand/logo-mark.png" 
                  alt="Karmic Brand Mark" 
                  fill 
                  className="object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Render Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
