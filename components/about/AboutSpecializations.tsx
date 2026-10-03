import {
  Code2,
  Network,
  RadioTower,
  Wrench,
} from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

const specializations = [
  {
    key: "software",
    icon: Code2,
  },
  {
    key: "networking",
    icon: Network,
  },
  {
    key: "telecom",
    icon: RadioTower,
  },
  {
    key: "support",
    icon: Wrench,
  },
] as const;

export async function AboutSpecializations() {
  const t = await getTranslations("About");

  return (
    <section className="section-padding bg-surface-secondary">
      <Container>
        <SectionTitle
          eyebrow={t("expertiseEyebrow")}
          title={t("expertiseTitle")}
        />

        <div className="grid gap-6 md:grid-cols-2">
          {specializations.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.key}
                className="
                  group rounded-2xl
                  border border-border
                  bg-surface p-6
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-primary/40
                  hover:shadow-lg
                "
              >
                <div className="flex items-start gap-5">
                  <div
                    className="
                      flex h-14 w-14 shrink-0
                      items-center justify-center
                      rounded-2xl
                      bg-primary/10
                      text-primary
                      transition-colors
                      group-hover:bg-primary
                      group-hover:text-white
                    "
                  >
                    <Icon
                      size={26}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-text-primary">
                      {t(`highlights.${item.key}.title`)}
                    </h3>

                    <p className="mt-3 leading-8 text-text-secondary">
                      {t(`highlights.${item.key}.description`)}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}