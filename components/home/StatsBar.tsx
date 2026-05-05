"use client";

import Link from "next/link";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import RevealSection from "@/components/shared/RevealSection";

const stats = [
  { end: 500, suffix: "+", label: "Clients Served", href: "/case-studies" },
  { end: 98, suffix: "%", label: "Client Retention Rate", href: "/why-karmic" },
  { end: 20, suffix: "+", label: "Industries Served", href: "/industries" },
  { end: 15, suffix: "+", label: "Years of Expertise", href: "/why-karmic" },
];

export default function StatsBar() {
  return (
    <section className="bg-primary py-16">
      <RevealSection>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <Link
              key={i}
              href={stat.href}
              className="text-center group hover:-translate-y-0.5 transition-transform duration-200"
            >
              <div className="flex items-baseline justify-center">
                <AnimatedCounter
                  value={stat.end}
                  suffix={stat.suffix}
                  className="text-5xl font-bold text-white"
                />
              </div>
              <p className="text-sm text-white/70 mt-2 font-medium tracking-wide uppercase">
                {stat.label}
              </p>
            </Link>
          ))}
        </div>
        </div>
      </RevealSection>
    </section>
  );
}
