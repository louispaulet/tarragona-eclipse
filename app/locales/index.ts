import { ca } from "./ca";
import { en } from "./en";
import { es } from "./es";
import { fr } from "./fr";
import type { Locale, LocaleConfig } from "./types";

export type { Locale, LocaleConfig } from "./types";

export const defaultLocale: Locale = "ca";

export const translations: Record<Locale, LocaleConfig> = {
  ca,
  es,
  fr,
  en,
};

export const languageOptions: Array<{
  code: Locale;
  shortLabel: string;
  name: string;
}> = [
  { code: "ca", shortLabel: "CA", name: "Català" },
  { code: "es", shortLabel: "ES", name: "Español" },
  { code: "fr", shortLabel: "FR", name: "Français" },
  { code: "en", shortLabel: "EN", name: "English" },
];

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "ca" || value === "es" || value === "fr" || value === "en";
}
