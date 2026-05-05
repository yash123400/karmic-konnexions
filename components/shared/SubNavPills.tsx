"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface NavLink {
  label: string;
  href: string;
}

export default function SubNavPills({ links }: { links: NavLink[] }) {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-2 overflow-x-auto no-scrollbar" aria-label="Sub-navigation">
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap
              ${isActive ? "text-white" : "text-[#374151] hover:text-[#0F172A] hover:bg-[#F3F4F6]"}`}
          >
            {isActive && (
              <motion.div
                layoutId="activeSubNavPill"
                className="absolute inset-0 bg-[#4F46E5] rounded-full z-0"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{link.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
