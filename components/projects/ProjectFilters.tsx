"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import type { ProjectCategory } from "@/types/project";

interface ProjectFiltersProps {
  onChange?: (
    category: ProjectCategory | "all",
  ) => void;
}

const categories: Array<
  ProjectCategory | "all"
> = [
  "all",
  "software",
  "web",
  "mobile",
  "desktop",
  "telecom",
  "networking",
];

export function ProjectFilters({
  onChange,
}: ProjectFiltersProps) {
  const t = useTranslations("Projects");
  const [active, setActive] =
    useState<ProjectCategory | "all">("all");

  function handleChange(
    category: ProjectCategory | "all",
  ) {
    setActive(category);
    onChange?.(category);
  }

  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => {
        const isActive = active === category;

        const label =
          category === "all"
            ? "All"
            : t(`categories.${category}`);

        return (
          <button
            key={category}
            type="button"
            onClick={() =>
              handleChange(category)
            }
            className={[
              "rounded-xl border px-4 py-2",
              "text-sm font-semibold",
              "transition-all duration-200",
              isActive
                ? "border-primary bg-primary text-white"
                : [
                    "border-border",
                    "bg-surface-secondary",
                    "text-text-secondary",
                    "hover:border-primary",
                    "hover:text-primary",
                  ].join(" "),
            ].join(" ")}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}