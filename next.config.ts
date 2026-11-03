import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  poweredByHeader: false,
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.dailytechinsights.com" }],
        destination: "https://dailytechinsights.com/:path*",
        permanent: true
      }
    ];
  }
};
export default nextConfig;
