export type FieldWorkCategory =
  | "installation"
  | "maintenance"
  | "commissioning"
  | "survey"
  | "microwave"
  | "power"
  | "transmission";

export interface FieldWork {
  id: string;

  titleKey: string;
  descriptionKey: string;

  category: FieldWorkCategory;

  locationKey?: string;
  date?: string;

  image?: string;
  images?: string[];

  technologies?: string[];

  tasks?: string[];

  featured?: boolean;
}