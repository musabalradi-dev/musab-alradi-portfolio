import type {
  MetadataRoute,
} from "next";

import { siteConfig } from "@/config/site";
import {
  getAllProjectSlugs,
} from "@/lib/projects";

const locales = [
  "en",
  "ar",
] as const;

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
  const pages = locales.flatMap(
    (locale) =>
      staticPages.map((path) => ({
        url: `${siteConfig.url}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency:
          "monthly" as const,
        priority:
          path === ""
            ? 1
            : 0.8,
      })),
  );

  const projects =
    locales.flatMap(
      (locale) =>
        getAllProjectSlugs().map(
          (slug) => ({
            url: `${siteConfig.url}/${locale}/projects/${slug}`,
            lastModified:
              new Date(),
            changeFrequency:
              "monthly" as const,
            priority: 0.7,
          }),
        ),
    );

  return [
    ...pages,
    ...projects,
  ];
}