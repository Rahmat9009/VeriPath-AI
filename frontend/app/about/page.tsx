import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto w-full max-w-3xl">
        <Button
          render={<Link href="/" />}
          variant="ghost"
          className="mb-8 self-start"
        >
          <ArrowLeft className="mr-2 size-4" aria-hidden="true" />
          Back to Home
        </Button>

        <div className="flex items-center gap-3 mb-6">
          <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
            <Shield className="size-6 text-primary" aria-hidden="true" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              About Veripath AI
            </h1>
          </div>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Our Mission</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Veripath helps young people compare migration opportunities and suspicious
              documents with understandable, officially sourced information before paying
              an agent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">What We Do</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              We are building tools to reduce information asymmetry in international
              migration. Our initial focus is on Bangladesh-to-Qatar employment pathways,
              with more routes being added.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Important Disclaimer</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Veripath provides informational guidance and does not replace legal or
              professional advice. Always verify critical information with official sources
              and consult with qualified professionals.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}