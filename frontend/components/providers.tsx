"use client";

import { useState, useEffect, useCallback, useRef, type ReactNode } from "react";
import { LanguageContext } from "@/lib/hooks/use-language";
import { LargeTextContext } from "@/lib/hooks/use-large-text";
import { SimpleModeContext } from "@/lib/hooks/use-simple-mode";
import { t } from "@/lib/i18n";
import type { Locale, TranslationKey } from "@/lib/i18n/types";

const LANG_STORAGE_KEY = "veripath-locale";
const TEXT_STORAGE_KEY = "veripath-large-text";
const SIMPLE_MODE_STORAGE_KEY = "veripath-simple-mode";

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const saved = localStorage.getItem(LANG_STORAGE_KEY);
  return saved === "bn" ? "bn" : "en";
}

function getInitialLargeText(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(TEXT_STORAGE_KEY) === "true";
}

function getInitialSimpleMode(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(SIMPLE_MODE_STORAGE_KEY) === "true";
}

export function Providers({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);
  const [largeText, setLargeText] = useState<boolean>(getInitialLargeText);
  const [simpleMode, setSimpleMode] = useState<boolean>(getInitialSimpleMode);
  const mountedRef = useRef(false);

  // Apply DOM effects after mount
  useEffect(() => {
    mountedRef.current = true;

    // Sync document lang and font class
    document.documentElement.lang = locale;
    if (locale === "bn") {
      document.documentElement.classList.add("font-bn");
    } else {
      document.documentElement.classList.remove("font-bn");
    }
    localStorage.setItem(LANG_STORAGE_KEY, locale);
  }, [locale]);

  useEffect(() => {
    if (!mountedRef.current) return;
    document.documentElement.classList.toggle("large-text", largeText);
    localStorage.setItem(TEXT_STORAGE_KEY, String(largeText));
  }, [largeText]);

  useEffect(() => {
    if (!mountedRef.current) return;
    document.documentElement.classList.toggle("simple-mode", simpleMode);
    localStorage.setItem(SIMPLE_MODE_STORAGE_KEY, String(simpleMode));
  }, [simpleMode]);

  // Initial sync after hydration to prevent mismatch while restoring classes
  useEffect(() => {
    document.documentElement.classList.toggle("large-text", largeText);
    document.documentElement.classList.toggle("simple-mode", simpleMode);
  }, [largeText, simpleMode]);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
  }, []);

  const toggleLargeText = useCallback(() => {
    setLargeText((prev) => !prev);
  }, []);

  const toggleSimpleMode = useCallback(() => {
    setSimpleMode((prev) => !prev);
  }, []);

  const translate = useCallback(
    (key: TranslationKey) => t(locale, key),
    [locale]
  );

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: translate }}>
      <LargeTextContext.Provider value={{ largeText, toggleLargeText }}>
        <SimpleModeContext.Provider value={{ simpleMode, toggleSimpleMode }}>
          {children}
        </SimpleModeContext.Provider>
      </LargeTextContext.Provider>
    </LanguageContext.Provider>
  );
}
