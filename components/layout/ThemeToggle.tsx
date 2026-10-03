"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setMounted(true);
    }, 0);

    return () => window.clearTimeout(timeout);
  }, []);

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      disabled={!mounted}
      suppressHydrationWarning
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-text-secondary transition-all duration-200 hover:border-primary hover:text-primary disabled:pointer-events-none disabled:opacity-70"
      aria-label={
        !mounted
          ? "Theme"
          : isDark
            ? "Switch to light mode"
            : "Switch to dark mode"
      }
      title={
        !mounted
          ? "Theme"
          : isDark
            ? "Switch to light mode"
            : "Switch to dark mode"
      }
    >
      {!mounted ? (
        <span
          className="h-[17px] w-[17px]"
          aria-hidden="true"
        />
      ) : isDark ? (
        <Sun
          size={17}
          strokeWidth={2}
          aria-hidden="true"
        />
      ) : (
        <Moon
          size={17}
          strokeWidth={2}
          aria-hidden="true"
        />
      )}
    </button>
  );
}