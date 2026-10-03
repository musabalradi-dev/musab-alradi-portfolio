import { getTranslations } from "next-intl/server";

import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";

const highlights = [
  {
    key: "software",
    icon: "Code2" as const,
    number: "01",
  },
  {
    key: "networking",
    icon: "Network" as const,
    number: "02",
  },
  {
    key: "telecom",
    icon: "RadioTower" as const,
    number: "03",
  },
  {
    key: "support",
    icon: "Headset" as const,
    number: "04",
  },
];

export async function AboutHighlights() {
  const t = await getTranslations("About");

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {highlights.map((item) => (
        <Card
          key={item.key}
          className="
            group relative h-full overflow-hidden
            border border-border/70
            bg-surface/80 backdrop-blur-sm
            transition-all duration-500
            hover:-translate-y-2
            hover:border-primary/30
            hover:shadow-xl
            hover:shadow-primary/5
          "
        >
          {/* Decorative background */}
          <div
            className="
              pointer-events-none
              absolute -right-12 -top-12
              h-28 w-28 rounded-full
              bg-primary/5
              transition-transform duration-700
              group-hover:scale-[2.2]
            "
          />

          <div className="relative flex h-full flex-col">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div
                className="
                  flex h-14 w-14 items-center justify-center
                  rounded-2xl
                  bg-primary/10 text-primary
                  transition-all duration-500
                  group-hover:scale-110
                  group-hover:rotate-3
                  group-hover:bg-primary
                  group-hover:text-white
                "
              >
                <Icon
                  name={item.icon}
                  size={27}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </div>

              <span
                className="
                  text-xs font-bold tracking-widest
                  text-text-secondary/50
                  transition-colors duration-300
                  group-hover:text-primary
                "
              >
                {item.number}
              </span>
            </div>

            {/* Content */}
            <div className="mt-6">
              <h3 className="text-lg font-bold text-text-primary">
                {t(`highlights.${item.key}.title`)}
              </h3>

              <p className="mt-3 text-sm leading-7 text-text-secondary">
                {t(`highlights.${item.key}.description`)}
              </p>
            </div>

            {/* Bottom accent */}
            <div className="mt-auto pt-6">
              <div
                className="
                  h-px w-10
                  bg-primary/40
                  transition-all duration-500
                  group-hover:w-full
                "
              />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}