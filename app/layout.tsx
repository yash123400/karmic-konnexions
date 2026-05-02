import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/layout/LenisProvider";
import ScrollProgress from "@/components/layout/ScrollProgress";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import QueryProvider from "@/components/layout/QueryProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-var",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.karmickonnexions.com"),
  title: {
    template: "%s | Karmic Konnexions",
    default: "Karmic Konnexions — Global Consulting & Outsourcing",
  },
  description:
    "Execution-focused outsourcing for HR, Finance, CRM and Marketing. E-learning platform, global staffing and AI automation. Based in Gurgaon, India.",
  keywords: [
    "HR outsourcing India",
    "BPO services",
    "E-learning platform",
    "global staffing",
    "AI automation",
    "Karmic Konnexions",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.karmickonnexions.com",
    siteName: "Karmic Konnexions",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <LenisProvider>
          <QueryProvider>
            <ScrollProgress />
            <Header />
            <main>{children}</main>
            <Footer />
          </QueryProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
