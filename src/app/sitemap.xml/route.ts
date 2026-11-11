import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const sitemaps = ["sitemap-pages.xml", "sitemap-posts.xml"]
    .map((name) => `  <sitemap><loc>${SITE_URL}/${name}</loc></sitemap>`)
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemaps}\n</sitemapindex>`,
    { headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=0, s-maxage=3600" } }
  );
}
