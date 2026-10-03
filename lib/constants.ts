export const APP_CONFIG = {
  name: "Musab Alradi",

  fullName: "Musab Alradi Mohammed",

  defaultLocale: "en",

  locales: ["ar", "en"] as const,

  direction: {
    ar: "rtl",
    en: "ltr",
  },

  pagination: {
    projectsPerPage: 9,
    testimonialsPerPage: 6,
  },

  limits: {
    featuredProjects: 4,
    relatedProjects: 3,
    testimonials: 6,
  },

  images: {
    width: 1200,
    height: 630,
  },
} as const;
