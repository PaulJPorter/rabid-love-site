import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { onSetNotes, onSetStills } from "@/lib/onset";

export const metadata: Metadata = {
  title: "On Set",
  description:
    "Behind-the-scenes notes from the Rabid Love Kansas and Burbank shoot, transcribed from the original official On Set page.",
};

export default function OnSetPage() {
  return (
    <>
      <PageHero kicker="About · On Set" title="Hanston, Kansas / Burbank, 2012" />

      <section className="mx-auto max-w-6xl px-4 py-8">
        <ul className="grid gap-3 md:grid-cols-2">
          {onSetNotes.map((note) => (
            <li key={note} className="border-l-2 border-cyan/50 pl-4 text-sm text-muted-foreground">
              {note}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 pb-14 md:grid-cols-2">
        {onSetStills.map((still) => (
          <article key={still.title} className="border border-border bg-card p-5">
            <h3 className="text-lg text-foreground">{still.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{still.caption}</p>
          </article>
        ))}
      </section>
    </>
  );
}
