import { getTranslations } from "next-intl/server";

import { ServiceCard } from "@/components/services/ServiceCard";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { servicesData } from "@/data/services";

export async function ServicesPreview() {
  const t = await getTranslations("Services");

  const services = servicesData.slice(0, 6);

  return (
    <section className="section-padding">
      <Container>
        <SectionTitle
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
          align="center"
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}