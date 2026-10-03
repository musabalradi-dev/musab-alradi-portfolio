import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { AboutHero } from "@/components/about/AboutHero";
import { AboutHighlights } from "@/components/about/AboutHighlights";
import { AboutSpecializations } from "@/components/about/AboutSpecializations";
import { createMetadata } from "@/lib/seo";
import type { Locale } from "@/types/profile";

interface AboutPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "SEO.about",
  });

  return createMetadata({
    locale,
    title: t("title"),
    description: t("description"),
    path: "/about",
    keywords: [
      "Musab Alradi",
      "About Musab Alradi",
      "IT Professional",
      "Software Developer",
      "Telecom Professional",
      "Network Engineer",
      "Technical Support",
    ],
  });
}

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutHighlights />
      <AboutSpecializations />
    </main>
  );
}