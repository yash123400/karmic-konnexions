import Link from "next/link";
import { ChevronRight } from "lucide-react";
import SubNavPills from "@/components/shared/SubNavPills"; // We will build or reuse this

const elearningNavLinks = [
  { label: "Overview", href: "/services/elearning" },
  { label: "LMS Platform", href: "/services/elearning/lms-platform" },
  { label: "Training Programs", href: "/services/elearning/training-programs" },
  { label: "Career Guidance", href: "/services/elearning/career-guidance" },
];

export default function ELearningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#FAFBFF] min-h-screen">
      {/* Sub-navigation Header */}
      <div className="sticky top-[72px] z-40 bg-white/80 backdrop-blur-md border-b border-[#E0E7FF] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubNavPills links={elearningNavLinks} />
        </div>
      </div>
      {children}
    </div>
  );
}
