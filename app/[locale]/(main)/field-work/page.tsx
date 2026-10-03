import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { FieldWorkGrid } from "@/components/field-work/FieldWorkGrid";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

import { createMetadata } from "@/lib/seo";
import type { Locale } from "@/types/profile";

interface FieldWorkPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export async function generateMetadata({
  params,
}: FieldWorkPageProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "SEO.fieldWork",
  });

  return createMetadata({
    locale,
    title: t("title"),
    description: t("description"),
    path: "/field-work",
    keywords: [
      "Telecom Field Work",
      "BTS Installation",
      "Microwave Installation",
      "RF",
      "Site Survey",
      "Telecom Maintenance",
      "Huawei",
      "Telecom Power",
    ],
  });
}

export default async function FieldWorkPage() {
  const t = await getTranslations(
    "FieldWork",
  );

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

          <FieldWorkGrid />
        </Container>
      </section>
    </main>
  );
}