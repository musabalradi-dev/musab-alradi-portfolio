import type { IconName } from "@/components/ui/Icon";

export type ServiceCategory =
  | "software"
  | "networking"
  | "telecom"
  | "technical-support";

export interface Service {
  id: string;
  titleKey: string;
  descriptionKey: string;
  category: ServiceCategory;
  icon: IconName;
  features?: string[];
  technologies?: string[];
  featured?: boolean;
}