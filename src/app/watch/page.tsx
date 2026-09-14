import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { WatchCtas } from "@/components/watch-cta";
import { film, links } from "@/lib/site";

export const metadata: Metadata = {
  title: "Watch",
  description: "Stream Rabid Love (2013) free on Tubi. Official trailer included — no autoplay.",
};

export default function WatchPage() {
  return (
    <>
      <PageHero kicker="Watch" title="Stream it free on Tubi">
        {film.runtime} · {film.rating} · {film.genre}. The current, verified place to watch
        is Tubi. Older 2014 VOD storefronts from the Flash-era site are not listed here
        unless they still resolve as a current official outlet.
      </PageHero>

      <div className="mx-auto max-w-6xl space-y-10 px-4 py-12">
        <WatchCtas showTrailerLink={false} />

        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-cyan">
              Official trailer
            </p>
            <div className="vhs-frame aspect-video overflow-hidden border border-cyan/30 bg-black">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${links.trailerId}?rel=0`}
                title="Rabid Love official trailer"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Trailer embed from the clip that ran on the original official homepage (
              <a
                href={links.trailer}
                className="text-cyan hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
              ). No autoplay. An earlier teaser also exists:{" "}
              <a
                href={links.teaser}
                className="text-cyan hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube teaser
              </a>
              .
            </p>
          </div>

          <aside className="border border-border bg-card p-5">
            <h2 className="text-2xl">Where to watch</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed">
              <li>
                <strong className="text-magenta">Tubi (current)</strong>
                <br />
                Free with ads.{" "}
                <a
                  href={links.tubi}
                  className="text-cyan hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Rabid Love on Tubi
                </a>
                .
              </li>
              <li>
                <strong>Historical distribution</strong>
                <br />
                Acort International / Midnight Releasing handled the 2013–2014 DVD and VOD
                release (BroadwayWorld, July 31, 2013 and January 27, 2014). Those store
                links are not current watch CTAs.
              </li>
              <li>
                <strong>Not listed</strong>
                <br />
                Gravitas and other platforms are omitted unless a live, official listing is
                verified.
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </>
  );
}
