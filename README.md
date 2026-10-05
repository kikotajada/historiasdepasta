# historiasdepasta.es

Website for the YouTube channel **Historias de Pasta**. Plain static HTML and CSS, served by GitHub Pages. No build step.

## Structure

| Path | What it is |
|---|---|
| `index.html` | Home: hero, latest episode, Shorts, calculator teaser, characters |
| `episodios/` | All episodes and Shorts |
| `calculadora-coast-fire/` | Coast FIRE calculator (Spanish by default, English toggle) |
| `sobre/` | About the channel and the characters |
| `aviso-legal/`, `privacidad/` | Legal pages |
| `404.html` | Not-found page |
| `css/site.css` | Shared styles. Colours and fonts follow `assets/brand/brand.md` |
| `img/` | Web-sized WebP copies of the brand images |
| `assets/brand/` | Original brand files. Source of truth; don't edit or redraw |

The header and footer are repeated in every page. If you change one, change it everywhere (search for `site-header` / `site-footer`).

## Still to fill in

Search the repo for `TODO` and `PENDIENTE`:

- YouTube links for episodes 1 and 2 (`index.html`, `episodios/index.html`). They point to the channel until then.
- Owner name, NIF, address and email in `aviso-legal/index.html` and the email in `privacidad/index.html` (required by the LSSI-CE).

## Adding an episode or Short

1. Export the thumbnail at 1280 px wide as WebP into `img/episodios/` (Short covers: 540 px wide into `img/shorts/`). For example: `convert original.png -resize 1280x -quality 80 img/episodios/episodio-3.webp`.
2. Copy an existing card in `episodios/index.html` and change the image, number, title, description and link.
3. On the home page, move the new episode into the big "Último episodio" card.

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
