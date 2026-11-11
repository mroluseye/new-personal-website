/**
 * Single source of truth for site copy and links.
 * Edit words here; layout components only render what this file exports.
 */

export const PERSON = {
  name: "Olu Cole",
  firstName: "Olu",
  portraitSrc: "/profile-persona-website.jpg",
  portraitAlt:
    "Olu Cole in a straw fedora and cream knitted polo, resting his chin on his hand",
  location: "United Kingdom",
  careerStartYear: 2014,
} as const;

export const LINKS = {
  email: "mailto:mroluseye@gmail.com",
  emailLabel: "mroluseye@gmail.com",
  x: "https://x.com/trymrcole",
  xHandle: "@trymrcole",
  linkedIn: "https://linkedin.com/in/seyecole",
  linkedInHandle: "in/seyecole",
  gitHub: "https://github.com/mroluseye",
  gitHubHandle: "mroluseye",
  adpList: "https://adplist.org/mentors/oluseye-cole?session=31631-mentorship-session",
  book: "https://roluseye.gumroad.com/l/thepmhandbook",
  privacy: "/privacy",
} as const;

/** Formspree form IDs are public by design: they appear in any HTML form that posts to them. */
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/mwpolraw";

/** Hrefs start with "/" so they also work from the privacy page. */
export const NAV_ITEMS = [
  { label: "Five hats", id: "hats", href: "/#hats" },
  { label: "Shipped", id: "shipped", href: "/#shipped" },
  { label: "The brief", id: "brief", href: "/#brief" },
  { label: "Cole’s Notes", id: "notes", href: "/#notes" },
] as const;

/** Sections the masthead watches. "top" and "contact" clear the highlight, as neither has a nav item. */
export const TRACKED_SECTION_IDS = ["top", ...NAV_ITEMS.map((item) => item.id), "contact"];

export interface Role {
  title: string;
  phonetic: string;
  partOfSpeech: string;
  definition: string;
  usage: string;
  boardStatus: string;
}

export const ROLES: Role[] = [
  {
    title: "Lead Delivery Manager",
    phonetic: "/liːd dɪˈlɪv(ə)ri ˈmanɪdʒə/",
    partOfSpeech: "noun",
    definition:
      "The person who keeps several teams pointed at the same outcome. Clears the path, spots the risk early and makes sure what was promised actually ships.",
    usage: "“Get the lead delivery manager in. We need to know what’s blocking this, and who can unblock it.”",
    boardStatus: "On time",
  },
  {
    title: "Agile Leader",
    phonetic: "/ˈadʒʌɪl ˈliːdə/",
    partOfSpeech: "noun",
    definition:
      "Someone who coaches teams to work in short loops: build a little, learn a lot, adjust. Without turning the process into a religion.",
    usage: "“Our agile leader cut two ceremonies, and we shipped faster.”",
    boardStatus: "Boarding",
  },
  {
    title: "Founder",
    phonetic: "/ˈfaʊndə/",
    partOfSpeech: "noun",
    definition:
      "Someone who stops talking about the idea and builds it. In this case, four times over, after hours, with real users at the other end.",
    usage: "“The founder didn’t pitch it. They sent a link.”",
    boardStatus: "4 live",
  },
  {
    title: "Agentic AI Advocate",
    phonetic: "/eɪˈdʒɛntɪk ˌeɪ ˈaɪ ˈadvəkət/",
    partOfSpeech: "noun",
    definition:
      "Someone who believes AI agents should take the busywork so people can take the thinking. And who tests that belief on real delivery, not slide decks.",
    usage: "“The agent drafted the RAID log. The team argued about the risks. Better meeting.”",
    boardStatus: "Daily",
  },
  {
    title: "Context Engineer",
    phonetic: "/ˈkɒntɛkst ˌɛndʒɪˈnɪə/",
    partOfSpeech: "noun",
    definition:
      "Someone who designs what an AI knows before it acts: the right documents, rules and examples, in the right order. Better context in, better work out.",
    usage: "“Same model, new context. Completely different answer.”",
    boardStatus: "Now",
  },
];

export interface Product {
  slug: string;
  name: string;
  url: string;
  domain: string;
  category: string;
  strapline: string;
  summary: string;
  highlights: string[];
  imageSrc: string;
  imageAlt: string;
}

