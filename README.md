# RNDM Landing

The RNDM Fintech landing page, ported from the single-file bundled export
to a Next.js App Router project. The current design is the light rebrand
(`RNDM Landing Light.html`); `RNDM Landing.html` is the earlier dark export.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Structure

| Path | What it is |
| --- | --- |
| `app/layout.tsx` | Fonts (`next/font`) + metadata |
| `app/page.tsx` | Section composition |
| `app/globals.css` | Design tokens, resets, keyframes |
| `app/fonts/AtAmiga.woff` | The display face, self-hosted |
| `components/Section.tsx` | Shared section shell, heading and grid helpers |
| `components/*.tsx` | One component per section, each with a CSS module |
| `components/HeroStrips.tsx` | The hero D strip picker (the one client component) |
| **`lib/content.ts`** | **Every word on the page** — copy, links, hero variant |
| `public/agents/*.jpg` | Hero D strip photography |

## Editing copy

All page text lives in [`lib/content.ts`](lib/content.ts), one export per
section, in the order the sections appear. Components hold layout only and read
their strings from there, so any wording change is a single-file edit and no
JSX needs touching. Each entry keeps the accent token or asset that belongs
with it — an agent's tint, a project's badge colour, a stat's accent — so items
can be re-worded, re-ordered or re-coloured together.

Headings that break across two lines are stored as separate keys: `title` is
the first line and `titleEm` the second, which renders in `--blue`.

## Hero variants

The design exposes four hero treatments behind an enum prop, kept as
`HeroA`–`HeroD` in [`components/Hero.tsx`](components/Hero.tsx); switch between
them with `HERO_VARIANT` in [`lib/content.ts`](lib/content.ts).

| Variant | Treatment |
| --- | --- |
| `A` | Split, with the portfolio card |
| `B` | Centered statement |
| `C` | Chat teaser |
| `D` | Expanding photo strips — the export's default |

## Design language

- **Type.** Roboto Mono carries body, UI and labels; At Amiga (self-hosted,
  Tourney as the fallback) carries every heading, uppercased with `.02em`
  tracking. Headings never use italics — `em` is reset to upright and marks
  emphasis with `--blue` instead.
- **Shape.** Nothing is rounded. Solid calls to action take a clipped corner
  from the shared `--notch` clip-path.
- **Section headings** carry a small blue square 16px above them, from
  `.marked` in `Section.module.css`.
- Colours live as custom properties on `:root`; the `--*-tint` accents are the
  pale card/avatar washes that replaced the dark theme's `--*-deep` fills.

## Notes on the port

- Inline styles from the export became CSS modules with real class names.
  `style-hover="…"` attributes became `:hover` rules.
- The `[data-v6-*]` media-query grid overrides became `.cols2` / `.cols3` /
  `.cols4` helpers in `Section.module.css`, at the same breakpoints.
- Fonts were base64-embedded in the bundle; Roboto Mono and Tourney are now
  self-hosted at build time by `next/font/google`, At Amiga by
  `next/font/local`.
- Repeated markup (agent cards, stats, gates, FAQ, project cards) is
  data-driven.
- The Work cards are built around an image slot the export left empty. Drop a
  screenshot in `public/work` and set `image` on the project in
  [`lib/content.ts`](lib/content.ts); the cover labels switch to white over a
  scrim when one is present, and stay ink-on-gradient when not.
- The hero strips stack into a column below 760px, and the transcript's reply
  indent narrows below 640px — neither breakpoint is in the export, which was
  only laid out wide.
