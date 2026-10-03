import type { FieldWork } from "@/types/field-work";

export const fieldWorkData: FieldWork[] = [
  {
    id: "telecom-site-installation",

    titleKey:
      "items.siteInstallation.title",

    descriptionKey:
      "items.siteInstallation.description",

    category: "installation",

    locationKey:
      "items.siteInstallation.location",

    date: "2025",

    image:
      "/images/field-work/bts/1.jpg",

    images: [
      "/images/field-work/bts/2.jpg",
    ],

    technologies: [
      "BTS",
      "2G / GSM",
      "3G / UMTS",
      "4G / LTE",
      "Huawei",
    ],

    tasks: [
      "items.siteInstallation.tasks.equipment",
      "items.siteInstallation.tasks.cabling",
      "items.siteInstallation.tasks.power",
      "items.siteInstallation.tasks.testing",
    ],

    featured: true,
  },

  {
    id: "microwave-link",

    titleKey:
      "items.microwave.title",

    descriptionKey:
      "items.microwave.description",

    category: "microwave",

    locationKey:
      "items.microwave.location",

    date: "2024",

    image:
      "/images/field-work/microwave/1.jpg",

    images: [
      "/images/field-work/microwave/2.jpg",
    ],

    technologies: [
      "Microwave",
      "MW",
      "Transmission",
      "ODU",
      "IDU",
      "Antenna",
    ],

    tasks: [
      "items.microwave.tasks.installation",
      "items.microwave.tasks.alignment",
      "items.microwave.tasks.configuration",
      "items.microwave.tasks.testing",
    ],

    featured: true,
  },

  {
    id: "site-survey",

    titleKey:
      "items.siteSurvey.title",

    descriptionKey:
      "items.siteSurvey.description",

    category: "survey",

    locationKey:
      "items.siteSurvey.location",

    date: "2024",

    image:
      "/images/field-work/site-survey/1.jpg",

    images: [
      "/images/field-work/site-survey/2.jpg",
    ],

    technologies: [
      "Site Survey",
      "RF",
      "GPS",
      "BTS",
      "MW",
    ],

    tasks: [
      "items.siteSurvey.tasks.location",
      "items.siteSurvey.tasks.measurements",
      "items.siteSurvey.tasks.rf",
      "items.siteSurvey.tasks.report",
    ],
  },

  {
    id: "telecom-power",

    titleKey:
      "items.telecomPower.title",

    descriptionKey:
      "items.telecomPower.description",

    category: "power",

    locationKey:
      "items.telecomPower.location",

    date: "2023",

    image:
      "/images/field-work/power/1.jpg",

    images: [
      "/images/field-work/power/2.jpg",
    ],

    technologies: [
      "Rectifier",
      "Battery",
      "DC Power",
      "AC Power",
      "Solar Power",
      "Huawei",
    ],

    tasks: [
      "items.telecomPower.tasks.installation",
      "items.telecomPower.tasks.testing",
      "items.telecomPower.tasks.maintenance",
      "items.telecomPower.tasks.troubleshooting",
    ],
  },
];