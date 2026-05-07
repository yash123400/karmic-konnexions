export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Hide site header/footer inside the Sanity Studio route */}
      <style>{`
        body > header,
        body > footer,
        [data-header],
        [data-footer],
        nav[data-site-nav] { display: none !important; }
      `}</style>
      {children}
    </>
  )
}
