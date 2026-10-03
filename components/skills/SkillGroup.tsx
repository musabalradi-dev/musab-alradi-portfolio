import { getTranslations } from "next-intl/server";

import { SkillCard } from "./SkillCard";

import type { Skill } from "@/types/skill";

interface SkillGroupProps {
  category: Skill["category"];
  skills: Skill[];
}

export async function SkillGroup({
  category,
  skills,
}: SkillGroupProps) {
  const t = await getTranslations("Skills");

  if (!skills.length) {
    return null;
  }

  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-text-primary">
          {t(`categories.${category}.title`)}
        </h2>

        <p className="mt-2 max-w-2xl text-sm leading-7 text-text-secondary">
          {t(`categories.${category}.description`)}
        </p>

        <div className="mt-3 h-1 w-12 rounded-full bg-primary" />
      </div>

      <div
        className={[
          "grid gap-5",
          "sm:grid-cols-2",
          "lg:grid-cols-3",
        ].join(" ")}
      >
        {skills.map((skill) => (
          <SkillCard
            key={skill.id}
            skill={skill}
          />
        ))}
      </div>
    </section>
  );
}