import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export type BadgeVariant =
  | "default"
  | "primary"
  | "secondary"
  | "outline"
  | "success"
  | "warning"
  | "danger"
  | "telecom";

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variants: Record<BadgeVariant, string> = {
  default:
    "bg-surface-secondary text-text-primary",

  primary:
    "bg-primary/10 text-primary",

  secondary:
    "bg-surface-secondary text-text-secondary",

  outline:
    "border border-border bg-transparent text-text-secondary",

  success:
    "bg-green-500/10 text-green-600 dark:text-green-400",

  warning:
    "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",

  danger:
    "bg-red-500/10 text-red-600 dark:text-red-400",

  telecom:
    "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
};

export function Badge({
  variant = "default",
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center",
        "rounded-full px-3 py-1",
        "text-xs font-medium",
        "transition-colors",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}