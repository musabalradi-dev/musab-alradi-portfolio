import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getMessages, setRequestLocale } from "next-intl/server";

import { NextIntlClientProvider } from "next-intl";

import { routing } from "@/config/routing";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { ThemeProvider } from "@/components/providers/ThemeProvider";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }));
}

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "ar" | "en")) {
    notFound();
  }

  const isArabic = locale === "ar";

  return {
    title: {
      default: isArabic
        ? "مصعب الرضي | مهندس تقنية المعلومات والاتصالات"
        : "Musab Alradi | IT & Telecom Engineer",

      template: isArabic ? "%s | مصعب الرضي" : "%s | Musab Alradi",
    },

    description: isArabic
      ? "الموقع الشخصي للمهندس مصعب الرضي، متخصص في تقنية المعلومات والبرمجة والشبكات والاتصالات."
      : "Personal portfolio of Musab Alradi, an IT and Telecom Engineer specialized in software development, networking, and telecom infrastructure.",

    authors: [
      {
        name: "Musab Alradi Mohammed",
      },
    ],

    creator: "Musab Alradi Mohammed",

    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    ),

    alternates: {
      canonical: `/${locale}`,

      languages: {
        en: "/en",
        ar: "/ar",
      },
    },

    icons: {
      icon: [
        {
          url: "/logo/favicon.ico",
          type: "image/x-icon",
        },
        {
          url: "/logo/favicon-16x16.png",
          sizes: "16x16",
          type: "image/png",
        },
        {
          url: "/logo/favicon-32x32.png",
          sizes: "32x32",
          type: "image/png",
        },
      ],

      apple: [
        {
          url: "/logo/apple-touch-icon.png",
          sizes: "180x180",
          type: "image/png",
        },
      ],

      shortcut: "/logo/favicon.ico",
    },

    manifest: "/manifest.webmanifest",

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "ar" | "en")) {
    notFound();
  }

  await setRequestLocale(locale);

  const messages = await getMessages();

  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <NextIntlClientProvider messages={messages}>
      <ThemeProvider>
        <div dir={direction} className="flex min-h-screen flex-col">
          <Header />

          <main className="flex-1">{children}</main>

          <Footer />
        </div>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
