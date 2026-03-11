# COMUA — comua.fr

Website for COMUA — Usinage, Soudure, Tours de potier, Ingénierie informatique.

## Stack

- [Astro 6](https://astro.build) — static site generator
- [Tailwind CSS 4](https://tailwindcss.com) — utility-first CSS
- [Snipcart](https://snipcart.com) — e-commerce (cart + checkout)
- Deployed on [Netlify](https://netlify.com)

## Commands

| Command | Action |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |

## Content

Products and activity descriptions are managed as Markdown files in `src/content/`:

- `src/content/activities/` — Activity page content (usinage, soudure, poterie, ingénierie)
- `src/content/products/` — Product catalog (potter's wheels and accessories)

## Configuration

- Replace `YOUR_SNIPCART_API_KEY` in `src/layouts/BaseLayout.astro` with your Snipcart API key
- Contact form uses Netlify Forms (works automatically when deployed on Netlify)
