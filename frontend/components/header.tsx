"use client";

import { useEffect, useState } from "react";
import { HeaderClient } from "./header-client";
import { SkipLink } from "./global/skip-link";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount to handle cases where page starts scrolled
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <SkipLink />
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "border-b border-border bg-background/95 shadow-sm vp-header-glass"
            : "border-b border-transparent bg-background/40"
        }`}
        role="banner"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <HeaderClient />
        </div>
      </header>
    </>
  );
}
