import type { Metadata } from "next";
import { AssetTile } from "@/components/asset-tile";
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
      <PageHero kicker="About · Production Design" title="Foam is where the heart is">
        Lance L. Ziesch’s period packaging, Brian L. Reece’s claws and bear trap, and the
        Kansas locations that sold 1984. Copy is from the original official Production
        Design page.
      </PageHero>

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
          <AssetTile key={item.dropName} {...item} />
        ))}
      </section>
    </>
  );
}
