"use client";

/**
 * DotMatrixShield — Veripath's visual signature graphic.
 *
 * Implementation notes:
 * - Uses SVG <pattern> for the dot field (not individual elements).
 * - Uses SVG <clipPath> and <mask> to contain dots within the shield silhouette.
 * - Three depth planes: background (sparse), mid (medium), foreground (dense center).
 * - Vertical bars echo the logo's bar motif.
 * - Emerald pathway illuminates through the center.
 * - Entrance: CSS animation only (respects prefers-reduced-motion).
 * - Fully aria-hidden — meaning is communicated by surrounding HTML.
 */

interface DotMatrixShieldProps {
  /** Width of the SVG in px. Height is calculated from the aspect ratio. */
  size?: number;
  className?: string;
}

export function DotMatrixShield({ size = 420, className = "" }: DotMatrixShieldProps) {
  const w = size;
  const h = Math.round(size * 1.1);

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 420 462"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className={className}
      style={{ overflow: "visible" }}
    >
      <defs>
        {/* ── Shield clip path — matches logo silhouette ─────────────── */}
        <clipPath id="shield-clip">
          {/*
            Shield path: wide at top, curved sides, pointed at bottom.
            Derived from the logo proportions: 420 wide, 462 tall
            top corners rounded, sides curve inward slightly, converges to bottom point.
          */}
          <path d="
            M210 10
            C 210 10, 380 55, 400 80
            L 400 210
            C 400 320, 310 400, 210 452
            C 110 400, 20 320, 20 210
            L 20 80
            C 40 55, 210 10, 210 10 Z
          " />
        </clipPath>

        {/* ── Background dot pattern — sparse ────────────────────────── */}
        <pattern id="dots-bg" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="9" cy="9" r="1.2" fill="var(--vp-navy, #1a3460)" opacity="0.18" />
        </pattern>

        {/* ── Mid dot pattern — medium density ──────────────────────── */}
        <pattern id="dots-mid" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
          <circle cx="6" cy="6" r="1.5" fill="var(--vp-navy, #1a3460)" opacity="0.30" />
        </pattern>

        {/* ── Foreground dot pattern — dense ─────────────────────────── */}
        <pattern id="dots-fg" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="4" r="1.8" fill="var(--vp-navy, #1a3460)" opacity="0.55" />
        </pattern>

        {/* ── Emerald dot pattern — pathway ──────────────────────────── */}
        <pattern id="dots-emerald" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="4" r="2.0" fill="var(--vp-emerald, #00b866)" opacity="0.85" />
        </pattern>

        {/* ── Radial mask for foreground density — denser center ─────── */}
        <radialGradient id="density-gradient" cx="50%" cy="45%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="55%" stopColor="white" stopOpacity="0.7" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="density-mask">
          <rect width="420" height="462" fill="url(#density-gradient)" />
        </mask>

        {/* ── Emerald pathway mask — vertical center strip ────────────── */}
        <linearGradient id="pathway-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="15%" stopColor="white" stopOpacity="1" />
          <stop offset="85%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <mask id="pathway-mask">
          <rect x="168" y="0" width="84" height="462" fill="url(#pathway-gradient)" />
        </mask>

        {/* ── Edge lighting — from top-left ──────────────────────────── */}
        <radialGradient id="edge-light" cx="25%" cy="20%" r="70%">
          <stop offset="0%" stopColor="white" stopOpacity="0.12" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>

        {/* ── Vertical bar gradient (logo bars) ─────────────────────── */}
        <linearGradient id="bar-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--vp-navy, #1a3460)" stopOpacity="0" />
          <stop offset="20%" stopColor="var(--vp-navy, #1a3460)" stopOpacity="1" />
          <stop offset="80%" stopColor="var(--vp-navy, #1a3460)" stopOpacity="1" />
          <stop offset="100%" stopColor="var(--vp-navy, #1a3460)" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="emerald-bar-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--vp-emerald, #00b866)" stopOpacity="0" />
          <stop offset="15%" stopColor="var(--vp-emerald, #00b866)" stopOpacity="1" />
          <stop offset="85%" stopColor="var(--vp-emerald, #00b866)" stopOpacity="1" />
          <stop offset="100%" stopColor="var(--vp-emerald, #00b866)" stopOpacity="0" />
        </linearGradient>

        {/* ── Drop shadow filter ─────────────────────────────────────── */}
        <filter id="shield-shadow" x="-10%" y="-5%" width="120%" height="115%">
          <feDropShadow dx="0" dy="8" stdDeviation="20" floodColor="var(--vp-navy, #1a3460)" floodOpacity="0.14" />
        </filter>
      </defs>

      {/* ── Shield outer glow / shadow ──────────────────────────────── */}
      <g filter="url(#shield-shadow)">
        {/* Shield outline stroke */}
        <path
          d="M210 10 C 210 10, 380 55, 400 80 L 400 210 C 400 320, 310 400, 210 452 C 110 400, 20 320, 20 210 L 20 80 C 40 55, 210 10, 210 10 Z"
          stroke="var(--vp-navy, #1a3460)"
          strokeWidth="2.5"
          strokeOpacity="0.15"
          fill="none"
        />
      </g>

      {/* ── Clipped content ────────────────────────────────────────── */}
      <g clipPath="url(#shield-clip)">

        {/* Background fill — slightly tinted navy */}
        <rect width="420" height="462"
          fill="var(--vp-navy, #1a3460)"
          opacity="0.04"
          style={{
            animation: "vp-fade-in 0.5s ease 0.1s both",
          }}
        />

        {/* Background dot plane — sparse */}
        <rect
          width="420" height="462"
          fill="url(#dots-bg)"
          style={{
            animation: "vp-fade-in 0.6s ease 0.2s both",
          }}
        />

        {/* Mid dot plane — medium density */}
        <rect
          width="420" height="462"
          fill="url(#dots-mid)"
          mask="url(#density-mask)"
          style={{
            animation: "vp-fade-in 0.6s ease 0.35s both",
          }}
        />

        {/* Foreground dot plane — dense center */}
        <rect
          width="420" height="462"
          fill="url(#dots-fg)"
          mask="url(#density-mask)"
          opacity="0.8"
          style={{
            animation: "vp-fade-in 0.6s ease 0.5s both",
          }}
        />

        {/* Emerald pathway dots — center vertical strip */}
        <rect
          width="420" height="462"
          fill="url(#dots-emerald)"
          mask="url(#pathway-mask)"
          style={{
            animation: "vp-fade-in 0.7s ease 0.7s both",
          }}
        />

        {/* ── Vertical bars — logo motif ────────────────────────────── */}
        {/* Bar positions mirror the logo: outer navy bars, inner emerald bars */}
        {/* Outer left navy bar */}
        <rect x="82" y="60" width="28" height="260" rx="14"
          fill="url(#bar-fade)"
          opacity="0.55"
          style={{ animation: "vp-scale-in 0.5s cubic-bezier(0.16,1,0.32,1) 0.8s both" }}
        />
        {/* Inner left navy bar */}
        <rect x="130" y="40" width="28" height="310" rx="14"
          fill="url(#bar-fade)"
          opacity="0.65"
          style={{ animation: "vp-scale-in 0.5s cubic-bezier(0.16,1,0.32,1) 0.85s both" }}
        />
        {/* Center emerald bar — tallest, brightest */}
        <rect x="182" y="24" width="56" height="360" rx="28"
          fill="url(#emerald-bar-fade)"
          opacity="0.90"
          style={{ animation: "vp-scale-in 0.55s cubic-bezier(0.16,1,0.32,1) 0.9s both" }}
        />
        {/* Inner right navy bar */}
        <rect x="262" y="40" width="28" height="310" rx="14"
          fill="url(#bar-fade)"
          opacity="0.65"
          style={{ animation: "vp-scale-in 0.5s cubic-bezier(0.16,1,0.32,1) 0.85s both" }}
        />
        {/* Outer right navy bar */}
        <rect x="310" y="60" width="28" height="260" rx="14"
          fill="url(#bar-fade)"
          opacity="0.55"
          style={{ animation: "vp-scale-in 0.5s cubic-bezier(0.16,1,0.32,1) 0.8s both" }}
        />

        {/* ── Evidence dots — connection points ────────────────────── */}
        {[
          { cx: 96,  cy: 155, r: 4.5, color: "var(--vp-navy, #1a3460)", delay: "1.0s" },
          { cx: 144, cy: 200, r: 4.5, color: "var(--vp-navy, #1a3460)", delay: "1.05s" },
          { cx: 210, cy: 128, r: 6,   color: "var(--vp-emerald, #00b866)", delay: "1.1s" },
          { cx: 210, cy: 230, r: 5,   color: "var(--vp-emerald, #00b866)", delay: "1.12s" },
          { cx: 210, cy: 320, r: 5,   color: "var(--vp-emerald, #00b866)", delay: "1.14s" },
          { cx: 276, cy: 200, r: 4.5, color: "var(--vp-navy, #1a3460)", delay: "1.05s" },
          { cx: 324, cy: 155, r: 4.5, color: "var(--vp-navy, #1a3460)", delay: "1.0s" },
        ].map((dot, i) => (
          <circle
            key={i}
            cx={dot.cx}
            cy={dot.cy}
            r={dot.r}
            fill={dot.color}
            opacity="0.85"
            style={{ animation: `vp-scale-in 0.4s cubic-bezier(0.16,1,0.32,1) ${dot.delay} both` }}
          />
        ))}

        {/* ── Thin connecting lines between evidence points ─────────── */}
        <g opacity="0.25" style={{ animation: "vp-fade-in 0.6s ease 1.15s both" }}>
          <line x1="96" y1="155" x2="144" y2="200" stroke="var(--vp-navy, #1a3460)" strokeWidth="1.2" />
          <line x1="144" y1="200" x2="210" y2="128" stroke="var(--vp-navy, #1a3460)" strokeWidth="1.2" />
          <line x1="210" y1="128" x2="276" y2="200" stroke="var(--vp-navy, #1a3460)" strokeWidth="1.2" />
          <line x1="276" y1="200" x2="324" y2="155" stroke="var(--vp-navy, #1a3460)" strokeWidth="1.2" />
          <line x1="210" y1="128" x2="210" y2="320" stroke="var(--vp-emerald, #00b866)" strokeWidth="1.5" />
        </g>

        {/* ── Edge lighting from top-left ──────────────────────────── */}
        <rect
          width="420" height="462"
          fill="url(#edge-light)"
          style={{ animation: "vp-fade-in 0.8s ease 1.0s both" }}
        />

        {/* Shield boundary inner highlight — top edge */}
        <path
          d="M210 22 C 210 22, 370 62, 390 85 L 390 88 C 370 65, 210 25, 210 25 C 210 25, 50 65, 30 88 L 30 85 C 50 62, 210 22, 210 22 Z"
          fill="white"
          opacity="0.20"
          style={{ animation: "vp-fade-in 0.6s ease 1.2s both" }}
        />
      </g>

      {/* ── Shield outer border ─────────────────────────────────────── */}
      <path
        d="M210 10 C 210 10, 380 55, 400 80 L 400 210 C 400 320, 310 400, 210 452 C 110 400, 20 320, 20 210 L 20 80 C 40 55, 210 10, 210 10 Z"
        stroke="var(--vp-navy, #1a3460)"
        strokeWidth="2"
        strokeOpacity="0.22"
        fill="none"
        style={{ animation: "vp-fade-in 0.5s ease 0.6s both" }}
      />
      {/* Emerald inner highlight on border */}
      <path
        d="M210 10 C 210 10, 380 55, 400 80 L 400 210 C 400 320, 310 400, 210 452 C 110 400, 20 320, 20 210 L 20 80 C 40 55, 210 10, 210 10 Z"
        stroke="var(--vp-emerald, #00b866)"
        strokeWidth="1"
        strokeOpacity="0.18"
        fill="none"
        strokeDasharray="6 14"
        style={{ animation: "vp-fade-in 0.5s ease 1.0s both" }}
      />
    </svg>
  );
}
