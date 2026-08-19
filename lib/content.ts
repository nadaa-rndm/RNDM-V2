/**
 * Every word on the page lives here.
 *
 * Edit this file to change copy — no component needs touching. Each entry
 * carries the accent token or asset that travels with it, so a section can be
 * re-ordered, re-worded or re-coloured from one place.
 */

/* Page ------------------------------------------------------------------ */

export const meta = {
  title: "RNDM Fintech — a desk of three agents",
  description:
    "Research, engineering and marketing — one desk that takes tokenised stocks, a full portfolio manager and banking solutions from thesis to shipped.",
};

export const contact = {
  email: "hello@rndm.io",
  subject: "One task for the desk",
};

export const CONTACT_MAILTO = `mailto:${contact.email}?subject=${encodeURIComponent(
  contact.subject,
)}`;

/**
 * The design ships four hero treatments:
 *   A — split with portfolio card
 *   B — centered statement
 *   C — chat teaser
 *   D — expanding photo strips (the design's default)
 */
export type HeroVariant = "A" | "B" | "C" | "D";

export const HERO_VARIANT: HeroVariant = "D";

/* Header ---------------------------------------------------------------- */

export const header = {
  brand: "RNDM FINTECH",
  ticker: [
    { label: "TVL:", value: "1.1M", color: "var(--blue)" },
    { label: "APY:", value: "14", color: "var(--amber)" },
    { label: "Users:", value: "120", color: "var(--green)" },
  ],
  nav: [
    { href: "#desk", label: "DESK" },
    { href: "#transcript", label: "TRANSCRIPT" },
    { href: "#work", label: "WORK" },
  ],
  cta: { href: "#compose", label: "SEND A TASK" },
};

/* Hero ------------------------------------------------------------------ */

export const heroA = {
  status: "THE DESK IS ONLINE",
  title: "A fintech desk of three agents.",
  titleEm: "You brief. They ship.",
  lede: "Ganesh covers tokenised stocks and fund management, Adam builds every layer of the product, Mira takes it to market. Briefed by you, built and run by RNDM.",
  primary: { href: "#compose", label: "SEND ONE TASK →" },
  secondary: { href: "#desk", label: "MEET THE DESK" },
  card: {
    label: "PORTFOLIO MANAGER · LIVE",
    delta: "+2.4% MTD",
    total: "$4.2M",
    totalCaption: "AUM",
    allocation: [
      { label: "Tokenised equities", share: "46%", color: "var(--blue)" },
      { label: "Treasuries", share: "25%", color: "var(--green)" },
      { label: "Yield strategies", share: "15%", color: "var(--amber)" },
      { label: "Cash · rails", share: "14%", color: "var(--line-strong)" },
    ],
    rail: {
      from: "ACCOUNT",
      via: "ON/OFF RAMP",
      to: "SETTLEMENT ✓",
      alt: "Account to on/off ramp to settlement",
    },
  },
};

export const heroB = {
  badge: "RNDM FINTECH · THE DESK IS ONLINE",
  title: "Tokenised markets,",
  titleEm: "staffed by agents.",
  lede: "Research, engineering and marketing — one desk that takes tokenised stocks, a full portfolio manager and banking solutions from thesis to shipped.",
  primary: { href: "#compose", label: "Send one task →" },
  secondary: { href: "#transcript", label: "Read a transcript" },
};

export const heroC = {
  status: "REPLIES IN MINUTES, NOT MEETINGS",
  title: "The fintech desk",
  titleEm: "you don't have to hire.",
  lede: "Brief it like a colleague. Ganesh answers with analysis, Adam with a build, Mira with a launch.",
  cta: { href: "#compose", label: "Send one task →" },
  thread: {
    fromYou: "Can we offer tokenised stocks by Q4?",
    replies: [
      {
        initial: "G",
        accent: "var(--blue)",
        tint: "var(--blue-tint)",
        text: "Yes — coverage note by Friday, portfolio manager scoped next week, rails after. Cathena shipped on this exact path.",
      },
      {
        initial: "A",
        accent: "var(--green)",
        tint: "var(--green-tint)",
        text: "Stack reserved. Frontend + backend from one desk.",
      },
    ],
    typing: "Mira is typing…",
  },
};

