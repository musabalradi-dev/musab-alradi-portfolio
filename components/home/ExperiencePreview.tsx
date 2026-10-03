import { getTranslations } from "next-intl/server";

import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export async function ExperiencePreview() {
  const t = await getTranslations("Experience");

  return (
    <section className="section-padding bg-surface-secondary">
      <Container>
        <SectionTitle
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
          align="center"
        />

        <ExperienceTimeline />
      </Container>
    </section>
  );
}