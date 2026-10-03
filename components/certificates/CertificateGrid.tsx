import { getTranslations } from "next-intl/server";

import { CertificateCard } from "@/components/certificates/CertificateCard";
import { certificatesData } from "@/data/certificates";

export async function CertificateGrid() {
  const t = await getTranslations("Certificates");

  if (!certificatesData.length) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-surface p-10 text-center">
        <p className="text-text-secondary">
          {t("empty")}
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {certificatesData.map((certificate) => (
        <CertificateCard
          key={certificate.id}
          certificate={certificate}
        />
      ))}
    </div>
  );
}