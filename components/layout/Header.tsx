"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
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
    heading: "HRO & Business Functions",
    links: [
      { label: "HR Outsourcing", href: "/services/hro-outsourcing/hr-outsourcing" },
      { label: "Finance & Accounts", href: "/services/hro-outsourcing/finance-accounts" },
      { label: "CRM & Sales Ops", href: "/services/hro-outsourcing/crm-sales-ops" },
      { label: "Marketing Services", href: "/services/hro-outsourcing/marketing-services" },
      { label: "HRO & Business Functions", href: "/services/hro-outsourcing" },
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
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    setIsScrolled(scrollY.get() > 50);
  }, [scrollY]);

  const isHomePage = pathname === "/";
  // Forced solid theme for 100% reliability and visibility
  const isDarkTheme = false; 

  const textColour = 'text-[#374151] font-semibold';
  const logoColour = 'text-[#4F46E5] font-extrabold';
  const headerBg = 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm';

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
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
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-[64px] lg:h-[72px] flex items-center transition-all duration-300",
          headerBg
        )}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 py-2 group">
            <div className="relative w-[40px] h-[40px] rounded-xl overflow-hidden bg-[#090D16] flex items-center justify-center border border-slate-800 shadow-[0_2px_8px_rgba(0,0,0,0.15),0_0_10px_rgba(249,115,22,0.1)] group-hover:border-orange-500/30 group-hover:shadow-[0_4px_12px_rgba(0,0,0,0.2),0_0_14px_rgba(249,115,22,0.25)] transition-all duration-500">
              <Image 
                src="/images/brand/logo-infinity.jpg" 
                alt="Karmic Konnexions Logo" 
                fill 
                className="object-contain p-0.5 transform scale-110 group-hover:scale-120 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col transition-all duration-300 origin-left">
              <div className={cn(
                "font-bold text-base leading-none transition-colors duration-300",
                logoColour
              )}>
                Karmic Konnexions
              </div>
              <div className={cn(
                "text-[10px] tracking-wide mt-0.5 hidden sm:block transition-colors duration-300 text-[#6B7280]"
              )}>
                Global Consulting LLP
              </div>
            </div>
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
                    textColour,
                    isActive(link.href) && "font-bold underline underline-offset-8 decoration-2 decoration-primary/50",
                    isScrolled && !isActive(link.href) && "hover:bg-[#EEF2FF] hover:text-[#4F46E5]"
                  )}
                  aria-expanded={hoveredItem === link.label}
                  aria-haspopup={(link.megaMenu || link.dropdown) ? "true" : undefined}
                >
                  {link.label}
                  {(link.megaMenu || link.dropdown) && (
                    <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-300", hoveredItem === link.label && "rotate-180")} />
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
                        className="absolute top-[80%] left-1/2 -translate-x-1/2 mt-0 w-[95vw] max-w-[900px] bg-white rounded-2xl shadow-2xl border border-[#E0E7FF] p-8 z-[100]"
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
                        className="absolute top-[80%] left-0 mt-0 w-[260px] bg-white rounded-2xl shadow-2xl border border-[#E0E7FF] p-3 z-[100]"
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
                        className="absolute top-[80%] left-0 mt-0 w-[280px] bg-white rounded-2xl shadow-2xl border border-[#E0E7FF] p-3 z-[100]"
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
              className="lg:hidden p-2 rounded-lg transition-colors duration-300 text-[#374151] hover:bg-[#EEF2FF]"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Top Right Brand Mark (Desktop) */}
            <div className={cn(
              "hidden lg:flex items-center pl-4 border-l transition-colors duration-300",
              isScrolled ? "border-slate-200" : "border-white/20"
            )}>
              <div className="relative w-8 h-8 opacity-40 hover:opacity-100 transition-opacity">
                <Image 
                  src="/images/brand/logo-mark.png" 
                  alt="Karmic Brand Mark" 
                  fill 
                  className={cn(
                    "object-contain transition-all duration-300 grayscale hover:grayscale-0"
                  )}
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
