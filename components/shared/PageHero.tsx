import Link from "next/link";
import { ChevronRight } from "lucide-react";
import SplitText from "./SplitText";
import RevealSection from "./RevealSection";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumb?: BreadcrumbItem[];
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumb,
}: PageHeroProps) {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-primary-tint to-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumb && breadcrumb.length > 0 && (
          <RevealSection>
            <nav className="flex items-center gap-1 text-sm text-text-muted mb-8">
              {breadcrumb.map((item, i) => (
                <span key={i} className="flex items-center gap-1">
                  {i > 0 && <ChevronRight className="w-3.5 h-3.5" />}
                  {i < breadcrumb.length - 1 ? (
                    <Link
                      href={item.href}
                      className="hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-text-primary font-medium">
                      {item.label}
                    </span>
                  )}
                </span>
              ))}
            </nav>
          </RevealSection>
        )}

        {eyebrow && (
          <RevealSection>
            <p className="text-sm font-semibold tracking-widest text-accent uppercase mb-4">
              {eyebrow}
            </p>
          </RevealSection>
        )}

        <SplitText
          text={title}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight"
        />

        {subtitle && (
          <RevealSection delay={0.3}>
            <p className="text-lg md:text-xl text-text-secondary mt-6 max-w-3xl">
              {subtitle}
            </p>
          </RevealSection>
        )}
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
    </section>
  );
}
