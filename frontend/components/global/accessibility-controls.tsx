"use client";

import { useState, useRef, useEffect } from "react";
import { useLargeText } from "@/lib/hooks/use-large-text";
import { useSimpleMode } from "@/lib/hooks/use-simple-mode";
import { useLanguage } from "@/lib/hooks/use-language";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Settings, Check } from "lucide-react";

interface AccessibilityControlsProps {
  variant?: "floating" | "inline";
}

export function AccessibilityControls({
  variant = "floating",
}: AccessibilityControlsProps) {
  const { largeText, toggleLargeText } = useLargeText();
  const { simpleMode, toggleSimpleMode } = useSimpleMode();
  const { locale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on click outside or escape key
  useEffect(() => {
    if (variant !== "floating" || !isOpen) return;

    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, variant]);

  // Labels based on current language
  const labels = {
    buttonLabel: locale === "bn" ? "অ্যাক্সেসিবিলিটি" : "Accessibility",
    title: locale === "bn" ? "অ্যাক্সেসিবিলিটি সেটিংস" : "Accessibility Settings",
    largeTextLabel: locale === "bn" ? "বড় লেখা মোড" : "Large Text Mode",
    largeTextDesc: locale === "bn" ? "সহজে পড়ার জন্য ফন্ট সাইজ বড় করুন।" : "Increase font sizes for easier reading.",
    simpleModeLabel: locale === "bn" ? "সহজ ইন্টারফেস" : "Simplified Interface",
    simpleModeDesc: locale === "bn" ? "অপ্রয়োজনীয় অ্যানিমেশন এবং ভিজ্যুয়াল এফেক্ট কমান।" : "Reduce animations and nonessential visual effects.",
    motionLabel: locale === "bn" ? "অ্যানিমেশন কমানো" : "Reduced Motion",
    motionDesc: locale === "bn" ? "সিস্টেম অনুযায়ী অ্যানিমেশন নিষ্ক্রিয় করা হয়েছে।" : "Synced with your device's preferences.",
    active: locale === "bn" ? "চালু" : "Active",
    inactive: locale === "bn" ? "বন্ধ" : "Inactive",
  };

  const renderContent = () => (
    <div className="flex flex-col gap-5 p-1">
      {/* Large Text Toggle */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-0.5">
          <Label htmlFor="large-text-switch" className="text-sm font-semibold cursor-pointer text-foreground">
            {labels.largeTextLabel}
          </Label>
          <p className="text-xs text-muted-foreground leading-normal max-w-[210px]">
            {labels.largeTextDesc}
          </p>
        </div>
        <div className="flex items-center pt-1">
          <Switch
            id="large-text-switch"
            checked={largeText}
            onCheckedChange={toggleLargeText}
            aria-label={labels.largeTextLabel}
          />
        </div>
      </div>

      <hr className="border-border/60" />

      {/* Simple Mode Toggle */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-0.5">
          <Label htmlFor="simple-mode-switch" className="text-sm font-semibold cursor-pointer text-foreground">
            {labels.simpleModeLabel}
          </Label>
          <p className="text-xs text-muted-foreground leading-normal max-w-[210px]">
            {labels.simpleModeDesc}
          </p>
        </div>
        <div className="flex items-center pt-1">
          <Switch
            id="simple-mode-switch"
            checked={simpleMode}
            onCheckedChange={toggleSimpleMode}
            aria-label={labels.simpleModeLabel}
          />
        </div>
      </div>

      <hr className="border-border/60" />

      {/* Reduced Motion Static Info (Syncs with system prefers-reduced-motion) */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-semibold text-foreground">
            {labels.motionLabel}
          </span>
          <p className="text-xs text-muted-foreground leading-normal max-w-[210px]">
            {labels.motionDesc}
          </p>
        </div>
        <div className="flex items-center gap-1 text-xs text-primary font-medium pt-1">
          <Check className="size-4 text-primary" />
          <span>{labels.active}</span>
        </div>
      </div>
    </div>
  );

  if (variant === "inline") {
    return (
      <div className="flex flex-col gap-2">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
          {labels.title}
        </h4>
        {renderContent()}
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative inline-block">
      <Button
        variant="ghost"
        size="icon-sm"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-label={labels.buttonLabel}
        title={labels.buttonLabel}
        className={`focus-visible:ring-2 focus-visible:ring-primary rounded-lg transition-colors ${
          isOpen ? "bg-muted text-primary" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <Settings className={`size-5 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} />
      </Button>

      {isOpen && (
        <div
          role="dialog"
          aria-label={labels.title}
          className="absolute right-0 mt-2 z-50 w-[310px] rounded-xl border border-border bg-popover p-5 shadow-xl animate-in fade-in-50 zoom-in-95 duration-150"
        >
          <div className="flex items-center gap-2 mb-4">
            <Settings className="size-4 text-primary" />
            <h3 className="text-sm font-bold text-foreground">
              {labels.title}
            </h3>
          </div>
          {renderContent()}
        </div>
      )}
    </div>
  );
}
