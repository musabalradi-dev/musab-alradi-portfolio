import { getTranslations } from "next-intl/server";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

const stats = [
  "experience",
  "projects",
  "technologies",
  "telecom",
  "domains",
] as const;

export async function Stats() {
  const t = await getTranslations("Stats");

  return (
    <section className="section-padding">
      <Container>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {stats.map((key) => (
            <Card
              key={key}
              className="
                group
                p-6
                text-center
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-primary/30
                hover:shadow-lg
              "
            >
              <div className="text-3xl font-bold text-primary sm:text-4xl">
                {t(`${key}.value`)}
              </div>

              <p className="mt-1 text-sm text-text-secondary">
                {t(`${key}.label`)}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}