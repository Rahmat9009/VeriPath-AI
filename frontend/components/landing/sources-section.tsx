"use client";

import { useLanguage } from "@/lib/hooks/use-language";
import { ExternalLink, Info, CheckCircle2, ShieldCheck, Link2 } from "lucide-react";

export function SourcesSection() {
  const { locale } = useLanguage();

  const copy = {
    tag: locale === "bn" ? "স্বচ্ছতা" : "Transparency",
    heading: locale === "bn" ? "তথ্য যা আপনি যাচাই করতে পারবেন" : "Information You Can Trace",
    desc: locale === "bn"
      ? "ভেরিপাথ দেখায় তথ্য কোথা থেকে এসেছে, কী তুলনা করা হয়েছে এবং শেষ কবে পর্যালোচনা করা হয়েছে।"
      : "Veripath shows where information came from, what was compared, and when it was last reviewed.",
    demoLabel: locale === "bn" ? "ডেমো ডেটা" : "Demonstration data",
  };

  return (
    <section className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8 bg-[var(--vp-surface-tint,#f6f4f0)] border-t border-border/50" aria-labelledby="sources-heading">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--vp-emerald,#00b866)]">
              {copy.tag}
            </p>
            <h2
              id="sources-heading"
              className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-[var(--vp-navy,#1a3460)] mb-6"
            >
              {copy.heading}
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              {copy.desc}
            </p>

            {/* List of included transparency elements */}
            <ul className="space-y-5">
              {[
                { label: locale === "bn" ? "মূল দাবির তুলনা" : "Claim compared", icon: CheckCircle2 },
                { label: locale === "bn" ? "অফিসিয়াল উৎস সংস্থা" : "Source organization", icon: ShieldCheck },
                { label: locale === "bn" ? "অফিসিয়াল ওয়েবসাইটের সরাসরি লিংক" : "Direct official link", icon: Link2 },
                { label: locale === "bn" ? "সর্বশেষ পর্যালোচনার তারিখ" : "Last-reviewed date", icon: Info },
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[var(--vp-official-bg,#eef2ff)] text-[var(--vp-official,#3730a3)]">
                    <item.icon className="size-3.5" />
                  </div>
                  <span className="text-[var(--vp-navy,#1a3460)] font-semibold">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Demo Box */}
          <div className="relative w-full rounded-2xl border border-border/60 bg-white p-6 sm:p-8 shadow-[var(--vp-shadow-md)]">
            
            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-muted/30 px-2.5 py-1 text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">
              <Info className="size-3" aria-hidden="true" />
              {copy.demoLabel}
            </div>

            <div className="rounded-xl border border-border/80 bg-[var(--vp-surface-tint,#f6f4f0)] p-5">
              <div className="mb-4">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wide">Claim Analyzed</span>
                <p className="text-sm font-semibold text-[var(--vp-navy,#1a3460)] mt-1">&quot;Employer covers all visa costs&quot;</p>
              </div>

              <div className="border-t border-border/60 pt-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2 text-[var(--vp-official,#3730a3)]">
                    <ShieldCheck className="size-4" />
                    <span className="text-xs font-bold uppercase tracking-wide">Official Information</span>
                  </div>
                  <a href="#" className="flex items-center gap-1 text-[10px] font-bold text-[var(--vp-official,#3730a3)] hover:underline" onClick={(e)=>e.preventDefault()}>
                    Source Link <ExternalLink className="size-3" />
                  </a>
                </div>
                
                <p className="text-sm text-[var(--vp-navy,#1a3460)]/80 leading-relaxed mb-4 border-l-2 border-[var(--vp-official,#3730a3)] pl-3">
                  According to the Labour Law, the employer is legally obligated to cover all recruitment and visa processing fees. No costs should be borne by the worker.
                </p>

                <div className="flex flex-wrap items-center justify-between gap-2 mt-4 text-[10px] text-muted-foreground">
                  <span className="font-semibold bg-white px-2 py-1 rounded border border-border shadow-sm">Source: Ministry of Labour, Qatar</span>
                  <span className="font-semibold bg-white px-2 py-1 rounded border border-border shadow-sm">Last reviewed: 12 June 2026</span>
                </div>
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}