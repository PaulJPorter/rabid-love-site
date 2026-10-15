import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { designNotes, props } from "@/lib/production-design";

export const metadata: Metadata = {
  title: "Production Design",
  description:
    "Period props, Hann’s Town Beer, and 1984 dressing designed by Lance L. Ziesch for Rabid Love.",
};

export default function ProductionDesignPage() {
  return (
    <>
      <PageHero kicker="About · Production Design" title="Foam is where the heart is" />

      <section className="mx-auto max-w-6xl px-4 py-8">
        <ul className="space-y-3">
          {designNotes.map((note) => (
            <li key={note} className="text-sm leading-relaxed text-muted-foreground">
              {note}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 pb-14 md:grid-cols-2">
        {props.map((item) => (
          <article key={item.title} className="border border-border bg-card p-5">
            <h3 className="text-lg text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.caption}</p>
          </article>
        ))}
      </section>
    </>
  );
}
