# historiasdepasta.es

Website for the YouTube channel **Historias de Pasta**. Plain static HTML and CSS, served by **Cloudflare Pages** (production branch `main`). No build step: Cloudflare serves the `public/` folder as-is, plus the small functions in `functions/`.

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
| `_headers` | Security and caching headers (Cloudflare) |
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

The download links of the paid kits are **not** in `public/`, so nobody can grab them for free. They live in `templates/gracias-<kit>.html`, and `functions/<kit>/gracias.js` serves that page only when the URL has a Stripe Checkout session ID that Stripe confirms as paid (logic in `src/gracias.js`). Anyone else gets a "this page is for buyers" message with the contact email.

- Each Stripe Payment Link must redirect after payment to `https://historiasdepasta.es/<kit>/gracias?session_id={CHECKOUT_SESSION_ID}` (exactly like that; Stripe fills in the ID).
- Cloudflare needs the secret `STRIPE_KEY`: a Stripe restricted key with read access to Checkout Sessions only. Optional `PLINK_<KIT>` variables (e.g. `PLINK_KIT_COMPRAR_PISO = plink_…`) stop one kit's payment from unlocking the other.
- New kit: copy a template and a function, rename, change the links and text, set its Payment Link redirect as above.

## Hosting (Cloudflare Pages)

Cloudflare Pages project connected to this GitHub repo: framework preset *None*, build command empty, build output directory `public`. Every push to `main` deploys in about a minute; other branches get preview URLs. Unlimited bandwidth on the free plan, commercial use allowed.

The domain `historiasdepasta.es` uses Cloudflare nameservers and is attached under the project's *Custom domains*, with `www` redirecting to the bare domain.

To test locally: `npx wrangler pages dev public` from the repo root.
