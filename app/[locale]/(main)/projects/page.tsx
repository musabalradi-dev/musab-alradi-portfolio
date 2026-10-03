import { getTranslations } from "next-intl/server";

import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

import { ProjectGrid } from "@/components/projects/ProjectGrid";

import { projectsData } from "@/data/projects";

import type { Locale } from "@/types/profile";

interface ProjectsPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export default async function ProjectsPage({
  params,
}: ProjectsPageProps) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "Projects",
  });

  return (
    <main>
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionTitle
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
          />

          <div className="mt-12">
            <ProjectGrid
              projects={projectsData}
            />
          </div>
        </Container>
      </section>
    </main>
  );
}