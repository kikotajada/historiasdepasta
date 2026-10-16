# Historias de Pasta — brand guide for the website

Personal-finance stories for people living and working in Spain, told in Castilian Spanish with a minimalist black-and-white cartoon style.
**Historias de Pasta** · @historias_pasta · new long episode every **Sunday at 20:00** (Spain time), plus Shorts during the week.
Tagline: *Finanzas personales para España, contadas como historias.*

## Colours
Everything is black, white and grey. Colour carries meaning.

| Token | Hex | Use |
|---|---|---|
| paper | `#FAF8F3` | Page background, always. Never pure white, never dark |
| ink | `#000000` | All text, outlines, arrows |
| mustard | `#E3A92B` | The one accent: underlines, highlights, buttons. Fill or large text only |
| gain | `#2E9E5B` | Only for money going up. Never decorative |
| loss | `#D64545` | Only for money going down. Never decorative |
| grey-dark | `#4A4A4A` | Secondary text |
| grey | `#8C8C8C` | Captions and meta. Large text only (low contrast) |
| grey-light | `#D9D6CF` | Hairlines, dividers |
| white | `#FFFFFF` | Cards on paper |

No gradients, glows or soft shadows. Cards can use a 6 px ink outline with a hard offset shadow (`0 14px 0 #000`), as in the Short covers.

## Fonts
Self-hosted from `fonts/` (Latin subset, includes ñ, accents and €):
- **Anton** (`anton.woff2`, weight 400): big numbers and the channel name.
- **Montserrat** (`montserrat-700.woff2`, `montserrat-800.woff2`): titles, labels, body text.

Signature mark: a mustard underline under the key word.
Spanish typography: keep accents. Put a non-breaking space before `%` and `€` (`4 %`, `100.000 €`). Use `.` for thousands and `,` for decimals.

## Logo
`logo/logo-dani-moneda-papel.png` is the main logo: Dani holding a € coin inside a black ring, 1080×1080. The black and mustard versions are for dark or coloured backgrounds and social avatars. Use the files as they are. To show the logo round, crop it with CSS (`border-radius: 50%`). There's no horizontal or mono version yet. Until there is, set "HISTORIAS DE PASTA" in Anton next to the logo.

## Characters
Cut-outs are transparent PNGs, about 650 px tall. Use them at that size or smaller. The `*-tres-cuartos` cut-outs face right, so place them on the left. **Never redraw, recolour or generate characters.** Use only these files.

| Character | Who | Files |
|---|---|---|
| Dani | Lead. A twin, the saver, the calm one | `dani/` (front, ¾ and 5 poses) |
| Lucía | His twin sister. Started saving late, rents | `lucia/` |
| Carmen | Their mother, retired | `carmen/` |
| Paco | Explainer host of the "PAUSA" segments | `paco/` |
| Pilar | Carmen's neighbour | not available yet |

`characters/cast-dani-lucia-carmen.jpeg` is a group image on an off-white background, for an "about" section.

## Voice
- Castilian Spanish, close and slightly ironic, short sentences, realistic Spanish numbers.
- Honest timelines (years, not "rich in 12 months").
- Educational only: never recommend a fund, broker or product.
- Footer disclaimer on every page: *"Contenido educativo y de entretenimiento. No es asesoramiento financiero. Las rentabilidades pasadas no garantizan rentabilidades futuras e invertir implica riesgo de pérdida."*

## Episodes  ← fill in the links

| # | Title | Thumbnail | YouTube link |
|---|---|---|---|
| 1 | De 0 a 100.000 € con un sueldo normal en España | `thumbnails/episodio-1-thumbnail.jpg` | |
| 2 | Dos hermanos, mismo sueldo | `thumbnails/episodio-2-thumbnail.png` | |
| 3 | POV: Eliges ser rico en vez de parecerlo | (coming soon) | |

## Shorts  ← fill in the links

| Short | Cover | YouTube link |
|---|---|---|
| Interés compuesto en 1 minuto | `shorts/cover-interes-compuesto.png` | https://youtube.com/shorts/FXpZE35kbgs?si=VT4WrRPCOfsbiI-l |
| Tu cuenta paga un 2 %. ¿Estás ganando dinero? | `shorts/cover-rentabilidad-real.png` | https://youtube.com/shorts/NapHOCsXh_4?si=7pDSGANtsWcJQP4w |
| ¿100.000 € hoy o 1 millón en 20 años? | `shorts/cover-valor-del-dinero.png` | https://youtube.com/shorts/EL7wd-yWz58?si=lpkvjXvI5LzRoxOU |
| La regla del 72 | `shorts/cover-regla-72.png` | https://youtube.com/shorts/-JuGoaZvalI?si=npFfGuAazmmhHkCv |
| Pides 200.000 € de hipoteca y devuelves 400.000 € | `shorts/cover-hipoteca.png` | https://youtube.com/shorts/xKW0rXrPyaQ?si=uQTEMh6C6DpTI6vQ |
| Este es Dani: le regaló 61.836 € a su banco | `shorts/cover-dani-comisiones.png` | https://youtube.com/shorts/_wWMVYX8dQs?si=8H-q9sJwMYUl5rKI |

## Other images
- `banner/banner-youtube-historias-de-pasta.png`: YouTube banner, 2560×1440, with all the characters and the tagline. Usable as a hero image if cropped.
- `icons/marca-agua-suscribete.png`: the "SUSCRÍBETE" € coin badge, 150×150, transparent. Use it for subscribe links.
