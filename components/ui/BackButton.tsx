"use client";

import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { useLocale } from "next-intl";

interface BackButtonProps {
  label?: string;
  className?: string;
}

export function BackButton({
  label,
  className = "",
}: BackButtonProps) {
  const locale = useLocale();
  const isArabic = locale === "ar";

  const defaultLabel = isArabic
    ? "العودة للصفحة السابقة"
    : "Go Back";

  const handleBack = () => {
    window.history.back();
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      aria-label={label ?? defaultLabel}
      className={[
        "inline-flex min-h-12 items-center justify-center gap-2",
        "rounded-xl border border-border",
        "bg-surface px-6 py-3",
        "font-semibold text-text-primary",
        "shadow-sm",
        "transition-all duration-200",
        "hover:-translate-y-0.5",
        "hover:border-border-hover",
        "hover:shadow-md",
        "focus-visible:outline-2",
        "focus-visible:outline-offset-2",
        "focus-visible:outline-primary",
        className,
      ].join(" ")}
    >
      {isArabic ? (
        <ArrowRight size={19} aria-hidden="true" />
      ) : (
        <ArrowLeft size={19} aria-hidden="true" />
      )}

      <span>{label ?? defaultLabel}</span>
    </button>
  );
}