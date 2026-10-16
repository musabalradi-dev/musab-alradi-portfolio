import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
name="google-site-verification" content="GAwDkxZPBTgPnPXUqUZGav8CJO-iqxOt4CtOpEhWV3A"
  title: "Musab Alradi",
  description:
    "Musab Alradi - IT & Telecom Engineer",

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

    shortcut: "/logo/favicon.ico",

    apple: [
      {
        url: "/logo/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}