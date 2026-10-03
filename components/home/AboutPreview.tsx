import {
  ArrowLeft,
  ArrowRight,
  Code2,
  Headphones,
  Network,
  RadioTower,
} from "lucide-react";

import {
  getLocale,
  getTranslations,
} from "next-intl/server";

import { Link } from "@/i18n/navigation";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export async function AboutPreview() {
  const t = await getTranslations("About");
  const locale = await getLocale();

  const isArabic = locale === "ar";

  const highlights = [
    {
      key: "software",
      title: t("highlights.software.title"),
      description: t("highlights.software.description"),
      icon: Code2,
    },
    {
      key: "networking",
      title: t("highlights.networking.title"),
      description: t("highlights.networking.description"),
      icon: Network,
    },
    {
      key: "telecom",
      title: t("highlights.telecom.title"),
      description: t("highlights.telecom.description"),
      icon: RadioTower,
    },
    {
      key: "support",
      title: t("highlights.support.title"),
      description: t("highlights.support.description"),
      icon: Headphones,
    },
  ];

  return (
    <section className="section-padding">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            <SectionTitle
              eyebrow={t("eyebrow")}
              title={t("title")}
              description={t("description")}
            />

            <p className="mt-6 max-w-2xl text-base leading-8 text-text-secondary">
              {t("shortDescription")}
            </p>

            <div className="mt-8">
              <Link href="/about">
                <Button
                  variant="outline"
                  className="group inline-flex items-center gap-2"
                >
                  <span>{t("readMore")}</span>

                  {isArabic ? (
                    <ArrowLeft
                      size={18}
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:-translate-x-1"
                    />
                  ) : (
                    <ArrowRight
                      size={18}
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  )}
                </Button>
              </Link>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.key}
                  className="group rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
                >
                  {/* Icon */}
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon
                      size={21}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-semibold text-text-primary">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm leading-6 text-text-secondary">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}