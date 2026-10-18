// Turns templates/*.html into netlify/_templates.mjs so the
// functions can import the download pages as strings. Runs as the Netlify
// build command; the output is generated and not committed.
import { readdirSync, readFileSync, writeFileSync } from "node:fs";

const out = readdirSync("templates")
  .filter((f) => f.endsWith(".html"))
  .map((f) => `export const ${f.replace(/\.html$/, "").replace(/-(\w)/g, (_, c) => c.toUpperCase())} = ${JSON.stringify(readFileSync(`templates/${f}`, "utf8"))};`)
  .join("\n");

writeFileSync("netlify/_templates.mjs", out + "\n");
console.log("Wrote netlify/_templates.mjs");
