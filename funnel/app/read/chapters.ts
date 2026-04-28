// Single source of truth for the book's structure.
// Each chapter id is used as the URL slug AND the localStorage key prefix.

export type Chapter = {
  id: string;
  num: number | null; // null for non-numbered (welcome, toc, closing, about)
  part: 1 | 2 | 3 | null;
  title: string;
  subtitle?: string;
  href: string;
  worksheetFields?: string[]; // free-text fields
  worksheetCheckboxes?: string[];
  status: "full" | "scaffold" | "meta";
};

export const CHAPTERS: Chapter[] = [
  { id: "cover", num: null, part: null, title: "Cover", href: "/read", status: "meta" },
  { id: "welcome", num: null, part: null, title: "Welcome", href: "/read/welcome", status: "full" },
  { id: "toc", num: null, part: null, title: "Table of Contents", href: "/read/contents", status: "meta" },
  {
    id: "ch1",
    num: 1,
    part: 1,
    title: "The Boost Button Lie",
    subtitle: "Why Instagram wants you to keep hitting it",
    href: "/read/ch1",
    status: "full",
    worksheetFields: [
      "$ spent boosting in last 6 months: $___",
      "What did you actually get from those boosts?",
    ],
    worksheetCheckboxes: ["I commit to never hitting Boost again until I finish this book."],
  },
  {
    id: "ch2",
    num: 2,
    part: 1,
    title: "Boost vs Ads Manager",
    subtitle: "A nightlight versus a spotlight you can aim",
    href: "/read/ch2",
    status: "full",
    worksheetFields: [
      "Thing #1 Ads Manager can do that Boost can't",
      "Thing #2 Ads Manager can do that Boost can't",
    ],
    worksheetCheckboxes: ["I deleted the boost button mindset"],
  },
  {
    id: "ch3",
    num: 3,
    part: 2,
    title: "The $5/Day Setup",
    subtitle: "Account, pixel, page — the foundation",
    href: "/read/ch3",
    status: "scaffold",
    worksheetFields: [
      "Pixel installed on landing page? (yes/no)",
      "Daily test budget you'll commit to: $___",
    ],
    worksheetCheckboxes: ["My Business Manager is set up", "My pixel is firing"],
  },
  {
    id: "ch4",
    num: 4,
    part: 2,
    title: "Targeting That Actually Works",
    subtitle: "Stop guessing — let Meta find your fans",
    href: "/read/ch4",
    status: "scaffold",
    worksheetFields: [
      "Your top 3 sound-alike artists",
      "Your geo: broad or city-targeted?",
    ],
    worksheetCheckboxes: ["I trust the algorithm enough to test broad"],
  },
  {
    id: "ch5",
    num: 5,
    part: 2,
    title: "The Creative That Sells",
    subtitle: "Hooks, captions, and the 3-second rule",
    href: "/read/ch5",
    status: "scaffold",
    worksheetFields: [
      "Your hook — first 3 seconds: ___",
      "What problem does the song solve for the listener?",
    ],
    worksheetCheckboxes: ["I have 3 different hooks ready to test"],
  },
  {
    id: "ch6",
    num: 6,
    part: 3,
    title: "Reading the Numbers",
    subtitle: "The dashboard isn't lying to you. You just can't read it.",
    href: "/read/ch6",
    status: "scaffold",
    worksheetFields: [
      "Your CPM today: $___",
      "Your CTR today: ___%",
    ],
    worksheetCheckboxes: ["I know what CPM, CTR, and CPC mean"],
  },
  {
    id: "ch7",
    num: 7,
    part: 3,
    title: "When To Kill, When To Wait",
    subtitle: "Patience pays. So does pulling the plug.",
    href: "/read/ch7",
    status: "scaffold",
    worksheetFields: [
      "Ad to kill: ___",
      "Ad to give one more day: ___",
    ],
    worksheetCheckboxes: ["I'll wait 3 full days before judging an ad"],
  },
  {
    id: "ch8",
    num: 8,
    part: 3,
    title: "The Scaling Formula",
    subtitle: "Double the budget. Don't blow it up.",
    href: "/read/ch8",
    status: "full",
    worksheetFields: [
      "Your CPM after 5 days: $___",
      "Your CTR after 5 days: ___%",
      "Your cost per result: $___",
      "Decision: Kill / Leave / Scale ___",
    ],
    worksheetCheckboxes: ["I'm running the scaling system for 30 days"],
  },
  { id: "closing", num: null, part: null, title: "Closing", href: "/read/closing", status: "full" },
  { id: "about", num: null, part: null, title: "About the Author", href: "/read/about", status: "full" },
];

export function chapterIndex(id: string) {
  return CHAPTERS.findIndex((c) => c.id === id);
}

export function getChapter(id: string) {
  return CHAPTERS.find((c) => c.id === id);
}

export function nextChapter(id: string) {
  const i = chapterIndex(id);
  return i >= 0 && i < CHAPTERS.length - 1 ? CHAPTERS[i + 1] : null;
}

export function prevChapter(id: string) {
  const i = chapterIndex(id);
  return i > 0 ? CHAPTERS[i - 1] : null;
}
