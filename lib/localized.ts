import type { Locale, LocalizedText } from "@/types/profile";

/**
 * Return localized content according to current locale.
 */
export function getLocalizedText(value: LocalizedText, locale: Locale): string {
  return value[locale];
}

/**
 * Check whether current locale is Arabic.
 */
export function isArabicLocale(locale: Locale): boolean {
  return locale === "ar";
}

/**
 * Get text direction.
 */
export function getDirection(locale: Locale): "rtl" | "ltr" {
  return locale === "ar" ? "rtl" : "ltr";
}

/**
 * Get locale label.
 */
export function getLocaleLabel(locale: Locale): string {
  return locale === "ar" ? "العربية" : "English";
}
