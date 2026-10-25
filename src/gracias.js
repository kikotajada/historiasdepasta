// Shared handler for the paid-kit thank-you pages (/<kit>/gracias).
//
// The download links live only in templates/ (never in public/), and this
// function hands them out only when the URL carries a Stripe Checkout
// session ID that Stripe confirms as paid. Stripe adds the ID itself:
// each Payment Link redirects to
//   https://historiasdepasta.es/<kit>/gracias?session_id={CHECKOUT_SESSION_ID}
//
// Needs one secret in Netlify (Site configuration → Environment variables):
//   STRIPE_KEY  a restricted key (rk_live_…) with read access to Checkout Sessions.
// Optional, to make sure a payment for one kit doesn't unlock the other:
//   PLINK_KIT_COMPRAR_PISO, PLINK_PRIMER_ANO_INVIRTIENDO  the plink_… IDs (comma-separated if several).

const SESSION_RE = /^cs_(live|test)_[A-Za-z0-9]{10,200}$/;

const HEADERS = {
  "content-type": "text/html; charset=utf-8",
  "cache-control": "private, no-store",
  "x-robots-tag": "noindex, nofollow",
  "referrer-policy": "no-referrer",
};

export async function verifySession(sessionId, env, expectedPlink, fetchImpl = fetch) {
  if (!sessionId || !SESSION_RE.test(sessionId)) return { ok: false, reason: "missing" };
  if (!env.STRIPE_KEY) return { ok: false, reason: "config" };

  let res;
  try {
    res = await fetchImpl(
      `https://api.stripe.com/v1/checkout/sessions/${encodeURIComponent(sessionId)}`,
      { headers: { authorization: `Bearer ${env.STRIPE_KEY}` } },
    );
  } catch {
    return { ok: false, reason: "stripe" };
  }
  if (res.status === 404) return { ok: false, reason: "unknown" };
  if (!res.ok) return { ok: false, reason: "stripe" };

  const s = await res.json();
  const paid = s.status === "complete" && (s.payment_status === "paid" || s.payment_status === "no_payment_required");
  if (!paid) return { ok: false, reason: "unpaid" };
  const allowed = [].concat(expectedPlink || []).filter(Boolean);
  if (allowed.length && s.payment_link && !allowed.includes(s.payment_link)) return { ok: false, reason: "other-kit" };
  return { ok: true };
}

function lockedPage(template, kitPath, reason) {
  const temporary = reason === "stripe" || reason === "config";
  const body = temporary
    ? `<span class="pill">Un momento</span>
  <h1>No hemos podido <span class="mark">comprobar tu compra</span></h1>
  <p class="lead">Es un fallo temporal nuestro, no tuyo. Recarga la página en un minuto.</p>`
    : `<span class="pill">Enlace de descarga</span>
  <h1>Esta página es para <span class="mark">quien ha comprado el kit</span></h1>
  <p class="lead">Si ya lo compraste, abre el enlace que te llevó aquí después de pagar (o el de tu email de confirmación). Si no lo encuentras, escríbenos y te lo reenviamos.</p>
  <p style="margin-top:24px"><a class="btn" href="/${kitPath}/">Ver el kit</a></p>`;

  const main = `<main id="contenido" class="thanks">
<div class="wrap">
  ${body}
  <p class="tip muted">¿Pagaste y no te deja entrar? Escribe a <a class="link" href="mailto:kikotajada@gmail.com">kikotajada@gmail.com</a> con el email de tu compra y lo arreglamos enseguida.</p>
</div>
</main>`;
  return template.replace(/<main[\s\S]*?<\/main>/, main);
}

export async function handleGracias(context, { template, kitPath, expectedPlinkVar, extraPlinks = [] }) {
  const url = new URL(context.request.url);
  const sessionId = url.searchParams.get("session_id");
  // The env var may hold one plink_… ID or several separated by commas; extraPlinks adds
  // links created later (e.g. a launch-price link) without touching Netlify settings.
  const fromEnv = String(context.env[expectedPlinkVar] || "").split(",").map((x) => x.trim()).filter(Boolean);
  const expected = fromEnv.length ? [...fromEnv, ...extraPlinks] : [];
  const result = await verifySession(sessionId, context.env, expected);

  if (result.ok) return new Response(template, { headers: HEADERS });
  const status = result.reason === "stripe" || result.reason === "config" ? 503 : 403;
  return new Response(lockedPage(template, kitPath, result.reason), { status, headers: HEADERS });
}
