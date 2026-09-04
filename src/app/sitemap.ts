import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://flatsix.media/",
    },
    {
      url: "https://flatsix.media/services/",
    },
    {
      url: "https://flatsix.media/ai/",
    },
  ];
}
