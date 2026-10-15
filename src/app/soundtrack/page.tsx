import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import {
  artists,
  scoreLink,
  soundtrackIntro,
  soundtrackQuotes,
  soundtrackStores,
} from "@/lib/soundtrack";

export const metadata: Metadata = {
  title: "Soundtrack",
  description:
    "Songs in Rabid Love, the synth score by Nick Nielsen, and the soundtrack on Spotify.",
};

export default function SoundtrackPage() {
  return (
    <>
      <PageHero kicker="About · Soundtrack" title="Songs in the film" />

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-12">
        <ul className="flex flex-wrap gap-3">
          {soundtrackStores.map((store) => (
            <li key={store.href}>
              <a
                href={store.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center border border-cyan/50 px-5 font-mono text-xs uppercase tracking-[0.2em] text-cyan hover:bg-cyan/10"
              >
                {store.label}
              </a>
            </li>
          ))}
        </ul>

        <section className="border border-border bg-card p-5">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-acid">
            Producer note
          </p>
          <p className="mt-3 leading-relaxed text-foreground/90">“{soundtrackIntro}”</p>
        </section>

        <section className="border border-cyan/30 bg-card p-5">
          <h2 className="text-3xl">
            Score by{" "}
            <a
              href={scoreLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan hover:underline"
            >
              {scoreLink.name}
            </a>
          </h2>
        </section>

        <section className="space-y-4">
          {artists.map((artist) => {
            const liveLinks = artist.links.filter((link) => link.live);
            return (
              <article key={artist.name} className="border border-border bg-card p-5">
                <h2 className="text-2xl">{artist.name}</h2>
                <ul className="mt-3 space-y-2">
                  {artist.tracks.map((track) => (
                    <li key={track.title} className="text-sm">
                      <span className="text-foreground">“{track.title}”</span>
                      {track.writers ? (
                        <span className="text-muted-foreground"> — {track.writers}</span>
                      ) : null}
                    </li>
                  ))}
                </ul>
                {liveLinks.length ? (
                  <ul className="mt-4 space-y-2">
                    {liveLinks.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs uppercase tracking-wider text-cyan hover:underline"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            );
          })}
        </section>

        <section>
          <ul className="space-y-4">
            {soundtrackQuotes.map((item) => (
              <li key={item.quote} className="border-l-2 border-magenta/50 pl-4">
                <p className="text-lg">“{item.quote}”</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {item.attribution}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
