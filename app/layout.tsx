import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import LenisProvider from "@/components/providers/LenisProvider";
import PageTransition from "@/components/providers/PageTransition";
import CustomCursor from "@/components/shared/CustomCursor";
import ScrollProgress from "@/components/shared/ScrollProgress";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import QueryProvider from "@/components/layout/QueryProvider";
import NextAuthSessionProvider from "@/components/providers/SessionProvider";
import JsonLd from "@/components/seo/JsonLd";
import { orgSchema } from "@/lib/schemas";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-var",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.karmickonnexion.com"),
  title: {
    default:
      "Karmic Konnexions Global Consulting LLP | HRO & Business Functions Outsourcing India",
    template: "%s | Karmic Konnexions",
  },
  description:
    "Karmic Konnexions Global Consulting LLP — execution-focused HRO outsourcing: Human Resources Operations, Finance, CRM, Marketing & E-Learning solutions. 500+ clients. 98% retention. Based in Gurgaon, India.",
  keywords: [
    "HRO outsourcing India",
    "HR outsourcing Gurgaon",
    "finance outsourcing India",
    "CRM outsourcing",
    "e-learning solutions India",
    "corporate apparel",
    "global workforce solutions",
    "Karmic Konnexions",
    "outsourcing company Gurgaon",
    "payroll outsourcing India",
    "human resources operations outsourcing",
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
    url: "https://www.karmickonnexion.com",
    siteName: "Karmic Konnexions Global Consulting LLP",
    title:
      "Karmic Konnexions — Execution-Focused Outsourcing & HR Solutions",
    description:
      "500+ clients. 98% retention. 60% cost savings. HRO, Finance, CRM, E-Learning and Corporate Apparel.",
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
      "Execution-focused HRO outsourcing in India. 500+ clients. 98% retention.",
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
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="font-[family-name:var(--font-inter-var)]">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5YW1LD3RB5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5YW1LD3RB5');
          `}
        </Script>
        {/* Skip to main content — accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-white focus:text-primary focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <JsonLd data={orgSchema} />
        <NextAuthSessionProvider>
        <QueryProvider>
          <CustomCursor />
          <ScrollProgress />
          <LenisProvider>
            <Header />
            <PageTransition>
              <main id="main-content" className="flex-grow pt-[64px] lg:pt-[72px]">
                {children}
              </main>
            </PageTransition>
            <Footer />
          </LenisProvider>
        </QueryProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
