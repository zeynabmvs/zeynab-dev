import { MetadataRoute } from "next";
import { projects, profile } from "@/app/lib/data";

const siteUrl = "https://zeynab-dev.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages = projects
    .filter((project) => project.hasDetailsPage)
    .map((project) => ({
      url: `${siteUrl}/projects/${project.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    ...projectPages,
  ];
}

