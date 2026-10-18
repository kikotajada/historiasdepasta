# historiasdepasta.es

Website for the YouTube channel **Historias de Pasta**. Plain static HTML and CSS, served by **Netlify** (production branch `main`). Netlify serves the `public/` folder as-is, plus two small functions in `netlify/functions/`. The only build step bundles `templates/` for those functions.

## Structure

Everything the public sees lives in `public/`. Paths below are inside it.

| Path | What it is |
|---|---|
| `index.html` | Home: hero, latest video, Shorts, calculator teaser, characters |
| `videos/` | All videos and Shorts |
| `calculadora-coast-fire/` | Coast FIRE calculator (Spanish by default, English toggle) |
| `sobre/` | About the channel and the characters |
| `aviso-legal/`, `privacidad/` | Legal pages |
| `404.html` | Not-found page |
| `_headers` | Security and caching headers (Netlify reads the same format) |
| `css/site.css` | Shared styles. Colours and fonts follow `assets/brand/brand.md` |
| `img/` | Web-sized WebP copies of the brand images |
| `assets/brand/` | Original brand files. Source of truth; don't edit or redraw |

The header and footer are repeated in every page. If you change one, change it everywhere (search for `site-header` / `site-footer`).

## Still to fill in

Nothing pending. The contact email (kikotajada@gmail.com) appears in `aviso-legal/` and `privacidad/`; update both if you switch to an @historiasdepasta.es address.


## Adding a video or Short

1. Export the thumbnail at 1280 px wide as WebP into `img/videos/` (Short covers: 540 px wide into `img/shorts/`). For example: `convert original.png -resize 1280x -quality 80 img/videos/eliges-ser-rico.webp`.
2. Copy an existing card in `videos/index.html` and change the image, title, description and link.
3. On the home page, move the new video into the big "Último vídeo" card.

## Paid kits and download pages

The download links of the paid kits are **not** in `public/`, so nobody can grab them for free. They live in `templates/gracias-<kit>.html`, and `netlify/functions/gracias-<kit>.mjs` serves that page only when the URL has a Stripe Checkout session ID that Stripe confirms as paid (logic in `src/gracias.js`). Anyone else gets a "this page is for buyers" message with the contact email.

- Each Stripe Payment Link must redirect after payment to `https://historiasdepasta.es/<kit>/gracias?session_id={CHECKOUT_SESSION_ID}` (exactly like that; Stripe fills in the ID).
- Netlify needs the environment variable `STRIPE_KEY` (mark it secret): a Stripe restricted key with read access to Checkout Sessions only. Optional `PLINK_<KIT>` variables (e.g. `PLINK_KIT_COMPRAR_PISO = plink_…`) stop one kit's payment from unlocking the other.
- New kit: copy a template and a function in `netlify/functions/`, rename (the template's export name is its filename in camelCase), change the links and text, set its Payment Link redirect as above.

## Hosting (Netlify)

Netlify site connected to this GitHub repo. `netlify.toml` sets everything: publish folder `public`, build command `node scripts/build-templates.mjs`, functions in `netlify/functions`, and `www` redirecting to the bare domain. Every push to `main` deploys; other branches and pull requests get deploy previews.

Why not Cloudflare: Spanish ISPs block shared Cloudflare IP ranges during LaLiga matches, so the site went down for Spanish visitors at weekends. The domain's DNS still sits in Cloudflare, but the records for the site are **DNS only** (grey cloud), so traffic goes straight to Netlify.

`functions/` holds the old Cloudflare Pages Functions, kept only while the Pages project is the rollback. Delete it (and the Pages project) once Netlify has run fine for a week.

To test locally: `npx netlify-cli dev` from the repo root (needs `STRIPE_KEY` in a local `.env` to unlock the download pages).
