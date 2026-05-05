"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const bpoLinks = [
  { label: "HR & Payroll", href: "/services/bpo-outsourcing/hr-outsourcing" },
  { label: "Finance & Accounts", href: "/services/bpo-outsourcing/finance-accounts" },
  { label: "CRM & Sales Ops", href: "/services/bpo-outsourcing/crm-sales-ops" },
  { label: "Marketing Services", href: "/services/bpo-outsourcing/marketing-services" },
];

export default function BpoSubNav() {
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap gap-2 mb-8 relative z-20">
      {bpoLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "relative px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200",
              isActive 
                ? "text-white" 
                : "bg-white border border-[#E0E7FF] text-[#6B7280] hover:border-[#4F46E5] hover:text-[#0F172A]"
            )}
          >
            {isActive && (
              <motion.div
                layoutId="bpo-subnav-active"
                className="absolute inset-0 rounded-full bg-[var(--primary)] -z-10"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{link.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
