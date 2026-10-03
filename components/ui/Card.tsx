import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface CardProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
}

export function Card({
  children,
  hover = false,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border",
        "bg-surface p-6",
        "shadow-sm",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}