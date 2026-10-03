"use client";

import { Languages } from "lucide-react";
import { useLocale } from "next-intl";

import { usePathname, useRouter } from "@/i18n/navigation";
import type { Locale } from "@/types/profile";

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const nextLocale: Locale =
    locale === "ar" ? "en" : "ar";

  const handleChange = () => {
    router.replace(pathname, {
      locale: nextLocale,
    });
  };

  return (
    <button
      type="button"
      onClick={handleChange}
      className="inline-flex h-10 items-center gap-2 rounded-xl border border-border bg-surface px-3 text-sm font-semibold text-text-primary transition hover:border-primary hover:text-primary"
      aria-label={
        locale === "ar"
          ? "Switch to English"
          : "التبديل إلى العربية"
      }
    >
      <Languages
        size={18}
        aria-hidden="true"
      />

      <span>
        {locale === "ar" ? "EN" : "العربية"}
      </span>
    </button>
  );
}