export const siteUrl = "https://www.rabidlovemovie.com";

export const film = {
  title: "Rabid Love",
  year: 2013,
  runtime: "93 min",
  rating: "TV-MA",
  genre: "Horror",
  director: "Paul J. Porter",
  writers: ["Paul J. Porter", "Hayley Derryberry"],
  composer: "Nick Nielsen",
  composerPressName: "Nicholas Nielsen",
  cinematographer: "Jonathon Henry",
  productionDesigner: "Lance L. Ziesch",
  productionCompanies: [
    "Rogue Taurus Productions",
    "BAR Productions",
    "Open Wound Films",
  ],
  copyrightEntities: ["Rabid Love LLC", "Rogue Taurus Productions LLC"],
  logline:
    "Five college grads go for one last vacation together in the summer of 1984. An unseen contagion lurks in the woods that threatens to infect them all.",
  officialSynopsis:
    "When Heather Ross and her lifelong friends take one final trip out to a cabin in the woods before they go their separate ways after graduating from college, the weekend takes an unexpected turn when people start disappearing. Is one of their own responsible? How about the killer bear that’s rumored to be in the woods? Maybe one of the seemingly unstable hunters that have been drawn to the area and are out to get the bear? Join Heather and the gang as they find out where their loyalties truly lie and discover the secrets of the forest that might become a grave for all of them!",
  studioOneLiner:
    "Five recent college grads go for one last vacation in the woods during the summer of 1984 and one of them is infected with a mad scientist’s synthetic rabies virus.",
  taglines: [
    { line: "Catch the virus", primary: true },
    { line: "Madness can be contagious", primary: true },
    { line: "Foam is where the heart is", primary: false },
    { line: "Beer for a rabid thirst", primary: false },
  ],
  metaDescription:
    "Rabid Love (2013), the 1980s cabin-in-the-woods horror from Paul J. Porter. Stream free on Tubi. Catch the virus.",
} as const;

export const links = {
  email: "rabidlove1984@gmail.com",
  mailto: "mailto:rabidlove1984@gmail.com",
  tubi: "https://tubitv.com/movies/100008585/rabid-love",
  imdb: "https://www.imdb.com/title/tt2325014/",
  x: "https://x.com/RabidLove1984",
  facebook: "https://facebook.com/RabidLoveMovie",
  trailer: "https://www.youtube.com/watch?v=FRShSJS4ERM",
  trailerId: "FRShSJS4ERM",
  teaser: "https://www.youtube.com/watch?v=A03bXsBlFiQ",
  teaserId: "A03bXsBlFiQ",
  archiveHome:
    "https://web.archive.org/web/20160310001235/http://www.rabidlovemovie.com/",
  imdbSoundtrack: "https://www.imdb.com/title/tt2325014/soundtrack/",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  {
    href: "/about",
    label: "About",
    children: [
      { href: "/about/cast", label: "Cast" },
      { href: "/about/on-set", label: "On Set" },
      { href: "/about/production-design", label: "Production Design" },
      { href: "/soundtrack", label: "Soundtrack" },
    ],
  },
  { href: "/press", label: "Press" },
  { href: "/contact", label: "Contact" },
] as const;

export const featuredQuotes = [
  {
    outlet: "Horror Society",
    author: "Blacktooth",
    date: "March 13, 2014",
    score: "4/5",
    href: "https://www.horrorsociety.com/2014/03/13/rabid-love-review/",
    quote:
      "Overall, Rabid Love is for fans of 80s horror. It is an answered prayer for those that are sick of horrible remakes and unimaginative films.",
  },
  {
    outlet: "HorrorFix",
    author: "Ash",
    date: "March 26, 2014",
    score: "RECOMMENDED",
    href: "https://horror-fix.com/review-rabid-love/",
    quote: "I have a lot of love for Rabid Love, and I think you will too.",
  },
  {
    outlet: "HorrorNews.net",
    author: "Jesse",
    date: "April 4, 2014",
    score: null,
    href: "https://horrornews.net/83678/film-review-rabid-love-2013/",
    quote:
      "With solid performances, music, and camera work, this throwback to the 1980s horror films that we adore makes for an entertaining hour and a half thrill ride. Rabid Love is worth a watch.",
  },
] as const;

export const archiveQuotes = [
  {
    attribution: "Horror Society",
    quote:
      "Rabid Love looks like it could be a genre favorite for years to come.",
    source:
      "Quoted on the 2016 official homepage; linked to a Horror Society interview.",
    href: "https://www.horrorsociety.com/2013/04/15/talking-with-the-dead-13-questions-with-hayley-derryberry-and-paul-j-porter/",
  },
  {
    attribution: "Horror Society",
    quote:
      "...a horror film that has a look and feel that is more impressive than what Hollywood is making these days...",
    source: "Quoted on the 2016 official homepage.",
    href: "https://www.horrorsociety.com/2013/04/18/talking-with-the-dead-13-questions-with-jessica-sonneborn/",
  },
  {
    attribution: "Barry Morgan, Max It Magazine",
    quote: "...fresh, entertaining, and captured the spirit of the 80's.",
    source:
      "Quoted on the 2016 official homepage. The original Max It Magazine page is no longer live.",
    href: "https://web.archive.org/web/20160305033537/http://maxitmagazine.com/index.php/articles/columns/the-butcher-shop/226-love-goes-rabid",
  },
  {
    attribution: "Amanda Wyss (actress, A Nightmare on Elm Street)",
    quote: "I LOVED Rabid Love today at #FrightFest film Festival!! Wow!",
    source: "Quoted on the 2016 official homepage from a 2013 tweet.",
    href: "https://web.archive.org/web/20160310001235/https://twitter.com/_AmandaWyss/status/393969106753691648",
  },
  {
    attribution: "Drew Mead, The B Movie Avenger",
    quote: "Rabid Love is by far the best 80's slasher throwback I have ever seen.",
    source: "Quoted on the 2016 official homepage.",
    href: "https://web.archive.org/web/20160310001235/http://supportindependentcinemafucksundance.blogspot.com/2013/07/frothy-kisses-review-of-rabid-love.html",
  },
] as const;
