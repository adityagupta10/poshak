# Poshak — Dress the Divine

Production-ready Next.js 15 e-commerce storefront for devotional idol clothing, ornaments, and shringar accessories.

## Stack

- Next.js 15 (App Router + React Server Components)
- TypeScript
- Tailwind CSS v4
- Lucide React icons
- Zustand (cart + wishlist local persistence)

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`

## Included features

- Home page with hero, featured deity categories, best sellers, testimonials, and newsletter signup
- `/shop` with search, filters (deity, type, size, price), and sorting
- Dynamic category pages: `/category/[slug]`
- Dynamic product pages: `/product/[id]` with gallery and related products
- Cart with quantity management and shipping calculation
- Checkout simulation with success modal and generated order number
- Wishlist with local storage persistence
- SEO metadata, Open Graph tags, `robots.ts`, and `sitemap.ts`

## Notes

- Product data is hardcoded in `lib/data.ts` (no backend/database).
- Payments and forms are simulated for demo purposes.
