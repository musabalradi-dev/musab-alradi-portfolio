import type { ComponentType } from "react";

import {
  Antenna,
  Award,
  Briefcase,
  Code2,
  Database,
  FolderKanban,
  GitBranch,
  Globe,
  HardHat,
  Headset,
  Layers3,
  Mail,
  Map,
  Monitor,
  Network,
  Radio,
  RadioTower,
  Server,
  SignalHigh,
  User,
  Wifi,
  Wrench,
  Zap,
} from "lucide-react";

import type { LucideProps } from "lucide-react";

export type IconName =
  | "Antenna"
  | "Award"
  | "Briefcase"
  | "Code2"
  | "Database"
  | "FolderKanban"
  | "GitBranch"
  | "Globe"
  | "HardHat"
  | "Headset"
  | "Layers3"
  | "Mail"
  | "Map"
  | "Monitor"
  | "Network"
  | "Radio"
  | "RadioTower"
  | "Server"
  | "SignalHigh"
  | "User"
  | "Wifi"
  | "Wrench"
  | "Zap";

const iconRegistry: Record<
  IconName,
  ComponentType<LucideProps>
> = {
  Antenna,
  Award,
  Briefcase,
  Code2,
  Database,
  FolderKanban,
  GitBranch,
  Globe,
  HardHat,
  Headset,
  Layers3,
  Mail,
  Map,
  Monitor,
  Network,
  Radio,
  RadioTower,
  Server,
  SignalHigh,
  User,
  Wifi,
  Wrench,
  Zap,
};

interface IconProps extends LucideProps {
  name: IconName;
}

export function Icon({
  name,
  size = 24,
  strokeWidth = 2,
  ...props
}: IconProps) {
  const IconComponent = iconRegistry[name];

  return (
    <IconComponent
      size={size}
      strokeWidth={strokeWidth}
      {...props}
    />
  );
}