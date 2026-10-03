import { getTranslations } from "next-intl/server";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";

import type { Skill } from "@/types/skill";

interface SkillCardProps {
  skill: Skill;
  showLevel?: boolean;
}

export async function SkillCard({
  skill,
  showLevel = true,
}: SkillCardProps) {
  const t = await getTranslations("Skills");

  return (
    <Card hover className="group h-full">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div
          className={[
            "flex h-12 w-12 shrink-0",
            "items-center justify-center",
            "rounded-xl",
            "bg-primary/10",
            "text-primary",
            "transition-all duration-300",
            "group-hover:scale-110",
            "group-hover:bg-primary",
            "group-hover:text-white",
          ].join(" ")}
        >
          {skill.icon ? (
            <Icon
              name={skill.icon}
              size={23}
              strokeWidth={1.8}
              aria-hidden="true"
            />
          ) : null}
        </div>

        <Badge variant="primary">
          {t(`categories.${skill.category}.title`)}
        </Badge>
      </div>

      {/* Name */}
      <h3 className="mt-5 text-lg font-bold text-text-primary">
        {skill.name}
      </h3>

      {/* Level */}
      {showLevel && typeof skill.level === "number" ? (
        <div className="mt-5">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-medium text-text-secondary">
              {t("level")}
            </span>

            <span className="font-mono text-xs font-semibold text-primary">
              {skill.level}%
            </span>
          </div>

          <div
            className="h-2 overflow-hidden rounded-full bg-surface-tertiary"
            role="progressbar"
            aria-valuenow={skill.level}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`${skill.name} ${skill.level}%`}
          >
            <div
              className="h-full rounded-full bg-primary transition-all duration-700"
              style={{
                width: `${skill.level}%`,
              }}
            />
          </div>
        </div>
      ) : null}

      {/* Technologies */}
      {skill.technologies?.length ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {skill.technologies.map((technology) => (
            <Badge key={technology} variant="default">
              {technology}
            </Badge>
          ))}
        </div>
      ) : null}
    </Card>
  );
}