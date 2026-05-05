import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/providers/LenisProvider";
import PageTransition from "@/components/providers/PageTransition";
import CustomCursor from "@/components/shared/CustomCursor";
import ScrollProgress from "@/components/shared/ScrollProgress";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import QueryProvider from "@/components/layout/QueryProvider";
import JsonLd from "@/components/seo/JsonLd";
import { orgSchema } from "@/lib/schemas";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-var",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.karmickonnexions.com"),
  title: {
    default:
      "Karmic Konnexions Global Consulting LLP | BPO Outsourcing & HR Solutions India",
    template: "%s | Karmic Konnexions",
  },
  description:
    "Karmic Konnexions Global Consulting LLP — execution-focused BPO outsourcing, HR & Payroll, Finance, CRM, E-Learning and Corporate Apparel solutions. 500+ clients. 98% retention. Based in Gurgaon, India.",
  keywords: [
    "BPO outsourcing India",
    "HR outsourcing Gurgaon",
    "finance outsourcing India",
    "CRM outsourcing",
    "e-learning solutions India",
    "corporate apparel",
    "global workforce solutions",
    "Karmic Konnexions",
    "outsourcing company Gurgaon",
    "payroll outsourcing India",
    "business process outsourcing",
  ],
  authors: [{ name: "Karmic Konnexions Global Consulting LLP" }],
  creator: "Karmic Konnexions Global Consulting LLP",
  publisher: "Karmic Konnexions Global Consulting LLP",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.karmickonnexions.com",
    siteName: "Karmic Konnexions Global Consulting LLP",
    title:
      "Karmic Konnexions — Execution-Focused Outsourcing & HR Solutions",
    description:
      "500+ clients. 98% retention. 60% cost savings. BPO, HR, Finance, CRM, E-Learning and Corporate Apparel.",
    images: [
      {
        url: "/logo-full.png",
        width: 1200,
        height: 630,
        alt: "Karmic Konnexions Global Consulting LLP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karmic Konnexions Global Consulting LLP",
    description:
      "Execution-focused BPO outsourcing in India. 500+ clients. 98% retention.",
    images: ["/logo-full.png"],
  },
  // Add Google Search Console verification token here when available:
  // verification: { google: 'YOUR_VERIFICATION_CODE' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <JsonLd data={orgSchema} />
        <QueryProvider>
          <CustomCursor />
          <ScrollProgress />
          <LenisProvider>
            <Header />
            <PageTransition>
              <main className="flex-grow pt-[64px] lg:pt-[72px]">
                {children}
              </main>
            </PageTransition>
            <Footer />
          </LenisProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
