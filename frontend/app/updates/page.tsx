import Link from "next/link";
import { ArrowLeft, BellRing } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function UpdatesPage() {
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
            <BellRing className="size-6 text-primary" aria-hidden="true" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              Verified Updates
            </h1>
            <p className="text-muted-foreground">Stay Informed</p>
          </div>
        </div>

        <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
          Real-time updates on recruitment agency status, official migration policies,
          reported scams, and worker advisory announcements.
        </p>

        <Card className="border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-16 text-center">
            <BellRing className="mb-4 size-10 text-muted-foreground/50" aria-hidden="true" />
            <h2 className="text-xl font-semibold text-foreground">Coming Soon</h2>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              This updates feed is under development. Verified Updates will bring you the latest,
              officially-sourced news regarding migrant pathways and safety bulletins.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
