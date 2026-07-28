"use client";

/**
 * Hero — Veripath landing page hero section.
 *
 * Left: Brand + trust label + headline + supporting copy + CTAs
 * Right: Dot-matrix shield + verification demo workspace
 *
 * Motion:
 * - One-time entrance via CSS animations (vp-fade-up, vp-fade-in)
 * - Desktop: subtle pointer-responsive perspective on right panel
 * - Touch devices: no pointer tracking, simplified layout
 * - Reduced-motion: all animations skip to final state via @media
 * - All animations settle to stable final state — no infinite loops
 */

import { useRef, useCallback, useEffect, useState } from "react";
import { ArrowRight, ArrowDown, ShieldCheck, PlayCircle } from "lucide-react";
import { DotMatrixShield } from "./dot-matrix-shield";
import { VerificationDemo } from "./verification-demo";
import { GetStartedDialog } from "./get-started-dialog";
import { useLanguage } from "@/lib/hooks/use-language";

export function Hero() {
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(true); // default safe
  const { t, locale } = useLanguage();

  // Detect touch capability after mount
  useEffect(() => {
    const hasCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const timer = setTimeout(() => {
      setIsTouch(hasCoarsePointer);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  // Pointer-responsive perspective — desktop only
  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (isTouch || !rightPanelRef.current) return;
      const rect = rightPanelRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width; // -0.5 … 0.5
      const dy = (e.clientY - cy) / rect.height;
      // Constrain to ±4 degrees
      const rotX = -(dy * 4).toFixed(2);
      const rotY = (dx * 4).toFixed(2);
      rightPanelRef.current.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    },
    [isTouch]
  );

  const handlePointerLeave = useCallback(() => {
    if (!rightPanelRef.current) return;
    rightPanelRef.current.style.transition = "transform 0.6s cubic-bezier(0.16, 1, 0.32, 1)";
    rightPanelRef.current.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
    // Remove transition after settling
    const el = rightPanelRef.current;
    const clearTransition = () => {
      el.style.transition = "";
      el.removeEventListener("transitionend", clearTransition);
    };
    el.addEventListener("transitionend", clearTransition);
  }, []);

  const handlePointerEnter = useCallback(() => {
    if (!rightPanelRef.current) return;
    rightPanelRef.current.style.transition = "transform 0.15s ease-out";
  }, []);

  const copy = {
    opening: locale === "bn" ? "টাকা দেওয়ার আগে, আপনি কি জানেন সুযোগটি আসল কিনা?" : "Before you pay, do you know if the opportunity is real?",
    heading: locale === "bn" ? "টাকা দেওয়ার আগে যাচাই করুন" : "Verify Before You Pay.",
    sub: locale === "bn" 
      ? "টাকা লেনদেনের আগে পরিষ্কার, সরকারি তথ্যসূত্রের মাধ্যমে অভিবাসনের সুযোগ এবং সন্দেহজনক নিয়োগের দাবিগুলি তুলনা করুন।" 
      : "Compare migration opportunities and suspicious recruitment claims with clear, officially sourced information before money changes hands.",
    getStarted: locale === "bn" ? "শুরু করুন" : "Get Started",
    howItWorks: locale === "bn" ? "কিভাবে কাজ করে" : "See How It Works",
    why: locale === "bn" ? "কেন ভেরিপাথ?" : "Why Veripath?",
    evidence: locale === "bn" 
      ? "প্রতিটি ফলাফলের পেছনে থাকা সতর্কতা, প্রমাণ এবং সরকারি তথ্যসূত্রগুলো পর্যালোচনা করুন।" 
      : "Review the warning signs, supporting evidence, and official sources behind every result."
  };

  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="hero-heading"
      style={{ backgroundColor: "var(--vp-navy, #0f172a)" }}
    >
      {/* ── Immersive Lighting / Cinematic depth ──────────── */}
      <div
        className="pointer-events-none absolute inset-0 select-none opacity-40 mix-blend-screen"
        aria-hidden="true"
        style={{
          backgroundImage: `
            radial-gradient(circle at 60% 50%, var(--vp-emerald, #00b866) 0%, transparent 40%),
            radial-gradient(circle at 20% 100%, var(--vp-official, #3730a3) 0%, transparent 50%)
          `,
        }}
      />
      <div className="absolute inset-0 bg-[url('/media/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5" />

      {/* ── Content grid ────────────────────────────────────────────── */}
      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-24 z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">

          {/* ─ LEFT COLUMN ─────────────────────────────────────────── */}
          <div className="flex flex-col text-white">

            {/* Trust label */}
            <div
              className="mb-5"
              style={{ animation: "vp-fade-up 0.5s cubic-bezier(0.16, 1, 0.32, 1) 0.05s both" }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white shadow-sm">
                <ShieldCheck className="size-3.5 text-[var(--vp-emerald,#00b866)]" aria-hidden="true" />
                {t("hero.trustLabel")}
              </span>
            </div>

            {/* Opening Question */}
            <p 
              className="mb-2 text-lg font-medium text-[var(--vp-emerald-tint,#e8fdf2)]/80"
              style={{ animation: "vp-fade-up 0.55s cubic-bezier(0.16, 1, 0.32, 1) 0.15s both" }}
            >
              {copy.opening}
            </p>

            {/* Main headline */}
            <h1
              id="hero-heading"
              className="text-balance text-5xl font-extrabold tracking-tight sm:text-6xl md:text-[4rem] md:leading-[1.05]"
              style={{
                animation: "vp-fade-up 0.55s cubic-bezier(0.16, 1, 0.32, 1) 0.25s both",
              }}
            >
              {locale === "bn" ? (
                <>টাকা দেওয়ার আগে <span className="text-[var(--vp-emerald,#00b866)]">যাচাই</span> করুন</>
              ) : (
                <>Verify Before <span className="text-[var(--vp-emerald,#00b866)]">You Pay.</span></>
              )}
            </h1>

            {/* Supporting copy */}
            <p
              className="mt-6 max-w-lg text-lg leading-relaxed text-slate-300"
              style={{
                animation: "vp-fade-up 0.55s cubic-bezier(0.16, 1, 0.32, 1) 0.35s both",
              }}
            >
              {copy.sub}
            </p>

            {/* CTAs */}
            <div
              className="mt-8 flex flex-col gap-4 sm:flex-row items-center"
              style={{ animation: "vp-fade-up 0.55s cubic-bezier(0.16, 1, 0.32, 1) 0.45s both" }}
            >
              <GetStartedDialog>
                <button
                  className="w-full sm:w-auto inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-base font-bold text-[#0c1322] transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--vp-emerald,#00b866)]/50"
                  style={{
                    backgroundColor: "var(--vp-emerald, #00b866)",
                    boxShadow: "0 4px 14px rgba(0,184,102,0.4)",
                  }}
                >
                  {copy.getStarted}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </button>
              </GetStartedDialog>

              <a
                href="#how-it-works"
                className="w-full sm:w-auto inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-3.5 text-base font-bold text-white transition-all duration-200 hover:bg-white/10 hover:border-white/30 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
              >
                <PlayCircle className="size-5 opacity-70" aria-hidden="true" />
                {copy.howItWorks}
              </a>
            </div>

            {/* Optional text link & Evidence statement */}
            <div 
              className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-slate-400"
              style={{ animation: "vp-fade-up 0.5s cubic-bezier(0.16, 1, 0.32, 1) 0.55s both" }}
            >
              <a href="#problem" className="inline-flex items-center gap-1 font-semibold text-slate-300 hover:text-white transition-colors group">
                {copy.why}
                <ArrowDown className="size-3.5 opacity-50 group-hover:translate-y-0.5 transition-transform" />
              </a>
              <span className="hidden sm:inline-block h-4 w-px bg-slate-700" aria-hidden="true" />
              <p className="max-w-sm leading-relaxed">
                {copy.evidence}
              </p>
            </div>
          </div>

          {/* ─ RIGHT COLUMN — Verification workspace ─────────────────── */}
          <div
            className="relative flex flex-col w-full max-w-[500px] mx-auto lg:max-w-none"
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            onPointerEnter={handlePointerEnter}
            style={{ animation: "vp-fade-in 0.7s ease 0.3s both" }}
          >
            {/* Shield + demo layered composition */}
            <div className="relative w-full aspect-[4/5] sm:aspect-auto sm:h-[600px] flex items-center justify-center">
              {/* Shield — decorative, behind the demo card */}
              <div
                className="pointer-events-none absolute -left-4 sm:-left-8 lg:-left-16 -top-4 sm:-top-8 select-none opacity-40 mix-blend-screen scale-75 sm:scale-100"
                aria-hidden="true"
                style={{ zIndex: 0 }}
              >
                <DotMatrixShield size={440} />
              </div>

              {/* Verification demo — foreground */}
              <div
                ref={rightPanelRef}
                className="relative w-full max-w-[420px] mx-auto"
                style={{
                  zIndex: 1,
                  willChange: isTouch ? "auto" : "transform",
                  transformOrigin: "center center",
                }}
              >
                <VerificationDemo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}