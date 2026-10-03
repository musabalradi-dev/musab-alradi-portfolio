import {
  Database,
  RadioTower,
  Server,
  SignalHigh,
  Smartphone,
} from "lucide-react";

import { getTranslations } from "next-intl/server";

import { Card } from "@/components/ui/Card";

const layers = [
  {
    id: "user",
    icon: Smartphone,
    titleKey: "architecture.user.title",
    descriptionKey: "architecture.user.description",
  },
  {
    id: "radio",
    icon: SignalHigh,
    titleKey: "architecture.radio.title",
    descriptionKey: "architecture.radio.description",
  },
  {
    id: "transport",
    icon: RadioTower,
    titleKey: "architecture.transport.title",
    descriptionKey: "architecture.transport.description",
  },
  {
    id: "core",
    icon: Server,
    titleKey: "architecture.core.title",
    descriptionKey: "architecture.core.description",
  },
  {
    id: "services",
    icon: Database,
    titleKey: "architecture.services.title",
    descriptionKey: "architecture.services.description",
  },
];

export async function TelecomArchitecture() {
  const t = await getTranslations("Telecom");

  return (
    <div className="grid gap-4 md:grid-cols-5">
      {layers.map((layer, index) => {
        const LayerIcon = layer.icon;

        return (
          <div
            key={layer.id}
            className="relative"
          >
            <Card
              className={[
                "h-full text-center",
                "transition-all duration-300",
                "hover:-translate-y-1",
                "hover:border-telecom",
              ].join(" ")}
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-telecom/10 text-telecom">
                <LayerIcon
                  size={27}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </div>

              <h3 className="mt-5 font-bold text-text-primary">
                {t(layer.titleKey)}
              </h3>

              <p className="mt-2 text-sm leading-6 text-text-secondary">
                {t(layer.descriptionKey)}
              </p>
            </Card>

            {index < layers.length - 1 ? (
              <div className="absolute start-full top-1/2 hidden w-4 -translate-y-1/2 md:block">
                <div className="h-px w-full bg-border" />
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}