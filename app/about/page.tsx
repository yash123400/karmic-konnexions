import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: 'About Us | Karmic Konnexions Global Consulting LLP',
  description: 'Karmic Konnexions is a globally renowned HR consulting, BPO outsourcing, e-learning, and corporate apparel solutions company based in Gurgaon, India. Health, Wealth, Longevity.',
  keywords: ['about Karmic Konnexions', 'HR consulting Gurgaon', 'global consulting India', 'Karmic Konnexions LLP'],
};

export default function AboutPage() {
  return <AboutClient />;
}
