export type ProjectCategory =
  | "software"
  | "web"
  | "mobile"
  | "desktop"
  | "telecom"
  | "networking";

export interface Project {
  id: string;
  slug: string;

  titleKey: string;
  shortDescriptionKey: string;
  descriptionKey: string;

  category: ProjectCategory;

  image: string;
  images?: string[];

  technologies: string[];

  features?: string[];
  challenges?: string[];
  solutions?: string[];

  githubUrl?: string;
  liveUrl?: string;

  year: number;
  featured?: boolean;
}