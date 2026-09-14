import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { links } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Rabid Love: email rabidlove1984@gmail.com for press and fans. X @RabidLove1984 is the primary social channel.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero kicker="Contact" title="#CatchTheVirus">
        Press, bookings, and fan mail go to the live inbox. X is the primary social
        channel. The 2010s sales addresses are dead and are not linked.
      </PageHero>

      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-2">
        <section className="border border-blood/50 bg-card p-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-blood">
            Primary contact
          </p>
          <h2 className="mt-2 text-3xl">Rabid Love / press &amp; fans</h2>
          <p className="mt-3 text-muted-foreground">
            Interviews, screeners, and fan notes: {links.email}
          </p>
          <Button asChild className="mt-6 h-12 bg-blood text-white hover:bg-[#ff0000]">
            <a href={links.mailto}>Email {links.email}</a>
          </Button>

          <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-orange">
            Primary social
          </p>
          <h3 className="mt-2 text-2xl">X / @RabidLove1984</h3>
          <p className="mt-3 text-muted-foreground">
            Follow and DM the official account. Same handle as the live inbox.
          </p>
          <Button
            asChild
            variant="outline"
            className="mt-6 h-12 border-orange bg-transparent text-orange hover:bg-orange/10 hover:text-orange"
          >
            <a href={links.x} target="_blank" rel="noopener noreferrer">
              Open @RabidLove1984
            </a>
          </Button>
        </section>

        <section className="space-y-5">
          <div className="border border-border bg-card p-5">
            <h2 className="text-2xl">Also online</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href={links.facebook} className="text-cyan hover:underline">
                  Facebook / RabidLoveMovie
                </a>{" "}
                <span className="text-muted-foreground">— tombstone, low priority</span>
              </li>
              <li>
                <a href={links.imdb} className="text-cyan hover:underline">
                  IMDb title page
                </a>
              </li>
              <li>
                <a href={links.tubi} className="text-cyan hover:underline">
                  Tubi listing
                </a>
              </li>
            </ul>
          </div>

          <div className="border border-dashed border-border p-5 text-sm text-muted-foreground">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-acid">
              Historical emails — dead, not linked
            </p>
            <p className="mt-2">
              2014–2016 Contact page listed Paul@RogueTaurus.com (inquiries) and screeners
              via Acort International / Midnight Releasing.
            </p>
            <p className="mt-2">
              2017–2018 Contact page replaced that with Sales@RabidLoveMovie.com for
              “sales and distribution inquiries or other questions.”
            </p>
            <p className="mt-2">
              Both addresses are dead. They are shown here as Archive history only — no
              mailto, no current CTA.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
