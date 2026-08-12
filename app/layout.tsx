import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  defaultLocale2027,
  translations2027,
} from "./locales/eclipse-2027";

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
  title: translations2027[defaultLocale2027].meta.title,
  description: translations2027[defaultLocale2027].meta.description,
  icons: {
    icon: {
      url: "/eclipse_logo-transparent.webp",
      type: "image/webp",
    },
    shortcut: "/eclipse_logo-transparent.webp",
  },
  openGraph: {
    type: "website",
    title: translations2027[defaultLocale2027].meta.title,
    description: translations2027[defaultLocale2027].meta.description,
    images: [
      {
        url: "/og.png",
        width: 1733,
        height: 908,
        alt: translations2027[defaultLocale2027].meta.imageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: translations2027[defaultLocale2027].meta.title,
    description: translations2027[defaultLocale2027].meta.description,
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={defaultLocale2027}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
