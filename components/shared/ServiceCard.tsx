import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import RevealSection from "./RevealSection";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  className?: string;
  delay?: number;
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
  className,
  delay = 0,
}: ServiceCardProps) {
  return (
    <RevealSection delay={delay}>
      <Link href={href} className="block group">
        <div
          className={cn(
            "bg-white rounded-2xl border border-border p-8 transition-all duration-300",
            "hover:shadow-xl hover:border-primary/30 hover:-translate-y-1",
            "hover:border-l-[3px] hover:border-l-primary",
            className
          )}
        >
          <div className="w-14 h-14 rounded-xl bg-primary-tint flex items-center justify-center text-primary">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-text-primary mt-6">{title}</h3>
          <p className="text-text-secondary mt-3 leading-relaxed">
            {description}
          </p>
          <span className="inline-flex items-center gap-1 text-primary font-semibold mt-6 group-hover:gap-2 transition-all duration-200">
            Learn more <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </RevealSection>
  );
}
