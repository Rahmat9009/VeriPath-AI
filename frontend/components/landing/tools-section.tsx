"use client";

import Link from "next/link";
import { ArrowRight, Shield, MapPin, UploadCloud, Search, Calendar, BadgeDollarSign, ShieldAlert, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/hooks/use-language";

export function ToolsSection() {
  const { locale } = useLanguage();

  const copy = {
    tag: locale === "bn" ? "টুলসমূহ" : "Core Tools",
    heading: locale === "bn" ? "আপনার যাত্রা সুরক্ষিত করতে দুটি টুল" : "Two Tools to Protect Your Journey",
    desc: locale === "bn"
      ? "আপনার অভিবাসনের সিদ্ধান্ত যাচাই করার জন্য প্রয়োজনীয় তথ্য এবং প্রমাণ।"
      : "The clarity and evidence you need to verify your migration decisions.",
    
    // Roadmap
    roadmapName: locale === "bn" ? "রোডম্যাপ" : "The Roadmap",
    roadmapProd: locale === "bn" ? "প্রোফাইল ম্যাচার" : "Profile Matcher",
    roadmapDesc: locale === "bn"
      ? "আপনার দক্ষতা ও গন্তব্য লিখুন। একটি ব্যক্তিগতকৃত, সরকারিভাবে যাচাইকৃত খরচের তালিকা, সময়সীমা এবং প্রয়োজনীয়তা পান।"
      : "Enter your skills and destination. Get a personalized pathway with verified requirements, official fees, and processing timelines.",
    roadmapCta: locale === "bn" ? "আমার পথ খুঁজুন" : "Check My Pathway",
    
    // Shield
    shieldName: locale === "bn" ? "শিল্ড" : "The Shield",
    shieldProd: locale === "bn" ? "ডকুমেন্ট অডিটর" : "Document Auditor",
    shieldDesc: locale === "bn"
      ? "নিয়োগের বিজ্ঞাপন বা চুক্তি আপলোড করুন। শিল্ড দাবিগুলো বের করে এবং সরকারি তথ্যের সাথে তুলনা করে সতর্কতা চিহ্ন দেখায়।"
      : "Upload a recruitment document. The Shield extracts claims, compares them with official data, and flags warning signs.",
    shieldCta: locale === "bn" ? "একটি ডকুমেন্ট যাচাই করুন" : "Audit a Document",
  };

  return (
    <section className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8 bg-[var(--vp-surface-tint,#f6f4f0)]" aria-labelledby="tools-heading">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--vp-emerald,#00b866)]">
            {copy.tag}
          </p>
          <h2
            id="tools-heading"
            className="text-3xl font-extrabold tracking-tight sm:text-5xl text-[var(--vp-navy,#1a3460)] mb-6"
          >
            {copy.heading}
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {copy.desc}
          </p>
        </div>

        <div className="flex flex-col gap-16 lg:gap-24">
          
          {/* Tool 1: The Roadmap */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* UI Preview */}
            <div 
              className="order-2 lg:order-1 relative rounded-2xl border border-border/50 bg-white p-6 sm:p-8 shadow-[var(--vp-shadow-md)]"
              style={{ animation: "vp-scale-in 0.6s ease-out both" }}
            >
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-[var(--vp-emerald,#00b866)]/20 to-transparent opacity-50 pointer-events-none" aria-hidden="true" />
              
              <div className="relative flex flex-col gap-5">
                {/* Search Bar Mock */}
                <div className="flex items-center gap-3 p-3 rounded-lg bg-[var(--vp-surface-tint,#f6f4f0)] border border-border/60">
                  <Search className="size-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-[var(--vp-navy,#1a3460)]">Bangladesh → Qatar (Construction)</span>
                </div>
                
                {/* Result Node Mock */}
                <div className="flex flex-col gap-4 pl-4 border-l-2 border-[var(--vp-emerald,#00b866)]">
                  <div>
                    <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">Pathway Validated</h4>
                    <p className="text-sm font-semibold text-[var(--vp-navy,#1a3460)]">Work Visa (Category: General Labour)</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg border border-border bg-white shadow-sm">
                      <div className="flex items-center gap-2 mb-1 text-[var(--vp-emerald,#00b866)]">
                        <BadgeDollarSign className="size-3.5" />
                        <span className="text-[10px] font-bold uppercase">Official Fee</span>
                      </div>
                      <p className="text-sm font-bold text-[var(--vp-navy,#1a3460)]">QAR 300</p>
                    </div>
                    
                    <div className="p-3 rounded-lg border border-border bg-white shadow-sm">
                      <div className="flex items-center gap-2 mb-1 text-[var(--vp-official,#3730a3)]">
                        <Calendar className="size-3.5" />
                        <span className="text-[10px] font-bold uppercase">Processing Time</span>
                      </div>
                      <p className="text-sm font-bold text-[var(--vp-navy,#1a3460)]">2-4 Weeks</p>
                    </div>
                  </div>

                  <div className="mt-2 text-[10px] text-muted-foreground flex items-center justify-between">
                    <span>Source: Qatar Ministry of Labour</span>
                    <span>Last reviewed: Today</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="order-1 lg:order-2 flex flex-col lg:pl-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[var(--vp-emerald-tint,#e8fdf2)] text-[var(--vp-emerald,#00b866)]">
                  <MapPin className="size-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[var(--vp-navy,#1a3460)]">{copy.roadmapName}</h3>
                  <p className="text-sm font-semibold text-[var(--vp-emerald,#00b866)]">{copy.roadmapProd}</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                {copy.roadmapDesc}
              </p>
              <Button
                render={<Link href="/profile-matcher" />}
                className="self-start gap-2 bg-[var(--vp-navy,#1a3460)] text-white hover:bg-[var(--vp-navy-mid,#324a73)] px-6 py-5 rounded-xl shadow-md font-semibold text-base"
              >
                {copy.roadmapCta}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
            </div>
          </div>

          {/* Tool 2: The Shield */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Description */}
            <div className="flex flex-col lg:pr-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[var(--vp-official-bg,#eef2ff)] text-[var(--vp-official,#3730a3)]">
                  <Shield className="size-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[var(--vp-navy,#1a3460)]">{copy.shieldName}</h3>
                  <p className="text-sm font-semibold text-[var(--vp-official,#3730a3)]">{copy.shieldProd}</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                {copy.shieldDesc}
              </p>
              <Button
                render={<Link href="/document-auditor" />}
                className="self-start gap-2 bg-[var(--vp-navy,#1a3460)] text-white hover:bg-[var(--vp-navy-mid,#324a73)] px-6 py-5 rounded-xl shadow-md font-semibold text-base"
              >
                {copy.shieldCta}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
            </div>

            {/* UI Preview */}
            <div 
              className="relative rounded-2xl border border-border/50 bg-white p-6 sm:p-8 shadow-[var(--vp-shadow-md)]"
              style={{ animation: "vp-scale-in 0.6s ease-out 0.2s both" }}
            >
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-tl from-[var(--vp-official,#3730a3)]/20 to-transparent opacity-50 pointer-events-none" aria-hidden="true" />
              
              <div className="relative flex flex-col gap-4">
                {/* Upload Mock */}
                <div className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-border/80 rounded-lg bg-[var(--vp-surface-tint,#f6f4f0)] text-muted-foreground mb-2">
                  <UploadCloud className="size-6 mb-2 opacity-50" />
                  <span className="text-xs font-semibold">Offer_Letter.pdf</span>
                </div>
                
                {/* Scan Result Mock */}
                <div className="p-4 rounded-xl border border-[var(--color-risk-red)] bg-[var(--color-risk-red-bg)] relative overflow-hidden">
                  <div className="flex justify-between items-start mb-3 relative z-10">
                    <div className="flex items-center gap-2 text-[var(--color-risk-red)]">
                      <ShieldAlert className="size-5" />
                      <span className="font-bold text-sm">Requires Caution</span>
                    </div>
                    <Volume2 className="size-4 text-[var(--color-risk-red)]/70" />
                  </div>
                  
                  <div className="relative z-10">
                    <p className="text-xs font-semibold text-[var(--vp-navy,#1a3460)] mb-1">Claimed: <span className="bg-white/60 px-1 rounded">&quot;No medical test required&quot;</span></p>
                    <p className="text-[11px] text-[var(--vp-navy,#1a3460)]/80 leading-relaxed">
                      Official regulation mandates a biometric and medical screening prior to visa issuance. This claim contradicts official embassy guidelines.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}