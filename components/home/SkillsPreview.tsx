import { getTranslations } from "next-intl/server";

import { SkillCard } from "@/components/skills/SkillCard";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { skillsData } from "@/data/skills";

export async function SkillsPreview() {
  const t = await getTranslations("Skills");

  const skills = skillsData.slice(0, 6);

  return (
    <section className="section-padding bg-surface-secondary">
      <Container>
        <SectionTitle
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
          align="center"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard
              key={skill.id}
              skill={skill}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}