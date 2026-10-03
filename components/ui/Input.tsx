import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({
  label,
  error,
  id,
  className,
  ...props
}: InputProps) {
  const inputId = id ?? props.name;

  return (
    <div className="w-full">
      {label ? (
        <label
          htmlFor={inputId}
          className="mb-2 block text-sm font-semibold text-text-primary"
        >
          {label}
        </label>
      ) : null}

      <input
        id={inputId}
        className={cn(
          "min-h-12 w-full rounded-xl border",
          "border-border bg-surface px-4 py-3",
          "text-text-primary placeholder:text-text-muted",
          "outline-none transition-all",
          "focus:border-primary focus:ring-4 focus:ring-primary/10",
          error && "border-red-500 focus:border-red-500",
          className,
        )}
        {...props}
      />

      {error ? (
        <p className="mt-2 text-sm text-red-500">
          {error}
        </p>
      ) : null}
    </div>
  );
}