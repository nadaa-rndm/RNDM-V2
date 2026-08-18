# RNDM Landing

The RNDM Fintech landing page, ported from the single-file bundled export
(`RNDM Landing.html`) to a Next.js App Router project.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Structure

| Path | What it is |
| --- | --- |
| `app/layout.tsx` | Fonts (`next/font/google`) + metadata |
| `app/page.tsx` | Section composition |
| `app/globals.css` | Design tokens, resets, keyframes |
| `components/Section.tsx` | Shared section shell, heading and grid helpers |
| `components/*.tsx` | One component per section, each with a CSS module |
| `lib/site.ts` | Hero variant switch and contact details |

## Hero variants

The original design exposed three hero treatments behind an enum prop.
All three are kept as `HeroA` / `HeroB` / `HeroC` in
[`components/Hero.tsx`](components/Hero.tsx); switch between them with
`HERO_VARIANT` in [`lib/site.ts`](lib/site.ts). The export's default was `B`.

## Notes on the port

- Inline styles from the export became CSS modules with real class names.
  `style-hover="…"` attributes became `:hover` rules.
- The `[data-v6-*]` media-query grid overrides became `.cols2` / `.cols3` /
  `.cols4` helpers in `Section.module.css`, at the same breakpoints.
- Fonts were base64-embedded woff2 in the bundle; they are now self-hosted at
  build time by `next/font/google` (IBM Plex Mono, Instrument Sans,
  Instrument Serif).
- Hex colours were lifted into CSS custom properties on `:root`.
- Repeated markup (agent cards, stats, gates, FAQ, project cards) is now
  data-driven.

`RNDM Landing.html` is kept at the root as the reference export.
