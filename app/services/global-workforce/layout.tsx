import SubNavPills from "@/components/shared/SubNavPills";

export default function GlobalWorkforceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const links = [
    { label: "Global Workforce Hub", href: "/services/global-workforce" },
    { label: "Talent Acquisition", href: "/services/global-workforce/talent-acquisition" },
    { label: "Contract Staffing", href: "/services/global-workforce/contract-staffing" },
    { label: "RPO", href: "/services/global-workforce/rpo" },
  ];

  return (
    <>
      {/* Sticky Sub-Navigation */}
      <div className="sticky top-[72px] md:top-[80px] z-40 bg-white/80 backdrop-blur-md border-b border-[#E0E7FF] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubNavPills links={links} />
        </div>
      </div>
      
      {/* Page Content */}
      <main>
        {children}
      </main>
    </>
  );
}
