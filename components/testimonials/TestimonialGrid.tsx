import { getTranslations } from "next-intl/server";

import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import { testimonialsData } from "@/data/testimonials";

interface TestimonialGridProps {
  limit?: number;
  featuredOnly?: boolean;
}

export async function TestimonialGrid({
  limit,
  featuredOnly = false,
}: TestimonialGridProps) {
  const t = await getTranslations("Testimonials");

  const filteredTestimonials = featuredOnly
    ? testimonialsData.filter(
        (testimonial) => testimonial.featured,
      )
    : testimonialsData;

  const testimonials =
    typeof limit === "number"
      ? filteredTestimonials.slice(0, limit)
      : filteredTestimonials;

  if (testimonials.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border p-10 text-center">
        <p className="text-text-secondary">
          {t("empty")}
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {testimonials.map((testimonial) => (
        <TestimonialCard
          key={testimonial.id}
          testimonial={testimonial}
        />
      ))}
    </div>
  );
}