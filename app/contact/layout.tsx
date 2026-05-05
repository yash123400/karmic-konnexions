import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { localBusinessSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Contact Us | Karmic Konnexions Global Consulting",
  description:
    "Get in touch with Karmic Konnexions. Book a discovery call, send an enquiry, or WhatsApp us directly. We respond within 24 hours. Based in Gurgaon, India.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      {children}
    </>
  );
}
