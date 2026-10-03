import type { TelecomTechnology } from "@/types/telecom";

export const telecomData: TelecomTechnology[] = [
  {
    id: "gsm",
    nameKey: "items.gsm.name",
    shortName: "2G / GSM",
    descriptionKey: "items.gsm.description",
    category: "mobile-network",
    icon: "SignalHigh",
    technologies: [
      "GSM",
      "BTS",
      "BSC",
      "RF",
      "2G",
    ],
    features: [
      "items.gsm.features.bts",
      "items.gsm.features.rf",
      "items.gsm.features.configuration",
      "items.gsm.features.maintenance",
    ],
    applications: [
      "items.gsm.applications.voice",
      "items.gsm.applications.sms",
      "items.gsm.applications.data",
    ],
    featured: true,
  },

  {
    id: "umts",
    nameKey: "items.umts.name",
    shortName: "3G / UMTS",
    descriptionKey: "items.umts.description",
    category: "mobile-network",
    icon: "SignalHigh",
    technologies: [
      "UMTS",
      "NodeB",
      "RNC",
      "WCDMA",
      "3G",
    ],
    features: [
      "items.umts.features.nodeB",
      "items.umts.features.rnc",
      "items.umts.features.rf",
      "items.umts.features.maintenance",
    ],
    applications: [
      "items.umts.applications.voice",
      "items.umts.applications.data",
      "items.umts.applications.video",
    ],
    featured: true,
  },

  {
    id: "lte",
    nameKey: "items.lte.name",
    shortName: "4G / LTE",
    descriptionKey: "items.lte.description",
    category: "mobile-network",
    icon: "SignalHigh",
    technologies: [
      "LTE",
      "eNodeB",
      "EPC",
      "RF",
      "4G",
    ],
    features: [
      "items.lte.features.enodeb",
      "items.lte.features.rf",
      "items.lte.features.configuration",
      "items.lte.features.optimization",
    ],
    applications: [
      "items.lte.applications.mobileData",
      "items.lte.applications.broadband",
      "items.lte.applications.voice",
    ],
    featured: true,
  },

  {
    id: "microwave",
    nameKey: "items.microwave.name",
    shortName: "MW",
    descriptionKey: "items.microwave.description",
    category: "radio",
    icon: "Radio",
    technologies: [
      "Microwave",
      "MW Link",
      "RF",
      "Antenna",
      "Backhaul",
    ],
    features: [
      "items.microwave.features.installation",
      "items.microwave.features.alignment",
      "items.microwave.features.configuration",
      "items.microwave.features.troubleshooting",
    ],
    applications: [
      "items.microwave.applications.backhaul",
      "items.microwave.applications.siteConnectivity",
      "items.microwave.applications.transmission",
    ],
    featured: true,
  },

  {
    id: "rf",
    nameKey: "items.rf.name",
    shortName: "RF",
    descriptionKey: "items.rf.description",
    category: "radio",
    icon: "Antenna",
    technologies: [
      "RF",
      "Antenna",
      "Feeder",
      "Signal",
      "VSWR",
    ],
    features: [
      "items.rf.features.antenna",
      "items.rf.features.signal",
      "items.rf.features.measurements",
      "items.rf.features.troubleshooting",
    ],
    applications: [
      "items.rf.applications.mobileNetworks",
      "items.rf.applications.siteTesting",
      "items.rf.applications.optimization",
    ],
    featured: true,
  },

  {
    id: "transmission",
    nameKey: "items.transmission.name",
    shortName: "Transmission",
    descriptionKey: "items.transmission.description",
    category: "transmission",
    icon: "RadioTower",
    technologies: [
      "Transmission",
      "Backhaul",
      "Microwave",
      "IP",
      "Transport Network",
    ],
    features: [
      "items.transmission.features.backhaul",
      "items.transmission.features.linkManagement",
      "items.transmission.features.configuration",
      "items.transmission.features.troubleshooting",
    ],
    applications: [
      "items.transmission.applications.btsConnectivity",
      "items.transmission.applications.backbone",
      "items.transmission.applications.siteIntegration",
    ],
    featured: true,
  },

  {
    id: "telecom-power",
    nameKey: "items.telecomPower.name",
    shortName: "Power",
    descriptionKey: "items.telecomPower.description",
    category: "power",
    icon: "Zap",
    technologies: [
      "DC Power",
      "Rectifier",
      "Battery",
      "UPS",
      "Solar",
    ],
    features: [
      "items.telecomPower.features.dcSystems",
      "items.telecomPower.features.rectifiers",
      "items.telecomPower.features.batteries",
      "items.telecomPower.features.maintenance",
    ],
    applications: [
      "items.telecomPower.applications.btsSites",
      "items.telecomPower.applications.transmissionSites",
      "items.telecomPower.applications.remoteSites",
    ],
    featured: true,
  },

  {
    id: "fiber-ftth",
    nameKey: "items.fiberFtth.name",
    shortName: "FTTH / OLT",
    descriptionKey: "items.fiberFtth.description",
    category: "fiber",
    icon: "Network",
    technologies: [
      "FTTH",
      "OLT",
      "ONT",
      "GPON",
      "Fiber Optic",
    ],
    features: [
      "items.fiberFtth.features.olt",
      "items.fiberFtth.features.ont",
      "items.fiberFtth.features.gpon",
      "items.fiberFtth.features.fiber",
    ],
    applications: [
      "items.fiberFtth.applications.broadband",
      "items.fiberFtth.applications.fiberAccess",
      "items.fiberFtth.applications.enterprise",
    ],
    featured: true,
  },

  {
    id: "wireless",
    nameKey: "items.wireless.name",
    shortName: "Wireless",
    descriptionKey: "items.wireless.description",
    category: "wireless",
    icon: "Wifi",
    technologies: [
      "Wi-Fi",
      "Wireless",
      "Point-to-Point",
      "Point-to-Multipoint",
    ],
    features: [
      "items.wireless.features.configuration",
      "items.wireless.features.installation",
      "items.wireless.features.coverage",
      "items.wireless.features.troubleshooting",
    ],
    applications: [
      "items.wireless.applications.enterprise",
      "items.wireless.applications.siteConnectivity",
      "items.wireless.applications.internetAccess",
    ],
    featured: false,
  },
];

export function getTelecomTechnologyById(
  id: string,
): TelecomTechnology | undefined {
  return telecomData.find(
    (technology) => technology.id === id,
  );
}

export function getFeaturedTelecomTechnologies(): TelecomTechnology[] {
  return telecomData.filter(
    (technology) => technology.featured,
  );
}

export function getTelecomByCategory(
  category: TelecomTechnology["category"],
): TelecomTechnology[] {
  return telecomData.filter(
    (technology) => technology.category === category,
  );
}