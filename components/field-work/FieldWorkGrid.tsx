import { getTranslations } from "next-intl/server";

import { FieldWorkCard } from "@/components/field-work/FieldWorkCard";
import { fieldWorkData } from "@/data/field-work";

export async function FieldWorkGrid() {
  const t = await getTranslations("FieldWork");

  if (!fieldWorkData.length) {
    return (
      <div className="rounded-2xl border border-border bg-surface p-10 text-center">
        <p className="text-text-secondary">
          {t("empty")}
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {fieldWorkData.map((work) => (
        <FieldWorkCard
          key={work.id}
          work={work}
        />
      ))}
    </div>
  );
}