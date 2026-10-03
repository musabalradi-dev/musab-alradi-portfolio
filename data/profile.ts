import type { Profile } from "@/types/profile";

export const profileData: Profile = {
  name: "Musab Alradi Mohammed",
  roleKey: "Hero.role",
  headlineKey: "Hero.headline",
  descriptionKey: "Hero.description",

  location: {
    en: "Sudan",
    ar: "السودان",
  },

  email: "musabalradi.info@gmail.com",

  phone: ["0914179169", "0126311038"],

  social: {
    linkedin: "https://www.linkedin.com/in/Eng.musabalradi",
    github: "https://github.com/Eng.musabalradi",
  },

  education: [
    {
      institutionKey: "Certificates.education.university",
      degreeKey: "Certificates.education.degree",
      fieldKey: "Certificates.education.field",
    },
  ],

  specializations: [
    "software-development",
    "networking",
    "telecommunications",
    "technical-support",
  ],
};
