import type { MetadataRoute } from "next";
import { hubs, SITE_URL } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages = ["", "about", "contact", "editorial-policy", "privacy-policy"].map((path) => ({
    url: SITE_URL + (path ? "/" + path + "/" : "/"), lastModified: now, changeFrequency: "monthly" as const, priority: path ? 0.4 : 1
  }));
  const topicPages = hubs.flatMap((hub) => [
    { url: SITE_URL + "/" + hub.slug + "/", lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
    ...hub.subs.map((sub) => ({ url: SITE_URL + "/" + hub.slug + "/" + sub[1] + "/", lastModified: now, changeFrequency: "weekly" as const, priority: 0.7 }))
  ]);
  return [...staticPages, ...topicPages];
}
