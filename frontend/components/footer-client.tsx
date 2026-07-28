"use client";

import { useLanguage } from "@/lib/hooks/use-language";
import { useLargeText } from "@/lib/hooks/use-large-text";
import { useSimpleMode } from "@/lib/hooks/use-simple-mode";
import { Button } from "@/components/ui/button";
import { Eye, Settings, Globe } from "lucide-react";

export function FooterClient() {
  const { locale, setLocale } = useLanguage();
  const { largeText, toggleLargeText } = useLargeText();
  const { simpleMode, toggleSimpleMode } = useSimpleMode();

  const toggleLanguage = () => {
    setLocale(locale === "en" ? "bn" : "en");
  };

  // Translations for buttons
  const langText = locale === "en" ? "বাংলা" : "English";
  const largeTextButtonLabel = locale === "bn" ? "লেখা বড় করুন" : "Toggle Large Text";
  const simpleModeButtonLabel = locale === "bn" ? "সহজ ইন্টারফেস" : "Simplified Interface";

  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <p className="text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Veripath AI. All rights reserved.
      </p>
      
      {/* Quick Access Accessibility & Language Buttons */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Language switcher */}
        <Button
          variant="outline"
          size="sm"
          onClick={toggleLanguage}
          aria-label={`Switch language to ${locale === "en" ? "Bengali" : "English"}`}
          className="text-xs font-semibold h-8 rounded-lg"
        >
          <Globe className="mr-1.5 size-3.5 text-muted-foreground" />
          {langText}
        </Button>

        {/* Large Text toggle */}
        <Button
          variant="outline"
          size="sm"
          onClick={toggleLargeText}
          aria-pressed={largeText}
          aria-label={largeTextButtonLabel}
          className={`text-xs font-semibold h-8 rounded-lg ${largeText ? "bg-primary/5 border-primary/30 text-primary" : ""}`}
        >
          <Eye className="mr-1.5 size-3.5" />
          {largeTextButtonLabel}
        </Button>

        {/* Simple Mode toggle */}
        <Button
          variant="outline"
          size="sm"
          onClick={toggleSimpleMode}
          aria-pressed={simpleMode}
          aria-label={simpleModeButtonLabel}
          className={`text-xs font-semibold h-8 rounded-lg ${simpleMode ? "bg-primary/5 border-primary/30 text-primary" : ""}`}
        >
          <Settings className="mr-1.5 size-3.5" />
          {simpleModeButtonLabel}
        </Button>
      </div>
    </div>
  );
}
