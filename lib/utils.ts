import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes safely.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Create an absolute URL from the site URL.
 */
export function absoluteUrl(path = ""): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  return new URL(path, baseUrl).toString();
}

/**
 * Create a URL-friendly slug.
 */
export function slugify(value: string): string {
  return value
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Truncate text.
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength).trim()}...`;
}

/**
 * Format a number using the selected locale.
 */
export function formatNumber(
  value: number,
  locale: "ar" | "en" = "en",
): string {
  return new Intl.NumberFormat(locale).format(value);
}

/**
 * Format a date.
 */
export function formatDate(
  value: string | Date,
  locale: "ar" | "en" = "en",
): string {
  return new Intl.DateTimeFormat(locale === "ar" ? "ar-SA" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(value));
}

/**
 * Delay execution.
 */
export function sleep(milliseconds: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
