import {
  ArrowLeft,
  ArrowRight,
  Mail,
} from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export async function ContactCTA() {
  const t = await getTranslations("Contact");
  const locale = await getLocale();

  const isArabic = locale === "ar";

  return (
    <section className="section-padding">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-primary/5 p-8 sm:p-12">
          <div className="hero-glow absolute inset-0 -z-10 opacity-50" />

          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white">
              <Mail
                size={26}
                aria-hidden="true"
              />
            </div>

            <h2 className="mt-6 text-3xl font-bold text-text-primary sm:text-4xl">
              {t("cta.title")}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-8 text-text-secondary">
              {t("cta.description")}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg">
                  {t("cta.button")}

                  {isArabic ? (
                    <ArrowLeft size={18} />
                  ) : (
                    <ArrowRight size={18} />
                  )}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}