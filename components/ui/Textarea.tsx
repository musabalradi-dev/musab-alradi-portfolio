import type { TextareaHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export function Textarea({
  label,
  error,
  id,
  className,
  ...props
}: TextareaProps) {
  const textareaId = id ?? props.name;

  return (
    <div className="w-full">
      {label ? (
        <label
          htmlFor={textareaId}
          className="mb-2 block text-sm font-semibold text-text-primary"
        >
          {label}
        </label>
      ) : null}

      <textarea
        id={textareaId}
        className={cn(
          "min-h-36 w-full resize-y rounded-xl border",
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