import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { WatchCtas } from "@/components/watch-cta";
import { featuredQuotes, film, links } from "@/lib/site";

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-magenta/25">
        <div className="absolute inset-0">
          <Image
            src="/assets/key-art.jpg"
            alt=""
            fill
            priority
            className="object-cover object-top opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/80 to-background" />
          <div className="absolute inset-0 scanlines opacity-30" aria-hidden />
        </div>

        <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 md:grid-cols-[minmax(0,280px)_1fr] md:py-16">
          <div className="vhs-frame mx-auto w-56 overflow-hidden border border-magenta/40 md:w-full">
            <Image
              src="/assets/poster.jpg"
              alt="Rabid Love theatrical key art: Madness can be contagious"
              width={456}
              height={646}
              priority
              className="h-auto w-full"
            />
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-cyan">
              Official site · 2013 · dir. {film.director}
            </p>
            <h1 className="mt-3 text-5xl leading-none text-foreground sm:text-7xl">
              Rabid <span className="text-magenta neon-text">Love</span>
            </h1>
            <p className="mt-2 font-mono text-sm uppercase tracking-[0.22em] text-blood">
              Catch the virus · Madness can be contagious
            </p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-foreground/90">
              {film.logline}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge className="bg-magenta/20 text-magenta">{film.year}</Badge>
              <Badge variant="outline" className="border-cyan/40 text-cyan">
                {film.runtime}
              </Badge>
              <Badge variant="outline">{film.rating}</Badge>
              <Badge variant="outline">{film.genre}</Badge>
            </div>
            <WatchCtas className="mt-7" />
            <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              Streaming free on Tubi. Trailer is below — it plays only when you press play.
            </p>
          </div>
        </div>
      </section>

      <section id="trailer" className="mx-auto max-w-6xl px-4 py-12">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-acid">
          Official trailer
        </p>
        <h2 className="mt-2 text-3xl">Catch the virus</h2>
        <div className="vhs-frame mt-5 aspect-video overflow-hidden border border-blood/40 bg-black">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${links.trailerId}?rel=0`}
            title="Rabid Love official trailer"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          Same YouTube embed that ran on the 2016 homepage (
          <a href={links.trailer} className="text-cyan hover:underline">
            FRShSJS4ERM
          </a>
          ). No autoplay. Watch the feature on{" "}
          <a href={links.tubi} className="text-cyan hover:underline">
            Tubi
          </a>
          .
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-acid">
          Verified press
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {featuredQuotes.map((item) => (
            <Card key={item.outlet} className="border-magenta/25 bg-card/80">
              <CardContent className="space-y-3 p-5">
                <p className="text-lg leading-snug text-foreground">“{item.quote}”</p>
                <p className="font-mono text-xs uppercase tracking-wider text-cyan">
                  {item.outlet}
                  {item.score ? ` · ${item.score}` : ""} · {item.author}
                </p>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-magenta underline-offset-4 hover:underline"
                >
                  Read the review
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Homepage quote-strip lines from 2016 (Max It, Amanda Wyss, Drew Mead) stay on{" "}
          <Link href="/press" className="text-cyan underline-offset-4 hover:underline">
            Press
          </Link>{" "}
          as archive-labeled extras. These three reviews are the live primary blurbs.
        </p>
      </section>

      <section className="border-y border-border bg-black/30">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan">The film</p>
            <h2 className="mt-2 text-3xl">1984. A cabin. A contagion.</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {film.officialSynopsis}
            </p>
            <Link
              href="/about"
              className="mt-5 inline-block font-mono text-xs uppercase tracking-[0.2em] text-magenta hover:underline"
            >
              Director’s statement, cast, on set →
            </Link>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan">Soundtrack</p>
            <h2 className="mt-2 text-3xl">Synth score + 80s rock</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Songs are listed from IMDb and the official Archive soundtrack page. The
              synth score is credited as Nick Nielsen on the 2014 official site and as
              Nicholas Nielsen in HorrorFix. Only artist URLs that still resolve are
              linked.
            </p>
            <Link
              href="/soundtrack"
              className="mt-5 inline-block font-mono text-xs uppercase tracking-[0.2em] text-magenta hover:underline"
            >
              Soundtrack page →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-acid">
          Approved lines
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {film.taglines.map((tag) => (
            <li
              key={tag.line}
              className="border border-border bg-card/60 px-4 py-3 font-display text-2xl tracking-wide"
            >
              {tag.line}
              {!tag.primary ? (
                <span className="ml-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Fun / marketing
                </span>
              ) : null}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted-foreground">
          IMDb:{" "}
          <a href={links.imdb} className="text-cyan hover:underline">
            tt2325014
          </a>
          . Facebook page remains as a low-priority tombstone.
        </p>
      </section>
    </div>
  );
}
