import type { LucideIcon } from "lucide-react";

import {
  User,
  Code2,
  Briefcase,
  Layers3,
  FolderKanban,
  RadioTower,
  Award,
  HardHat,
  Mail,
} from "lucide-react";

export interface NavigationItem {
  key: string;

  href: string;

  icon: LucideIcon;

  external?: boolean;
}

export const navigationItems: NavigationItem[] = [
  {
    key: "home",
    href: "/",
    icon: Layers3,
  },

  {
    key: "about",
    href: "/about",
    icon: User,
  },

  {
    key: "skills",
    href: "/skills",
    icon: Code2,
  },

  {
    key: "experience",
    href: "/experience",
    icon: Briefcase,
  },

  {
    key: "services",
    href: "/services",
    icon: Layers3,
  },

  {
    key: "projects",
    href: "/projects",
    icon: FolderKanban,
  },

  {
    key: "telecom",
    href: "/telecom",
    icon: RadioTower,
  },

  {
    key: "certificates",
    href: "/certificates",
    icon: Award,
  },

  {
    key: "fieldWork",
    href: "/field-work",
    icon: HardHat,
  },

  {
    key: "contact",
    href: "/contact",
    icon: Mail,
  },
];
