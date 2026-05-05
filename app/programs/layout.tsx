import SubNavPills from "@/components/shared/SubNavPills";

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const links = [
    { label: "Programs Hub", href: "/programs" },
    { label: "Business-Stack Leadership", href: "/programs/business-stack" },
    { label: "DataZenmaster", href: "/programs/data-zenmaster" },
    { label: "Gen AI Suites", href: "/programs/gen-ai" },
  ];

  return (
    <>
      {/* Sticky Sub-Navigation */}
      <div className="sticky top-[64px] lg:top-[72px] z-40 bg-white/80 backdrop-blur-md border-b border-[#E0E7FF] py-3">
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
