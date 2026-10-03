import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { createMetadata } from "@/lib/seo";
import type { Locale } from "@/types/profile";

interface ExperiencePageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export async function generateMetadata({
  params,
}: ExperiencePageProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "SEO.experience",
  });

  return createMetadata({
    locale,
    title: t("title"),
    description: t("description"),
    path: "/experience",
    keywords: [
      "Musab Alradi Experience",
      "IT Experience",
      "Telecom Experience",
      "Technical Support",
      "Network Engineering",
      "Huawei Telecom",
    ],
  });
}

export default async function ExperiencePage() {
  const t = await getTranslations("Experience");

  return (
    <main>
      <section className="section-padding">
        <Container>
          <SectionTitle
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
            align="center"
          />

          <ExperienceTimeline />
        </Container>
      </section>
    </main>
  );
}