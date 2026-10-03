import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { TestimonialGrid } from "@/components/testimonials/TestimonialGrid";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { createMetadata } from "@/lib/seo";
import type { Locale } from "@/types/profile";

interface TestimonialsPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export async function generateMetadata({
  params,
}: TestimonialsPageProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "SEO.testimonials",
  });

  return createMetadata({
    locale,
    title: t("title"),
    description: t("description"),
    path: "/testimonials",
    keywords: [
      "Musab Alradi Testimonials",
      "Client Reviews",
      "IT Professional",
      "Telecom Engineer",
      "Software Developer",
      "Technical Support",
    ],
  });
}

export default async function TestimonialsPage() {
  const t = await getTranslations("Testimonials");

  return (
    <main>
      <section className="section-padding">
        <Container>
          <SectionTitle
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
            align="center"
          />

          <div className="mt-12">
            <TestimonialGrid />
          </div>
        </Container>
      </section>
    </main>
  );
}