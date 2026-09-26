# Safe Line Traders (Pvt) Ltd. — Website

A Next.js 14 (App Router) + Tailwind CSS site for Safe Line Traders (Pvt) Ltd.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Adding your images

Every photo on the site is currently a labeled placeholder box (dashed
border, "[ Placeholder — ... ]"). To add real images:

1. Put image files in the `public/` folder (e.g. `public/ceo.jpg`,
   `public/camps/multan-2026.jpg`).
2. Replace the placeholder `<div>` in the relevant component
   (`components/Hero.tsx`, `components/CEOMessage.tsx`,
   `components/MedicalCamps.tsx`) with a Next.js `<Image>` or `<img>` tag
   pointing at `/your-file.jpg`.
3. For medical camp entries: open `components/MedicalCamps.tsx` and edit
   the `camps` array — fill in `location`, `date`, and `image` for each
   entry, and add more entries as needed (the grid layout scales
   automatically).

## Structure

- `app/layout.tsx` — fonts, metadata
- `app/page.tsx` — assembles all sections
- `components/` — one file per section (Navbar, Hero, About, CEOMessage,
  Services, ValueProps, CoreOfferings, MedicalCamps, Contact, Footer)
- `tailwind.config.ts` — color palette (navy / sky / olive) and fonts
