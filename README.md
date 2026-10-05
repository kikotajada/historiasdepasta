# historiasdepasta.es

Website for the YouTube channel **Historias de Pasta**. Plain static HTML and CSS, served by GitHub Pages. No build step.

## Structure

| Path | What it is |
|---|---|
| `index.html` | Home: hero, latest video, Shorts, calculator teaser, characters |
| `videos/` | All videos and Shorts |
| `calculadora-coast-fire/` | Coast FIRE calculator (Spanish by default, English toggle) |
| `sobre/` | About the channel and the characters |
| `aviso-legal/`, `privacidad/` | Legal pages |
| `404.html` | Not-found page |
| `css/site.css` | Shared styles. Colours and fonts follow `assets/brand/brand.md` |
| `img/` | Web-sized WebP copies of the brand images |
| `assets/brand/` | Original brand files. Source of truth; don't edit or redraw |

The header and footer are repeated in every page. If you change one, change it everywhere (search for `site-header` / `site-footer`).

## Still to fill in

Search the repo for `PENDIENTE`:

- Owner name, NIF, address and email in `aviso-legal/index.html` and the email in `privacidad/index.html` (required by the LSSI-CE).

## Adding a video or Short

1. Export the thumbnail at 1280 px wide as WebP into `img/videos/` (Short covers: 540 px wide into `img/shorts/`). For example: `convert original.png -resize 1280x -quality 80 img/videos/eliges-ser-rico.webp`.
2. Copy an existing card in `videos/index.html` and change the image, title, description and link.
3. On the home page, move the new video into the big "Último vídeo" card.

## Domain

Settings → Pages: deploy from the `main` branch, root folder, custom domain `historiasdepasta.es`, enforce HTTPS.

DNS at the registrar:

| Type | Name | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | kikotajada.github.io |
