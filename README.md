# Daily Tech Insights
Next.js App Router + TypeScript + Tailwind CSS starter for https://dailytechinsights.com.

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

Canonical host is the non-www URL https://dailytechinsights.com. Category and sub-hub pages are generated from src/lib/site.ts. Article content has intentionally not been added yet; the sub-hub pages clearly indicate that guides are being prepared rather than showing fake articles. Configure www-to-apex and HTTP-to-HTTPS permanent redirects in Vercel/domain settings before launch.
