# Shree Samsthan Gokarn Partagali Jeevottam Math — Portfolio Site

A Next.js 15 (App Router) revamp of [partagalimath.org](https://partagalimath.org/),
styled as an editorial portfolio with a Hindu / Dvaita aesthetic.

## Stack
- Next.js 15 (App Router, React Server Components)
- TypeScript
- Tailwind CSS v4 (CSS-first `@theme`)
- Google Fonts: Cinzel, Cormorant Garamond, Tiro Devanagari Sanskrit, Inter

## Design language
- Palette: saffron, maroon, gold, cream, parchment, ink
- Devanagari section headers + English display type
- Ornate framed cards, mandala SVG backdrop, gilded gradient text
- Timeline-style Guruparampara of the 24 Acharyas

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure

```
app/
  layout.tsx        # fonts + metadata
  page.tsx          # composes all sections
  globals.css       # theme tokens, ornament utilities
components/
  Navbar.tsx
  Hero.tsx
  About.tsx
  Peethadhipati.tsx
  GuruParampara.tsx
  MathSections.tsx
  SocialInitiatives.tsx
  Contact.tsx
  Footer.tsx
  OmDivider.tsx
public/images/      # logo, seal, peethadhipati photo, scene
```

All content (text, lineage, dates, photos, logo) sourced from the original
partagalimath.org — no external information added.
