import { graciasPrimerAnoInvirtiendo as template } from "./_templates.mjs";
import { handleGracias } from "../../src/gracias.js";

export default (request) =>
  handleGracias({ request, env: process.env }, { template, kitPath: "primer-ano-invirtiendo", expectedPlinkVar: "PLINK_PRIMER_ANO_INVIRTIENDO" });

export const config = { path: ["/primer-ano-invirtiendo/gracias", "/primer-ano-invirtiendo/gracias/"], method: "GET" };
