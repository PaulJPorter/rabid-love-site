import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { keyCrew, principalCast, supportingCast } from "@/lib/cast";

export const metadata: Metadata = {
  title: "Cast & Crew",
  description:
    "Cast and crew of Rabid Love (2013): Hayley Derryberry, Paul J. Porter, Jessica Sonneborn, Josh Hammond, Hannah Landberg, Brandon Stacy, and more.",
};

function CreditGrid({
  heading,
  people,
}: {
  heading: string;
  people: typeof principalCast;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-3xl">{heading}</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {people.map((person) => (
          <article key={`${person.name}-${person.role}`} className="border border-border bg-card p-5">
            <h3 className="text-xl text-foreground">{person.name}</h3>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-magenta">
              {person.role}
            </p>
            {person.note ? (
              <p className="mt-2 text-sm text-muted-foreground">{person.note}</p>
            ) : null}
            {person.selected?.length ? (
              <p className="mt-3 text-xs text-muted-foreground">
                Also seen in: {person.selected.join(" · ")}
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

export default function CastPage() {
  return (
    <>
      <PageHero kicker="About · Cast" title="The people in the woods">
        Roles follow the original official Cast page. Selected other titles are those listed
        there in 2016. Crew notes come from On Set captions and contemporary press.
      </PageHero>
      <CreditGrid heading="Principal cast" people={principalCast} />
      <CreditGrid heading="Also appearing" people={supportingCast} />
      <CreditGrid heading="Key crew" people={keyCrew} />
    </>
  );
}
