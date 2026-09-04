import type { Metadata } from "next";
import { AISolutions } from "@/components/ai/AISolutions";

export const metadata: Metadata = {
  title: "AI Services for Media Businesses | Flat Six Media",
  description:
    "Practical AI for studios, production companies, financiers, and distributors. AI opportunity assessments, workflow design and implementation, and managed AI operations—built on real media operating experience.",
  alternates: {
    canonical: "/ai/",
  },
};

export default function AIPage() {
  return <AISolutions />;
}
