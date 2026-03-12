# COMUA — comua.fr

Website for COMUA — Usinage, Soudure, Tours de potier, Ingénierie informatique.

## Stack

- [Astro 6](https://astro.build) — static site generator
- [Tailwind CSS 4](https://tailwindcss.com) — utility-first CSS
- [Snipcart](https://snipcart.com) — e-commerce (cart + checkout)
- Hosted on VPS OVH

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

## Deployment

Build with `npm run build`, then copy `dist/` to your web server. The site is fully static — no Node required in production.

## Configuration

- Snipcart API key is configured in `src/layouts/BaseLayout.astro`
- Product catalog managed in `src/content/products/` (Markdown)
- Contact form requires a backend endpoint (not included — configure on your server)
