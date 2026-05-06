"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function BpoLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [showSidebar, setShowSidebar] = useState(false);
  const [email, setEmail] = useState("");

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowSidebar(latest > 400);
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      await fetch("/api/lead-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: pathname }),
      });
      setEmail("");
      alert("Thanks! We will be in touch shortly.");
    } catch (err) {
      console.error(err);
    }
  };

  // Generate breadcrumb from pathname
  const segments = pathname.split("/").filter(Boolean);
  const breadcrumb = [
    { label: "Home", href: "/" },
    ...segments.map((seg, i) => {
      const href = "/" + segments.slice(0, i + 1).join("/");
      const label = seg
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase());
      return { label, href };
    }),
  ];

  return (
    <div className="relative min-h-screen">
      {/* Global HRO Breadcrumb (Top of page) */}
      <div className="absolute top-0 left-0 w-full z-30 pointer-events-none pt-32 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-auto">
          <nav className="flex items-center gap-2 text-sm text-[#6B7280]" aria-label="Breadcrumb">
            {breadcrumb.map((item, i) => {
              const isLast = i === breadcrumb.length - 1;
              return (
                <span key={item.href} className="flex items-center gap-2">
                  {isLast ? (
                    <span className="text-[#374151] font-medium">{item.label}</span>
                  ) : (
                    <Link href={item.href} className="hover:text-[#4F46E5] transition-colors">
                      {item.label}
                    </Link>
                  )}
                  {!isLast && <ChevronRight className="w-3 h-3 shrink-0" />}
                </span>
              );
            })}
          </nav>
        </div>
      </div>

      {children}

      {/* Sticky Sidebar CTA */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={showSidebar ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.3 }}
        className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden xl:block w-52 bg-white shadow-2xl rounded-xl border border-[#E0E7FF] p-4"
      >
        <h4 className="text-sm font-semibold text-[#0F172A] mb-3">Ready to outsource?</h4>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            required
            className="w-full bg-[#F8FAFC] border border-[#E0E7FF] rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#4F46E5]"
          />
          <button
            type="submit"
            className="w-full bg-[#4F46E5] text-white rounded-lg px-3 py-2 text-xs font-bold hover:bg-[#4338CA] transition-colors"
          >
            Get a Quote
          </button>
        </form>
      </motion.div>
    </div>
  );
}
