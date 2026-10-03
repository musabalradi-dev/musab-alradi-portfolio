import { getTranslations } from "next-intl/server";

import { ProjectCard } from "@/components/projects/ProjectCard";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

import { Link } from "@/i18n/navigation";
import { getFeaturedProjects } from "@/lib/projects";

export async function FeaturedProjects() {
  const t = await getTranslations("Projects");

  const projects = getFeaturedProjects().slice(0, 6);

  return (
    <section className="section-padding bg-surface-secondary">
      <Container>
        <SectionTitle
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="font-semibold text-primary transition-colors hover:text-primary-hover"
          >
            {t("viewAll")}
          </Link>
        </div>
      </Container>
    </section>
  );
}