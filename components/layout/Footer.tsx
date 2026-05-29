import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A]">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10">
          
          {/* COLUMN 1 — Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 inline-flex group">
              <div className="relative w-[40px] h-[40px] rounded-xl overflow-hidden bg-black/40 flex items-center justify-center border border-slate-800 shadow-sm transition-colors duration-300 group-hover:border-orange-500/30">
                <img 
                  src="/images/brand/logo-infinity.jpg" 
                  alt="Karmic Konnexions Logo" 
                  className="h-full w-full object-contain p-0.5 transform scale-110 group-hover:scale-120 transition-transform duration-500"
                />
              </div>
              <span className="text-white font-bold text-lg">Karmic Konnexions</span>
            </Link>

            <div className="text-[#F97316] italic text-sm mb-5 font-medium">
              Health, Wealth, Longevity
            </div>

            <div className="text-[#94A3B8] text-sm leading-relaxed space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  #106D, J Block, Adani Samsara Vilasa 2.0<br />
                  Sec 63, Maidawas Road, Gurgaon, Haryana – 122011
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <a href="mailto:support@karmickonnexion.com" className="hover:text-white transition-colors">
                  support@karmickonnexion.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <a href="tel:+919667759894" className="hover:text-white transition-colors">
                  +91-9667759894
                </a>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3 sm:justify-start justify-center">
              <a href="#" className="w-[36px] h-[36px] rounded-lg bg-white/10 hover:bg-[#4F46E5] transition-colors flex items-center justify-center text-white" aria-label="LinkedIn">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="w-[36px] h-[36px] rounded-lg bg-white/10 hover:bg-[#4F46E5] transition-colors flex items-center justify-center text-white" aria-label="Twitter">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="w-[36px] h-[36px] rounded-lg bg-white/10 hover:bg-[#4F46E5] transition-colors flex items-center justify-center text-white" aria-label="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* COLUMN 2 — Services */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/hro-outsourcing" className="text-[#94A3B8] text-sm hover:text-white transition-colors">HRO & Business Functions</Link></li>
              <li><Link href="/services/elearning" className="text-[#94A3B8] text-sm hover:text-white transition-colors">E-Learning & Training</Link></li>
              <li><Link href="/services/global-workforce" className="text-[#94A3B8] text-sm hover:text-white transition-colors">Global Workforce</Link></li>
              <li><Link href="/services/corporate-apparel" className="text-[#94A3B8] text-sm hover:text-white transition-colors">Corporate Apparel</Link></li>
              <li><Link href="/services/ai-automation" className="text-[#94A3B8] text-sm hover:text-white transition-colors">AI Automation</Link></li>
            </ul>
          </div>

          {/* COLUMN 3 — Programs & Initiatives */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Programs</h3>
            <ul className="space-y-2 mb-4">
              <li><Link href="/programs/business-stack" className="text-[#94A3B8] text-sm hover:text-white transition-colors">Business-Stack Leadership</Link></li>
              <li><Link href="/programs/data-zenmaster" className="text-[#94A3B8] text-sm hover:text-white transition-colors">Data Zenmaster</Link></li>
              <li><Link href="/programs/gen-ai" className="text-[#94A3B8] text-sm hover:text-white transition-colors">Generative AI Suites</Link></li>
            </ul>

            <div className="border-t border-white/10 my-4"></div>

            <h3 className="text-white font-semibold text-sm mb-2">Initiatives</h3>
            <ul className="space-y-2">
              <li><Link href="/initiatives/swabhimaan" className="text-[#94A3B8] text-sm hover:text-white transition-colors">Swabhimaan</Link></li>
              <li><Link href="/initiatives/swabhimaan/marketplace" className="text-[#94A3B8] text-sm hover:text-white transition-colors">Marketplace</Link></li>
              <li><Link href="/initiatives/swabhimaan/stories" className="text-[#94A3B8] text-sm hover:text-white transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          {/* COLUMN 4 — Company */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-[#94A3B8] text-sm hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/why-karmic" className="text-[#94A3B8] text-sm hover:text-white transition-colors">Why Karmic</Link></li>
              <li><Link href="/industries" className="text-[#94A3B8] text-sm hover:text-white transition-colors">Industries</Link></li>
              <li><Link href="/case-studies" className="text-[#94A3B8] text-sm hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/blog" className="text-[#94A3B8] text-sm hover:text-white transition-colors">Blog & Insights</Link></li>
              <li><Link href="/careers" className="text-[#94A3B8] text-sm hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-[#94A3B8] text-sm hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* COLUMN 5 — Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Start a Conversation</h3>
            <p className="text-[#94A3B8] text-sm leading-relaxed mb-5">
              Ready to transform your business operations with a fixed-cost outsourcing partner?
            </p>
            
            <Link 
              href="/contact" 
              className="block w-full text-center bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold py-3 px-5 rounded-xl text-sm transition-colors"
            >
              Book a Discovery Call
            </Link>

            <div className="text-[#64748B] text-xs text-center my-3">or</div>

            <div className="text-center">
              <a 
                href="mailto:support@karmickonnexion.com" 
                className="text-[#4F46E5] hover:text-[#6366F1] text-sm font-medium transition-colors"
              >
                Send us an email →
              </a>
            </div>

            <a 
              href="https://wa.me/919667759894" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 block w-full text-center border border-white/20 hover:border-white/40 text-[#94A3B8] hover:text-white rounded-xl py-2.5 px-4 text-sm transition-colors"
            >
              💬 WhatsApp Us
            </a>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[#64748B] text-sm text-center sm:text-left order-2 sm:order-1">
            © {new Date().getFullYear()} Karmic Konnexions Global Consulting LLP. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-6 order-1 sm:order-2">
            <Link href="/privacy" className="text-[#64748B] hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-[#64748B] hover:text-white text-sm transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="text-[#64748B] hover:text-white text-sm transition-colors">Sitemap</Link>
            <Link href="/admin/login" className="text-[#94A3B8] hover:text-white text-sm font-medium transition-colors">Staff Login</Link>
          </div>
        </div>
      </div>

      {/* DEVELOPER CREDIT */}
      <div className="py-3 border-t border-white/5 text-center">
        <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-white/20 hover:text-white/50 transition-colors duration-500 cursor-default">
          Crafted with intent by Samsars AI Labs
        </span>
      </div>
    </footer>
  );
}
