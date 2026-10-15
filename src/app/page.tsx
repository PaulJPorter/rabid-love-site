import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { WatchCtas } from "@/components/watch-cta";
import { featuredQuotes, film, links } from "@/lib/site";

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-magenta/25">
        <div className="absolute inset-0">
          <Image
            src="/assets/poster.jpg"
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
              src="/assets/key-art.jpg"
              alt="Rabid Love (2013) official poster: Madness can be contagious"
              width={578}
              height={819}
              priority
              className="h-auto w-full"
            />
          </div>

          <div>
            <h1 className="text-5xl leading-none text-foreground sm:text-7xl">
              Rabid <span className="text-magenta neon-text">Love</span>
            </h1>
            <p className="mt-4 font-mono text-sm uppercase tracking-[0.22em] text-blood">
              Catch the virus · Madness can be contagious
            </p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-foreground/90">
              {film.logline}
            </p>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.22em] text-acid">
              Streaming free on Tubi
            </p>
            <WatchCtas className="mt-3" showTrailerLink={false} />
          </div>
        </div>
      </section>

      <section id="trailer" className="mx-auto max-w-6xl px-4 py-12">
        <div className="vhs-frame aspect-video overflow-hidden border border-blood/40 bg-black">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${links.trailerId}?rel=0`}
            title="Rabid Love official trailer"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
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
      </section>
    </div>
  );
}
