"use client";

import { ArrowUp } from "lucide-react";

interface BackToTopProps {
  label: string;
}

export function BackToTop({
  label,
}: BackToTopProps) {
  return (
    <button
      type="button"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      className="inline-flex items-center gap-2 transition-colors hover:text-primary"
      aria-label={label}
    >
      <ArrowUp
        size={16}
        aria-hidden="true"
      />

      <span>{label}</span>
    </button>
  );
}