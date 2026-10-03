export type Locale = "ar" | "en";

export interface LocalizedText {
  ar: string;
  en: string;
}

export interface SocialLinks {
  linkedin?: string;
  github?: string;
  facebook?: string;
  x?: string;
  whatsapp?: string;
}

export interface Education {
  institutionKey: string;
  degreeKey: string;
  fieldKey: string;
}

export type ProfileSpecialization =
  | "software-development"
  | "networking"
  | "telecommunications"
  | "technical-support";

export interface Profile {
  name: string;

  roleKey: string;
  headlineKey: string;
  descriptionKey: string;

  location: LocalizedText;

  email: string;

  phone: string[];

  social: SocialLinks;

  education: Education[];

  specializations: ProfileSpecialization[];
}
