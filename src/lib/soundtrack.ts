export type TrackSource = "imdb" | "official" | "howlin-wolf";

export type Track = {
  title: string;
  writers?: string;
  sources: TrackSource[];
};

export type TrackLink = {
  label: string;
  href: string;
  live: boolean;
  note?: string;
};

export type Artist = {
  name: string;
  tracks: Track[];
  links: TrackLink[];
};

export const soundtrackSources = {
  imdb: {
    label: "IMDb soundtracks",
    href: "https://www.imdb.com/title/tt2325014/soundtrack/",
  },
  official: {
    label: "Official soundtrack page (2016 Archive)",
    href: "https://web.archive.org/web/20160331185744/http://rabidlovemovie.com/soundtrack.html",
  },
  howlinWolf: {
    label: "Howlin’ Wolf Records — producer note (June 2014)",
    href: "http://www.jmhdigital.com/2014/06/rabid-love-soundtrack-something-that.html",
  },
  horrorFix: {
    label: "HorrorFix review (Ash, March 26, 2014)",
    href: "https://horror-fix.com/review-rabid-love/",
  },
  horrorSocietyInterview: {
    label: "Horror Society interview with Paul J. Porter (April 15, 2013)",
    href: "https://www.horrorsociety.com/2013/04/15/talking-with-the-dead-13-questions-with-hayley-derryberry-and-paul-j-porter/",
  },
} as const;

export const soundtrackIntro =
  "Note from the producers: We are very proud of the amazing artists that provided Rabid Love with a totally 80’s rocking soundtrack. Be sure to check them out online, buy their albums, download their wonderful music, and support them on their respective social media sites.";

export const score = {
  officialName: "Nick Nielsen",
  pressName: "Nicholas Nielsen",
  databaseAlias: "Nic Neils",
  verified: [
    {
      name: "Nick Nielsen",
      where:
        "Official 2014 soundtrack page (“completely original score created by Nick Nielsen”) and Paul J. Porter in the April 2013 Horror Society interview (Drive / Tangerine Dream influence).",
    },
    {
      name: "Nicholas Nielsen",
      where:
        "HorrorFix (Ash, March 26, 2014) credits a “great synth mix score by Nicholas Nielsen.” Trade listings (Rightika, FULLTV Australia) also use this spelling as Composer.",
    },
  ],
  notAsserted:
    "IMDb’s soundtrack listing for tt2325014 is songs-only and does not name a score composer. FilmMusic.com lists “Nic Neils,” which looks like a truncated database form of the same credit — not treated here as a separate person. NickNielsenMusic.com, linked from the 2014 official page, no longer presents a trustworthy public site, so it is not linked.",
};

export const artists: Artist[] = [
  {
    name: "Ruby Faith and the Waiting World",
    tracks: [
      {
        title: "All in the Name of Rock",
        writers: "Ruby Faith, Tom Daprato, Jay Ahl",
        sources: ["imdb", "official", "howlin-wolf"],
      },
      {
        title: "Rat Trap Town",
        writers: "Tom Daprato, Jay Ahl",
        sources: ["imdb", "official", "howlin-wolf"],
      },
      {
        title: "Cry Alone",
        writers: "Ruby Faith, Tom Daprato, Jay Ahl",
        sources: ["imdb", "official", "howlin-wolf"],
      },
      {
        title: "White Heat",
        sources: ["official", "howlin-wolf"],
      },
      {
        title: "Fire in My Soul",
        writers: "Tom Daprato",
        sources: ["imdb"],
      },
    ],
    links: [
      {
        label: "SoundCloud",
        href: "https://soundcloud.com/ruby-faith",
        live: true,
      },
    ],
  },
  {
    name: "Gene the Werewolf",
    tracks: [
      {
        title: "I've Got the Love",
        writers: "Jon Belan",
        sources: ["imdb", "official", "howlin-wolf"],
      },
      {
        title: "The Ballad of Gene",
        writers: "Jon Belan",
        sources: ["imdb", "official", "howlin-wolf"],
      },
      {
        title: "Light Me Up",
        writers: "Jon Belan",
        sources: ["imdb", "official", "howlin-wolf"],
      },
    ],
    links: [
      {
        label: "GeneTheWerewolf.com",
        href: "https://www.genethewerewolf.com/",
        live: true,
      },
      {
        label: "Facebook",
        href: "https://www.facebook.com/GeneTheWerewolf",
        live: true,
      },
    ],
  },
  {
    name: "R&R (Richard Skowronski / Richard Altman)",
    tracks: [
      {
        title: "Love Lies Deep",
        writers: "Richard Skowronski",
        sources: ["imdb", "official", "howlin-wolf"],
      },
      {
        title: "Everywhere For Me",
        sources: ["official", "howlin-wolf"],
      },
    ],
    links: [
      {
        label: "SoundCloud",
        href: "https://soundcloud.com/richardskowronski",
        live: true,
      },
    ],
  },
  {
    name: "The Clinton-Johnson Band",
    tracks: [
      {
        title: "If You Love Me",
        writers: "Vince Johnson and Danny Clinton",
        sources: ["imdb", "official", "howlin-wolf"],
      },
      {
        title: "He's Loving You",
        sources: ["official", "howlin-wolf"],
      },
    ],
    links: [
      {
        label: "MySpace (historical, 404)",
        href: "http://www.myspace.com/theclintonjohnsonband",
        live: false,
        note: "Listed on the official soundtrack page and the Howlin’ Wolf producer note. Both myspace.com and www.myspace.com return 404 as of September 2026. No replacement official page was found.",
      },
    ],
  },
  {
    name: "The Harmless Doves",
    tracks: [
      {
        title: "Pardon Line",
        writers: "George Hartline",
        sources: ["imdb", "official"],
      },
    ],
    links: [
      {
        label: "ReverbNation",
        href: "https://www.reverbnation.com/harmlessdoves",
        live: true,
        note: "Resolves to the ReverbNation legacy artist page.",
      },
    ],
  },
  {
    name: "Racecat",
    tracks: [
      {
        title: "Exit the Building",
        writers: "Jacob Irwin",
        sources: ["imdb", "official"],
      },
    ],
    links: [
      {
        label: "Listen on SoundCloud",
        href: "https://soundcloud.com/racecat-deathmatch/exit-the-building",
        live: true,
      },
    ],
  },
];

export const soundtrackQuotes = [
  {
    quote:
      "...one of the things that everyone seems to love about Rabid Love is its soundtrack.",
    attribution: "Mike Jones, Horror Society",
    label: "Quoted on the original official soundtrack page",
  },
  {
    quote: "...some of the most epic music ever in a film.",
    attribution: "Drew Mead, The B Movie Avenger",
    label: "Archive-era quote from the original official soundtrack page",
  },
];

export const sourceLabels: Record<TrackSource, string> = {
  imdb: "IMDb",
  official: "Official site",
  "howlin-wolf": "Howlin’ Wolf note",
};
