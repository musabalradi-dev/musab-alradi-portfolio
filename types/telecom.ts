import type { IconName } from "@/components/ui/Icon";

export type TelecomCategory =
  | "mobile-network"
  | "radio"
  | "transmission"
  | "power"
  | "fiber"
  | "wireless";

export interface TelecomTechnology {
  id: string;
  nameKey: string;
  shortName?: string;
  descriptionKey: string;
  category: TelecomCategory;
  icon: IconName;
  technologies: string[];
  features?: string[];
  applications?: string[];
  featured?: boolean;
}