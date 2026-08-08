import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { defaultLocale, translations } from "./locales";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eclipse-2026.thefrenchartist.dev"),
  title: translations[defaultLocale].meta.title,
  description: translations[defaultLocale].meta.description,
  icons: {
    icon: {
      url: "/eclipse_logo.webp",
      type: "image/webp",
    },
    shortcut: "/eclipse_logo.webp",
  },
  openGraph: {
    type: "website",
    title: translations[defaultLocale].meta.title,
    description: translations[defaultLocale].meta.description,
    images: [
      {
        url: "/og.png",
        width: 1734,
        height: 907,
        alt: translations[defaultLocale].meta.imageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: translations[defaultLocale].meta.title,
    description: translations[defaultLocale].meta.description,
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={defaultLocale}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
