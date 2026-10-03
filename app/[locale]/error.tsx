"use client";

import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

import { BackButton } from "@/components/ui/BackButton";
import { usePathname } from "@/i18n/navigation";

interface ErrorPageProps {
  error: Error & {
    digest?: string;
  };

  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  const pathname = usePathname();

  const isArabic = pathname.startsWith("/ar");
  const locale = isArabic ? "ar" : "en";

  useEffect(() => {
    console.error("Application Error:", error);
  }, [error]);

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
          <AlertTriangle
            size={40}
            strokeWidth={1.7}
            className="text-danger"
            aria-hidden="true"
          />
        </div>

        {/* Error Code */}
        <p
          className="text-gradient font-mono text-6xl font-bold tracking-tight sm:text-7xl"
          aria-hidden="true"
        >
          ERROR
        </p>

        {/* Title */}
        <h1 className="text-text-primary mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
          {isArabic ? "حدث خطأ غير متوقع" : "Something went wrong"}
        </h1>

        {/* Description */}
        <p className="text-text-secondary mx-auto mt-4 max-w-lg text-base leading-8 sm:text-lg">
          {isArabic
            ? "حدث خطأ أثناء تحميل هذه الصفحة. يمكنك المحاولة مرة أخرى أو العودة إلى الصفحة الرئيسية."
            : "An unexpected error occurred while loading this page. You can try again or return to the homepage."}
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {/* Retry */}
          <button
            type="button"
            onClick={reset}
            className="bg-primary hover:bg-primary-hover focus-visible:outline-primary inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <RefreshCw size={19} aria-hidden="true" />

            <span>{isArabic ? "المحاولة مرة أخرى" : "Try Again"}</span>
          </button>

          {/* Home */}
          <Link
            href={`/${locale}`}
            className="border-border bg-surface text-text-primary hover:border-border-hover focus-visible:outline-primary inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border px-6 py-3 font-semibold shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <Home size={19} aria-hidden="true" />

            <span>{isArabic ? "العودة للرئيسية" : "Back to Home"}</span>
          </Link>

          {/* Back */}
          <BackButton label={isArabic ? "العودة" : "Go Back"} />
        </div>

        {/* Error Digest */}
        {error.digest && (
          <div className="mt-8">
            <p className="text-text-muted text-xs">
              {isArabic ? "معرّف الخطأ" : "Error ID"}
            </p>

            <code className="bg-surface-secondary text-text-secondary mt-1 inline-block rounded-lg px-3 py-1.5 font-mono text-xs">
              {error.digest}
            </code>
          </div>
        )}

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
