"use client";

import Link from "next/link";
import { Dialog, DialogTrigger, DialogContent, DialogClose, DialogTitle, DialogDescription, DialogHeader } from "@/components/ui/dialog";
import { ArrowRight, MapPin, ShieldCheck } from "lucide-react";
import { ReactElement } from "react";
import { useLanguage } from "@/lib/hooks/use-language";

export function GetStartedDialog({ children }: { children: ReactElement }) {
  const { locale } = useLanguage();

  const copy = {
    title: locale === "bn" ? "আপনি কোনটি করতে চান?" : "What would you like to do?",
    desc: locale === "bn"
      ? "আপনার প্রয়োজন অনুযায়ী একটি টুল নির্বাচন করুন। উভয় টুলই আমাদের অফিসিয়াল ডেটাবেস ব্যবহার করে কাজ করে।"
      : "Select a tool based on your current situation. Both use our verified information database.",
    matcherTitle: locale === "bn" ? "আমার পথ খুঁজুন" : "Check My Pathway",
    matcherDesc: locale === "bn"
      ? "আপনার প্রোফাইলের ওপর ভিত্তি করে সরকারি ফি, প্রয়োজনীয়তা এবং ধাপগুলি দেখুন।"
      : "See official fees, requirements, and steps based on your specific profile.",
    auditorTitle: locale === "bn" ? "একটি ডকুমেন্ট যাচাই করুন" : "Audit a Document",
    auditorDesc: locale === "bn"
      ? "একটি নিয়োগের বিজ্ঞাপন বা অফার স্ক্যান করে সন্দেহজনক দাবিগুলি চিহ্নিত করুন।"
      : "Scan a recruitment ad or offer to highlight suspicious claims and missing information.",
  };

  return (
    <Dialog>
      <DialogTrigger render={children} />
      <DialogContent className="sm:max-w-md p-0 overflow-hidden bg-background">
        <DialogHeader className="p-6 pb-4 bg-muted/40 border-b border-border/50">
          <DialogTitle className="text-xl">{copy.title}</DialogTitle>
          <DialogDescription className="text-sm mt-2">{copy.desc}</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-0 p-3">
          <DialogClose
            render={
              <Link
                href="/profile-matcher"
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted focus-visible:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors group"
              />
            }
          >
            <div className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-lg bg-[var(--vp-emerald-tint,#e8fdf2)] text-[var(--vp-emerald,#00b866)]">
              <MapPin className="size-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-foreground group-hover:text-[var(--vp-emerald,#00b866)] transition-colors">{copy.matcherTitle}</h3>
                <ArrowRight className="size-4 text-muted-foreground group-hover:text-[var(--vp-emerald,#00b866)] group-hover:translate-x-1 transition-all" />
              </div>
              <p className="text-sm text-muted-foreground mt-1 leading-snug">{copy.matcherDesc}</p>
            </div>
          </DialogClose>

          <DialogClose
            render={
              <Link
                href="/document-auditor"
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted focus-visible:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors group"
              />
            }
          >
            <div className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-lg bg-[var(--vp-official-bg,#eef2ff)] text-[var(--vp-official,#3730a3)]">
              <ShieldCheck className="size-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-foreground group-hover:text-[var(--vp-official,#3730a3)] transition-colors">{copy.auditorTitle}</h3>
                <ArrowRight className="size-4 text-muted-foreground group-hover:text-[var(--vp-official,#3730a3)] group-hover:translate-x-1 transition-all" />
              </div>
              <p className="text-sm text-muted-foreground mt-1 leading-snug">{copy.auditorDesc}</p>
            </div>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
