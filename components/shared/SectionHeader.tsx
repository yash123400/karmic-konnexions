import { cn } from "@/lib/utils";
import RevealSection from "./RevealSection";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <RevealSection
      className={cn(
        "mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="text-sm font-semibold tracking-widest text-accent uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-lg text-text-muted mt-4 max-w-2xl",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </RevealSection>
  );
}
