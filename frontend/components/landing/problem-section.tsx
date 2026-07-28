"use client";

import { useLanguage } from "@/lib/hooks/use-language";
import { MessageSquareWarning, BadgeDollarSign, Layers } from "lucide-react";

export function ProblemSection() {
  const { locale } = useLanguage();

  const copy = {
    tag: locale === "bn" ? "সমস্যা" : "The Challenge",
    heading: locale === "bn" 
      ? "তথ্যের এই ব্যবধান পরিবারগুলোর ক্ষতি করছে" 
      : "The information gap that costs families",
    desc: locale === "bn"
      ? "অভিবাসীদের সঠিক ও সৎ তথ্য পাওয়ার অধিকার রয়েছে। কিন্তু সরকারি তথ্য খুঁজে পাওয়া কঠিন, যেখানে বিভ্রান্তিকর নিয়োগের দাবিগুলো দ্রুত ছড়িয়ে পড়ে।"
      : "Migrants deserve clear, honest information. Instead, official data is hard to find while misleading recruitment claims spread freely.",
    steps: [
      {
        icon: Layers,
        title: locale === "bn" ? "জটিল তথ্য" : "Complex information",
        desc: locale === "bn" 
          ? "ভিসার নিয়ম এবং ফি বিভিন্ন সরকারি ওয়েবসাইটে ছড়িয়ে ছিটিয়ে থাকে যা বোঝা কঠিন।" 
          : "Requirements and fees are scattered across government websites in technical language.",
        marker: "01",
      },
      {
        icon: MessageSquareWarning,
        title: locale === "bn" ? "বিভ্রান্তিকর দাবি" : "Misleading claims",
        desc: locale === "bn" 
          ? "সোশ্যাল মিডিয়ার অফারগুলো প্রায়ই সরকারি শ্রম আইন এবং বাজার দরের সাথে মেলে না।" 
          : "Social media offers frequently contradict official labour laws and standard market rates.",
        marker: "02",
      },
      {
        icon: BadgeDollarSign,
        title: locale === "bn" ? "আর্থিক ঝুঁকি" : "Financial risk",
        desc: locale === "bn" 
          ? "দালালরা কৃত্রিম তাগিদ তৈরি করে অতিরিক্ত ফি দাবি করে, যা যাচাই করার সুযোগ দেয় না।" 
          : "Recruiters create artificial urgency to charge inflated fees before you can verify them.",
        marker: "03",
      },
    ]
  };

  return (
    <section
      id="problem"
      className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8 bg-white relative"
      aria-labelledby="problem-heading"
    >
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p
            className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--vp-emerald,#00b866)]"
            aria-hidden="true"
          >
            {copy.tag}
          </p>
          <h2
            id="problem-heading"
            className="text-3xl font-extrabold tracking-tight sm:text-5xl text-[var(--vp-navy,#1a3460)] mb-6"
          >
            {copy.heading}
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground">
            {copy.desc}
          </p>
        </div>

        {/* Connected Sequence / Pathway */}
        <div className="relative mt-16 max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div 
            className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 -translate-y-1/2 bg-gradient-to-r from-border via-[var(--vp-emerald,#00b866)] to-[var(--color-risk-red)] opacity-30" 
            aria-hidden="true" 
          />
          
          {/* Connecting Line (Mobile) */}
          <div 
            className="block md:hidden absolute top-0 left-8 w-0.5 h-full bg-gradient-to-b from-border via-[var(--vp-emerald,#00b866)] to-[var(--color-risk-red)] opacity-30" 
            aria-hidden="true" 
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {copy.steps.map((item, idx) => (
              <div
                key={item.marker}
                className="relative flex flex-row md:flex-col items-start md:items-center text-left md:text-center gap-6 md:gap-8"
                style={{
                  animation: `vp-fade-up 0.6s cubic-bezier(0.16, 1, 0.32, 1) ${0.2 + idx * 0.15}s both`,
                }}
              >
                {/* Node */}
                <div 
                  className="relative z-10 flex size-16 shrink-0 items-center justify-center rounded-full bg-white shadow-md border-2 border-white ring-4 ring-[var(--vp-surface-tint,#f6f4f0)]"
                  style={{
                    color: idx === 2 ? "var(--color-risk-red)" : "var(--vp-navy,#1a3460)",
                  }}
                >
                  <item.icon className="size-6" aria-hidden="true" />
                  
                  {/* Step marker badge */}
                  <span className="absolute -top-2 -right-2 flex size-6 items-center justify-center rounded-full bg-[var(--vp-navy,#1a3460)] text-[10px] font-bold text-white shadow-sm">
                    {item.marker}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-2 md:pt-0">
                  <h3 className="text-xl font-bold text-[var(--vp-navy,#1a3460)] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}