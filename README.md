# Shannon Yeow — Portfolio

A Next.js + Tailwind CSS portfolio with an editorial, exhibition-catalog style.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. `npm run lint` and `npm run build` should both pass before deploying.

## Update content

| What | Where |
| --- | --- |
| Projects (titles, categories, descriptions, links, filter tags) | `data/projects.ts` |
| LinkedIn URL, nav, About photo slots | `data/site.ts` |
| Hero copy | `components/Hero.tsx` |
| About copy and index | `components/About.tsx` |
| Contact copy | `components/Contact.tsx` |
| Project screenshots | `public/projects/` (referenced from `data/projects.ts`; use `gallery` instead of `image` for a screen carousel) |
| Page metadata and fonts | `app/layout.tsx` |

### Before publishing

- **LinkedIn:** set `linkedinUrl` in `data/site.ts`. Until then the Contact section shows "Link coming soon" instead of a link.
- **Project screenshots:** covers are screenshots of the live sites (captured Oct 2026). To replace one, put an image in `public/projects/` and update that project's `image: { src, alt }`. Projects without an image show a "Screenshot coming soon" placeholder.
- **LearnSync:** `learnsync-delta.vercel.app` currently returns Vercel's 404 (DEPLOYMENT_NOT_FOUND). Redeploy it or update the URL, then add a screenshot.
- **About photos:** put images in `public/about/` and add `src` and `alt` to the entries in `aboutPhotos` (`data/site.ts`).

## Accessibility

- Skip link, semantic landmarks, and one link per project in the tab order (the cover duplicates the title link and is hidden from assistive tech).
- Filter buttons expose `aria-pressed`, and a live region announces how many projects are showing.
- External links announce that they open in a new tab.
- Hover details also trigger on keyboard focus, and `prefers-reduced-motion` turns animations and transitions off.
