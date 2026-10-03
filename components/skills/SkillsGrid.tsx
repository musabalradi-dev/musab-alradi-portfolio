import { skillsData } from "@/data/skills";

import { SkillGroup } from "./SkillGroup";

import type { Skill } from "@/types/skill";

interface SkillsGridProps {
  category?: Skill["category"];
  featuredOnly?: boolean;
  limit?: number;
}

export async function SkillsGrid({
  category,
  featuredOnly = false,
  limit,
}: SkillsGridProps = {}) {
  let skills = [...skillsData];

  if (category) {
    skills = skills.filter(
      (skill) => skill.category === category,
    );
  }

  if (featuredOnly) {
    skills = skills.filter(
      (skill) => skill.featured,
    );
  }

  if (limit) {
    skills = skills.slice(0, limit);
  }

  const categories: Skill["category"][] = [
    "software",
    "networking",
    "telecom",
    "technical-support",
    "tools",
  ];

  return (
    <div className="space-y-14">
      {categories.map((skillCategory) => {
        const categorySkills = skills.filter(
          (skill) =>
            skill.category === skillCategory,
        );

        return (
          <SkillGroup
            key={skillCategory}
            category={skillCategory}
            skills={categorySkills}
          />
        );
      })}
    </div>
  );
}