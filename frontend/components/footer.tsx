"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { FooterClient } from "./footer-client";
import { VeripathBrand } from "@/components/global/veripath-brand";
import { useLanguage } from "@/lib/hooks/use-language";
import { ShieldCheck, CalendarRange, AlertTriangle } from "lucide-react";

export function Footer() {
  const { locale, t } = useLanguage();

  // Multi-lingual copy for localized footer sections
  const copy = {
    brandTagline: locale === "bn" ? "টাকা দেওয়ার আগে যাচাই করুন" : "Verify Before You Pay",
    mission: locale === "bn" 
      ? "ভেরিপাথ অভিবাসী কর্মী এবং চাকরিপ্রার্থীদের নিয়োগের অফার, ভিসা ফি এবং পথের প্রয়োজনীয়তা সরকারি তথ্যের সাথে মিলিয়ে দেখতে সাহায্য করে।"
      : "Veripath helps migrant workers and job-seekers check recruitment offers, visa fees, and pathway requirements against officially sourced information.",
    trustTitle: locale === "bn" ? "নির্ভরযোগ্য তথ্য" : "Evidence-Based Verification",
    trustSourceText: locale === "bn"
      ? "ফলাফলগুলো অফিসিয়াল সরকারি রেকর্ড, আইন এবং অফিসিয়াল তথ্যসূত্রের সাথে তুলনা করা হয়।"
      : "Results are compared directly against curated official records, labor laws, and embassy announcements.",
    trustDateText: locale === "bn"
      ? "তথ্যের নির্ভরযোগ্যতা নিশ্চিত করতে প্রতিটি তথ্যসূত্রের শেষ পর্যালোচনার তারিখ স্পষ্টভাবে উল্লেখ থাকে।"
      : "Every verified source displays its last-reviewed date so you can check how recently it was updated.",
    trustNoGuaranteeText: locale === "bn"
      ? "সবুজ ফলাফল মানেই শতভাগ গ্যারান্টি নয়। অভিবাসনের সুযোগ পরিবর্তনের সম্ভাবনা থাকে বিধায় যেকোনো লেনদেনের পূর্বে সতর্ক থাকুন।"
      : "A green status indicates no known warning signs, but does not guarantee safety. Conditions change, so check again before paying.",
    disclaimerText: locale === "bn"
      ? "ভেরিপাথ তথ্যগত নির্দেশনা প্রদান করে এবং আইনি বা পেশাদার পরামর্শের বিকল্প নয়। অভিবাসন সংক্রান্ত চূড়ান্ত সিদ্ধান্ত নেওয়ার পূর্বে যোগ্য পেশাদারদের সাথে পরামর্শ করুন।"
      : "Veripath provides informational guidance and does not replace legal or professional advice. Always verify critical details with official bodies and consult qualified professionals before committing your money."
  };

  return (
    <footer
      className="border-t border-border/80 bg-background/50 transition-colors"
      role="contentinfo"
      style={{ backgroundColor: "var(--vp-surface-tint, oklch(0.963 0.005 90))" }}
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-2">
            <div className="flex items-center -ml-2.5">
              <VeripathBrand size="md" />
            </div>
            <p
              className="text-base font-bold tracking-tight text-brand-navy"
              style={{ color: "var(--vp-navy, oklch(0.22 0.08 252))" }}
            >
              {copy.brandTagline}
            </p>
            <p
              className="text-sm leading-relaxed max-w-sm text-muted-foreground"
            >
              {copy.mission}
            </p>
          </div>

          {/* Product Links Column */}
          <div>
            <h3
              className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-navy"
              id="footer-product"
              style={{ color: "var(--vp-navy, oklch(0.22 0.08 252))" }}
            >
              {t("footer.product")}
            </h3>
            <nav aria-labelledby="footer-product" className="flex flex-col gap-3">
              <Link
                href="/profile-matcher"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded"
              >
                {t("nav.profileMatcher")}
              </Link>
              <Link
                href="/document-auditor"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded"
              >
                {t("nav.documentAuditor")}
              </Link>
              <Link
                href="/updates"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded"
              >
                {t("nav.updates")}
              </Link>
            </nav>
          </div>

          {/* Resources Column */}
          <div>
            <h3
              className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-navy"
              id="footer-resources"
              style={{ color: "var(--vp-navy, oklch(0.22 0.08 252))" }}
            >
              {t("footer.resources")}
            </h3>
            <nav aria-labelledby="footer-resources" className="flex flex-col gap-3">
              <Link
                href="/resources"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded"
              >
                {t("nav.resources")}
              </Link>
              <Link
                href="/report"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded text-amber-600 dark:text-amber-500 hover:text-amber-700 dark:hover:text-amber-400"
              >
                {t("nav.reportScam")}
              </Link>
            </nav>
          </div>

          {/* About Column */}
          <div>
            <h3
              className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-navy"
              id="footer-about"
              style={{ color: "var(--vp-navy, oklch(0.22 0.08 252))" }}
            >
              {t("footer.about")}
            </h3>
            <nav aria-labelledby="footer-about" className="flex flex-col gap-3">
              <Link
                href="/about"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded"
              >
                {locale === "bn" ? "ভেরিপাথ সম্পর্কে" : "About Veripath"}
              </Link>
              <span className="cursor-default text-sm text-muted-foreground/60 select-none">
                {t("footer.contact")}
              </span>
            </nav>
          </div>
        </div>

        <Separator className="my-12 opacity-60" />

        {/* Trust Statement Grid */}
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {/* Trust Source */}
          <div className="flex gap-3 items-start bg-background/30 p-4 rounded-xl border border-border/40">
            <ShieldCheck className="size-5 text-primary shrink-0 mt-0.5" />
            <div className="flex flex-col gap-0.5">
              <h4 className="text-xs font-bold text-foreground uppercase tracking-wide">{copy.trustTitle}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{copy.trustSourceText}</p>
            </div>
          </div>
          
          {/* Last reviewed */}
          <div className="flex gap-3 items-start bg-background/30 p-4 rounded-xl border border-border/40">
            <CalendarRange className="size-5 text-primary shrink-0 mt-0.5" />
            <div className="flex flex-col gap-0.5">
              <h4 className="text-xs font-bold text-foreground uppercase tracking-wide">{locale === "bn" ? "শেষ পর্যালোচিত" : "Traceable Sources"}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{copy.trustDateText}</p>
            </div>
          </div>

          {/* Warning Risk Limit */}
          <div className="flex gap-3 items-start bg-background/30 p-4 rounded-xl border border-border/40">
            <AlertTriangle className="size-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="flex flex-col gap-0.5">
              <h4 className="text-xs font-bold text-foreground uppercase tracking-wide">{locale === "bn" ? "ঝুঁকি সতর্কতা" : "Safety Verification"}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{copy.trustNoGuaranteeText}</p>
            </div>
          </div>
        </div>

        <Separator className="my-10 opacity-60" />

        {/* Footer client: copyright line, language, and accessibility switches */}
        <FooterClient />

        {/* Legal Disclaimer */}
        <p
          className="mt-8 max-w-4xl text-xs leading-relaxed text-muted-foreground border-l-2 border-primary/20 pl-4 py-1"
        >
          {copy.disclaimerText}
        </p>
      </div>
    </footer>
  );
}
