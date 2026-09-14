import type { Metadata } from "next";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/page-hero";
import {
  artists,
  score,
  sourceLabels,
  soundtrackIntro,
  soundtrackQuotes,
  soundtrackSources,
} from "@/lib/soundtrack";

export const metadata: Metadata = {
  title: "Soundtrack",
  description:
    "Rabid Love songs from IMDb and the official 2014 soundtrack page, plus verified artist links. Score credited as Nick Nielsen / Nicholas Nielsen.",
};

export default function SoundtrackPage() {
  return (
    <>
      <PageHero kicker="About · Soundtrack" title="Songs in the film">
        Track list is built from the{" "}
        <a href={soundtrackSources.imdb.href} className="text-cyan hover:underline">
          IMDb soundtrack page
        </a>
        , the{" "}
        <a href={soundtrackSources.official.href} className="text-cyan hover:underline">
          2016 Archive soundtrack.html
        </a>
        , and the June 2014 Howlin’ Wolf producer note. Artist URLs are linked only when
        they still resolve. No invented Spotify or Bandcamp pages.
      </PageHero>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-[280px_1fr]">
        <div>
          <div className="vhs-frame overflow-hidden border border-magenta/30">
            <Image
              src="/assets/soundtrack-cover.jpg"
              alt="Rabid Love original motion picture soundtrack cover"
              width={548}
              height={548}
              className="h-auto w-full"
            />
          </div>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            Cover from the original official site. Replace with a higher-res Dropbox file
            if you have one.
          </p>
          <ul className="mt-5 space-y-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            <li>
              <a href={soundtrackSources.imdb.href} className="text-cyan hover:underline">
                IMDb soundtracks
              </a>
            </li>
            <li>
              <a href={soundtrackSources.official.href} className="text-cyan hover:underline">
                Archive soundtrack.html
              </a>
            </li>
            <li>
              <a href={soundtrackSources.howlinWolf.href} className="text-cyan hover:underline">
                Howlin’ Wolf producer note
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <section className="border border-border bg-card p-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-acid">
              Producer note
            </p>
            <p className="mt-3 leading-relaxed text-foreground/90">“{soundtrackIntro}”</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Same wording appears on the official Archive soundtrack page and in Howlin’
              Wolf Records’ June 2014 post.
            </p>
          </section>

          <section className="border border-cyan/30 bg-card p-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">Score</p>
            <h2 className="mt-2 text-3xl">Synth score — credited two ways</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
              {score.verified.map((item) => (
                <li key={item.name}>
                  <strong className="text-foreground">{item.name}</strong> — {item.where}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {score.notAsserted}
            </p>
            <p className="mt-3 text-sm">
              <a
                href={soundtrackSources.horrorFix.href}
                className="text-cyan hover:underline"
              >
                HorrorFix (synth mix)
              </a>
              {" · "}
              <a
                href={soundtrackSources.horrorSocietyInterview.href}
                className="text-cyan hover:underline"
              >
                Porter interview
              </a>
            </p>
          </section>

          <section className="space-y-4">
            {artists.map((artist) => (
              <article key={artist.name} className="border border-border bg-card p-5">
                <h2 className="text-2xl">{artist.name}</h2>
                <ul className="mt-3 space-y-2">
                  {artist.tracks.map((track) => (
                    <li key={track.title} className="text-sm">
                      <span className="text-foreground">“{track.title}”</span>
                      {track.writers ? (
                        <span className="text-muted-foreground"> — {track.writers}</span>
                      ) : null}
                      <span className="ml-2 inline-flex flex-wrap gap-1">
                        {track.sources.map((source) => (
                          <Badge
                            key={source}
                            variant="outline"
                            className="align-middle font-mono text-[10px] uppercase tracking-wider"
                          >
                            {sourceLabels[source]}
                          </Badge>
                        ))}
                      </span>
                    </li>
                  ))}
                </ul>
                <ul className="mt-4 space-y-2">
                  {artist.links.map((link) =>
                    link.live ? (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs uppercase tracking-wider text-cyan hover:underline"
                        >
                          {link.label}
                        </a>
                        {link.note ? (
                          <span className="ml-2 text-xs text-muted-foreground">{link.note}</span>
                        ) : null}
                      </li>
                    ) : (
                      <li key={link.href} className="text-sm text-muted-foreground">
                        <Badge variant="outline" className="mr-2 border-blood/50 text-blood">
                          Dead link
                        </Badge>
                        {link.label}:{" "}
                        <span className="break-all font-mono text-xs">{link.href}</span>
                        {link.note ? <p className="mt-1">{link.note}</p> : null}
                      </li>
                    ),
                  )}
                </ul>
              </article>
            ))}
          </section>

          <section>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-acid">
              Soundtrack quotes from the original site
            </p>
            <ul className="mt-4 space-y-4">
              {soundtrackQuotes.map((item) => (
                <li key={item.quote} className="border-l-2 border-magenta/50 pl-4">
                  <p className="text-lg">“{item.quote}”</p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {item.attribution} · {item.label}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
