import Image from "next/image";
import Link from "next/link";
import {
  Award,
  ExternalLink,
  GraduationCap,
} from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { Certificate } from "@/types/certificate";

interface CertificateCardProps {
  certificate: Certificate;
}

export async function CertificateCard({
  certificate,
}: CertificateCardProps) {
  const t = await getTranslations("Certificates");

  const typeLabel = t(`types.${certificate.type}`);

  return (
    <Card
      hover
      className="group flex h-full flex-col overflow-hidden p-0"
    >
      {/* Certificate Image */}
      {certificate.image ? (
        <div className="relative aspect-[16/10] overflow-hidden bg-surface-secondary">
          <Image
            src={certificate.image}
            alt={t(certificate.titleKey)}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
          />
        </div>
      ) : (
        <div className="flex aspect-[16/10] items-center justify-center bg-primary/5">
          <Award
            size={64}
            strokeWidth={1.5}
            className="text-primary/40"
            aria-hidden="true"
          />
        </div>
      )}

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Type */}
        <div className="mb-4 flex items-center justify-between gap-3">
          <Badge variant="primary">
            {typeLabel}
          </Badge>

          <Award
            size={20}
            className="text-primary"
            aria-hidden="true"
          />
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold leading-8 text-text-primary">
          {t(certificate.titleKey)}
        </h2>

        {/* Issuer */}
        <div className="mt-3 flex items-start gap-2 text-sm text-text-secondary">
          <GraduationCap
            size={18}
            className="mt-0.5 shrink-0 text-primary"
            aria-hidden="true"
          />

          <span>
            {t(certificate.issuerKey)}
          </span>
        </div>

        {/* Description */}
        <p className="mt-4 flex-1 text-sm leading-7 text-text-secondary">
          {t(certificate.descriptionKey)}
        </p>

        {/* Issued Date */}
        {certificate.issuedDate ? (
          <p className="mt-4 text-xs font-medium text-text-muted">
            {certificate.issuedDate}
          </p>
        ) : null}

        {/* Skills */}
        {certificate.skills?.length ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {certificate.skills.map((skill) => (
              <Badge
                key={skill}
                variant="default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        ) : null}

        {/* Certificate Link */}
        {certificate.certificateUrl ? (
          <Link
            href={certificate.certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-6 inline-flex min-h-11
              items-center justify-center gap-2
              rounded-xl
              border border-border
              px-4 py-2
              text-sm font-semibold
              text-text-primary
              transition-all duration-200
              hover:border-primary
              hover:bg-primary/5
              hover:text-primary
            "
          >
            <span>
              {t("viewCertificate")}
            </span>

            <ExternalLink
              size={17}
              aria-hidden="true"
            />
          </Link>
        ) : null}
      </div>
    </Card>
  );
}