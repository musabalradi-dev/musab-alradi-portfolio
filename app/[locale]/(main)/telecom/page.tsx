import type { Metadata } from "next";

import { getTranslations } from "next-intl/server";

import { TelecomArchitecture } from "@/components/telecom/TelecomArchitecture";
import { TelecomTechnologyGrid } from "@/components/telecom/TelecomTechnologyGrid";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { createMetadata } from "@/lib/seo";

import type { Locale } from "@/types/profile";

interface TelecomPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export async function generateMetadata({
  params,
}: TelecomPageProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "SEO",
  });

  return createMetadata({
    locale,
    title: t("telecom.title"),
    description: t("telecom.description"),
    path: "/telecom",
    keywords: [
      "GSM",
      "UMTS",
      "LTE",
      "BTS",
      "RF",
      "Microwave",
      "Transmission",
      "Telecom Power",
      "FTTH",
      "OLT",
      "Wireless",
    ],
  });
}

export default async function TelecomPage({
  params,
}: TelecomPageProps) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "Telecom",
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

      {/* Architecture */}
      <section className="section-padding pt-0">
        <Container>
          <SectionTitle
            eyebrow={t("architectureEyebrow")}
            title={t("architectureTitle")}
            description={t("architectureDescription")}
            align="center"
          />

          <div className="mt-10">
            <TelecomArchitecture />
          </div>
        </Container>
      </section>

      {/* Technologies */}
      <section className="section-padding bg-surface-secondary/40">
        <Container>
          <SectionTitle
            eyebrow={t("technologiesEyebrow")}
            title={t("technologiesTitle")}
            description={t("technologiesDescription")}
            align="center"
          />

          <div className="mt-10">
            <TelecomTechnologyGrid />
          </div>
        </Container>
      </section>
    </main>
  );
}