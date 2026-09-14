import { film, links, siteUrl } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Movie",
    name: film.title,
    dateCreated: "2013",
    datePublished: "2013-04-19",
    genre: "Horror",
    duration: "PT1H33M",
    inLanguage: "en",
    contentRating: film.rating,
    description: film.logline,
    image: `${siteUrl}/assets/poster.jpg`,
    director: {
      "@type": "Person",
      name: film.director,
    },
    author: film.writers.map((name) => ({ "@type": "Person", name })),
    actor: [
      "Hayley Derryberry",
      "Jessica Sonneborn",
      "Josh Hammond",
      "Hannah Landberg",
      "Brandon Stacy",
      "Paul J. Porter",
    ].map((name) => ({ "@type": "Person", name })),
    musicBy: {
      "@type": "Person",
      name: film.composerPressName,
    },
    trailer: {
      "@type": "VideoObject",
      name: "Rabid Love official trailer",
      embedUrl: `https://www.youtube.com/embed/${links.trailerId}`,
      thumbnailUrl: `${siteUrl}/assets/key-art.jpg`,
      uploadDate: "2013-04-01",
    },
    sameAs: [links.imdb, links.tubi, links.x],
    url: siteUrl,
    publisher: {
      "@type": "Organization",
      name: "Rabid Love",
      email: links.email,
      sameAs: [links.x],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
