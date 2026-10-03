import { ProjectCard } from "./ProjectCard";

import type { Project } from "@/types/project";

interface ProjectGridProps {
  projects: Project[];
}

export async function ProjectGrid({
  projects,
}: ProjectGridProps) {
  if (!projects.length) {
    return (
      <div className="rounded-2xl border border-border bg-surface-secondary p-10 text-center">
        <p className="text-text-secondary">
          No projects found.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
}