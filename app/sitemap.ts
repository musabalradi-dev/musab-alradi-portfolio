
import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { getAllProjectSlugs } from "@/lib/projects";

const locales = ["en", "ar"] as const;

const staticPages = [
  "",
  "/about",
  "/skills",
  "/experience",
  "/services",
  "/projects",
  "/telecom",
  "/certificates",
  "/field-work",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = staticPages.flatMap(
    (path) =>
      locales.map((locale) => ({
        url: `${siteConfig.url}/${locale}${path}`,
        changeFrequency: "monthly" as const,
        priority: path === "" ? 1 : 0.8,
        alternates: {
          languages: {
            en: `${siteConfig.url}/en${path}`,
            ar: `${siteConfig.url}/ar${path}`,
          },
        },
      })),
  );

  const projectSlugs = getAllProjectSlugs();

  const projects: MetadataRoute.Sitemap = projectSlugs.flatMap(
    (slug) =>
      locales.map((locale) => ({
        url: `${siteConfig.url}/${locale}/projects/${slug}`,
        changeFrequency: "monthly" as const,
        priority: 0.7,
        alternates: {
          languages: {
            en: `${siteConfig.url}/en/projects/${slug}`,
            ar: `${siteConfig.url}/ar/projects/${slug}`,
          },
        },
      })),
  );

  return [...pages, ...projects];
}
