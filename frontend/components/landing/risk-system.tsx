"use client";

import { useLanguage } from "@/lib/hooks/use-language";
import { ShieldCheck, AlertTriangle, ShieldAlert, Info } from "lucide-react";

export function RiskSystem() {
  const { t } = useLanguage();

  const levels = [
    {
      icon: ShieldCheck,
      color: "var(--color-risk-green)",
      bg: "var(--color-risk-green-bg)",
      label: t("risk.greenLabel"),
      desc: t("risk.greenDesc"),
    },
    {
      icon: AlertTriangle,
      color: "var(--color-risk-amber)",
      bg: "var(--color-risk-amber-bg)",
      label: t("risk.amberLabel"),
      desc: t("risk.amberDesc"),
    },
    {
      icon: ShieldAlert,
      color: "var(--color-risk-red)",
      bg: "var(--color-risk-red-bg)",
      label: t("risk.redLabel"),
      desc: t("risk.redDesc"),
    },
  ];

  return (
    <section className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8 bg-[var(--vp-surface-tint,#f6f4f0)] border-t border-border/50" aria-labelledby="risk-heading">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2
            id="risk-heading"
            className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-[var(--vp-navy,#1a3460)] mb-6"
          >
            {t("risk.heading")}
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Every finding uses an icon, color, and plain text explanation so you never have to guess what it means.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {levels.map((level, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 sm:p-8 rounded-2xl bg-white shadow-sm border border-border/60 transition-transform hover:-translate-y-1"
            >
              {/* Visual Indicator */}
              <div 
                className="flex size-16 shrink-0 items-center justify-center rounded-2xl border-2"
                style={{ backgroundColor: level.bg, borderColor: level.color, color: level.color }}
              >
                <level.icon className="size-8" aria-hidden="true" />
              </div>
              
              {/* Text Explanation */}
              <div className="flex-1">
                <h3 
                  className="text-xl font-bold mb-2"
                  style={{ color: level.color }}
                >
                  {level.label}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {level.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-10 flex items-start gap-4 rounded-xl border border-border/80 bg-white p-6 shadow-sm">
          <Info className="mt-0.5 size-6 shrink-0 text-muted-foreground" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-muted-foreground font-medium">
            {t("risk.disclaimer")}
          </p>
        </div>
      </div>
    </section>
  );
}