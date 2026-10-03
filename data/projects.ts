import type { Project } from "@/types/project";

export const projectsData: Project[] = [
  // =====================================================
  // 1. E-Commerce Mobile App
  // =====================================================
  {
    id: "ecommerceMobile",
    slug: "ecommerce-mobile-app",

    titleKey: "items.ecommerceMobile.title",
    shortDescriptionKey:
      "items.ecommerceMobile.shortDescription",
    descriptionKey:
      "items.ecommerceMobile.description",

    category: "mobile",

    image:
      "/images/projects/mobile-ecommerce/cover.png",

    images: [
      "/images/projects/mobile-ecommerce/1.png",
      "/images/projects/mobile-ecommerce/2.png",
      "/images/projects/mobile-ecommerce/3.png",
    ],

    technologies: [
      "Flutter",
      "Dart",
      "BLoC",
      "Dio",
      "REST API",
      "Firebase",
    ],

    features: [
      "authentication",
      "products",
      "cart",
      "orders",
      "notifications",
    ],

    challenges: [
      "performance",
      "stateManagement",
      "apiIntegration",
    ],

    solutions: [
      "blocArchitecture",
      "dioNetworking",
      "optimizedWidgets",
    ],

    year: 2026,
    featured: true,
  },

  // =====================================================
  // 2. Debt & Expense Management App
  // =====================================================
  {
    id: "debtExpense",
    slug: "debt-expense-management",

    titleKey: "items.debtExpense.title",
    shortDescriptionKey:
      "items.debtExpense.shortDescription",
    descriptionKey:
      "items.debtExpense.description",

    category: "mobile",

    image:
      "/images/projects/debt-expense/cover.jpg",

    images: [
      "/images/projects/debt-expense/1.png",
      "/images/projects/debt-expense/2.png",
      "/images/projects/debt-expense/3.png",
    ],

    technologies: [
      "Flutter",
      "Dart",
      "GetX",
      "Isar",
      "Clean Architecture",
    ],

    features: [
      "debtManagement",
      "expenseTracking",
      "payments",
      "reports",
      "offlineStorage",
    ],

    challenges: [
      "localDatabase",
      "dataConsistency",
      "offlineSupport",
    ],

    solutions: [
      "isarDatabase",
      "cleanArchitecture",
      "reactiveState",
    ],

    year: 2026,
    featured: true,
  },

  // =====================================================
  // 3. Travel & Tourism Website
  // =====================================================
  {
    id: "tourismWebsite",
    slug: "travel-tourism-website",

    titleKey:
      "items.travel-tourism-website.title",

    shortDescriptionKey:
      "items.travel-tourism-website.shortDescription",

    descriptionKey:
      "items.travel-tourism-website.description",

    category: "web",

    image:
      "/images/projects/tourism/cover.png",

    images: [
      "/images/projects/tourism/1.png",
      "/images/projects/tourism/2.png",
      "/images/projects/tourism/3.png",
    ],

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
      "PostgreSQL",
    ],

    features: [
      "destinations",
      "booking",
      "search",
      "responsive",
    ],

    challenges: [
      "performance",
      "search",
      "responsive",
    ],

    solutions: [
      "nextjs",
      "optimizedImages",
      "responsiveUI",
    ],

    year: 2025,
    featured: true,
  },

  // =====================================================
  // 4. News Website
  // =====================================================
  {
    id: "newsWebsite",
    slug: "news-website",

    titleKey:
      "items.newsWebsite.title",

    shortDescriptionKey:
      "items.newsWebsite.shortDescription",

    descriptionKey:
      "items.newsWebsite.description",

    category: "web",

    image:
      "/images/projects/news/cover.png",

    images: [
      "/images/projects/news/1.png",
      "/images/projects/news/2.png",
    ],

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "REST API",
    ],

    features: [
      "articles",
      "categories",
      "search",
      "admin",
    ],

    challenges: [
      "contentManagement",
      "performance",
      "search",
    ],

    solutions: [
      "nextjs",
      "apiArchitecture",
      "optimizedSearch",
    ],

    year: 2025,
    featured: false,
  },

  // =====================================================
  // 5. Warehouse Management System
  // =====================================================
  {
    id: "warehouse",
    slug: "warehouse-management-system",

    titleKey:
      "items.warehouse.title",

    shortDescriptionKey:
      "items.warehouse.shortDescription",

    descriptionKey:
      "items.warehouse.description",

    category: "desktop",

    image:
      "/images/projects/warehouse/cover.jpg",

    images: [
      "/images/projects/warehouse/1.png",
      "/images/projects/warehouse/2.png",
    ],

    technologies: [
      "C#",
      ".NET",
      "SQL Server",
      "REST API",
    ],

    features: [
      "inventory",
      "products",
      "suppliers",
      "reports",
    ],

    challenges: [
      "inventoryAccuracy",
      "dataManagement",
      "reporting",
    ],

    solutions: [
      "sqlServer",
      "structuredDatabase",
      "automatedReports",
    ],

    year: 2024,
    featured: false,
  },

  // =====================================================
  // 6. Restaurant Management System
  // =====================================================
  {
    id: "restaurant",
    slug: "restaurant-management-system",

    titleKey:
      "items.restaurant.title",

    shortDescriptionKey:
      "items.restaurant.shortDescription",

    descriptionKey:
      "items.restaurant.description",

    category: "desktop",

    image:
      "/images/projects/restaurant/cover.png",

    images: [
      "/images/projects/restaurant/1.png",
      "/images/projects/restaurant/2.png",
    ],

    technologies: [
      "C#",
      ".NET",
      "SQL Server",
    ],

    features: [
      "orders",
      "tables",
      "menu",
      "reports",
    ],

    challenges: [
      "orderManagement",
      "tableManagement",
      "dataAccuracy",
    ],

    solutions: [
      "databaseDesign",
      "orderWorkflow",
      "automatedReports",
    ],

    year: 2024,
    featured: false,
  },

  // =====================================================
  // 7. Telecom Field Engineering App
  // =====================================================
  {
    id: "telecomField",
    slug: "telecom-field-engineering-app",

    titleKey:
      "items.telecomField.title",

    shortDescriptionKey:
      "items.telecomField.shortDescription",

    descriptionKey:
      "items.telecomField.description",

    category: "telecom",

    image:
      "/images/projects/telecom-field/cover.jpg",

    images: [
      "/images/projects/telecom-field/1.jpeg",
      "/images/projects/telecom-field/2.jpeg",
      "/images/projects/telecom-field/3.jpeg",
    ],

    technologies: [
      "Flutter",
      "Dart",
      "BLoC",
      "Dio",
      "REST API",
      "GPS",
      "Huawei",
    ],

    features: [
      "siteManagement",
      "tasks",
      "equipment",
      "survey",
      "maintenance",
      "reports",
      "safety",
      "qualityControl",
      "microwave",
      "power",
    ],

    challenges: [
      "fieldConnectivity",
      "offlineOperations",
      "largeFieldData",
    ],

    solutions: [
      "offlineFirst",
      "localCaching",
      "syncEngine",
    ],

    year: 2026,
    featured: true,
  },
];

// =====================================================
// Project Helpers
// =====================================================

export function getProjectBySlug(
  slug: string,
): Project | undefined {
  return projectsData.find(
    (project) => project.slug === slug,
  );
}

export function getFeaturedProjects(): Project[] {
  return projectsData.filter(
    (project) => project.featured === true,
  );
}

export function getProjectsByCategory(
  category: Project["category"],
): Project[] {
  return projectsData.filter(
    (project) => project.category === category,
  );
}

export function getProjectCategories(): Project["category"][] {
  return [
    "software",
    "web",
    "mobile",
    "desktop",
    "telecom",
    "networking",
  ];
}