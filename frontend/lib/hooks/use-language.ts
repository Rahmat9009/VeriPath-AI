"use client";

import { createContext, useContext } from "react";
import type { Locale, TranslationKey } from "@/lib/i18n/types";

export type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey) => string;
};

export const LanguageContext = createContext<LanguageContextType>({
  locale: "en",
  setLocale: () => {},
  t: (key: TranslationKey) => key,
});

export function useLanguage() {
  return useContext(LanguageContext);
}