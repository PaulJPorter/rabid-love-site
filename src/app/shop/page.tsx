import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { collection, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Rabid Love: The Complete Behind-the-Scenes Collection. The 44-page book, original script with handwritten notes, press kit, and soundtrack listening guide. $24.",
  openGraph: {
    title: "Rabid Love: The Complete Behind-the-Scenes Collection",
    description: collection.description,
    images: [
      {
        url: collection.image,
        width: collection.imageWidth,
        height: collection.imageHeight,
        alt: "Cover for Rabid Love: The Complete Behind-the-Scenes Collection",
      },
    ],
  },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: collection.name,
  description: collection.description,
  image: `${siteUrl}${collection.image}`,
  brand: {
    "@type": "Brand",
    name: "Rabid Love",
  },
  offers: {
    "@type": "Offer",
    price: collection.price,
    priceCurrency: collection.priceCurrency,
    availability: collection.availability,
    url: collection.url,
  },
};

export default function ShopPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero kicker="Shop" title="Official extras">
        Digital releases from the film. Rabid Love itself stays free to stream on Tubi.
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <article className="grid overflow-hidden border border-magenta/30 bg-card md:grid-cols-[minmax(0,480px)_1fr]">
          <div className="border-b border-magenta/20 md:border-r md:border-b-0">
            <Image
              src={collection.image}
              alt="Cover for Rabid Love: The Complete Behind-the-Scenes Collection"
              width={collection.imageWidth}
              height={collection.imageHeight}
              priority
              className="h-auto w-full"
              sizes="(min-width: 768px) 480px, 100vw"
            />
          </div>
          <div className="flex flex-col gap-4 p-6 md:p-8">
            <h2 className="text-3xl leading-tight sm:text-4xl">{collection.name}</h2>
            <p className="font-mono text-2xl tracking-wide text-cyan">$24</p>
            <p className="text-base leading-relaxed text-foreground/90">{collection.description}</p>
            <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
              {collection.includes.map((item) => (
                <li key={item}>+ {item}</li>
              ))}
            </ul>
            <Button
              asChild
              className="mt-2 h-12 w-full bg-blood text-base font-semibold text-white hover:bg-[#ff0000] sm:w-fit sm:px-8"
            >
              <a href={collection.url} target="_blank" rel="noopener noreferrer">
                Buy
              </a>
            </Button>
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-2 pb-16">
        <h2 className="text-3xl">For Filmmakers</h2>
        <article className="mt-6 max-w-xl border border-dashed border-border bg-card/40 p-6">
          <h3 className="text-2xl leading-tight">
            The Rogue Filmmaker&apos;s Playbook (coming soon)
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Not available yet.
          </p>
        </article>
      </section>
    </>
  );
}
