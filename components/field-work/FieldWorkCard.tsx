import Image from "next/image";
import {
  ArrowUpRight,
  CalendarDays,
  MapPin,
} from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

import type { FieldWork } from "@/types/field-work";

interface FieldWorkCardProps {
  work: FieldWork;
}

export async function FieldWorkCard({
  work,
}: FieldWorkCardProps) {
  const t = await getTranslations("FieldWork");

  return (
    <Card
      hover
      className="group overflow-hidden p-0"
    >
      {/* Image */}
      {work.image ? (
        <div className="relative aspect-[16/10] overflow-hidden bg-surface-secondary">
          <Image
            src={work.image}
            alt={t(work.titleKey)}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute start-4 top-4">
            <Badge variant="telecom">
              {t(`categories.${work.category}`)}
            </Badge>
          </div>
        </div>
      ) : (
        <div className="flex aspect-[16/10] items-center justify-center bg-surface-secondary">
          <span className="text-sm text-text-muted">
            {t("noImage")}
          </span>
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <div className="flex flex-wrap gap-3 text-xs text-text-secondary">
          {work.date ? (
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays
                size={15}
                aria-hidden="true"
              />
              {work.date}
            </span>
          ) : null}

          {work.locationKey ? (
            <span className="inline-flex items-center gap-1.5">
              <MapPin
                size={15}
                aria-hidden="true"
              />
              {t(work.locationKey)}
            </span>
          ) : null}
        </div>

        <h3 className="mt-4 text-xl font-bold text-text-primary">
          {t(work.titleKey)}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-7 text-text-secondary">
          {t(work.descriptionKey)}
        </p>

        {/* Technologies */}
        {work.technologies?.length ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {work.technologies
              .slice(0, 5)
              .map((technology) => (
                <Badge
                  key={technology}
                  variant="default"
                >
                  {technology}
                </Badge>
              ))}
          </div>
        ) : null}

        {/* Details */}
        <div className="mt-6">
          <Link
            href={`/field-work/${work.id}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
          >
            <span>{t("viewDetails")}</span>

            <ArrowUpRight
              size={17}
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </Card>
  );
}