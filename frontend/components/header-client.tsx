"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { useLanguage } from "@/lib/hooks/use-language";
import { VeripathBrand } from "@/components/global/veripath-brand";
import { AccessibilityControls } from "@/components/global/accessibility-controls";

const navLinks = [
  { href: "/", key: "nav.home" as const },
  { href: "/profile-matcher", key: "nav.profileMatcher" as const },
  { href: "/document-auditor", key: "nav.documentAuditor" as const },
  { href: "/updates", key: "nav.updates" as const },
  { href: "/resources", key: "nav.resources" as const },
  { href: "/about", key: "nav.about" as const },
];

export function HeaderClient() {
  const pathname = usePathname();
  const { locale, setLocale, t } = useLanguage();
  const [sheetOpen, setSheetOpen] = useState(false);

  const toggleLanguage = () => {
    setLocale(locale === "en" ? "bn" : "en");
  };

  const primaryCtaText = locale === "bn" ? "একটি সুযোগ যাচাই করুন" : "Verify an Opportunity";

  return (
    <>
      {/* Official Veripath logo */}
      <div className="flex shrink-0 items-center">
        <VeripathBrand size="md" />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden xl:gap-8 lg:gap-6 md:gap-4 md:flex items-center" aria-label="Main navigation">
        {navLinks.map((link) => {
          const isActive =
            pathname === link.href ||
            (link.href !== "/" && pathname.startsWith(link.href));
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative py-1.5 text-sm font-medium transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring rounded-sm ${
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              {t(link.key)}
              {isActive && (
                <span
                  className="absolute -bottom-[21px] left-0 right-0 h-0.5 rounded-full bg-primary"
                  aria-hidden="true"
                />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Desktop Controls & CTA */}
      <div className="hidden items-center md:gap-3 lg:gap-4 md:flex">
        {/* Language Switcher */}
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleLanguage}
          aria-label={`Switch language to ${locale === "en" ? "Bengali" : "English"}`}
          className="min-w-[4rem] text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-muted focus-visible:ring-2 focus-visible:ring-primary rounded-lg transition-colors px-3 py-1.5"
        >
          {locale === "en" ? "বাংলা" : "English"}
        </Button>

        {/* Accessibility Controls Dropdown */}
        <AccessibilityControls variant="floating" />

        {/* Primary CTA */}
        <Button
          render={<Link href="/profile-matcher" />}
          variant="default"
          size="sm"
          className="font-semibold shadow-sm hover:shadow transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
        >
          {primaryCtaText}
        </Button>
      </div>

      {/* Mobile controls */}
      <div className="flex items-center gap-2 md:hidden">
        {/* Language Switcher (Mobile Header) */}
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleLanguage}
          aria-label={`Switch language to ${locale === "en" ? "Bengali" : "English"}`}
          className="text-sm font-semibold px-2.5 h-9 text-muted-foreground hover:text-foreground rounded-lg"
        >
          {locale === "en" ? "বাংলা" : "English"}
        </Button>

        {/* Mobile Navigation Drawer */}
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label={t("nav.menu")}
                className="size-10 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary"
              />
            }
          >
            <Menu className="size-6" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[310px] sm:w-[360px] flex flex-col justify-between p-0 border-l border-border bg-background">
            <div className="flex flex-col gap-6 px-6 pt-6 overflow-y-auto">
              {/* Logo in mobile nav */}
              <div className="flex items-center justify-between pb-2 border-b border-border/60">
                <VeripathBrand size="sm" onClick={() => setSheetOpen(false)} />
              </div>

              {/* Mobile primary links */}
              <nav className="flex flex-col gap-1.5" aria-label="Mobile navigation">
                {navLinks.map((link) => {
                  const isActive =
                    pathname === link.href ||
                    (link.href !== "/" && pathname.startsWith(link.href));
                  return (
                    <SheetClose
                      key={link.href}
                      render={
                        <Link
                          href={link.href}
                          onClick={() => setSheetOpen(false)}
                          aria-current={isActive ? "page" : undefined}
                          className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                            isActive
                              ? "bg-primary/5 text-primary"
                              : "text-foreground hover:bg-muted hover:text-foreground"
                          }`}
                        />
                      }
                    >
                      <span>{t(link.key)}</span>
                      <ChevronRight className={`size-4 transition-transform ${isActive ? "text-primary" : "text-muted-foreground/50"}`} />
                    </SheetClose>
                  );
                })}

                {/* Secondary: Report a Scam in mobile list */}
                <SheetClose
                  render={
                    <Link
                      href="/report"
                      onClick={() => setSheetOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-amber-600 dark:text-amber-500 hover:bg-amber-500/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors`}
                    />
                  }
                >
                  <span>{t("nav.reportScam")}</span>
                  <ChevronRight className="size-4 text-amber-600/50 dark:text-amber-500/50" />
                </SheetClose>
              </nav>

              <hr className="border-border/60" />

              {/* Inline accessibility controls for mobile menu */}
              <div className="pb-4">
                <AccessibilityControls variant="inline" />
              </div>
            </div>

            {/* Mobile Footer Area inside Sheet */}
            <div className="p-6 bg-muted/30 border-t border-border/40">
              <SheetClose
                render={
                  <Link
                    href="/profile-matcher"
                    onClick={() => setSheetOpen(false)}
                    className="w-full flex items-center justify-center bg-primary text-primary-foreground font-bold rounded-xl h-11 shadow-sm hover:shadow transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary text-base"
                  />
                }
              >
                {primaryCtaText}
              </SheetClose>
              <p className="text-[10px] text-muted-foreground text-center mt-3 max-w-xs mx-auto leading-normal">
                Veripath provides informational guidance and does not replace legal or professional advice.
              </p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
