import type { IconName } from "@/components/ui/Icon";

export type SkillCategory =
  | "software"
  | "networking"
  | "telecom"
  | "technical-support"
  | "tools";

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  icon?: IconName;
  level?: number;
  technologies?: string[];
  descriptionKey?: string;
  featured?: boolean;
}