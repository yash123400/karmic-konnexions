import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

const footerServices = [
  { label: "BPO Outsourcing", href: "/services/bpo-outsourcing" },
  { label: "E-Learning", href: "/services/elearning" },
  { label: "Global Workforce", href: "/services/global-workforce" },
  { label: "Corporate Apparel", href: "/services/corporate-apparel" },
  { label: "AI Automation", href: "/services/ai-automation" },
];

const footerPrograms = [
  { label: "Business-Stack Leadership", href: "/programs/business-stack" },
  { label: "Data Zenmaster", href: "/programs/data-zenmaster" },
  { label: "Gen AI Suites", href: "/programs/gen-ai" },
  { label: "Swabhimaan Initiative", href: "/initiatives/swabhimaan" },
];

const footerCompany = [
  { label: "About Us", href: "/about" },
  { label: "Why Karmic", href: "/why-karmic" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <div className="border-t border-white/10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Column 1 — Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                <span className="text-primary font-bold text-lg">K</span>
              </div>
              <span className="font-bold text-white text-lg">
                Karmic Konnexions
              </span>
            </div>
            <p className="text-accent italic text-sm mb-6">
              Health, Wealth, Longevity
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>
                  #106D, J Block, Adani Samsara Vilasa 2.0, Sec 63, Gurgaon,
                  Haryana – 122011
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <a
                  href="mailto:karmickonnexions2309@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  karmickonnexions2309@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <a
                  href="tel:+919667759894"
                  className="hover:text-white transition-colors"
                >
                  +91-9667759894
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerServices.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Programs & Initiatives */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Programs & Initiatives
            </h4>
            <ul className="space-y-3">
              {footerPrograms.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Company */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerCompany.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5 — Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <p className="text-sm mb-6">
              Ready to transform your operations?
            </p>
            <Link
              href="/contact"
              className="block w-full text-center bg-accent hover:bg-accent-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Book a Discovery Call
            </Link>
            <p className="text-xs text-white/50 mt-4 text-center">
              or email us directly at{" "}
              <a
                href="mailto:karmickonnexions2309@gmail.com"
                className="text-accent hover:text-accent-light transition-colors"
              >
                karmickonnexions2309@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © 2025 Karmic Konnexions Global Consulting LLP. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/40">
            <Link href="#" className="hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="#" className="hover:text-white/60 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
