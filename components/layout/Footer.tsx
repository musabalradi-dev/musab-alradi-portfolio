import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";

import { Container } from "@/components/ui/Container";
import { BackToTop } from "./BackToTop";

import { socialLinks } from "@/config/social";
import { siteConfig } from "@/config/site";

const WHATSAPP_NUMBER = "249126015549";
const WHATSAPP_DISPLAY = "+249 126 015 549";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const navigationItems = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "skills", href: "/skills" },
  { key: "experience", href: "/experience" },
  { key: "services", href: "/services" },
  { key: "projects", href: "/projects" },
  { key: "telecom", href: "/telecom" },
  { key: "certificates", href: "/certificates" },
  { key: "contact", href: "/contact" },
] as const;

const serviceItems = [
  {
    key: "softwareDevelopment",
    href: "/services#software-development",
  },
  {
    key: "webDevelopment",
    href: "/services#web-development",
  },
  {
    key: "networking",
    href: "/services#networking",
  },
  {
    key: "telecomInfrastructure",
    href: "/services#telecom-infrastructure",
  },
  {
    key: "technicalSupport",
    href: "/services#technical-support",
  },
] as const;

export async function Footer() {
  const t = await getTranslations("Footer");
  const nav = await getTranslations("Navigation");
  const servicesT = await getTranslations("Services");

  return (
    <footer className="border-t border-border bg-surface-secondary">
      {/* Main Footer */}
      <Container>
        <div className="grid gap-7 py-7 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_1fr_1fr] lg:gap-9">
          {/* Brand */}
          <div>
            <Link
              href="/"
              aria-label={siteConfig.name}
              className="group inline-flex items-center gap-2.5"
            >
              <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-background shadow-sm transition-transform duration-200 group-hover:scale-105">
                <Image
                  src="/logo/logo-m.png"
                  alt={`${siteConfig.name} logo`}
                  width={40}
                  height={40}
                  className="h-full w-full object-contain p-1"
                />
              </div>

              <div>
                <span className="block text-base font-bold leading-tight text-text-primary">
                  {siteConfig.name}
                </span>

                <span className="mt-0.5 block text-[11px] text-text-secondary">
                  IT &amp; Telecom Engineer
                </span>
              </div>
            </Link>

            <p className="mt-3 max-w-sm text-xs leading-5 text-text-secondary">
              {t("description")}
            </p>

            {/* Social Links */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.id}
                    href={social.href}
                    target={
                      social.external ? "_blank" : undefined
                    }
                    rel={
                      social.external
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={social.label}
                    title={social.label}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-surface text-text-secondary transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-white"
                  >
                    <Icon
                      size={15}
                      aria-hidden="true"
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-sm font-bold text-text-primary">
              {t("quickLinks")}
            </h2>

            <ul className="mt-3 space-y-1.5">
              {navigationItems.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-xs text-text-secondary transition-colors duration-200 hover:text-primary"
                  >
                    {nav(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-sm font-bold text-text-primary">
              {t("services")}
            </h2>

            <ul className="mt-3 space-y-1.5">
              {serviceItems.map((service) => (
                <li key={service.key}>
                  <Link
                    href={service.href}
                    className="text-xs text-text-secondary transition-colors duration-200 hover:text-primary"
                  >
                    {servicesT(
                      `items.${service.key}.title`,
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-sm font-bold text-text-primary">
              {t("contact")}
            </h2>

            <div className="mt-3 space-y-2.5">
              {/* Email */}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="group flex items-center gap-2.5 text-xs text-text-secondary transition-colors hover:text-primary"
              >
                <Mail
                  size={15}
                  className="shrink-0 transition-transform group-hover:scale-110"
                  aria-hidden="true"
                />

                <span className="break-all">
                  {siteConfig.contact.email}
                </span>
              </a>

              {/* WhatsApp */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`WhatsApp ${WHATSAPP_DISPLAY}`}
                title="WhatsApp"
                className="group flex items-center gap-2.5 text-xs text-text-secondary transition-colors hover:text-primary"
              >
                <FaWhatsapp
                  size={17}
                  className="shrink-0 transition-transform group-hover:scale-110"
                  aria-hidden="true"
                />

                <span dir="ltr">
                  {WHATSAPP_DISPLAY}
                </span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-2.5 text-xs text-text-secondary">
                <MapPin
                  size={15}
                  className="shrink-0"
                  aria-hidden="true"
                />

                <span>
                  {siteConfig.contact.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <Container>
          <div className="flex flex-col items-center justify-between gap-2.5 py-3 text-[11px] text-text-secondary sm:flex-row">
            <p className="text-center sm:text-start">
              © {new Date().getFullYear()}{" "}
              {siteConfig.fullName}. {t("rights")}
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="transition-colors hover:text-primary"
              >
                {nav("home")}
              </Link>

              <Link
                href="/contact"
                className="transition-colors hover:text-primary"
              >
                {nav("contact")}
              </Link>

              <BackToTop label={t("backToTop")} />
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}