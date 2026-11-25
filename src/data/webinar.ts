// Everything on the page comes from this file. Change the title, time, agenda,
// speakers and FAQ here; the page updates itself.

export const webinar = {
  host: "Ledgerwise",
  hostLine: "Bookkeeping for small creative studios",
  series: "Studio Money, session 4",
  title: "Month-end close in five days",
  subtitle:
    "A live, hour-long workshop for agency and studio owners who still close the books three weeks late. We'll walk through the exact five-day checklist our clients use, with a real set of books on screen.",
  description:
    "Free live webinar: Month-end close in five days. A one-hour workshop for agency and studio owners, February 11, 2027. Register to get the link and the replay.",
  // The start time in UTC (ISO 8601). Visitors see it in their own time zone.
  startsAt: "2027-02-11T18:00:00Z",
  durationMinutes: 60,
  // How the time is written before the visitor's browser converts it.
  hostTimeZone: "America/New_York",
  hostTimeZoneLabel: "ET",
  platform: "Live on Zoom Webinars, link sent after you register",
  seatsNote: "Free. 500 live seats; everyone who registers gets the replay.",
  contactEmail: "events@ledgerwise.example.com",
  // When the replay is ready, paste a YouTube or Vimeo embed URL here, e.g.
  // "https://www.youtube-nocookie.com/embed/VIDEO_ID". Leave empty until then.
  replayUrl: "",
};

export const nav = [
  { label: "What you'll learn", href: "#learn" },
  { label: "Agenda", href: "#agenda" },
  { label: "Speakers", href: "#speakers" },
  { label: "Replays", href: "#replay" },
];

export const learn = [
  {
    title: "The five-day calendar",
    text: "What happens on each day of the close, who owns it, and which tasks can start before the month ends.",
  },
  {
    title: "Reconciling without the dread",
    text: "Matching bank, card and payment processor feeds in one sitting, and what to do with the transactions that never match.",
  },
  {
    title: "Work in progress, done properly",
    text: "Recognizing project revenue so a big retainer doesn't make one month look great and the next one terrible.",
  },
  {
    title: "A one-page report you'll actually read",
    text: "Cash, margin by client and next month's runway on a single page, with the template to take away.",
  },
];

// Minutes from the start, so the agenda reads like a running order.
export const agenda = [
  { at: 0, title: "Welcome and why closes run late", who: "Priya Raman" },
  { at: 6, title: "The five-day calendar, day by day", who: "Priya Raman" },
  { at: 18, title: "Live: reconciling a studio's March books", who: "Marcus Bell" },
  { at: 32, title: "Work in progress and retainers", who: "Marcus Bell" },
  { at: 42, title: "The one-page month-end report", who: "Priya Raman" },
  { at: 48, title: "Your questions, answered live", who: "Both, with Dana Ortiz hosting" },
];

export const speakers = [
  {
    name: "Priya Raman",
    role: "Head of Accounting, Ledgerwise",
    bio: "Priya has closed the books for more than 140 design and architecture studios. Before Ledgerwise she ran finance at a 60-person agency in Philadelphia.",
    tone: "#c7d2e3",
  },
  {
    name: "Marcus Bell",
    role: "Senior Bookkeeper, Ledgerwise",
    bio: "Marcus looks after studios with retainers, project billing and more than one currency. He'll do the live reconciliation.",
    tone: "#d8cfc0",
  },
  {
    name: "Dana Ortiz",
    role: "Founder, Ortiz and Wren Studio",
    bio: "Dana runs a 12-person brand studio in Denver that moved to a five-day close last year. She'll host the questions.",
    tone: "#cfdccf",
  },
];

export const form = {
  title: "Save your seat",
  text: "We'll email the join link, a calendar invite and the replay. One reminder the day before, nothing else.",
  roles: ["Studio or agency owner", "Finance or operations", "Bookkeeper or accountant", "Something else"],
};

export const replays = [
  { title: "Pricing retainers that don't eat your margin", date: "November 12, 2026", length: "54 min" },
  { title: "Quarterly taxes for studio owners", date: "September 17, 2026", length: "61 min" },
  { title: "Getting paid on time: invoices and terms", date: "July 9, 2026", length: "47 min" },
];

export const faq = [
  { q: "Is it really free?", a: "Yes. No card, no trial, and we won't add you to sales emails." },
  { q: "Can't make it live?", a: "Register anyway. The replay and the slides go to everyone who signed up, within a day." },
  { q: "Will there be time for questions?", a: "The last twelve minutes are questions only. You can also send one with your registration." },
  { q: "Do I need to use Ledgerwise?", a: "No. Everything works in any accounting software, and the checklist is a plain spreadsheet." },
];
