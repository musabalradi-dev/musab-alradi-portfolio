import { getTranslations } from "next-intl/server";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";

import type { TelecomTechnology } from "@/types/telecom";

interface TelecomTechnologyCardProps {
  technology: TelecomTechnology;
}

export async function TelecomTechnologyCard({
  technology,
}: TelecomTechnologyCardProps) {
  const t = await getTranslations("Telecom");

  return (
    <Card hover className="group h-full overflow-hidden">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div
          className={[
            "flex h-14 w-14 shrink-0",
            "items-center justify-center",
            "rounded-2xl",
            "bg-telecom/10",
            "text-telecom",
            "transition-all duration-300",
            "group-hover:scale-110",
            "group-hover:bg-telecom",
            "group-hover:text-white",
          ].join(" ")}
        >
          <Icon
            name={technology.icon}
            size={27}
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </div>

        {technology.shortName ? (
          <Badge variant="primary">
            {technology.shortName}
          </Badge>
        ) : null}
      </div>

      {/* Title */}
      <div className="mt-6">
        <h3 className="text-xl font-bold text-text-primary">
          {t(technology.nameKey)}
        </h3>

        <p className="mt-3 leading-7 text-text-secondary">
          {t(technology.descriptionKey)}
        </p>
      </div>

      {/* Technologies */}
      {technology.technologies?.length ? (
        <div className="mt-6">
          <h4 className="mb-3 text-sm font-semibold text-text-primary">
            {t("technologiesLabel")}
          </h4>

          <div className="flex flex-wrap gap-2">
            {technology.technologies.map((item) => (
              <Badge key={item} variant="default">
                {item}
              </Badge>
            ))}
          </div>
        </div>
      ) : null}

      {/* Features */}
      {technology.features?.length ? (
        <div className="mt-6 border-t border-border pt-5">
          <h4 className="mb-3 text-sm font-semibold text-text-primary">
            {t("features")}
          </h4>

          <ul className="space-y-2.5">
            {technology.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-sm leading-6 text-text-secondary"
              >
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-telecom" />

                <span>{t(feature)}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </Card>
  );
}