
import type { MetadataRoute } from "next";

import { projects } from "@/data/projects";
import {
  indexingEnabled,
  siteUrl,
} from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl || !indexingEnabled) {
    return [];
  }

  const homepage: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];

  const projectPages: MetadataRoute.Sitemap = projects
    .filter((project) => Boolean(project.caseStudyPath))
    .map((project) => ({
      url: `${siteUrl}${project.caseStudyPath}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  return [...homepage, ...projectPages];
}
