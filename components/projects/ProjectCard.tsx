import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export async function ProjectCard({
  project,
}: ProjectCardProps) {
  const t = await getTranslations("Projects");

  const title = t(project.titleKey);
  const description = t(
    project.shortDescriptionKey,
  );

  return (
    <Card className="group overflow-hidden p-0">
      <Link
        href={`/projects/${project.slug}`}
        className="block"
      >
        <div className="relative aspect-video overflow-hidden bg-surface-secondary">
          <Image
            src={project.image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="
              (max-width: 640px) 100vw,
              (max-width: 1024px) 50vw,
              33vw
            "
          />

          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
        </div>

        <div className="p-5">
          <div className="mb-3 flex items-center justify-between gap-3">
            <Badge variant="primary">
              {t(
                `categories.${project.category}`,
              )}
            </Badge>

            <span className="text-xs text-text-secondary">
              {project.year}
            </span>
          </div>

          <h3 className="text-xl font-bold text-text-primary transition-colors group-hover:text-primary">
            {title}
          </h3>

          <p className="mt-3 line-clamp-3 text-sm leading-7 text-text-secondary">
            {description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies
              .slice(0, 5)
              .map((technology) => (
                <Badge
                  key={technology}
                  variant="outline"
                >
                  {technology}
                </Badge>
              ))}
          </div>
        </div>
      </Link>
    </Card>
  );
}