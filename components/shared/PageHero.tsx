import Link from "next/link";
import { ChevronRight } from "lucide-react";
import SplitText from "./SplitText";
import RevealSection from "./RevealSection";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumb?: BreadcrumbItem[];
  badge?: string;
  gradient?: 'indigo' | 'accent' | 'neutral';
}

const gradientStyles = {
  indigo: "from-[#EEF2FF] via-[#FAFBFF] to-[#FAFBFF]",
  accent: "from-[#FFF7ED] via-[#FAFBFF] to-[#FAFBFF]",
  neutral: "from-[#F8FAFC] to-[#FAFBFF]",
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumb,
  badge,
  gradient = 'indigo',
}: PageHeroProps) {
  return (
    <section className={cn("relative py-20 md:py-28 overflow-hidden bg-gradient-to-br", gradientStyles[gradient])}>
      {/* Background decoration */}
      <div className="absolute w-96 h-96 bg-[#4F46E5]/5 rounded-full -top-20 -right-20 blur-3xl pointer-events-none" />
      <div className="absolute w-64 h-64 bg-[#F97316]/8 rounded-full -bottom-10 -left-10 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav className="flex items-center gap-2 text-sm text-[#6B7280] mb-8" aria-label="Breadcrumb">
            {breadcrumb.map((item, index) => {
              const isLast = index === breadcrumb.length - 1;
              return (
                <div key={item.href} className="flex items-center gap-2">
                  {isLast ? (
                    <span className="text-[#374151] font-medium">{item.label}</span>
                  ) : (
                    <Link href={item.href} className="hover:text-[#4F46E5] transition-colors">
                      {item.label}
                    </Link>
                  )}
                  {!isLast && <ChevronRight className="w-3 h-3" />}
                </div>
              );
            })}
          </nav>
        )}

        {badge && (
          <div className="inline-flex mb-4 items-center gap-2 bg-[#EEF2FF] text-[#4F46E5] text-xs font-semibold px-3 py-1.5 rounded-full border border-[#E0E7FF]">
            {badge}
          </div>
        )}

        {eyebrow && (
          <div className="text-sm font-bold uppercase tracking-widest text-[#F97316] mb-3">
            {eyebrow}
          </div>
        )}

        <SplitText
          text={title}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0F172A] leading-[1.1] max-w-4xl"
        />

        {subtitle && (
          <RevealSection delay={0.3}>
            <p className="text-xl text-[#374151] mt-6 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </RevealSection>
        )}
      </div>
    </section>
  );
}
