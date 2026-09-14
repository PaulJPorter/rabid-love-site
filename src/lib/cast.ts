export type Credit = {
  name: string;
  role: string;
  note?: string;
  selected?: string[];
};

export const principalCast: Credit[] = [
  {
    name: "Hayley Derryberry",
    role: "Heather Ross",
    note: "Also co-writer and producer.",
    selected: ["Dead of Night", "Frank", "500 MPH Storm", "100 Ghost Street"],
  },
  {
    name: "Paul J. Porter",
    role: "John Allen",
    note: "Also writer, producer, and director.",
    selected: ["500 MPH Storm", "Outlaw Justice", "Doc West", "Terminator Salvation"],
  },
  {
    name: "Jessica Sonneborn",
    role: "Julie Allen",
    selected: ["Alice D", "The House Across the Street", "Bloody Bloody Bible Camp"],
  },
  {
    name: "Josh Hammond",
    role: "Adam Markley",
    selected: ["Jeepers Creepers 2", "The Penny Dreadful Picture Show", "Alice D"],
  },
  {
    name: "Hannah Landberg",
    role: "Summer Watson",
    selected: ["The Ghastly Love of Johnny X", "The Ropes", "Perceptio"],
  },
  {
    name: "Brandon Stacy",
    role: "David",
    note: "Played John in the 2012 short; plays David in the feature.",
    selected: ["The Penny Dreadful Picture Show", "Star Trek New Voyages: Phase II"],
  },
];

export const supportingCast: Credit[] = [
  { name: "Noël Thurman", role: "Sandra Ross", selected: ["Witches of Oz", "The Good Doctor"] },
  { name: "Brian L. Reece", role: "Sheriff Francis Sinclair", note: "Also production manager and 1st AD." },
  { name: "Alexandra Boylan", role: "Kristy", selected: ["Bellflower", "The Box"] },
  { name: "Megan Hensley", role: "Lisa", selected: ["Alice D", "The Crazies"] },
  { name: "Chris Bylsma", role: "Ben", note: "Also sound mixer." },
  { name: "Joe Backer", role: "Store Clerk" },
  { name: "Raquel Cantu", role: "Nicky" },
  { name: "Ali Lofquist", role: "Stephanie" },
  { name: "Natalie Turner", role: "Amy", note: "Also production assistant and stand-in." },
];

export const keyCrew: Credit[] = [
  { name: "Paul J. Porter", role: "Writer / Producer / Director / Editor" },
  { name: "Hayley Derryberry", role: "Writer / Producer" },
  { name: "Nick Nielsen", role: "Original score", note: "Credited in press as Nicholas Nielsen." },
  { name: "Jonathon Henry", role: "Cinematographer" },
  { name: "Lance L. Ziesch", role: "Production designer / Producer" },
  { name: "Brian L. Reece", role: "Production manager / 1st AD / Special props" },
  { name: "Mark Furini", role: "Art director / Associate producer" },
  { name: "Monicca De Luna", role: "Wardrobe" },
  { name: "Sheryl Porter", role: "Executive producer / Craft services" },
  { name: "Lori Mann", role: "Executive producer", note: "Cameo as the Sheriff’s secretary." },
];
