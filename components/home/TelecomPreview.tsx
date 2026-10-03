import {
  Antenna,
  Radio,
  RadioTower,
  Wifi,
} from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Link } from "@/i18n/navigation";

const technologies = [
  {
    key: "gsm",
    icon: Radio,
  },
  {
    key: "lte",
    icon: RadioTower,
  },
  {
    key: "microwave",
    icon: Antenna,
  },
  {
    key: "wireless",
    icon: Wifi,
  },
];

export async function TelecomPreview() {
  const t = await getTranslations("Telecom");

  return (
    <section className="section-padding">
      <Container>
        <SectionTitle
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
          align="center"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map(
            ({ key, icon: Icon }) => (
              <div
                key={key}
                className="rounded-2xl border border-border bg-surface p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-telecom/10 text-telecom">
                  <Icon
                    size={27}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-5 font-bold text-text-primary">
                  {t(`technologies.${key}.title`)}
                </h3>

                <p className="mt-2 text-sm leading-7 text-text-secondary">
                  {t(
                    `technologies.${key}.description`,
                  )}
                </p>
              </div>
            ),
          )}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/telecom"
            className="font-semibold text-primary hover:text-primary-hover"
          >
            {t("viewAll")}
          </Link>
        </div>
      </Container>
    </section>
  );
}