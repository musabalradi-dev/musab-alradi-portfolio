import type { Experience } from "@/types/experience";

export const experienceData: Experience[] = [
  {
    id: "donorsIct",
    type: "full-time",
    positionKey: "items.donorsIct.position",
    companyKey: "items.donorsIct.company",
    locationKey: "items.donorsIct.location",
    startDate: "2020-01",
    endDate: "2025-12",
    descriptionKey: "items.donorsIct.description",

    responsibilities: [
      "teamLeadership",
      "telecomInstallation",
      "maintenance",
      "troubleshooting",
      "fieldSupervision",
    ],

    technologies: [
      "Huawei",
      "BTS",
      "2G / GSM",
      "3G / UMTS",
      "4G / LTE",
      "Microwave",
      "RF",
      "Transmission",
    ],
  },

  {
    id: "telecomSupport",
    type: "full-time",
    positionKey: "items.telecomSupport.position",
    companyKey: "items.telecomSupport.company",
    locationKey: "items.telecomSupport.location",
    startDate: "2018-01",
    endDate: "2019-12",
    descriptionKey: "items.telecomSupport.description",

    responsibilities: [
      "installation",
      "maintenance",
      "operation",
      "troubleshooting",
    ],

    technologies: [
      "BTS",
      "Microwave",
      "RF",
      "Transmission",
      "Telecom Power",
    ],
  },
];