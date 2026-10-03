import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Card } from "@/components/ui/Card";
import { siteConfig } from "@/config/site";

export async function ContactInfo() {
  const t = await getTranslations("Contact");

  return (
    <Card className="h-full">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-text-primary">
          {t("info.title")}
        </h3>

        <p className="mt-2 text-sm leading-7 text-text-secondary">
          {t("info.description")}
        </p>
      </div>

      <div className="space-y-5">
        {/* Email */}
        <a
          href={`mailto:${siteConfig.contact.email}`}
          className="group flex items-start gap-4"
        >
          <div
            className={[
              "flex h-11 w-11 shrink-0 items-center",
              "justify-center rounded-xl",
              "bg-primary/10 text-primary",
              "transition-colors",
              "group-hover:bg-primary group-hover:text-white",
            ].join(" ")}
          >
            <Mail size={20} aria-hidden="true" />
          </div>

          <div className="min-w-0">
            <span className="block text-sm font-semibold text-text-primary">
              {t("info.email")}
            </span>

            <span className="mt-1 block break-all text-sm text-text-secondary">
              {siteConfig.contact.email}
            </span>
          </div>
        </a>

        {/* Phone */}
        <a
          href={`tel:${siteConfig.contact.phone}`}
          className="group flex items-start gap-4"
        >
          <div
            className={[
              "flex h-11 w-11 shrink-0 items-center",
              "justify-center rounded-xl",
              "bg-primary/10 text-primary",
              "transition-colors",
              "group-hover:bg-primary group-hover:text-white",
            ].join(" ")}
          >
            <Phone size={20} aria-hidden="true" />
          </div>

          <div>
            <span className="block text-sm font-semibold text-text-primary">
              {t("info.phone")}
            </span>

            <span className="mt-1 block text-sm text-text-secondary">
              {siteConfig.contact.phone}
            </span>
          </div>
        </a>

        {/* Location */}
        <div className="flex items-start gap-4">
          <div
            className={[
              "flex h-11 w-11 shrink-0 items-center",
              "justify-center rounded-xl",
              "bg-primary/10 text-primary",
            ].join(" ")}
          >
            <MapPin size={20} aria-hidden="true" />
          </div>

          <div>
            <span className="block text-sm font-semibold text-text-primary">
              {t("info.location")}
            </span>

            <span className="mt-1 block text-sm text-text-secondary">
              {t("info.country")}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}