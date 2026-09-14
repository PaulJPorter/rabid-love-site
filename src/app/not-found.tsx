import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-start gap-4 px-4 py-24">
      <p className="font-mono text-xs uppercase tracking-[0.28em] text-blood">404 · Tracking error</p>
      <h1 className="text-5xl">This tape is missing</h1>
      <p className="text-muted-foreground">
        That URL isn’t on the official site. The film still is — stream it on Tubi or go
        home.
      </p>
      <div className="flex gap-3">
        <Button asChild className="bg-magenta text-primary-foreground">
          <Link href="/">Home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/watch">Watch</Link>
        </Button>
      </div>
    </div>
  );
}
