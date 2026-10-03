// export type ExperienceType =
//   "full-time" | "part-time" | "contract" | "freelance" | "project";

// export interface Experience {
//   id: string;

//   company: string;

//   roleKey: string;

//   descriptionKey: string;

//   periodKey: string;

//   typeKey: string;

//   location: {
//     ar: string;
//     en: string;
//   };

//   responsibilitiesKeys: string[];

//   technologies: string[];

//   current: boolean;
// }


export type ExperienceType =
  | "full-time"
  | "part-time"
  | "freelance"
  | "project";

export interface Experience {
  id: string;
  type: ExperienceType;
  positionKey: string;
  companyKey: string;
  locationKey?: string;
  startDate: string;
  endDate?: string;
  descriptionKey: string;
  responsibilities?: string[];
  technologies?: string[];
}