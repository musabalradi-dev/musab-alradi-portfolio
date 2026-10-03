import {
  getProjectBySlug,
  getProjectsByCategory,
  projectsData,
} from "@/data/projects";

import type {
  Project,
  ProjectCategory,
} from "@/types/project";

export function findProject(
  slug: string,
): Project | undefined {
  return getProjectBySlug(slug);
}

export function getAllProjects(): Project[] {
  return projectsData;
}

/**
 * Get all project slugs
 * Used by sitemap and static generation
 */
export function getAllProjectSlugs(): string[] {
  return projectsData
    .filter((project) => project?.slug)
    .map((project) => project.slug);
}

export function getFeaturedProjects(): Project[] {
  return projectsData.filter(
    (project) => project.featured === true,
  );
}

export function getProjectsByCategoryName(
  category: ProjectCategory,
): Project[] {
  return getProjectsByCategory(category);
}

export function getRelatedProjects(
  currentProjectId: string,
  category: ProjectCategory,
  limit = 3,
): Project[] {
  if (!currentProjectId) {
    return [];
  }

  return projectsData
    .filter(
      (project) =>
        project &&
        project.id &&
        project.id !== currentProjectId &&
        project.category === category,
    )
    .slice(0, limit);
}