import { graciasPrimerAnoInvirtiendo as template } from "../_templates.mjs";
import { handleGracias } from "../../src/gracias.js";

export default (request) =>
  handleGracias({ request, env: process.env }, { template, kitPath: "primer-ano-invirtiendo", expectedPlinkVar: "PLINK_PRIMER_ANO_INVIRTIENDO", extraPlinks: ["plink_1UUP4rLqHnYqa4t9us8j21bh"] /* 9 € lanzamiento */ });

export const config = { path: ["/primer-ano-invirtiendo/gracias", "/primer-ano-invirtiendo/gracias/"], method: "GET" };