export const heroD = {
  title: "Agents that work",
  titleSecondLine: "like colleagues.",
  lede: "A fintech desk of three agents — Ganesh on tokenised-stock research, Adam on engineering, Mira on marketing. Briefed by you, built and run by us.",
  primary: { href: "#compose", label: "Send a task" },
  secondary: { href: "#desk", label: "How it works" },
  strips: [
    {
      id: "ganesh",
      name: "Ganesh — Research Analyst",
      role: "Tokenised stocks · Funds ↗",
      said: "Fund NAV drifted 40bps off the index — rebalance sheet attached.",
      reply: "Route it through the portfolio manager.",
      image: "/agents/ganesh.jpg",
      tint: "var(--blue-tint)",
    },
    {
      id: "adam",
      name: "Adam — Engineering",
      role: "Frontend · Backend ↗",
      said: "Trading UI is live; settlement contracts go to audit Friday.",
      reply: "Ship it, then wire up the banking rails.",
      image: "/agents/adam.jpg",
      tint: "var(--green-tint)",
    },
    {
      id: "mira",
      name: "Mira — Marketing",
      role: "Launch videos · Promo ↗",
      said: "Launch film cut is ready — 45 seconds, promo kit attached.",
      reply: "Drop it with the release on Monday.",
      image: "/agents/mira.jpg",
      tint: "var(--amber-tint)",
    },
  ],
};

/* The desk -------------------------------------------------------------- */

export const desk = {
  title: "The desk",
  eyebrow: "THREE AGENTS · ONE PIPELINE",
  ganesh: {
    initial: "G",
    name: "Ganesh",
    role: "RESEARCH ANALYST",
    accent: "var(--blue)",
    tint: "var(--blue-tint)",
    lines: [
      { label: "Tokenised stocks & fund management", tag: "ANALYSIS" },
      { label: "Full portfolio manager", tag: "PRODUCT" },
      { label: "Banking solutions", tag: "RAILS" },
    ],
    footerLabel: "EXAMPLES FROM GANESH",
    links: [
      { href: "#cathena", label: "Cathena ↗", accent: "var(--blue)" },
      { href: "#dudu", label: "Dudu ↗", accent: "var(--amber)" },
    ],
  },
  adam: {
    initial: "A",
    name: "Adam",
    role: "ENGINEERING",
    accent: "var(--green)",
    tint: "var(--green-tint)",
    blurb:
      "All your engineering needs — frontend and backend, contracts and infra, shipped as one stack and maintained after launch.",
    tags: ["FRONTEND", "BACKEND", "CONTRACTS"],
  },
  mira: {
    initial: "M",
    name: "Mira",
    role: "MARKETING",
    accent: "var(--amber)",
    tint: "var(--amber-tint)",
    blurb:
      "Marketing solutions end to end — launch videos, promotional material, and the narrative that makes a financial product legible.",
    tags: ["LAUNCH VIDEOS", "PROMO MATERIAL"],
  },
};

/* Transcript ------------------------------------------------------------ */

export const transcript = {
  title: "What a week with the desk reads like",
  eyebrow: "TRANSCRIPT · UNEDITED",

  fromYou: {
    text: "We want to offer tokenised stocks to our customers. Can your desk take it?",
    stamp: "YOU · 09:41",
  },

  ganesh: {
    initial: "G",
    accent: "var(--blue)",
    tint: "var(--blue-tint)",
    text: "Yes. Coverage opens today — analysis note attached. Portfolio manager scope and banking rails follow this week.",
    stamp: "GANESH · 09:44",
  },

  attachment: {
    title: "⊕ RN-014 · TOKENISED EQUITY COVERAGE",
    file: "GANESH.PDF",
    rows: [
      { label: "xAAPL — tracking error", value: "8 bps · 6 sessions", color: "var(--green)" },
      {
        label: "Fund NAV drift vs index",
        value: "40 bps · rebalance queued",
        color: "var(--amber)",
      },
      {
        label: "Verdict",
        value: "BUILD — thesis attached",
        color: "var(--blue)",
        strong: true,
      },
    ],
  },

  adam: {
    initial: "A",
    accent: "var(--green)",
    tint: "var(--green-tint)",
    text: "Picking up the spec. Frontend, backend and contracts are one stack on my desk.",
    stamp: "ADAM · DAY 08",
  },

  terminal: {
    name: "adam@rndm — build.log",
    lines: [
      { mark: "✓", color: "var(--green)", text: "pricing engine — 14 venues, 200ms refresh" },
      { mark: "✓", color: "var(--green)", text: "trading & portfolio UI" },
      {
        mark: "▸",
        color: "var(--amber)",
        text: "settlement contracts — audit scheduled",
        caret: true,
      },
    ],
  },

  mira: {
    initial: "M",
    accent: "var(--amber)",
    tint: "var(--amber-tint)",
    text: "Launch cut is ready — 45s film plus the promo kit. Storyboard attached; full video lands with the release.",
    stamp: "MIRA · DAY 21",
  },

  storyboard: {
    quote: "“Your stocks, onchain”",
    bars: [
      { width: "60%", color: "var(--blue)" },
      { width: "42%", color: "var(--green)" },
      { width: "50%", color: "var(--amber)" },
    ],
    launch: "LAUNCH DAY",
  },
};

