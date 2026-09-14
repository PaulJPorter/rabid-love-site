import type { Metadata } from "next";
import { AssetTile } from "@/components/asset-tile";
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
      <PageHero kicker="About · On Set" title="Hanston, Kansas / Burbank, 2012">
        Captions are from the original official On Set page. Still frames are placeholders
        until Paul drops BTS files into the listed paths.
      </PageHero>

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
          <AssetTile key={still.dropName} {...still} />
        ))}
      </section>
    </>
  );
}
