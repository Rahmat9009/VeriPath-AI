"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/hooks/use-language";
import { Globe, Type, Volume2, ShieldAlert, Smartphone, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AccessibilitySection() {
  const { locale } = useLanguage();
  const [demoState, setDemoState] = useState<"standard" | "bengali" | "large" | "audio">("standard");

  const copy = {
    tag: locale === "bn" ? "অ্যাক্সেসিবিলিটি" : "Accessibility",
    heading: locale === "bn" ? "সবার জন্য তৈরি" : "Built for Everyone",
    desc: locale === "bn" 
      ? "আমরা বিশ্বাস করি যাচাইকরণ টুলগুলো ব্যবহার করা সহজ হওয়া উচিত। নিচে ডেমো ব্যবহার করে দেখুন।" 
      : "Verification tools only work if people can actually use them. Play with the demonstration below to see how Veripath adapts.",
  };

  const getDemoContent = () => {
    switch (demoState) {
      case "bengali":
        return (
          <div className="p-5 rounded-xl border border-[var(--color-risk-amber)] bg-[var(--color-risk-amber-bg)] font-bn transition-all duration-300">
            <div className="flex items-center gap-2 text-[var(--color-risk-amber)] mb-2">
              <ShieldAlert className="size-5" />
              <span className="font-bold">সতর্কতা প্রয়োজন</span>
            </div>
            <p className="text-sm text-[var(--vp-navy,#1a3460)] leading-relaxed">
              দাবিকৃত বেতন সরকারি তথ্যের চেয়ে অনেক বেশি। টাকা দেওয়ার আগে সতর্কতা অবলম্বন করুন।
            </p>
          </div>
        );
      case "large":
        return (
          <div className="p-6 rounded-xl border border-[var(--color-risk-amber)] bg-[var(--color-risk-amber-bg)] transition-all duration-300">
            <div className="flex items-center gap-3 text-[var(--color-risk-amber)] mb-3">
              <ShieldAlert className="size-6" />
              <span className="font-bold text-lg">Requires Caution</span>
            </div>
            <p className="text-lg text-[var(--vp-navy,#1a3460)] leading-relaxed">
              Claimed salary exceeds standard range. Verify before paying.
            </p>
          </div>
        );
      case "audio":
        return (
          <div className="p-5 rounded-xl border border-[var(--color-risk-amber)] bg-[var(--color-risk-amber-bg)] transition-all duration-300">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2 text-[var(--color-risk-amber)]">
                <ShieldAlert className="size-5" />
                <span className="font-bold">Requires Caution</span>
              </div>
              <Button size="icon-sm" variant="outline" className="rounded-full bg-white text-[var(--vp-navy,#1a3460)] hover:bg-muted shadow-sm">
                <Volume2 className="size-4" />
              </Button>
            </div>
            <p className="text-sm text-[var(--vp-navy,#1a3460)] leading-relaxed">
              Claimed salary exceeds standard range. Verify before paying.
            </p>
          </div>
        );
      case "standard":
      default:
        return (
          <div className="p-5 rounded-xl border border-[var(--color-risk-amber)] bg-[var(--color-risk-amber-bg)] transition-all duration-300">
            <div className="flex items-center gap-2 text-[var(--color-risk-amber)] mb-2">
              <ShieldAlert className="size-5" />
              <span className="font-bold text-sm">Requires Caution</span>
            </div>
            <p className="text-sm text-[var(--vp-navy,#1a3460)] leading-relaxed">
              Claimed salary exceeds standard range. Verify before paying.
            </p>
          </div>
        );
    }
  };

  const controls = [
    { id: "standard", icon: Smartphone, label: locale === "bn" ? "সাধারণ" : "Standard" },
    { id: "bengali", icon: Globe, label: locale === "bn" ? "বাংলা" : "Bengali" },
    { id: "large", icon: Type, label: locale === "bn" ? "বড় লেখা" : "Large Text" },
    { id: "audio", icon: Volume2, label: locale === "bn" ? "অডিও" : "Audio Ready" },
  ] as const;

  return (
    <section className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8 bg-white" aria-labelledby="a11y-heading">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--vp-emerald,#00b866)]">
              {copy.tag}
            </p>
            <h2
              id="a11y-heading"
              className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-[var(--vp-navy,#1a3460)] mb-6"
            >
              {copy.heading}
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              {copy.desc}
            </p>

            <ul className="space-y-4">
              {[
                locale === "bn" ? "সম্পূর্ণ বাংলা সমর্থন" : "Bilingual design by default",
                locale === "bn" ? "পড়তে কষ্ট হলে অডিও প্লেব্যাক" : "Audio warnings for low-literacy users",
                locale === "bn" ? "বড় লেখা এবং সহজ ইন্টারফেস মোড" : "Toggleable large-text & simple mode",
                locale === "bn" ? "মোবাইলের জন্য অপ্টিমাইজড" : "Optimized for the phones people actually use",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[var(--vp-emerald-tint,#e8fdf2)] text-[var(--vp-emerald,#00b866)]">
                    <Check className="size-3.5" />
                  </div>
                  <span className="text-[var(--vp-navy,#1a3460)] font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Demo Box */}
          <div className="relative rounded-2xl border border-border/50 bg-[var(--vp-surface-tint,#f6f4f0)] p-6 sm:p-10 shadow-[var(--vp-shadow-md)]">
            <div className="flex flex-wrap gap-2 mb-8">
              {controls.map((ctrl) => (
                <Button
                  key={ctrl.id}
                  onClick={() => setDemoState(ctrl.id)}
                  variant={demoState === ctrl.id ? "default" : "outline"}
                  className={`rounded-full ${demoState === ctrl.id ? "bg-[var(--vp-navy,#1a3460)] text-white" : "bg-white text-[var(--vp-navy,#1a3460)]"}`}
                  size="sm"
                >
                  <ctrl.icon className="mr-1.5 size-3.5" />
                  {ctrl.label}
                </Button>
              ))}
            </div>

            <div className="min-h-[160px] flex flex-col justify-center">
              {getDemoContent()}
            </div>
            
            <div className="absolute top-6 right-6 flex gap-1">
              <div className="size-2 rounded-full bg-border" />
              <div className="size-2 rounded-full bg-border" />
              <div className="size-2 rounded-full bg-border" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}