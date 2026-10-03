import { telecomData } from "@/data/telecom";

import { TelecomTechnologyCard } from "./TelecomTechnologyCard";

import type { TelecomTechnology } from "@/types/telecom";

interface TelecomTechnologyGridProps {
  category?: TelecomTechnology["category"];
  featuredOnly?: boolean;
  limit?: number;
}

export async function TelecomTechnologyGrid({
  category,
  featuredOnly = false,
  limit,
}: TelecomTechnologyGridProps = {}) {
  let technologies = [...telecomData];

  if (category) {
    technologies = technologies.filter(
      (technology) =>
        technology.category === category,
    );
  }

  if (featuredOnly) {
    technologies = technologies.filter(
      (technology) => technology.featured,
    );
  }

  if (limit) {
    technologies = technologies.slice(0, limit);
  }

  return (
    <div
      className={[
        "grid gap-6",
        "sm:grid-cols-2",
        "xl:grid-cols-3",
      ].join(" ")}
    >
      {technologies.map((technology) => (
        <TelecomTechnologyCard
          key={technology.id}
          technology={technology}
        />
      ))}
    </div>
  );
}