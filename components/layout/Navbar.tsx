"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import {
  useLocale,
  useTranslations,
} from "next-intl";

import {
  Link,
  usePathname,
} from "@/i18n/navigation";

import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

const navItems = [
  {
    key: "home",
    href: "/",
  },
  {
    key: "about",
    href: "/about",
  },
  {
    key: "skills",
    href: "/skills",
  },
  {
    key: "experience",
    href: "/experience",
  },
  {
    key: "services",
    href: "/services",
  },
  {
    key: "projects",
    href: "/projects",
  },
  {
    key: "telecom",
    href: "/telecom",
  },
  {
    key: "certificates",
    href: "/certificates",
  },
  {
    key: "fieldWork",
    href: "/field-work",
  },
  {
    key: "testimonials",
    href: "/testimonials",
  },
  {
    key: "contact",
    href: "/contact",
  },
] as const;

export function Navbar() {
  const t = useTranslations("Navigation");
  const locale = useLocale();
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const isArabic = locale === "ar";
  const nextLocale = isArabic ? "en" : "ar";

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileOpen((previous) => !previous);
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return (
      pathname === href ||
      pathname.startsWith(`${href}/`)
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-3">

          {/* Logo */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="group flex shrink-0 items-center gap-2.5"
            aria-label="Musab Alradi"
          >
            <Image
              src="/logo/logo-m.png"
              alt="Musab Alradi logo"
              width={42}
              height={42}
              priority
              className="h-10 w-10 object-contain transition-transform duration-200 group-hover:scale-105"
            />

            <div className="hidden sm:block">
              <span className="block whitespace-nowrap text-sm font-bold leading-tight text-text-primary">
                Musab Alradi
              </span>

              <span className="block whitespace-nowrap text-xs text-text-secondary">
                IT & Telecom Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-0.5 xl:flex"
            aria-label="Main navigation"
          >
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.key}
                  href={item.href}
                  aria-current={
                    active ? "page" : undefined
                  }
                  className={cn(
                    "shrink-0 whitespace-nowrap rounded-lg px-2 py-2 text-sm font-medium transition-colors duration-200",
                    active
                      ? "bg-primary/10 text-primary"
                      : "text-text-secondary hover:bg-surface hover:text-primary",
                  )}
                >
                  {t(item.key)}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden shrink-0 items-center gap-1.5 xl:flex">
            <Link
              href={pathname}
              locale={nextLocale}
              className="inline-flex h-9 shrink-0 items-center justify-center rounded-lg border border-border bg-surface px-2.5 text-xs font-semibold text-text-secondary transition-colors hover:border-primary hover:text-primary"
              aria-label={
                isArabic
                  ? "Switch to English"
                  : "التبديل إلى العربية"
              }
            >
              {isArabic ? "EN" : "AR"}
            </Link>

            <ThemeToggle />
          </div>

          {/* Mobile Actions */}
          <div className="flex shrink-0 items-center gap-1.5 xl:hidden">
            <ThemeToggle />

            <button
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-text-secondary transition-colors hover:border-primary hover:text-primary"
              aria-label={
                mobileOpen
                  ? "Close menu"
                  : "Open menu"
              }
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              {mobileOpen ? (
                <X
                  size={19}
                  aria-hidden="true"
                />
              ) : (
                <Menu
                  size={19}
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-border py-3 xl:hidden"
          >
            <nav
              className="flex flex-col gap-1"
              aria-label="Mobile navigation"
            >
              {navItems.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={closeMobileMenu}
                    aria-current={
                      active ? "page" : undefined
                    }
                    className={cn(
                      "whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-medium transition-colors duration-200",
                      active
                        ? "bg-primary/10 text-primary"
                        : "text-text-secondary hover:bg-surface hover:text-primary",
                    )}
                  >
                    {t(item.key)}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Language */}
            <div className="mt-3 border-t border-border pt-3">
              <Link
                href={pathname}
                locale={nextLocale}
                onClick={closeMobileMenu}
                className="flex w-full items-center justify-center rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-semibold text-text-secondary transition-colors hover:border-primary hover:text-primary"
              >
                {isArabic
                  ? "English"
                  : "العربية"}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}