"use client";

import { ShieldCheck, FileSearch, Globe, Lock } from "lucide-react";
import { useLanguage } from "@/lib/hooks/use-language";

export function TrustStrip() {
  const { locale } = useLanguage();

  const copy = {
    statement: locale === "bn"
      ? "আমরা শুধুমাত্র অফিসিয়াল ডেটার ওপর নির্ভর করি।"
      : "We rely on official evidence, not AI guesses.",
    subStatement: locale === "bn"
      ? "ভেরিপাথের প্রতিটি ফলাফল সরকারি সূত্র, শ্রম আইন এবং দূতাবাস নির্দেশিকা দ্বারা যাচাইকৃত।"
      : "Every Veripath finding is backed by curated government records, labour laws, and embassy directives. We don't generate opinions.",
    principles: [
      {
        icon: ShieldCheck,
        title: locale === "bn" ? "সরকারি সূত্র" : "Official Sources",
        desc: locale === "bn" ? "অফিসিয়াল ডেটার সাথে দাবির তুলনা।" : "Claims compared directly with curated institutional data.",
        color: "var(--vp-emerald, #00b866)",
        bg: "var(--vp-emerald-tint, #e8fdf2)",
      },
      {
        icon: FileSearch,
        title: locale === "bn" ? "ব্যাখ্যামূলক ফলাফল" : "Explainable Findings",
        desc: locale === "bn" ? "প্রতিটি সতর্কতার কারণ এবং উৎস দেওয়া থাকে।" : "Clear reasons and direct source links for every warning.",
        color: "var(--vp-official, #3730a3)",
        bg: "var(--vp-official-bg, #eef2ff)",
      },
      {
        icon: Globe,
        title: locale === "bn" ? "বাংলা সমর্থন" : "Bengali Accessible",
        desc: locale === "bn" ? "সহজ ভাষায় সম্পূর্ণ বাংলা ইন্টারফেস।" : "Full Bengali support using simple, non-technical language.",
        color: "var(--vp-emerald, #00b866)",
        bg: "var(--vp-emerald-tint, #e8fdf2)",
      },
      {
        icon: Lock,
        title: locale === "bn" ? "গোপনীয়তা সুরক্ষিত" : "Privacy-Conscious",
        desc: locale === "bn" ? "আপনার ডেটা অপ্রয়োজনে সংরক্ষণ করা হয় না।" : "Documents reviewed safely without unnecessary storage.",
        color: "var(--vp-official, #3730a3)",
        bg: "var(--vp-official-bg, #eef2ff)",
      },
    ]
  };

  return (
    <section
      className="relative border-b border-border/50 px-4 py-16 sm:px-6 lg:px-8 overflow-hidden"
      aria-label="Trust principles"
      style={{ backgroundColor: "var(--vp-surface-tint, #f6f4f0)" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
          
          {/* Editorial Statement */}
          <div className="lg:col-span-5 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--vp-navy,#1a3460)] mb-4 leading-tight">
              {copy.statement}
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              {copy.subStatement}
            </p>
            {/* Visual pathway indicator linking statement to principles */}
            <div className="hidden lg:flex items-center gap-4 text-xs font-semibold uppercase tracking-widest text-[var(--vp-emerald,#00b866)]">
              <span className="w-12 h-px bg-[var(--vp-emerald,#00b866)]/40" />
              {locale === "bn" ? "আমাদের মূলনীতি" : "Core Principles"}
            </div>
          </div>

          {/* Compact visual system of principles */}
          <div className="lg:col-span-7 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {copy.principles.map((item, idx) => (
                <div
                  key={item.title}
                  className="group flex flex-col p-6 rounded-2xl border border-border/40 bg-white shadow-sm hover:shadow-md transition-all duration-300"
                  style={{
                    animation: `vp-fade-up 0.5s cubic-bezier(0.16, 1, 0.32, 1) ${0.1 + idx * 0.08}s both`,
                  }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="flex size-10 shrink-0 items-center justify-center rounded-xl"
                      style={{ backgroundColor: item.bg, color: item.color }}
                    >
                      <item.icon className="size-5" aria-hidden="true" />
                    </div>
                    <h3 className="font-bold text-[var(--vp-navy,#1a3460)]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Decorative background grid */}
      <div 
        className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(var(--vp-navy,#1a3460) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
          maskImage: 'linear-gradient(to left, white, transparent)'
        }}
        aria-hidden="true"
      />
    </section>
  );
}