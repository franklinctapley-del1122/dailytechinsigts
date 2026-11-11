import { hubs, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const paths = [
    "",
    "about",
    "contact",
    "editorial-policy",
    "privacy-policy",
    "authors/daily-tech-insights-editorial-team",
    ...hubs.flatMap((hub) => [
      hub.slug,
      ...hub.subs.map((sub) => `${hub.slug}/${sub[1]}`),
    ]),
  ];

  const urls = paths
    .map((path) => {
      const loc = path ? `${SITE_URL}/${path}/` : `${SITE_URL}/`;
      return `  <url><loc>${loc}</loc><changefreq>${path.includes("/") ? "weekly" : "monthly"}</changefreq><priority>${path ? (path.includes("/") ? "0.7" : "0.8") : "1.0"}</priority></url>`;
    })
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`,
    { headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=0, s-maxage=3600" } }
  );
}
