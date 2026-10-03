import { Quote, Star } from "lucide-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { Card } from "@/components/ui/Card";
import type { Testimonial } from "@/types/testimonial";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export async function TestimonialCard({
  testimonial,
}: TestimonialCardProps) {
  const t = await getTranslations("Testimonials");

  const rating = testimonial.rating ?? 5;

  return (
    <Card
      hover
      className="group relative flex h-full flex-col overflow-hidden"
    >
      {/* Quote Icon */}
      <div className="absolute end-5 top-5">
        <div
          className={[
            "flex h-10 w-10 items-center justify-center",
            "rounded-xl bg-primary/10 text-primary",
            "transition-transform duration-300",
            "group-hover:scale-110",
          ].join(" ")}
        >
          <Quote
            size={20}
            strokeWidth={2}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Rating */}
      <div className="mb-5 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={17}
            strokeWidth={1.8}
            className={
              index < rating
                ? "fill-current text-yellow-500"
                : "text-border"
            }
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Testimonial */}
      <blockquote className="flex-1">
        <p className="text-sm leading-8 text-text-secondary sm:text-base">
          “{t(testimonial.contentKey)}”
        </p>
      </blockquote>

      {/* Client */}
      <div className="mt-7 flex items-center gap-4 border-t border-border pt-5">
        {testimonial.image ? (
          <Image
            src={testimonial.image}
            alt={t(testimonial.nameKey)}
            width={52}
            height={52}
            className="h-13 w-13 rounded-full object-cover ring-2 ring-border"
          />
        ) : (
          <div
            className={[
              "flex h-13 w-13 shrink-0 items-center justify-center",
              "rounded-full bg-primary/10",
              "text-lg font-bold text-primary",
            ].join(" ")}
          >
            {t(testimonial.nameKey).charAt(0)}
          </div>
        )}

        <div className="min-w-0">
          <h3 className="truncate font-bold text-text-primary">
            {t(testimonial.nameKey)}
          </h3>

          <p className="mt-1 text-xs text-text-secondary">
            {t(testimonial.roleKey)}
            {testimonial.companyKey
              ? ` • ${t(testimonial.companyKey)}`
              : ""}
          </p>
        </div>
      </div>
    </Card>
  );
}