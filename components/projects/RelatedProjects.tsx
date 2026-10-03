import { getTranslations } from "next-intl/server";

import { Card } from "@/components/ui/Card";
import { Link } from "@/i18n/navigation";

import type { Project } from "@/types/project";

interface RelatedProjectsProps {
  projects: Project[];
}

export async function RelatedProjects({
  projects,
}: RelatedProjectsProps) {
  const t = await getTranslations("Projects");

  // Prevent undefined/null data from breaking the component
  const validProjects = projects.filter(
    (project): project is Project =>
      Boolean(project?.id),
  );

  if (validProjects.length === 0) {
    return null;
  }

  return (
    <section className="mt-16">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-text-primary">
          {t("relatedProjects")}
        </h2>

        <p className="mt-2 text-text-secondary">
          {t("relatedDescription")}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {validProjects.map((project) => {
          const title = t(project.titleKey);
          const description = t(
            project.shortDescriptionKey,
          );

          return (
            <Card key={project.id}>
              <div className="flex h-full flex-col">
                <div>
                  <span className="text-sm font-medium text-primary">
                    {t(
                      `categories.${project.category}`,
                    )}
                  </span>

                  <h3 className="mt-3 text-xl font-bold text-text-primary">
                    {title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-text-secondary">
                    {description}
                  </p>
                </div>

                <div className="mt-6">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-primary hover:underline"
                  >
                    {t("viewDetails")} →
                  </Link>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}