import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger";

export type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-hover",
  secondary:
    "bg-surface-secondary text-text-primary hover:bg-surface-tertiary",
  outline:
    "border border-border bg-transparent text-text-primary hover:border-primary hover:text-primary",
  ghost:
    "bg-transparent text-text-secondary hover:bg-surface-secondary hover:text-text-primary",
  danger:
    "bg-red-600 text-white hover:bg-red-700",
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-9 px-3 text-sm",
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-6 text-base",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  disabled,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled || loading}
      className={cn(
        "inline-flex items-center justify-center gap-2",
        "rounded-xl font-semibold",
        "transition-all duration-200",
        "focus-visible:outline-2 focus-visible:outline-offset-2",
        "focus-visible:outline-primary",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "hover:-translate-y-0.5",
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className,
      )}
      {...props}
    >
      {loading ? <span className="animate-spin">⟳</span> : null}

      {children}
    </button>
  );
}