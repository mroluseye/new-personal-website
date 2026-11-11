# olucole.com

Personal site for Olu Cole: Lead Delivery Manager, Agile Leader, Founder, Agentic AI Advocate and Context Engineer. It introduces the five roles, showcases four shipped products (Energity, bythenumbers, calltoduty, Mivva), collects Cole's Notes sign-ups and takes contact enquiries.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Edit the content

All copy, links and product details live in `src/content/site.ts`. Change words there; the section components only render what that file exports.

- Product thumbnails: `public/products/*.jpg` (1440 × 900 screenshots of each live site).
- Portrait: `public/profile-persona-website.jpg`.
- Link preview image: `public/og-image.jpg`.

## Configure

- **Forms:** the contact form and Cole's Notes sign-up both post to the Formspree endpoint in `FORMSPREE_ENDPOINT` (`src/content/site.ts`). Submissions arrive in that Formspree account.
- **Design tokens:** colours (paper, ink, signal, marker), fonts and shadows are in `tailwind.config.js`. Base styles and the print-grain texture are in `src/index.css`.
- **Fonts:** Fraunces, Schibsted Grotesk and JetBrains Mono load from Google Fonts in `index.html`.

## Deploy

```bash
npm run build
```

Upload the `dist/` folder to any static host (Vercel, Netlify, Cloudflare Pages). The site uses client-side routing for `/privacy`, so configure the host to serve `index.html` for unknown paths.
