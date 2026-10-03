import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/links";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/link"), lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];
}
