import type { Locale, TranslationKey } from "./types";
import { en } from "./en";
import { bn } from "./bn";

const translations: Record<Locale, Record<TranslationKey, string>> = {
  en,
  bn,
};

export function t(locale: Locale, key: TranslationKey): string {
  return translations[locale]?.[key] ?? translations.en[key] ?? key;
}

export { type Locale, type TranslationKey, locales } from "./types";