export const PRODUCTS: Product[] = [
  {
    slug: "energity",
    name: "Energity",
    url: "https://tryenergity.com",
    domain: "tryenergity.com",
    category: "Career operating system",
    strapline: "One system. Total career clarity.",
    summary:
      "Maps how exposed your role is to AI, then gives you the roadmap, assessments and templates to stay ahead of it. Over 15 connected systems and 100+ tools.",
    highlights: ["AI exposure audit", "Career roadmaps", "Template library"],
    imageSrc: "/products/energity.jpg",
    imageAlt:
      "Energity home page: the headline ‘One system. Total career clarity.’ beside an AI role relevance audit scoring a Product Manager",
  },
  {
    slug: "bythenumbers",
    name: "bythenumbers",
    url: "https://bythenumbers.uk",
    domain: "bythenumbers.uk",
    category: "Area reports and property maths",
    strapline: "The place and the money.",
    summary:
      "One measure out of 100 for any UK postcode, built from 16 open-data signals like schools, flood risk and broadband. Plus 22 free calculators for the move.",
    highlights: ["Any UK postcode", "16 open-data signals", "22 free calculators"],
    imageSrc: "/products/bythenumbers.jpg",
    imageAlt:
      "bythenumbers home page: a family moving house behind the headline ‘The place and the money’ and a postcode search box",
  },
  {
    slug: "calltoduty",
    name: "calltoduty",
    url: "https://calltoduty.co.uk",
    domain: "calltoduty.co.uk",
    category: "Field guides for digital careers",
    strapline: "Learn the job. Speak the language. Do the work.",
    summary:
      "Free, plain-English guides for digital and delivery roles. Every career gets a playbook, a cheatsheet and a frameworks page, with jargon explained on the spot.",
    highlights: ["Playbooks", "Cheatsheets", "Jargon glossary"],
    imageSrc: "/products/calltoduty.jpg",
    imageAlt:
      "calltoduty home page: the headline ‘Learn the job. Speak the language. Do the work.’ on a dark green background",
  },
  {
    slug: "mivva",
    name: "Mivva",
    url: "https://trymivva.com",
    domain: "trymivva.com",
    category: "AI book studio for self-publishers",
    strapline: "Turn your idea into a book ready to publish.",
    summary:
      "Describe a book in one sentence, check a sample, then get print and eBook files for Amazon KDP, IngramSpark and Lulu. Eighteen kinds of book, from picture books to novels.",
    highlights: ["18 kinds of book", "Sample first", "KDP, IngramSpark, Lulu"],
    imageSrc: "/products/mivva.jpg",
    imageAlt:
      "Mivva home page: a chat box asking ‘What shall we make today?’ above a shelf of illustrated book covers",
  },
];

export const STATS = [
  { value: "10+", label: "years getting work out of the door" },
  { value: "5", label: "sectors, from FinTech to Government" },
  { value: "4", label: "products built and shipped as founder" },
] as const;

export const PREVIOUSLY = ["Ministry of Justice", "The King’s Trust", "AlphaGeek Digital"] as const;

export const SECTORS = ["FinTech", "EdTech", "AgriTech", "Digital Marketing", "Government"] as const;

export const PRINCIPLES = [
  {
    title: "Outcomes over output.",
    body: "A busy board is not a finished one. I measure what changed for the user, not how many tickets moved.",
  },
  {
    title: "Small batches, short loops.",
    body: "Ship a slice, learn from it, adjust. Big-bang launches are where good plans go to die.",
  },
  {
    title: "Make the work visible.",
    body: "If it isn’t on the wall, it isn’t real. Visible work gets unblocked; invisible work gets forgotten.",
  },
  {
    title: "Give agents the context. Give people the credit.",
    body: "AI does its best work with clear rules and good examples. Humans do theirs with trust and recognition.",
  },
  {
    title: "No unnecessary drama.",
    body: "Calm is a delivery skill. Bad news early, options on the table, decisions written down.",
  },
] as const;

export const TOOLBELT = [
  "Agile and Lean",
  "Visual facilitation",
  "Automation and workflows",
  "Stakeholder management",
  "Forecasting",
  "Coaching",
  "Product management",
  "Context engineering",
  "AI agents",
  "Conversation starter",
  "Going over and beyond",
  "The smile (non-negotiable)",
] as const;

export const AFTER_HOURS_STACK = ["Cursor", "Tempo", "Supabase", "Lovable"] as const;

export const NOTES_TOPICS = [
  "Context engineering for delivery teams",
  "Where AI agents actually help in a sprint (and where they don’t)",
  "Shipping a product after hours without burning out",
  "Plain-English agile: the bits worth keeping",
] as const;
