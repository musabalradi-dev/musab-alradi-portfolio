import type { Skill } from "@/types/skill";

export const skillsData: Skill[] = [
  // Software Development
  {
    id: "flutter",
    name: "Flutter",
    category: "software",
    icon: "Code2",
    level: 90,
    technologies: [
      "Dart",
      "BLoC",
      "GetX",
      "Dio",
      "REST API",
    ],
    featured: true,
  },

  {
    id: "nextjs",
    name: "Next.js",
    category: "software",
    icon: "Globe",
    level: 85,
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "SEO",
    ],
    featured: true,
  },

  {
    id: "javascript",
    name: "JavaScript",
    category: "software",
    icon: "Code2",
    level: 85,
    technologies: [
      "ES6+",
      "DOM",
      "REST API",
      "Async Programming",
    ],
    featured: true,
  },

  {
    id: "typescript",
    name: "TypeScript",
    category: "software",
    icon: "Code2",
    level: 80,
    technologies: [
      "Type Safety",
      "Generics",
      "Interfaces",
      "React",
    ],
    featured: true,
  },

  {
    id: "python",
    name: "Python",
    category: "software",
    icon: "Code2",
    level: 75,
    technologies: [
      "FastAPI",
      "REST API",
      "Automation",
      "Backend",
    ],
    featured: false,
  },

  {
    id: "html-css",
    name: "HTML & CSS",
    category: "software",
    icon: "Globe",
    level: 90,
    technologies: [
      "HTML5",
      "CSS3",
      "Responsive Design",
      "Tailwind CSS",
    ],
    featured: false,
  },

  // Networking
  {
    id: "networking",
    name: "Networking",
    category: "networking",
    icon: "Network",
    level: 85,
    technologies: [
      "TCP/IP",
      "Routing",
      "Switching",
      "LAN",
      "WAN",
    ],
    featured: true,
  },

  {
    id: "mikrotik",
    name: "MikroTik",
    category: "networking",
    icon: "Network",
    level: 80,
    technologies: [
      "RouterOS",
      "Routing",
      "Firewall",
      "Wireless",
      "VLAN",
    ],
    featured: true,
  },

  {
    id: "wireless",
    name: "Wireless Networks",
    category: "networking",
    icon: "Wifi",
    level: 80,
    technologies: [
      "Wi-Fi",
      "Point-to-Point",
      "Point-to-Multipoint",
      "Wireless Links",
    ],
    featured: false,
  },

  // Telecom
  {
    id: "gsm",
    name: "2G / GSM",
    category: "telecom",
    icon: "SignalHigh",
    level: 85,
    technologies: [
      "GSM",
      "BTS",
      "BSC",
      "RF",
    ],
    featured: true,
  },

  {
    id: "umts",
    name: "3G / UMTS",
    category: "telecom",
    icon: "SignalHigh",
    level: 80,
    technologies: [
      "UMTS",
      "NodeB",
      "RNC",
      "3G",
    ],
    featured: true,
  },

  {
    id: "lte",
    name: "4G / LTE",
    category: "telecom",
    icon: "SignalHigh",
    level: 80,
    technologies: [
      "LTE",
      "eNodeB",
      "RF",
      "4G",
    ],
    featured: true,
  },

  {
    id: "microwave",
    name: "Microwave",
    category: "telecom",
    icon: "Radio",
    level: 85,
    technologies: [
      "MW Links",
      "Antenna",
      "Alignment",
      "RF",
    ],
    featured: true,
  },

  {
    id: "transmission",
    name: "Transmission",
    category: "telecom",
    icon: "RadioTower",
    level: 80,
    technologies: [
      "Transmission",
      "Microwave",
      "Links",
      "Backhaul",
    ],
    featured: true,
  },

  {
    id: "telecom-power",
    name: "Telecom Power",
    category: "telecom",
    icon: "Zap",
    level: 80,
    technologies: [
      "DC Power",
      "Rectifiers",
      "Batteries",
      "UPS",
    ],
    featured: false,
  },

  {
    id: "rf",
    name: "RF",
    category: "telecom",
    icon: "Antenna",
    level: 80,
    technologies: [
      "RF",
      "Antennas",
      "Signal",
      "Measurements",
    ],
    featured: false,
  },

  // Technical Support
  {
    id: "technical-support",
    name: "Technical Support",
    category: "technical-support",
    icon: "Headset",
    level: 90,
    technologies: [
      "Troubleshooting",
      "Maintenance",
      "Monitoring",
      "Field Support",
    ],
    featured: true,
  },

  {
    id: "field-engineering",
    name: "Field Engineering",
    category: "technical-support",
    icon: "HardHat",
    level: 90,
    technologies: [
      "Installation",
      "Maintenance",
      "Site Survey",
      "Commissioning",
    ],
    featured: true,
  },

  {
    id: "troubleshooting",
    name: "Troubleshooting",
    category: "technical-support",
    icon: "Wrench",
    level: 90,
    technologies: [
      "Hardware",
      "Software",
      "Network",
      "Telecom",
    ],
    featured: true,
  },

  // Tools
  {
    id: "git",
    name: "Git",
    category: "tools",
    icon: "GitBranch",
    level: 80,
    technologies: [
      "Git",
      "GitHub",
      "GitLab",
      "Version Control",
    ],
    featured: true,
  },

  {
    id: "database",
    name: "Databases",
    category: "tools",
    icon: "Database",
    level: 80,
    technologies: [
      "MySQL",
      "PostgreSQL",
      "SQL Server",
      "MongoDB",
      "Firebase",
    ],
    featured: true,
  },
];

export function getSkillById(
  id: string,
): Skill | undefined {
  return skillsData.find(
    (skill) => skill.id === id,
  );
}

export function getFeaturedSkills(): Skill[] {
  return skillsData.filter(
    (skill) => skill.featured,
  );
}

export function getSkillsByCategory(
  category: Skill["category"],
): Skill[] {
  return skillsData.filter(
    (skill) => skill.category === category,
  );
}