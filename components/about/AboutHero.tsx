import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { Container } from "@/components/ui/Container";
import { profileData } from "@/data/profile";
import { siteConfig } from "@/config/site";

export async function AboutHero() {
  const t = await getTranslations("About");

  return (
    <section className="relative overflow-hidden bg-background py-14 sm:py-20 lg:py-24">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer Glow */}
              <div
                aria-hidden="true"
                className="absolute -inset-5 rounded-[2rem] bg-primary/10 blur-2xl"
              />

              {/* Decorative Border */}
              <div
                aria-hidden="true"
                className="absolute -inset-2 rounded-[2rem] border border-primary/10"
              />

              {/* Image Container */}
              <div className="group relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-2xl ring-1 ring-black/5 dark:ring-white/5">
                <Image
                  src={siteConfig.images.profile}
                  alt={profileData.name}
                  fill
                  priority
                  quality={90}
                  sizes="
                    (max-width: 640px) 90vw,
                    (max-width: 1024px) 420px,
                    480px
                  "
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/5"
                />

                {/* Bottom Accent */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-primary"
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-4 -right-3 rounded-2xl border border-border bg-background/95 px-5 py-3 shadow-xl backdrop-blur-md sm:-right-5">
                <div className="text-xl font-bold text-primary">
                  7+
                </div>

                <div className="text-xs font-medium text-text-secondary">
                  {t("stats.experience")}
                </div>
              </div>

              {/* Decorative Dot */}
              <div
                aria-hidden="true"
                className="absolute -left-3 top-8 h-5 w-5 rounded-full bg-primary shadow-lg shadow-primary/30 sm:-left-5"
              />
            </div>
          </div>

          {/* Content */}
          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              {t("eyebrow")}
            </span>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              {t("title")}
            </h1>

            <div className="mt-6 h-1 w-16 rounded-full bg-primary" />

            <p className="mt-6 text-lg leading-8 text-text-secondary">
              {t("description")}
            </p>

            <p className="mt-4 text-base leading-8 text-text-secondary">
              {t("descriptionSecondary")}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}