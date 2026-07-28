import { ShieldCheck, AlertTriangle, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";

type RiskLevel = "green" | "amber" | "red";

const riskConfig = {
  green: {
    Icon: ShieldCheck,
    label: "No Known Warning Signs",
    textClass: "text-risk-green",
    bgClass: "bg-risk-green",
    borderClass: "border-risk-green",
    a11yLabel: "Green risk level: no known warning signs found",
  },
  amber: {
    Icon: AlertTriangle,
    label: "Requires Caution",
    textClass: "text-risk-amber",
    bgClass: "bg-risk-amber",
    borderClass: "border-risk-amber",
    a11yLabel: "Amber risk level: requires caution or independent verification",
  },
  red: {
    Icon: ShieldAlert,
    label: "Serious Warning Signs",
    textClass: "text-risk-red",
    bgClass: "bg-risk-red",
    borderClass: "border-risk-red",
    a11yLabel: "Red risk level: serious warning signs found",
  },
};

export function RiskBadge({
  level,
  className,
}: {
  level: RiskLevel;
  className?: string;
}) {
  const config = riskConfig[level];
  const { Icon } = config;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
        config.bgClass,
        config.textClass,
        className
      )}
      role="status"
      aria-label={config.a11yLabel}
    >
      <Icon className="size-3.5" aria-hidden="true" />
      <span>{config.label}</span>
    </span>
  );
}

export function RiskDot({
  level,
  className,
}: {
  level: RiskLevel;
  className?: string;
}) {
  const config = riskConfig[level];
  return (
    <span
      className={cn("inline-block size-2 rounded-full", config.bgClass, className)}
      aria-label={config.a11yLabel}
      role="status"
    />
  );
}