import {
  CalendarDays,
  ExternalLink,
  GitBranch,
} from "lucide-react";

import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

import { ProjectGallery } from "./ProjectGallery";

import type { Project } from "@/types/project";

interface ProjectDetailsProps {
  project: Project;
}

export async function ProjectDetails({
  project,
}: ProjectDetailsProps) {
  const t = await getTranslations("Projects");

  /*
   * titleKey examples:
   *
   * items.ecommerceMobile.title
   * items.debtExpense.title
   * items.travel-tourism-website.title
   *
   * We extract the project translation key from titleKey
   * instead of relying on project.slug.
   */
  const projectTranslationKey =
    project.titleKey.split(".")[1];

  const title = t(project.titleKey);

  const description = t(
    project.descriptionKey,
  );

  return (
    <article className="space-y-10">
      {/* =========================================
          HEADER
      ========================================== */}

      <header>
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="primary">
            {t(`categories.${project.category}`)}
          </Badge>

          <span className="inline-flex items-center gap-2 text-sm text-text-secondary">
            <CalendarDays
              size={16}
              aria-hidden="true"
            />

            {project.year}
          </span>
        </div>

        <h1 className="mt-5 text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl">
          {title}
        </h1>

        <p className="mt-5 max-w-4xl text-base leading-8 text-text-secondary">
          {description}
        </p>
      </header>

      {/* =========================================
          GALLERY
      ========================================== */}

      {project.images &&
        project.images.length > 0 && (
          <ProjectGallery
            images={project.images}
            title={title}
          />
        )}

      {/* =========================================
          OVERVIEW
      ========================================== */}

      <Card>
        <h2 className="text-2xl font-bold text-text-primary">
          {t("overview")}
        </h2>

        <p className="mt-5 leading-8 text-text-secondary">
          {description}
        </p>
      </Card>

      {/* =========================================
          TECHNOLOGIES
      ========================================== */}

      {project.technologies.length > 0 && (
        <Card>
          <h2 className="text-2xl font-bold text-text-primary">
            {t("technologies")}
          </h2>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map(
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
        </Card>
      )}

      {/* =========================================
          FEATURES
      ========================================== */}

      {project.features?.length ? (
        <Card>
          <h2 className="text-2xl font-bold text-text-primary">
            {t("features")}
          </h2>

          <ul className="mt-5 space-y-3">
            {project.features.map(
              (feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 leading-7 text-text-secondary"
                >
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />

                  <span>
                    {t(
                      `items.${projectTranslationKey}.features.${feature}`,
                    )}
                  </span>
                </li>
              ),
            )}
          </ul>
        </Card>
      ) : null}

      {/* =========================================
          CHALLENGES
      ========================================== */}

      {project.challenges?.length ? (
        <Card>
          <h2 className="text-2xl font-bold text-text-primary">
            {t("challenges")}
          </h2>

          <ul className="mt-5 space-y-3">
            {project.challenges.map(
              (challenge) => (
                <li
                  key={challenge}
                  className="flex items-start gap-3 leading-7 text-text-secondary"
                >
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />

                  <span>
                    {t(
                      `items.${projectTranslationKey}.challenges.${challenge}`,
                    )}
                  </span>
                </li>
              ),
            )}
          </ul>
        </Card>
      ) : null}

      {/* =========================================
          SOLUTIONS
      ========================================== */}

      {project.solutions?.length ? (
        <Card>
          <h2 className="text-2xl font-bold text-text-primary">
            {t("solutions")}
          </h2>

          <ul className="mt-5 space-y-3">
            {project.solutions.map(
              (solution) => (
                <li
                  key={solution}
                  className="flex items-start gap-3 leading-7 text-text-secondary"
                >
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />

                  <span>
                    {t(
                      `items.${projectTranslationKey}.solutions.${solution}`,
                    )}
                  </span>
                </li>
              ),
            )}
          </ul>
        </Card>
      ) : null}

      {/* =========================================
          PROJECT LINKS
      ========================================== */}

      {(project.liveUrl ||
        project.githubUrl) && (
        <Card>
          <h2 className="text-2xl font-bold text-text-primary">
            {t("links")}
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
              >
                <ExternalLink
                  size={18}
                  aria-hidden="true"
                />

                {t("liveDemo")}
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-border bg-surface-secondary px-5 py-3 text-sm font-semibold text-text-primary transition hover:border-primary hover:text-primary"
              >
                <GitBranch
                  size={18}
                  aria-hidden="true"
                />

                {t("sourceCode")}
              </a>
            )}
          </div>
        </Card>
      )}

      {/* =========================================
          BACK TO PROJECTS
      ========================================== */}

      <div>
        <Link
          href="/projects"
          className="inline-flex items-center text-sm font-semibold text-primary hover:underline"
        >
          ← {t("backToProjects")}
        </Link>
      </div>
    </article>
  );
}