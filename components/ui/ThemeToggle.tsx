"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const isMounted = resolvedTheme !== undefined;
  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    if (!isMounted) return;
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      disabled={!isMounted}
      suppressHydrationWarning
      className={cn(
        "inline-flex h-9 w-9 shrink-0",
        "items-center justify-center",
        "border-border rounded-lg border",
        "bg-surface text-text-secondary",
        "transition-all duration-200",
        "hover:border-primary hover:text-primary",
        "disabled:pointer-events-none",
        "disabled:opacity-70",
      )}
      aria-label={
        !isMounted
          ? "Theme"
          : isDark
            ? "Switch to light mode"
            : "Switch to dark mode"
      }
    >
      {!isMounted ? (
        <span className="h-[17px] w-[17px]" aria-hidden="true" />
      ) : isDark ? (
        <Sun size={17} strokeWidth={2} aria-hidden="true" />
      ) : (
        <Moon size={17} strokeWidth={2} aria-hidden="true" />
      )}
    </button>
  );
}
