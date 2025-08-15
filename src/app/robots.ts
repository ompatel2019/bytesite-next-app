import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/private/", "/api/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/admin/", "/private/"],
      },
    ],
    sitemap: [
      "https://bytesitedigital.com.au/sitemap.xml",
      "https://bytesitedigital.com.au/sitemap-0.xml"
    ],
    host: "https://bytesitedigital.com.au",
  };
}
