import { Hero } from "@/components/landing/hero";
import { TrustStrip } from "@/components/landing/trust-strip";
import { ProblemSection } from "@/components/landing/problem-section";
import { ToolsSection } from "@/components/landing/tools-section";
import { HowItWorks } from "@/components/landing/how-it-works";
import { RiskSystem } from "@/components/landing/risk-system";
import { AccessibilitySection } from "@/components/landing/accessibility-section";
import { SourcesSection } from "@/components/landing/sources-section";
import { FinalCta } from "@/components/landing/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ProblemSection />
      <ToolsSection />
      <HowItWorks />
      <RiskSystem />
      <AccessibilitySection />
      <SourcesSection />
      <FinalCta />
    </>
  );
}
