import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ServiceGrid } from "@/components/services/ServiceGrid";

import { createMetadata } from "@/lib/seo";

import type { Locale } from "@/types/profile";

interface ServicesPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export async function generateMetadata({
  params,
}: ServicesPageProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "SEO",
  });

  return createMetadata({
    locale,
    title: t("services.title"),
    description: t("services.description"),
    path: "/services",
    keywords: [
      "software development",
      "web development",
      "networking",
      "telecom",
      "technical support",
      "microwave",
      "BTS",
    ],
  });
}

export default async function ServicesPage({
  params,
}: ServicesPageProps) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "Services",
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

      {/* Services */}
      <section className="section-padding pt-0">
        <Container>
          <ServiceGrid />
        </Container>
      </section>
    </main>
  );
}