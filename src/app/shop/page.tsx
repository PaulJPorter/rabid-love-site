import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { collection, playbook, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Rabid Love extras: the $24 behind-the-scenes collection, and The Rogue Filmmaker's Playbook, a 45-page indie filmmaking guide. Code LAUNCH19 for $5 off the playbook through Nov 15.",
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

type ShopProduct = {
  name: string;
  description: string;
  price: string;
  priceCurrency: string;
  availability: string;
  url: string;
  image?: string;
};

function productJsonLd(product: ShopProduct) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    ...(product.image ? { image: `${siteUrl}${product.image}` } : {}),
    brand: {
      "@type": "Brand",
      name: "Rabid Love",
    },
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: product.priceCurrency,
      availability: product.availability,
      url: product.url,
    },
  };
}

const shopProducts = [collection, playbook];

export default function ShopPage() {
  return (
    <>
      {shopProducts.map((product) => (
        <script
          key={product.url}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(productJsonLd(product)).replace(/</g, "\\u003c"),
          }}
        />
      ))}

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
        <article className="mt-6 max-w-xl border border-magenta/30 bg-card p-6">
          <h3 className="text-2xl leading-tight">{playbook.name}</h3>
          <p className="mt-3 font-mono text-2xl tracking-wide text-cyan">$24</p>
          <p className="mt-3 text-base leading-relaxed text-foreground/90">{playbook.description}</p>
          <p className="mt-3 text-sm leading-relaxed text-acid">{playbook.offerNote}</p>
          <Button
            asChild
            className="mt-5 h-12 w-full bg-blood text-base font-semibold text-white hover:bg-[#ff0000] sm:w-fit sm:px-8"
          >
            <a href={playbook.url} target="_blank" rel="noopener noreferrer">
              Buy
            </a>
          </Button>
        </article>
      </section>
    </>
  );
}
