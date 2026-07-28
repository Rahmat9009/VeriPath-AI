"use client";

import { useLanguage } from "@/lib/hooks/use-language";
import { Send, FileSearch, ShieldCheck, FileCheck } from "lucide-react";

export function HowItWorks() {
  const { locale } = useLanguage();

  const copy = {
    tag: locale === "bn" ? "প্রক্রিয়া" : "Process",
    heading: locale === "bn" ? "এটি কীভাবে কাজ করে" : "How It Works",
    desc: locale === "bn"
      ? "যেকোনো নিয়োগের দাবি সম্পর্কে স্পষ্ট ধারণা পাওয়ার জন্য চারটি সহজ ধাপ।"
      : "Four steps to move from uncertainty to evidence-based clarity.",
    steps: [
      {
        num: "01",
        icon: Send,
        title: locale === "bn" ? "আপনার অবস্থা জানান বা ডকুমেন্ট আপলোড করুন" : "Share your situation or upload a document",
        desc: locale === "bn" 
          ? "নিয়োগের প্রস্তাব বর্ণনা করুন বা সরাসরি আপনার কাছে থাকা ডকুমেন্ট আপলোড করুন।"
          : "Provide details about your opportunity or upload a recruitment document for analysis.",
      },
      {
        num: "02",
        icon: FileSearch,
        title: locale === "bn" ? "প্রাসঙ্গিক দাবি শনাক্তকরণ" : "Identify claims and information",
        desc: locale === "bn" 
          ? "আমাদের সিস্টেম মূল তথ্য যেমন— বেতন, ফি এবং ভিসা গ্যারান্টি ইত্যাদি বের করে আনে।"
          : "Veripath extracts factual claims like salaries, fees, timelines, and guarantees.",
      },
      {
        num: "03",
        icon: ShieldCheck,
        title: locale === "bn" ? "সরকারি তথ্যের সাথে যাচাই" : "Compare with official sources",
        desc: locale === "bn" 
          ? "প্রতিটি দাবি সরকারি এবং আন্তর্জাতিক তথ্যের সাথে স্বয়ংক্রিয়ভাবে মিলিয়ে দেখা হয়।"
          : "Every extracted claim is checked against curated records from government ministries and labor laws.",
      },
      {
        num: "04",
        icon: FileCheck,
        title: locale === "bn" ? "প্রমাণ এবং পরবর্তী পদক্ষেপ দেখুন" : "Review evidence and next steps",
        desc: locale === "bn" 
          ? "কী মিলেছে এবং কী মিলেনি তা দেখুন এবং সঠিক পদক্ষেপ সম্পর্কে জানুন।"
          : "See exactly what matched, review the official sources, and understand the safest next actions.",
      },
    ]
  };

  return (
    <section 
      id="how-it-works"
      className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8 bg-white" 
      aria-labelledby="how-heading"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16 sm:mb-24">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--vp-emerald,#00b866)]">
            {copy.tag}
          </p>
          <h2
            id="how-heading"
            className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-[var(--vp-navy,#1a3460)] mb-6"
          >
            {copy.heading}
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {copy.desc}
          </p>
        </div>

        {/* Vertical Pathway */}
        <div className="relative">
          {/* Continuous vertical line representing the pathway */}
          <div className="absolute left-[39px] sm:left-1/2 top-4 bottom-4 w-1 sm:-ml-px bg-border/40 rounded-full" aria-hidden="true" />
          
          <div className="flex flex-col gap-12 sm:gap-20">
            {copy.steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={step.num} 
                  className={`relative flex items-start sm:items-center ${isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
                  style={{ animation: `vp-fade-up 0.5s ease-out ${0.1 + idx * 0.15}s both` }}
                >
                  
                  {/* Center Node */}
                  <div className="absolute left-0 sm:left-1/2 -ml-2 sm:-ml-6 flex size-20 sm:size-12 items-center justify-center bg-white">
                    <div className="flex size-12 sm:size-12 shrink-0 items-center justify-center rounded-full border-4 border-white bg-[var(--vp-emerald-tint,#e8fdf2)] shadow-sm z-10">
                      <step.icon className="size-5 text-[var(--vp-emerald,#00b866)]" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Content Box */}
                  <div className={`ml-20 sm:ml-0 w-full sm:w-1/2 ${isEven ? 'sm:pr-16 sm:text-right' : 'sm:pl-16 sm:text-left'}`}>
                    <div className="flex flex-col sm:inline-flex">
                      <span className="text-xs font-bold text-muted-foreground mb-2">STEP {step.num}</span>
                      <h3 className="text-xl font-bold text-[var(--vp-navy,#1a3460)] mb-3">{step.title}</h3>
                      <p className="text-base leading-relaxed text-muted-foreground">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}