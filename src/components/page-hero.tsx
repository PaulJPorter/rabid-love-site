type Props = {
  kicker?: string;
  title: string;
  children?: React.ReactNode;
};

export function PageHero({ kicker, title, children }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-magenta/20">
      <div className="absolute inset-0 scanlines opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 py-12 md:py-16">
        {kicker ? (
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-cyan">{kicker}</p>
        ) : null}
        <h1 className="text-4xl text-foreground sm:text-5xl md:text-6xl">{title}</h1>
        {children ? (
          <div className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
}
