import Link from "next/link";
import { ArrowLeft, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ReportPage() {
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
            <Flag className="size-6 text-primary" aria-hidden="true" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              Report a Document
            </h1>
            <p className="text-muted-foreground">Report / Feedback</p>
          </div>
        </div>

        <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
          Help us improve Veripath by reporting suspicious documents or providing
          feedback on our analysis.
        </p>

        <Card className="border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-16 text-center">
            <Flag className="mb-4 size-10 text-muted-foreground/50" aria-hidden="true" />
            <h2 className="text-xl font-semibold text-foreground">Coming Soon</h2>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              This feature is under development. You will be able to report
              suspicious recruitment documents and provide feedback.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}