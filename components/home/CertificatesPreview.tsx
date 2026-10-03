import { getTranslations } from "next-intl/server";

import { CertificateGrid } from "@/components/certificates/CertificateGrid";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Link } from "@/i18n/navigation";

export async function CertificatesPreview() {
  const t = await getTranslations("Certificates");

  return (
    <section className="section-padding">
      <Container>
        <SectionTitle
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
          align="center"
        />

        <CertificateGrid />

        <div className="mt-10 text-center">
          <Link
            href="/certificates"
            className="font-semibold text-primary hover:text-primary-hover"
          >
            {t("viewAll")}
          </Link>
        </div>
      </Container>
    </section>
  );
}