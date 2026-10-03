import { Home, SearchX } from "lucide-react";
import Link from "next/link";
import { getLocale } from "next-intl/server";

import { BackButton } from "@/components/ui/BackButton";

interface NotFoundProps {
  params?: Promise<{
    locale?: "ar" | "en";
  }>;
}

export default async function NotFound({ params }: NotFoundProps) {
  const resolvedParams = params ? await params : undefined;

  const locale =
    resolvedParams?.locale ?? (await getLocale()) ?? "en";

  const isArabic = locale === "ar";

  return (
    <main
      className="bg-background relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-16"
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="grid-pattern pointer-events-none absolute inset-0 opacity-60"
      />

      <div
        aria-hidden="true"
        className="hero-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      {/* Content */}
      <section className="relative z-10 w-full max-w-2xl text-center">
        {/* Icon */}
        <div className="border-border bg-surface mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border shadow-lg">
          <SearchX
            size={40}
            strokeWidth={1.6}
            className="text-primary"
            aria-hidden="true"
          />
        </div>

        {/* 404 */}
        <p
          className="text-gradient font-mono text-7xl font-bold tracking-tight sm:text-8xl"
          aria-label="404"
        >
          404
        </p>

        {/* Title */}
        <h1 className="text-text-primary mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
          {isArabic ? "الصفحة غير موجودة" : "Page Not Found"}
        </h1>

        {/* Description */}
        <p className="text-text-secondary mx-auto mt-4 max-w-lg text-base leading-8 sm:text-lg">
          {isArabic
            ? "عذرًا، الصفحة التي تبحث عنها غير موجودة أو ربما تم نقلها إلى عنوان آخر."
            : "Sorry, the page you are looking for does not exist or may have been moved to another address."}
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {/* Home */}
          <Link
            href={`/${locale}`}
            className="bg-primary hover:bg-primary-hover focus-visible:outline-primary inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <Home size={19} aria-hidden="true" />
            <span>
              {isArabic ? "العودة للرئيسية" : "Back to Home"}
            </span>
          </Link>

          {/* Back */}
          <BackButton
            label={isArabic ? "العودة للصفحة السابقة" : "Go Back"}
          />
        </div>

        {/* Brand */}
        <div className="border-border mt-12 border-t pt-6">
          <p className="text-text-muted text-sm">
            Musab Alradi — IT & Telecom Professional
          </p>
        </div>
      </section>
    </main>
  );
}