"use client";

import { ArrowRight, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/lib/hooks/use-language";
import { GetStartedDialog } from "./get-started-dialog";

export function FinalCta() {
  const { locale } = useLanguage();

  const copy = {
    tag: locale === "bn" ? "নিরাপদ থাকুন" : "Stay Protected",
    heading: locale === "bn" ? "টাকা দেওয়ার আগে যাচাই করুন।" : "Verify Before You Pay.",
    desc: locale === "bn"
      ? "টাকা বা ডকুমেন্ট দেওয়ার আগে কয়েক মিনিটের যাচাইকরণ আপনাকে সঠিক সিদ্ধান্ত নিতে সাহায্য করতে পারে।"
      : "A few minutes of checking can help you ask better questions before money or documents change hands.",
    primary: locale === "bn" ? "শুরু করুন" : "Get Started",
  };

  return (
    <section className="relative px-4 py-24 sm:px-6 sm:py-32 lg:px-8 bg-[var(--vp-navy,#0f172a)] overflow-hidden" aria-labelledby="cta-heading">
      
      {/* Immersive Lighting / Cinematic depth */}
      <div
        className="pointer-events-none absolute inset-0 select-none opacity-50 mix-blend-screen"
        aria-hidden="true"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 100%, var(--vp-emerald, #00b866) 0%, transparent 60%)
          `,
        }}
      />
      <div className="absolute inset-0 bg-[url('/media/grid.svg')] bg-center [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0))] opacity-5" />

      <div className="relative mx-auto max-w-3xl text-center z-10">
        <div className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[var(--vp-emerald-tint,#e8fdf2)] shadow-sm">
            <ShieldCheck className="size-3.5 text-[var(--vp-emerald,#00b866)]" aria-hidden="true" />
            {copy.tag}
          </span>
        </div>
        
        <h2
          id="cta-heading"
          className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6"
        >
          {copy.heading}
        </h2>
        
        <p className="mx-auto max-w-xl text-lg leading-relaxed text-slate-300 mb-10">
          {copy.desc}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <GetStartedDialog>
            <button
              className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-xl px-10 py-4 text-lg font-bold text-[#0c1322] transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--vp-emerald,#00b866)]/50"
              style={{
                backgroundColor: "var(--vp-emerald, #00b866)",
                boxShadow: "0 4px 20px rgba(0,184,102,0.4)",
              }}
            >
              {copy.primary}
              <ArrowRight className="size-5" aria-hidden="true" />
            </button>
          </GetStartedDialog>
        </div>
      </div>
    </section>
  );
}