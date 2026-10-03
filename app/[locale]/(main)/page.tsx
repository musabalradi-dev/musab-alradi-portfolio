import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { AboutPreview } from "@/components/home/AboutPreview";
import { CertificatesPreview } from "@/components/home/CertificatesPreview";
import { ContactCTA } from "@/components/home/ContactCTA";
import { ExperiencePreview } from "@/components/home/ExperiencePreview";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Hero } from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { SkillsPreview } from "@/components/home/SkillsPreview";
import { Stats } from "@/components/home/Stats";
import { TelecomPreview } from "@/components/home/TelecomPreview";
import { TestimonialsPreview } from "@/components/home/TestimonialsPreview";

import { createMetadata } from "@/lib/seo";
import type { Locale } from "@/types/profile";

interface HomePageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "SEO.home",
  });

  return createMetadata({
    locale,
    title: t("title"),
    description: t("description"),
    path: "",
    keywords: [
      "Musab Alradi",
      "Software Developer",
      "IT Professional",
      "Telecom Professional",
      "Network Engineer",
      "Flutter Developer",
      "Next.js Developer",
    ],
  });
}

export default function HomePage() {
  return (
    <main>
      <Hero />

      <Stats />

      <AboutPreview />

      <SkillsPreview />

      <ServicesPreview />

      <FeaturedProjects />

      <TelecomPreview />

      <ExperiencePreview />

      <CertificatesPreview />

      <TestimonialsPreview />

      <ContactCTA />
    </main>
  );
}