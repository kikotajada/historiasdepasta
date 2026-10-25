import template from "../../templates/gracias-primer-ano-invirtiendo.html";
import { handleGracias } from "../../src/gracias.js";

export const onRequestGet = (context) =>
  handleGracias(context, { template, kitPath: "primer-ano-invirtiendo", expectedPlinkVar: "PLINK_PRIMER_ANO_INVIRTIENDO", extraPlinks: ["plink_1UUP4rLqHnYqa4t9us8j21bh"] /* 9 € lanzamiento */ });
