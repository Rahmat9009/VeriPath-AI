"use client";

import { useLanguage } from "@/lib/hooks/use-language";

export function SkipLink() {
  const { locale } = useLanguage();
  
  // Custom translated text for accessibility
  const skipText = locale === "bn" ? "মূল কন্টেন্টে যান" : "Skip to main content";

  return (
    <a
      href="#main-content"
      className="absolute left-4 top-4 z-[9999] -translate-y-24 bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-md transition-transform duration-200 focus:translate-y-0 focus:outline-2 focus:outline-offset-2 focus:outline-ring rounded-md"
    >
      {skipText}
    </a>
  );
}
