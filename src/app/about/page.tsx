import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { film } from "@/lib/site";

export const metadata: Metadata = {
  title: "About the Film",
  description:
    "Director’s statement and spoiler-light synopsis for Rabid Love (2013), Paul J. Porter’s 1984 cabin-in-the-woods horror.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero kicker="About · The Film" title="A 1984 cabin weekend goes wrong">
        Official synopsis and director’s statement from the original rabidlovemovie.com About
        page. Sub-pages keep the Archive structure: Cast, On Set, Production Design,
        Soundtrack.
      </PageHero>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="space-y-6 text-base leading-relaxed text-foreground/90">
          <h2>Official synopsis</h2>
          <p>{film.officialSynopsis}</p>
          <p className="text-muted-foreground">{film.studioOneLiner}</p>

          <h2>Director’s statement</h2>
          <p>
            Our story takes place in 1984 and is a rejuvenation of classic films like{" "}
            <em>An American Werewolf in London</em>, <em>Friday the 13th</em>,{" "}
            <em>Evil Dead</em>, and <em>The Howling</em>. As a young child in the 80’s, the
            time period holds a special place in my mind as a mixture of dreams and
            memories — I made it a point to bring the look and feel of the era through in
            the settings, props, wardrobe, and most importantly, the characters of the
            film.
          </p>
          <p>
            RL is not a gory slasher film, but a thrilling and nostalgic story about unique
            characters with their own motivations and desires. They just happen to catch
            the attention of an evil recluse living in the woods and become the subjects of
            his latest experiment when all they wanted was a happy weekend with their
            friends before they all went their separate ways to their post-college lives.
          </p>
          <p>
            I hope you enjoy the film and are interested enough to learn more about what
            went into it.
          </p>
          <p className="font-mono text-sm uppercase tracking-wider text-cyan">
            — Paul J. Porter
            <br />
            Writer / Producer / Director
          </p>
        </article>

        <aside className="space-y-4 border border-border bg-card p-5">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-magenta">
            Production
          </p>
          <dl className="space-y-3 text-sm">
            <div>
              <dt className="text-muted-foreground">Director</dt>
              <dd>{film.director}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Writers</dt>
              <dd>{film.writers.join(", ")}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Score</dt>
              <dd>
                {film.composer}{" "}
                <span className="text-muted-foreground">
                  (official site) / {film.composerPressName} (HorrorFix)
                </span>
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Companies</dt>
              <dd>{film.productionCompanies.join(" · ")}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Runtime</dt>
              <dd>{film.runtime} (Tubi listing)</dd>
            </div>
          </dl>
          <div className="flex flex-col gap-2 pt-2 font-mono text-xs uppercase tracking-wider">
            <Link href="/about/cast" className="text-cyan hover:underline">
              Cast & crew →
            </Link>
            <Link href="/about/on-set" className="text-cyan hover:underline">
              On set stills →
            </Link>
            <Link href="/about/production-design" className="text-cyan hover:underline">
              Production design →
            </Link>
            <Link href="/soundtrack" className="text-cyan hover:underline">
              Soundtrack →
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
