import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { CertificateGrid } from "@/components/certificates/CertificateGrid";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { createMetadata } from "@/lib/seo";
import type { Locale } from "@/types/profile";

interface CertificatesPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export async function generateMetadata({
  params,
}: CertificatesPageProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "SEO.certificates",
  });

  return createMetadata({
    locale,
    title: t("title"),
    description: t("description"),
    path: "/certificates",
    keywords: [
      "Musab Alradi Certificates",
      "IT Diploma",
      "Cybercrime Certificate",
      "Information Technology",
      "Sudan University of Science and Technology",
    ],
  });
}

export default async function CertificatesPage() {
  const t = await getTranslations("Certificates");

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

          <CertificateGrid />
        </Container>
      </section>
    </main>
  );
}