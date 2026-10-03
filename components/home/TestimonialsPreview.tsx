import { Quote } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { testimonialsData } from "@/data/testimonials";

export async function TestimonialsPreview() {
  const t = await getTranslations("Testimonials");

  const testimonials = testimonialsData.slice(0, 3);

  return (
    <section className="section-padding bg-surface-secondary">
      <Container>
        <SectionTitle
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(
            (testimonial) => (
              <Card
                key={testimonial.id}
                className="relative"
              >
                <Quote
                  size={32}
                  className="mb-5 text-primary/30"
                  aria-hidden="true"
                />

                <p className="leading-8 text-text-secondary">
                  {t(testimonial.contentKey)}
                </p>

                <div className="mt-6 border-t border-border pt-5">
                  <p className="font-bold text-text-primary">
                    {t(testimonial.nameKey)}
                  </p>

                  <p className="mt-1 text-sm text-text-muted">
                    {t(testimonial.roleKey)}
                  </p>
                </div>
              </Card>
            ),
          )}
        </div>
      </Container>
    </section>
  );
}