"use client";

import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";

import { ThemeProvider } from "./ThemeProvider";

interface ProvidersProps {
  children: ReactNode;
  messages: Record<string, unknown>;
}

export function Providers({
  children,
  messages,
}: ProvidersProps) {
  return (
    <NextIntlClientProvider messages={messages}>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}