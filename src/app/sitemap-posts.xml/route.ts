import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  // Article URLs will be added here when the publishing system is introduced.
  const urls: string[] = [];

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((path) => `  <url><loc>${SITE_URL}${path}</loc></url>`).join("\n")}\n</urlset>`,
    { headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=0, s-maxage=3600" } }
  );
}
