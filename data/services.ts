import type { Service } from "@/types/service";

export const servicesData: Service[] = [
  {
    id: "software-development",
    titleKey: "items.softwareDevelopment.title",
    descriptionKey:
      "items.softwareDevelopment.description",
    category: "software",
    icon: "Code2",
    features: [
      "items.softwareDevelopment.features.mobileApps",
      "items.softwareDevelopment.features.webApps",
      "items.softwareDevelopment.features.apis",
      "items.softwareDevelopment.features.databaseSystems",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Python",
      "REST API",
    ],
    featured: true,
  },

  {
    id: "web-development",
    titleKey: "items.webDevelopment.title",
    descriptionKey:
      "items.webDevelopment.description",
    category: "software",
    icon: "Globe",
    features: [
      "items.webDevelopment.features.responsive",
      "items.webDevelopment.features.seo",
      "items.webDevelopment.features.performance",
      "items.webDevelopment.features.accessibility",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
    ],
    featured: true,
  },

  {
    id: "networking",
    titleKey: "items.networking.title",
    descriptionKey:
      "items.networking.description",
    category: "networking",
    icon: "Network",
    features: [
      "items.networking.features.networkDesign",
      "items.networking.features.configuration",
      "items.networking.features.troubleshooting",
      "items.networking.features.monitoring",
    ],
    technologies: [
      "MikroTik",
      "TCP/IP",
      "Routing",
      "Switching",
      "Wireless",
      "LAN/WAN",
    ],
    featured: true,
  },

  {
    id: "telecom-infrastructure",
    titleKey: "items.telecomInfrastructure.title",
    descriptionKey:
      "items.telecomInfrastructure.description",
    category: "telecom",
    icon: "RadioTower",
    features: [
      "items.telecomInfrastructure.features.bts",
      "items.telecomInfrastructure.features.microwave",
      "items.telecomInfrastructure.features.transmission",
      "items.telecomInfrastructure.features.rf",
    ],
    technologies: [
      "2G / GSM",
      "3G / UMTS",
      "4G / LTE",
      "BTS",
      "RF",
      "Microwave",
      "Transmission",
    ],
    featured: true,
  },

  {
    id: "telecom-power",
    titleKey: "items.telecomPower.title",
    descriptionKey:
      "items.telecomPower.description",
    category: "telecom",
    icon: "Zap",
    features: [
      "items.telecomPower.features.powerSystems",
      "items.telecomPower.features.dcSystems",
      "items.telecomPower.features.batteries",
      "items.telecomPower.features.troubleshooting",
    ],
    technologies: [
      "DC Power",
      "Rectifiers",
      "Batteries",
      "UPS",
      "Solar Power",
      "Telecom Power",
    ],
    featured: false,
  },

  {
    id: "technical-support",
    titleKey: "items.technicalSupport.title",
    descriptionKey:
      "items.technicalSupport.description",
    category: "technical-support",
    icon: "Headset",
    features: [
      "items.technicalSupport.features.troubleshooting",
      "items.technicalSupport.features.maintenance",
      "items.technicalSupport.features.fieldSupport",
      "items.technicalSupport.features.systemSupport",
    ],
    technologies: [
      "Technical Support",
      "Troubleshooting",
      "Maintenance",
      "Monitoring",
      "Field Support",
    ],
    featured: true,
  },

  {
    id: "microwave-links",
    titleKey: "items.microwaveLinks.title",
    descriptionKey:
      "items.microwaveLinks.description",
    category: "telecom",
    icon: "Radio",
    features: [
      "items.microwaveLinks.features.linkInstallation",
      "items.microwaveLinks.features.alignment",
      "items.microwaveLinks.features.configuration",
      "items.microwaveLinks.features.troubleshooting",
    ],
    technologies: [
      "Microwave",
      "MW Link",
      "Antenna",
      "RF",
      "Transmission",
    ],
    featured: false,
  },

  {
    id: "site-survey",
    titleKey: "items.siteSurvey.title",
    descriptionKey:
      "items.siteSurvey.description",
    category: "telecom",
    icon: "Map",
    features: [
      "items.siteSurvey.features.siteSurvey",
      "items.siteSurvey.features.siteAssessment",
      "items.siteSurvey.features.measurements",
      "items.siteSurvey.features.reporting",
    ],
    technologies: [
      "Site Survey",
      "RF",
      "Microwave",
      "GPS",
      "Technical Reports",
    ],
    featured: false,
  },
];

export function getServiceById(
  id: string,
): Service | undefined {
  return servicesData.find(
    (service) => service.id === id,
  );
}

export function getFeaturedServices(): Service[] {
  return servicesData.filter(
    (service) => service.featured,
  );
}

export function getServicesByCategory(
  category: Service["category"],
): Service[] {
  return servicesData.filter(
    (service) => service.category === category,
  );
}