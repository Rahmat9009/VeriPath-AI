"use client";

/**
 * VerificationDemo — The right-side hero workspace.
 *
 * Shows a fictional recruitment offer being analysed in real time:
 * 1. Suspicious offer message (foreground layer)
 * 2. Extracted claims with highlight markers (middle layer)
 * 3. Official comparison panel (background layer)
 * 4. Risk result with recommended action (bottom)
 *
 * All content is clearly marked as demonstration data.
 * No real official sources, fees, or legal claims are stated.
 * Pointer-perspective only on non-touch devices.
 */

import { useState, useRef, useCallback } from "react";
import {
  AlertTriangle,
  ShieldAlert,
  ExternalLink,
  Volume2,
  ChevronRight,
  Info,
  CheckCircle2,
} from "lucide-react";

/* ── Demonstration data ─────────────────────────────────────────────── */
const DEMO_OFFER = {
  sender: "Overseas Employment BD",
  timestamp: "Today · 10:47",
  lines: [
    { id: "l1", text: "🚨 URGENT — Security Guard Positions Available Now!", type: "urgency" },
    { id: "l2", text: "✅ Guaranteed visa — no interview required", type: "guarantee" },
    { id: "l3", text: "💰 Salary: QAR 4,500 / month", type: "claim" },
    { id: "l4", text: "📋 Processing fee: QAR 3,500 (pay today)", type: "fee" },
    { id: "l5", text: "⏰ Only 8 positions left — deadline: 48 hours", type: "urgency" },
    { id: "l6", text: "Send passport copy to reserve your place.", type: "neutral" },
  ],
};

const DEMO_FINDINGS = [
  {
    id: "f1",
    lineId: "l2",
    label: "Unverifiable guarantee",
    detail: "No licensed recruiter can guarantee visa approval. This claim contradicts standard recruitment regulations.",
    severity: "red" as const,
  },
  {
    id: "f2",
    lineId: "l3",
    label: "Salary exceeds typical range",
    detail: "Claimed salary significantly exceeds the range documented for this category in official labour records.",
    severity: "amber" as const,
  },
  {
    id: "f3",
    lineId: "l4",
    label: "Fee requires comparison",
    detail: "Recruitment fees should be compared with official published rates. Fees paid before a contract is signed carry additional risk.",
    severity: "amber" as const,
  },
  {
    id: "f4",
    lineId: "l5",
    label: "Artificial urgency",
    detail: "Short deadlines and limited-slot claims are a documented pressure tactic used in fraudulent recruitment.",
    severity: "red" as const,
  },
];

const DEMO_OFFICIAL = {
  source: "Ministry of Labour (Demonstration Data)",
  lastReviewed: "Demo — June 2026",
  note: "This is illustrative comparison data only. No official fee or salary claim is stated.",
  rows: [
    { label: "Visa guarantee possible?", official: "No — only government can grant", claimed: "Guaranteed" },
    { label: "Interview requirement", official: "Employer interview standard", claimed: "No interview required" },
  ],
};

const severityStyles = {
  red: {
    dot: "bg-[var(--color-risk-red)]",
    text: "text-[var(--color-risk-red)]",
    bg: "bg-[var(--color-risk-red-bg)]",
    border: "border-[var(--color-risk-red)]",
  },
  amber: {
    dot: "bg-[var(--color-risk-amber)]",
    text: "text-[var(--color-risk-amber)]",
    bg: "bg-[var(--color-risk-amber-bg)]",
    border: "border-[var(--color-risk-amber)]",
  },
};

const lineHighlight: Record<string, string> = {
  urgency: "bg-[var(--color-risk-red-bg)] border-l-2 border-[var(--color-risk-red)]",
  guarantee: "bg-[var(--color-risk-red-bg)] border-l-2 border-[var(--color-risk-red)]",
  claim: "bg-[var(--color-risk-amber-bg)] border-l-2 border-[var(--color-risk-amber)]",
  fee: "bg-[var(--color-risk-amber-bg)] border-l-2 border-[var(--color-risk-amber)]",
  neutral: "",
};

