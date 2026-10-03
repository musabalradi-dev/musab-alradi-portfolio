import { servicesData } from "@/data/services";

import { ServiceCard } from "./ServiceCard";

interface ServiceGridProps {
  limit?: number;
  featuredOnly?: boolean;
}

export async function ServiceGrid({
  limit,
  featuredOnly = false,
}: ServiceGridProps = {}) {
  let services = featuredOnly
    ? servicesData.filter(
        (service) => service.featured,
      )
    : servicesData;

  if (limit) {
    services = services.slice(0, limit);
  }

  return (
    <div
      className={[
        "grid gap-6",
        "sm:grid-cols-2",
        "xl:grid-cols-3",
      ].join(" ")}
    >
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
        />
      ))}
    </div>
  );
}