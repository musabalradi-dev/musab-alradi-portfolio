import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { Container } from "@/components/ui/Container";
import { BackButton } from "@/components/ui/BackButton";

import { ProjectDetails } from "@/components/projects/ProjectDetails";
import { RelatedProjects } from "@/components/projects/RelatedProjects";

import {
  getProjectBySlug,
  projectsData,
} from "@/data/projects";

import { getRelatedProjects } from "@/lib/projects";
import { createProjectJsonLd } from "@/lib/seo";

import type { Locale } from "@/types/profile";


interface ProjectPageProps {
  params: Promise<{
    locale: Locale;
    slug: string;
  }>;
}


export async function generateStaticParams() {
  return projectsData.flatMap((project) =>
    ["ar", "en"].map((locale) => ({
      locale,
      slug: project.slug,
    })),
  );
}


export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {

  const { locale, slug } = await params;

  const project = getProjectBySlug(slug);


  if (!project) {
    return {};
  }


  const t = await getTranslations({
    locale,
    namespace: "Projects",
  });


  return {
    title: t(project.titleKey),

    description: t(
      project.descriptionKey,
    ),
  };
}



export default async function ProjectPage({
  params,
}: ProjectPageProps) {

  const { locale, slug } = await params;


  const project = getProjectBySlug(slug);


  if (!project) {
    notFound();
  }



  const t = await getTranslations({
    locale,
    namespace: "Projects",
  });



  const relatedProjects =
    getRelatedProjects(
      project.id,
      project.category,
      3,
    );



  const jsonLd = createProjectJsonLd({

    locale,

    name: t(
      project.titleKey,
    ),

    description: t(
      project.descriptionKey,
    ),

    path: `/projects/${project.slug}`,

    image: project.image,

    keywords: project.technologies,

    // dateCreated: project.date,

  });



  return (

    <main>

      <section className="py-12 sm:py-16 lg:py-20">

        <Container>


          <BackButton
            label={t("backToProjects")}
          />


          <div className="mt-8">

            <ProjectDetails
              project={project}
            />

          </div>



          <RelatedProjects
            projects={relatedProjects}
          />



          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html:
                JSON.stringify(jsonLd),
            }}
          />

        </Container>

      </section>

    </main>

  );
}