const lineIcon: Record<string, React.ReactNode> = {
  urgency: <ShieldAlert className="size-3 shrink-0 text-[var(--color-risk-red)] mt-0.5" aria-hidden="true" />,
  guarantee: <ShieldAlert className="size-3 shrink-0 text-[var(--color-risk-red)] mt-0.5" aria-hidden="true" />,
  claim: <AlertTriangle className="size-3 shrink-0 text-[var(--color-risk-amber)] mt-0.5" aria-hidden="true" />,
  fee: <AlertTriangle className="size-3 shrink-0 text-[var(--color-risk-amber)] mt-0.5" aria-hidden="true" />,
  neutral: null,
};

/* ── Component ─────────────────────────────────────────────────────── */
export function VerificationDemo() {
  const [activeTab, setActiveTab] = useState<"offer" | "analysis" | "result">("offer");
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTabClick = useCallback((tab: "offer" | "analysis" | "result") => {
    setActiveTab(tab);
  }, []);

  const tabs = [
    { id: "offer" as const, label: "Offer" },
    { id: "analysis" as const, label: "Analysis" },
    { id: "result" as const, label: "Result" },
  ];

  return (
    <div
      ref={containerRef}
      className="relative flex h-full flex-col"
      aria-label="Sample analysis demonstration"
      role="region"
    >
      {/* ── Demo label ──────────────────────────────────────────────── */}
      <div className="mb-3 flex items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--vp-border,#e0dcd4)] bg-[var(--vp-surface,#fefefe)] px-3 py-1 text-xs font-medium text-[var(--vp-slate,#555)]">
          <Info className="size-3" aria-hidden="true" />
          Sample analysis — demonstration data only
        </span>
      </div>

      {/* ── Main card ───────────────────────────────────────────────── */}
      <div
        className="flex flex-1 flex-col overflow-hidden rounded-2xl border border-[var(--vp-border,#e0dcd4)] bg-[var(--vp-surface,#fefefe)]"
        style={{ boxShadow: "var(--vp-shadow-xl,0 24px 56px oklch(0.22 0.08 252 / 0.12))" }}
      >
        {/* Card header — tab navigation */}
        <div className="flex items-center justify-between border-b border-[var(--vp-border,#e0dcd4)] px-4 py-3">
          <div className="flex items-center gap-1">
            <div className="size-2.5 rounded-full bg-[var(--color-risk-red-bg,#fdecea)]" style={{ backgroundColor: "#fca5a5" }} />
            <div className="size-2.5 rounded-full" style={{ backgroundColor: "#fcd34d" }} />
            <div className="size-2.5 rounded-full" style={{ backgroundColor: "#6ee7b7" }} />
          </div>
          <div
            role="tablist"
            aria-label="Demonstration steps"
            className="flex rounded-lg border border-[var(--vp-border,#e0dcd4)] bg-[var(--vp-surface-tint,#f6f4f0)] p-0.5"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                id={`demo-tab-${tab.id}`}
                aria-controls={`demo-panel-${tab.id}`}
                onClick={() => handleTabClick(tab.id)}
                className={`rounded-md px-3 py-1 text-xs font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--vp-emerald,#00b866)] ${
                  activeTab === tab.id
                    ? "bg-[var(--vp-surface,#fefefe)] text-[var(--vp-navy,#1a3460)] shadow-sm"
                    : "text-[var(--vp-slate,#555)] hover:text-[var(--vp-navy,#1a3460)]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab panels */}
        <div className="flex-1 overflow-y-auto">

          {/* ── Panel: Offer ──────────────────────────────────────────── */}
          <div
            id="demo-panel-offer"
            role="tabpanel"
            aria-labelledby="demo-tab-offer"
            hidden={activeTab !== "offer"}
            className="p-4"
          >
            {/* Message header */}
            <div className="mb-3 flex items-center gap-2.5 rounded-lg border border-[var(--vp-border,#e0dcd4)] bg-[var(--vp-surface-tint,#f6f4f0)] px-3 py-2">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[var(--vp-navy,#1a3460)] text-xs font-bold text-white">
                OE
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-[var(--vp-navy,#1a3460)]">{DEMO_OFFER.sender}</p>
                <p className="text-xs text-[var(--vp-slate,#555)]">{DEMO_OFFER.timestamp}</p>
              </div>
            </div>

            {/* Message lines */}
            <div className="space-y-1.5" aria-label="Suspicious recruitment message content">
              {DEMO_OFFER.lines.map((line) => (
                <div
                  key={line.id}
                  className={`flex items-start gap-2 rounded-md px-2.5 py-2 text-xs leading-relaxed text-[var(--vp-navy,#1a3460)] ${lineHighlight[line.type] ?? ""}`}
                >
                  {lineIcon[line.type]}
                  <span>{line.text}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => handleTabClick("analysis")}
              className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-lg border border-[var(--vp-emerald,#00b866)] bg-[var(--vp-emerald-tint,#e8fdf2)] px-4 py-2.5 text-xs font-semibold text-[var(--vp-emerald,#00b866)] transition-colors hover:bg-[var(--vp-emerald,#00b866)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--vp-emerald,#00b866)]"
            >
              Analyse this offer
              <ChevronRight className="size-3.5" aria-hidden="true" />
            </button>
          </div>

          {/* ── Panel: Analysis ───────────────────────────────────────── */}
          <div
            id="demo-panel-analysis"
            role="tabpanel"
            aria-labelledby="demo-tab-analysis"
            hidden={activeTab !== "analysis"}
            className="p-4"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--vp-slate,#555)]">
              Extracted claims
            </p>

            <div className="space-y-2.5">
              {DEMO_FINDINGS.map((finding) => {
                const styles = severityStyles[finding.severity];
                return (
                  <div
                    key={finding.id}
                    className={`rounded-lg border ${styles.border} ${styles.bg} p-3`}
                  >
                    <div className="flex items-start gap-2">
                      <span className={`mt-1 size-2 shrink-0 rounded-full ${styles.dot}`} aria-hidden="true" />
                      <div className="min-w-0">
                        <p className={`text-xs font-semibold ${styles.text}`}>
                          {finding.severity === "red" ? "⚠ " : "△ "}
                          {finding.label}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-[var(--vp-slate,#555)]">
                          {finding.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Official comparison */}
            <div className="mt-4 rounded-lg border border-[var(--vp-border-mid,#ccd)] bg-[var(--vp-surface-tint,#f6f4f0)] p-3">
              <div className="mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-[var(--vp-official,#1a3460)]" aria-hidden="true" />
                <p className="text-xs font-semibold text-[var(--vp-official,#1a3460)]">
                  Official comparison
                </p>
                <span className="ml-auto text-xs text-[var(--vp-slate,#555)]">{DEMO_OFFICIAL.lastReviewed}</span>
              </div>
              <div className="space-y-2">
                {DEMO_OFFICIAL.rows.map((row, i) => (
                  <div key={i} className="grid grid-cols-[1fr_auto] gap-x-3 gap-y-0.5">
                    <p className="col-span-2 text-xs font-medium text-[var(--vp-navy,#1a3460)]">{row.label}</p>
                    <p className="text-xs text-[var(--vp-slate,#555)]">Official: {row.official}</p>
                    <p className="text-xs font-medium text-[var(--color-risk-red,#c0392b)] line-through">
                      {row.claimed}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-2 text-xs italic text-[var(--vp-slate,#555)]">{DEMO_OFFICIAL.note}</p>
            </div>

            <button
              onClick={() => handleTabClick("result")}
              className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-lg border border-[var(--vp-emerald,#00b866)] bg-[var(--vp-emerald-tint,#e8fdf2)] px-4 py-2.5 text-xs font-semibold text-[var(--vp-emerald,#00b866)] transition-colors hover:bg-[var(--vp-emerald,#00b866)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--vp-emerald,#00b866)]"
            >
              View risk result
              <ChevronRight className="size-3.5" aria-hidden="true" />
            </button>
          </div>

          {/* ── Panel: Result ─────────────────────────────────────────── */}
          <div
            id="demo-panel-result"
            role="tabpanel"
            aria-labelledby="demo-tab-result"
            hidden={activeTab !== "result"}
            className="p-4"
          >
            {/* Risk status */}
            <div className="rounded-xl border-2 border-[var(--color-risk-red,#c0392b)] bg-[var(--color-risk-red-bg,#fdecea)] p-4">
              <div className="flex items-start gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-risk-red,#c0392b)]">
                  <ShieldAlert className="size-5 text-white" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-[var(--color-risk-red,#c0392b)]" role="status" aria-live="polite">
                    Serious warning signs identified
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--vp-slate,#555)]">
                    Multiple claims in this message do not match information in official sources. Independent verification is strongly recommended before any payment or document sharing.
                  </p>
                </div>
              </div>

              {/* Findings summary */}
              <div className="mt-3 space-y-1.5 border-t border-[var(--color-risk-red,#c0392b)]/20 pt-3">
                <p className="text-xs font-semibold text-[var(--vp-navy,#1a3460)]">Warning signs found:</p>
                <ul className="space-y-1" aria-label="Warning signs list">
                  <li className="flex items-start gap-1.5 text-xs text-[var(--vp-slate,#555)]">
                    <span className="mt-1 size-1.5 shrink-0 rounded-full bg-[var(--color-risk-red,#c0392b)]" aria-hidden="true" />
                    Unverifiable visa guarantee
                  </li>
                  <li className="flex items-start gap-1.5 text-xs text-[var(--vp-slate,#555)]">
                    <span className="mt-1 size-1.5 shrink-0 rounded-full bg-[var(--color-risk-red,#c0392b)]" aria-hidden="true" />
                    Artificial urgency pressure tactic
                  </li>
                  <li className="flex items-start gap-1.5 text-xs text-[var(--vp-slate,#555)]">
                    <span className="mt-1 size-1.5 shrink-0 rounded-full bg-[var(--color-risk-amber,#d97706)]" aria-hidden="true" />
                    Salary claim requires comparison
                  </li>
                  <li className="flex items-start gap-1.5 text-xs text-[var(--vp-slate,#555)]">
                    <span className="mt-1 size-1.5 shrink-0 rounded-full bg-[var(--color-risk-amber,#d97706)]" aria-hidden="true" />
                    Fee requires comparison with official rates
                  </li>
                </ul>
              </div>
            </div>

            {/* Recommended action */}
            <div className="mt-3 rounded-lg border border-[var(--vp-border,#e0dcd4)] bg-[var(--vp-surface,#fefefe)] p-3">
              <p className="text-xs font-semibold text-[var(--vp-navy,#1a3460)]">Recommended next step</p>
              <p className="mt-1 text-xs leading-relaxed text-[var(--vp-slate,#555)]">
                Do not pay or share documents. Verify the recruiter through your national overseas employment bureau before proceeding.
              </p>
            </div>

            {/* Controls row */}
            <div className="mt-3 flex items-center gap-2">
              <button
                className="flex items-center gap-1.5 rounded-lg border border-[var(--vp-border,#e0dcd4)] px-3 py-2 text-xs text-[var(--vp-slate,#555)] transition-colors hover:border-[var(--vp-navy,#1a3460)] hover:text-[var(--vp-navy,#1a3460)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--vp-emerald,#00b866)]"
                aria-label="Play audio warning (demonstration)"
              >
                <Volume2 className="size-3.5" aria-hidden="true" />
                Audio warning
              </button>
              <button
                className="flex items-center gap-1.5 rounded-lg border border-[var(--vp-border,#e0dcd4)] px-3 py-2 text-xs text-[var(--vp-slate,#555)] transition-colors hover:border-[var(--vp-navy,#1a3460)] hover:text-[var(--vp-navy,#1a3460)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--vp-emerald,#00b866)]"
                aria-label="View evidence details (demonstration)"
              >
                <ExternalLink className="size-3.5" aria-hidden="true" />
                View evidence
              </button>
            </div>

            <button
              onClick={() => handleTabClick("offer")}
              className="mt-3 w-full text-center text-xs text-[var(--vp-slate,#555)] underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--vp-emerald,#00b866)]"
              aria-label="Restart demonstration"
            >
              ← Back to offer
            </button>
          </div>
        </div>
      </div>

      {/* ── Source reference strip ──────────────────────────────────── */}
      <div className="mt-3 flex items-center gap-2 rounded-lg border border-[var(--vp-border,#e0dcd4)] bg-[var(--vp-surface-tint,#f6f4f0)] px-3 py-2">
        <Info className="size-3.5 shrink-0 text-[var(--vp-slate,#555)]" aria-hidden="true" />
        <p className="text-xs text-[var(--vp-slate,#555)]">
          <span className="font-semibold">Source:</span>{" "}
          {DEMO_OFFICIAL.source} · {DEMO_OFFICIAL.lastReviewed}
        </p>
      </div>
    </div>
  );
}
