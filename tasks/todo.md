# COMUA.fr Website Redesign — Task Tracker

## Phase 1: Foundation
- [x] Initialize Astro 6 project with Tailwind CSS v4 + TypeScript
- [x] Create global.css with design system (CSS custom properties, colors, typography)
- [x] Create BaseLayout.astro (HTML shell, head, fonts, Snipcart script)
- [x] Create Header.astro (logo, navigation, mobile hamburger)
- [x] Create Footer.astro (contact info, social links, legal links)
- [x] Create UI primitives: Button, Container, SectionHeading

## Phase 2: Home Page
- [x] Create Hero.astro (background, logo, tagline, CTA)
- [x] Create ActivityCard.astro + ActivityGrid.astro (4 activities)
- [x] Create QuoteSection.astro
- [x] Create ContactCTA.astro
- [x] Assemble index.astro

## Phase 3: Activity Pages
- [x] Define content collection schemas (content.config.ts)
- [x] Write Markdown content for 4 activities
- [x] Create ActivityLayout.astro (shared layout)
- [x] Create CapabilitiesList.astro
- [x] Build /usinage, /soudure, /ingenierie pages

## Phase 4: Product Catalog + E-commerce
- [x] Write Markdown for 6 products
- [x] Create ProductCard, ProductGrid, ProductDetail
- [x] Build /poterie catalog + /poterie/[slug] pages
- [x] Integrate Snipcart (cart button, cart widget in header/footer, buy buttons on product pages)
- [x] Product JSON-LD structured data on each product page

## Phase 5: Contact + Legal
- [x] Build /contact page (Netlify Forms + contact info sidebar)
- [x] Build /mentions-legales page
- [x] Build /politique-retours page
- [x] 404 error page

## Phase 6: Polish
- [x] Mobile navigation (hamburger + Escape key + focus management)
- [x] Scroll animations (CSS + IntersectionObserver)
- [x] SEO (meta tags, OG tags, theme-color)
- [x] JSON-LD structured data (Organization + Product schemas)
- [x] Sitemap + robots.txt
- [x] Accessibility: skip-to-content, aria-labels, nav landmarks, breadcrumbs, contrast fix, prefers-reduced-motion
- [x] Performance: deferred Snipcart CSS/JS, font preloading, image dimensions
- [x] Netlify config (netlify.toml: headers, cache, Node version)

## Remaining (need owner input)
- [ ] Replace `YOUR_SNIPCART_API_KEY` in src/layouts/BaseLayout.astro
- [ ] Add physical address to /contact page
- [ ] Replace placeholder product images with real photos
- [ ] Connect GitHub repo to Netlify
- [ ] DNS setup: point comua.fr to Netlify

## Build Status
- 15 pages + sitemap built in 1.90s
- Zero build errors
- All accessibility audit items addressed
