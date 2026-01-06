import { MetadataRoute } from "next";

const siteUrl = "https://zeynab-dev.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}

