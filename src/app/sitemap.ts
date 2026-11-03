import type { MetadataRoute } from "next";
import { hubs, SITE_URL } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE_URL + "/", lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...hubs.flatMap((hub) => [
      { url: SITE_URL + "/" + hub.slug + "/", lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
      ...hub.subs.map((sub) => ({ url: SITE_URL + "/" + hub.slug + "/" + sub[1] + "/", lastModified: now, changeFrequency: "weekly" as const, priority: 0.7 }))
    ])
  ];
}
