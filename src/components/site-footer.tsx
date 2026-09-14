import Link from "next/link";
import { film, links } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-magenta/20 bg-black/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-2xl tracking-[0.18em] text-magenta">Rabid Love</p>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            A 2013 80s cabin-in-the-woods horror by {film.director}. Catch the virus.
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-x-10 gap-y-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
          <Link href="/#trailer" className="hover:text-cyan">
            Trailer
          </Link>
          <Link href="/about" className="hover:text-cyan">
            About
          </Link>
          <Link href="/about/cast" className="hover:text-cyan">
            Cast
          </Link>
          <Link href="/soundtrack" className="hover:text-cyan">
            Soundtrack
          </Link>
          <Link href="/press" className="hover:text-cyan">
            Press
          </Link>
          <Link href="/contact" className="hover:text-cyan">
            Contact
          </Link>
          <a href={links.mailto} className="hover:text-cyan">
            Email
          </a>
          <a href={links.x} target="_blank" rel="noopener noreferrer" className="hover:text-cyan">
            X / Twitter
          </a>
          <a href={links.imdb} target="_blank" rel="noopener noreferrer" className="hover:text-cyan">
            IMDb
          </a>
        </nav>
      </div>
      <div className="border-t border-border/70 px-4 py-4 text-center font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
        © {film.year}–{new Date().getFullYear()} {film.copyrightEntities.join(" / ")}.{" "}
        Directed by {film.director}. No store. Stream on{" "}
        <a href={links.tubi} className="text-cyan underline-offset-2 hover:underline">
          Tubi
        </a>
        .
      </div>
    </footer>
  );
}
