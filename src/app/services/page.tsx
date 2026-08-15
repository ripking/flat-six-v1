import type { Metadata } from "next";
import { ServicesOverview } from "@/components/services/ServicesOverview";

export const metadata: Metadata = {
  title: "Media Consulting Services | Flat Six Media",
  description:
    "Finance, strategy, operations, valuation, and specialized advisory services for studios, production companies, producers, investors, streamers, and creators.",
  alternates: {
    canonical: "/services/",
  },
};

export default function ServicesPage() {
  return <ServicesOverview />;
}
