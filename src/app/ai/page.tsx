import type { Metadata } from "next";
import { AISolutions } from "@/components/ai/AISolutions";

export const metadata: Metadata = {
  title: "AI & Automation for Entertainment & Content Businesses | Flat Six Media",
  description:
    "AI automation, workflow, data, and analysis solutions built for studios, production companies, distributors, streamers, and creators—grounded in real media finance and operations experience.",
  alternates: {
    canonical: "/ai/",
  },
};

export default function AIPage() {
  return <AISolutions />;
}
