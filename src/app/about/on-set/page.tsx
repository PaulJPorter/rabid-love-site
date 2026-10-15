import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { onSetNotes, onSetStills } from "@/lib/onset";

const PLACEHOLDER = "/assets/placeholder.svg";

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
        {onSetStills.map((still) => {
          const showImage = Boolean(still.asset) && still.asset !== PLACEHOLDER;
          return (
            <article
              key={still.title}
              className={
                showImage
                  ? "overflow-hidden border border-border bg-card"
                  : "border border-border bg-card p-5"
              }
            >
              {showImage ? (
                <div className="vhs-frame relative aspect-[4/3] overflow-hidden border-b border-border bg-black">
                  <Image
                    src={still.asset}
                    alt={still.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ) : null}
              <div className={showImage ? "p-5" : undefined}>
                <h3 className="text-lg text-foreground">{still.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{still.caption}</p>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
}
