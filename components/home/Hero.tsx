import Image from "next/image";

import {
  ArrowDown,
  ArrowRight,
  Download,
  Sparkles,
} from "lucide-react";

import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/config/site";

export async function Hero() {
  const t = await getTranslations("Hero");

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.03] blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-20">
          {/* Content */}
          <div className="order-2 max-w-3xl lg:order-1">
            {/* Greeting */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
              <Sparkles
                size={16}
                aria-hidden="true"
              />

              <span>{t("greeting")}</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-text-primary sm:text-5xl lg:text-6xl xl:text-7xl">
              {t("title")}
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-8 text-text-secondary sm:text-lg">
              {t("description")}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              {/* Contact */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md"
              >
                <span>{t("contactButton")}</span>

                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="rtl:rotate-180"
                />
              </Link>

              {/* Projects */}
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-6 py-3 text-sm font-semibold text-text-primary transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
              >
                {t("projectsButton")}
              </Link>

              {/* Download CV */}
              <a
                href={siteConfig.cv.url}
                download
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-text-secondary transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
              >
                <Download
                  size={18}
                  aria-hidden="true"
                />

                {t("cvButton")}
              </a>
            </div>

            {/* Stats */}
            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              <HeroStat
                value="7+"
                label={t("stats.experience")}
              />

              <HeroStat
                value="30+"
                label={t("stats.projects")}
              />

              <HeroStat
                value="10+"
                label={t("stats.technologies")}
              />

              <HeroStat
                value="2"
                label={t("stats.domains")}
              />
            </div>

            {/* Scroll Indicator */}
            <div className="mt-10 hidden items-center gap-2 text-sm text-text-secondary sm:flex">
              <ArrowDown
                size={16}
                aria-hidden="true"
                className="animate-bounce"
              />

              <span>{t("scroll")}</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative">
              {/* Outer Glow */}
              <div
                aria-hidden="true"
                className="absolute inset-0 scale-90 rounded-full bg-primary/20 blur-3xl"
              />

              {/* Decorative Rings */}
              <div
                aria-hidden="true"
                className="absolute -inset-5 rounded-full border border-primary/10"
              />

              <div
                aria-hidden="true"
                className="absolute -inset-10 rounded-full border border-primary/5"
              />

              {/* Image */}
              <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-background bg-surface shadow-2xl ring-1 ring-primary/20 sm:h-80 sm:w-80 lg:h-[420px] lg:w-[420px]">
                <Image
                  src={siteConfig.images.profile}
                  alt={siteConfig.fullName}
                  fill
                  priority
                  quality={90}
                  sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 420px"
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                />

                {/* Image Overlay */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10"
                />
              </div>

              {/* Available Badge */}
              <div className="absolute bottom-3 right-0 flex items-center gap-2 rounded-full border border-border bg-background/95 px-4 py-2.5 text-xs font-semibold text-text-primary shadow-xl backdrop-blur-md sm:bottom-6 sm:right-2">
                <span
                  aria-hidden="true"
                  className="relative flex h-2.5 w-2.5"
                >
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-50" />

                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                </span>

                {t("available")}
              </div>

              {/* Experience Badge */}
              <div className="absolute left-0 top-8 rounded-2xl border border-border bg-background/95 px-4 py-3 shadow-xl backdrop-blur-md sm:left-2">
                <div className="text-xl font-bold text-primary">
                  7+
                </div>

                <div className="text-[11px] font-medium text-text-secondary">
                  {t("stats.experience")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface HeroStatProps {
  value: string;
  label: string;
}

function HeroStat({
  value,
  label,
}: HeroStatProps) {
  return (
    <div className="group rounded-xl border border-border bg-surface/70 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md">
      <div className="text-xl font-bold text-primary">
        {value}
      </div>

      <div className="mt-1 text-xs leading-5 text-text-secondary">
        {label}
      </div>
    </div>
  );
}