import { getTranslations } from "next-intl/server";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";

import type { Service } from "@/types/service";

interface ServiceCardProps {
  service: Service;
}

export async function ServiceCard({
  service,
}: ServiceCardProps) {
  const t = await getTranslations("Services");

  return (
    <Card
      hover
      className="group h-full overflow-hidden"
    >
      {/* Icon */}
      <div
        className={[
          "flex h-14 w-14 items-center justify-center",
          "rounded-2xl",
          "bg-primary/10",
          "text-primary",
          "transition-all duration-300",
          "group-hover:scale-110",
          "group-hover:bg-primary",
          "group-hover:text-white",
        ].join(" ")}
      >
        <Icon
          name={service.icon}
          size={27}
          strokeWidth={1.8}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="mt-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h3 className="text-xl font-bold text-text-primary">
            {t(service.titleKey)}
          </h3>

          <Badge variant="primary">
            {t(`categories.${service.category}`)}
          </Badge>
        </div>

        <p className="mt-4 leading-7 text-text-secondary">
          {t(service.descriptionKey)}
        </p>
      </div>

      {/* Features */}
      {service.features?.length ? (
        <div className="mt-6">
          <h4 className="mb-3 text-sm font-semibold text-text-primary">
            {t("features")}
          </h4>

          <ul className="space-y-2.5">
            {service.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-sm leading-6 text-text-secondary"
              >
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />

                <span>{t(feature)}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {/* Technologies */}
      {service.technologies?.length ? (
        <div className="mt-6 border-t border-border pt-5">
          <h4 className="mb-3 text-sm font-semibold text-text-primary">
            {t("technologies")}
          </h4>

          <div className="flex flex-wrap gap-2">
            {service.technologies.map((technology) => (
              <Badge
                key={technology}
                variant="default"
              >
                {technology}
              </Badge>
            ))}
          </div>
        </div>
      ) : null}
    </Card>
  );
}