/* Work ------------------------------------------------------------------ */

export const work = {
  title: "Live from Ganesh's desk",
  eyebrow: "EXAMPLES · 2025—26",
  projects: [
    {
      id: "cathena",
      name: "Cathena",
      href: "https://buoy.finance",
      external: true,
      accent: "var(--blue)",
      badge: "rgba(47, 107, 255, 0.9)",
      cover: "radial-gradient(120% 160% at 10% 0%, var(--blue-tint) 0%, var(--surface) 75%)",
      /** Drop a screenshot in `public/work` and point `image` at it. */
      image: undefined as string | undefined,
      eyebrow: "YIELD & LENDING · APTOS",
      stat: "14.0% APY",
      blurb: "Yield & lending desk on Aptos — a terminal, not a casino.",
      link: "buoy.finance ↗",
    },
    {
      id: "dudu",
      name: "Dudu",
      href: "#compose",
      external: false,
      accent: "var(--amber)",
      badge: "rgba(255, 92, 0, 0.9)",
      cover: "radial-gradient(120% 160% at 90% 0%, #ffe9d6 0%, var(--surface) 75%)",
      image: undefined as string | undefined,
      eyebrow: "CHARACTER-LED PRODUCT",
      stat: "MASCOT AGENT",
      blurb: "Mascot agent — proof a financial agent can have a face.",
      link: "CASE STUDY",
    },
  ],
};

/* Market ---------------------------------------------------------------- */

export const market = {
  title: "The market got real.",
  titleEm: "Desks didn't scale.",
  eyebrow: "SOURCES: RWA.XYZ · DEFILLAMA · 2026",
  stats: [
    {
      value: "$29B",
      color: "var(--blue)",
      caption: "Tokenised RWA value onchain, ex-stablecoins — Q1 2026",
    },
    {
      value: "+140%",
      color: "var(--green)",
      caption: "Tokenised equity market-cap growth through 2026, to ~$2B",
    },
    {
      value: "$13.4B",
      color: "var(--amber)",
      caption: "Tokenised US Treasuries — the largest, fastest-moving class",
    },
  ],
};

/* Onboarding ------------------------------------------------------------ */

export const onboarding = {
  title: "Four weeks, like a new joiner",
  eyebrow: "FIXED FEE · EXIT AT ANY GATE",
  phases: [
    {
      gate: "WK 01 · GATE 01",
      color: "var(--blue)",
      name: "Shadow",
      copy: "The agent watches your desk work and drafts its own notes.",
    },
    {
      gate: "WK 02 · GATE 02",
      color: "var(--green)",
      name: "Assist",
      copy: "It proposes; a human approves. Every correction becomes an eval case.",
    },
    {
      gate: "WK 03 · GATE 03",
      color: "var(--amber)",
      name: "Operate",
      copy: "Clear cases end to end; the rest escalated with reasoning attached.",
    },
    {
      gate: "WK 04 · HANDOVER",
      color: "var(--red)",
      name: "Review",
      copy: "Accuracy, cost per task and escalation rate against week one.",
    },
  ],
};

/* FAQ ------------------------------------------------------------------- */

export const faq = {
  title: "Questions finance teams ask us",
  questions: [
    {
      q: "Who signs off on a trade?",
      a: "Always a human. Agents propose, size and document; approval stays with your desk.",
    },
    {
      q: "Do you hold custody?",
      a: "No. We build against your custodian and your banking rails — never in the middle of them.",
    },
    {
      q: "What happens after launch?",
      a: "We run it — monitoring, evals, model changes and incident response on a monthly review.",
    },
    {
      q: "Can we see it working first?",
      a: "Cathena and Dudu are live from Ganesh's desk — start there, then send one task.",
    },
  ],
};

/* Compose --------------------------------------------------------------- */

export const compose = {
  title: "Send one task you'd rather",
  titleEm: "not do again.",
  sub: "Two lines is enough. Scope and fee within a working day.",
  placeholder: "Describe the task…",
  send: "Send →",
};

/* Footer ---------------------------------------------------------------- */

export const footer = {
  legal: "RNDM FINTECH © 2026 · LDN · BLR · ATX",
  links: [
    {
      href: "https://buoy.finance",
      label: "CATHENA",
      color: "var(--blue)",
      external: true,
    },
    { href: "#dudu", label: "DUDU", color: "var(--amber)", external: false },
    {
      href: `mailto:${contact.email}`,
      label: contact.email.toUpperCase(),
      color: "var(--muted-strong)",
      external: false,
    },
  ],
};
