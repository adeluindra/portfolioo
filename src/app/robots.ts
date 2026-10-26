
import type { MetadataRoute } from "next";

import {
  indexingEnabled,
  siteUrl,
} from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    ...(indexingEnabled && siteUrl
      ? {
          sitemap: `${siteUrl}/sitemap.xml`,
        }
      : {}),
  };
}
