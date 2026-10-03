import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { SkillsGrid } from "@/components/skills/SkillsGrid";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

import { createMetadata } from "@/lib/seo";

import type { Locale } from "@/types/profile";

interface SkillsPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export async function generateMetadata({
  params,
}: SkillsPageProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "SEO",
  });

  return createMetadata({
    locale,
    title: t("skills.title"),
    description: t("skills.description"),
    path: "/skills",
    keywords: [
      "Flutter",
      "Next.js",
      "TypeScript",
      "Python",
      "Networking",
      "MikroTik",
      "GSM",
      "LTE",
      "Microwave",
      "Technical Support",
    ],
  });
}

export default async function SkillsPage({
  params,
}: SkillsPageProps) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "Skills",
  });

  return (
    <main>
      {/* Hero */}
      <section className="section-padding">
        <Container>
          <SectionTitle
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
            align="center"
          />
        </Container>
      </section>

      {/* Skills */}
      <section className="section-padding pt-0">
        <Container>
          <SkillsGrid />
        </Container>
      </section>
    </main>
  );
}