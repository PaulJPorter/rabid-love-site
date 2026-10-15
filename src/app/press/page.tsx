import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/page-hero";
import { pressItems } from "@/lib/press";
import { featuredQuotes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Press",
  description:
    "Verified Rabid Love reviews and the original Latest News coverage list, with live links preferred and archive copies labeled.",
};

const kindLabel = {
  review: "Review",
  interview: "Interview",
  podcast: "Podcast",
  news: "News",
};

export default function PressPage() {
  const live = pressItems.filter((item) => item.status === "live");
  const archived = pressItems.filter((item) => item.status === "archive");

  return (
    <>
      <PageHero kicker="Press · Latest News" title="What the scene said" />

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-3xl">Verified reviews</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {featuredQuotes.map((item) => (
            <Card key={item.href} className="border-magenta/30">
              <CardContent className="space-y-3 p-5">
                {item.score ? (
                  <Badge className="bg-magenta/20 text-magenta">{item.score}</Badge>
                ) : null}
                <p className="text-lg leading-snug">“{item.quote}”</p>
                <p className="font-mono text-xs uppercase tracking-wider text-cyan">
                  {item.outlet} · {item.author} · {item.date}
                </p>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-magenta hover:underline"
                >
                  Open live review
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <h2 className="text-3xl">Live coverage</h2>
        <ul className="mt-6 divide-y divide-border border border-border">
          {live.map((item) => (
            <li key={item.href} className="flex flex-col gap-2 px-4 py-4 md:flex-row md:items-baseline md:justify-between">
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  {item.date} · {item.outlet}
                  {item.author ? ` · ${item.author}` : ""}
                </p>
                {item.note ? (
                  <p className="mt-1 text-sm text-muted-foreground">{item.note}</p>
                ) : null}
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="outline">{kindLabel[item.kind]}</Badge>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase tracking-wider text-cyan hover:underline"
                >
                  Live
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-10 pb-14">
        <h2 className="text-3xl">Archive-only coverage</h2>
        <ul className="mt-6 space-y-3">
          {archived.map((item) => (
            <li key={item.href} className="border border-dashed border-border bg-card/40 px-4 py-3">
              <p className="font-medium">{item.title}</p>
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                {item.date} · {item.outlet} · {kindLabel[item.kind]}
              </p>
              {item.note ? (
                <p className="mt-1 text-sm text-muted-foreground">{item.note}</p>
              ) : null}
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block font-mono text-xs uppercase tracking-wider text-acid hover:underline"
              >
                Archive copy
              </a>
            </li>
          ))}
        </ul>
      </section>

    </>
  );
}
