import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionTitleProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "start" | "center";
  className?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "start",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-10 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <span className="mb-3 inline-flex text-sm font-semibold text-primary">
          {eyebrow}
        </span>
      ) : null}

      <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-4 text-base leading-8 text-text-secondary">
          {description}
        </p>
      ) : null}
    </div>
  );
}