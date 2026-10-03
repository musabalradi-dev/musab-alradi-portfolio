import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { SocialLinks } from "@/components/contact/SocialLinks";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

import { createMetadata } from "@/lib/seo";
import type { Locale } from "@/types/profile";

interface ContactPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "SEO.contact",
  });

  return createMetadata({
    locale,
    title: t("title"),
    description: t("description"),
    path: "/contact",
    keywords: [
      "Musab Alradi Contact",
      "IT Consultant",
      "Software Developer",
      "Telecom Engineer",
      "Network Engineer",
      "Technical Support",
    ],
  });
}

export default async function ContactPage() {
  const t = await getTranslations("Contact");

  return (
    <main>
      {/* Hero */}
      <section className="section-padding">
        <Container>
          <SectionTitle
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
            align="center"
          />
        </Container>
      </section>

      {/* Contact Content */}
      <section className="section-padding pt-0">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Contact Information */}
            <div className="space-y-6">
              <ContactInfo />
              <SocialLinks />
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </Container>
      </section>
    </main>
  );
}