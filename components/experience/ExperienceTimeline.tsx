import { getTranslations } from "next-intl/server";
import { CalendarDays, MapPin } from "lucide-react";

import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";

import { experienceData } from "@/data/experience";
import type { Experience } from "@/types/experience";

interface ExperienceTimelineProps {
  experiences?: Experience[];
}

export async function ExperienceTimeline({
  experiences = experienceData,
}: ExperienceTimelineProps) {
  const t = await getTranslations("Experience");

  return (
    <div className="relative">
      {/* Timeline line */}
      <div
        className={[
          "absolute start-5 top-0 hidden h-full",
          "w-px bg-border md:block",
        ].join(" ")}
        aria-hidden="true"
      />

      <div className="space-y-8">
        {experiences.map((experience) => {
          const responsibilities =
            experience.responsibilities ?? [];

          const technologies =
            experience.technologies ?? [];

          return (
            <article
              key={experience.id}
              className="relative md:ps-14"
            >
              {/* Timeline point */}
              <div
                className={[
                  "absolute start-0 top-6 hidden",
                  "h-10 w-10 items-center justify-center",
                  "rounded-full border-4 border-background",
                  "bg-primary text-white shadow-sm",
                  "md:flex",
                ].join(" ")}
              >
                <Icon
                  name="Briefcase"
                  size={18}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </div>

              <Card className="group">
                <div className="flex flex-col gap-6">
                  {/* Header */}
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="primary">
                        {t(
                          `types.${experience.type}`,
                        )}
                      </Badge>

                      {!experience.endDate && (
                        <Badge variant="success">
                          {t("current")}
                        </Badge>
                      )}
                    </div>

                    <h3
                      className={[
                        "mt-4 text-xl font-bold",
                        "text-text-primary",
                        "transition-colors",
                        "group-hover:text-primary",
                      ].join(" ")}
                    >
                      {t(experience.positionKey)}
                    </h3>

                    <p className="mt-2 text-base font-semibold text-primary">
                      {t(experience.companyKey)}
                    </p>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
                    <div className="inline-flex items-center gap-2">
                      <CalendarDays
                        size={17}
                        aria-hidden="true"
                      />

                      <span>
                        {experience.startDate}
                        {" — "}
                        {experience.endDate
                          ? experience.endDate
                          : t("present")}
                      </span>
                    </div>

                    {experience.locationKey && (
                      <div className="inline-flex items-center gap-2">
                        <MapPin
                          size={17}
                          aria-hidden="true"
                        />

                        <span>
                          {t(
                            experience.locationKey,
                          )}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="leading-8 text-text-secondary">
                    {t(experience.descriptionKey)}
                  </p>

                  {/* Responsibilities */}
                  {responsibilities.length > 0 && (
                    <div>
                      <h4 className="mb-4 text-sm font-bold text-text-primary">
                        {t("responsibilities")}
                      </h4>

                      <ul className="grid gap-3 sm:grid-cols-2">
                        {responsibilities.map(
                          (responsibilityKey) => (
                            <li
                              key={responsibilityKey}
                              className={[
                                "flex items-start gap-3",
                                "text-sm leading-7",
                                "text-text-secondary",
                              ].join(" ")}
                            >
                              <span
                                className={[
                                  "mt-2 h-1.5 w-1.5",
                                  "shrink-0 rounded-full",
                                  "bg-primary",
                                ].join(" ")}
                              />

                              <span>
                                {t(
                                  `items.${experience.id}.responsibilities.${responsibilityKey}`,
                                )}
                              </span>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  {technologies.length > 0 && (
                    <div>
                      <h4 className="mb-3 text-sm font-bold text-text-primary">
                        {t("technologies")}
                      </h4>

                      <div className="flex flex-wrap gap-2">
                        {technologies.map(
                          (technology) => (
                            <Badge
                              key={technology}
                              variant="outline"
                            >
                              {technology}
                            </Badge>
                          ),
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            </article>
          );
        })}
      </div>
    </div>
  );
}