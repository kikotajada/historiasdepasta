import { graciasKitComprarPiso as template } from "../_templates.mjs";
import { handleGracias } from "../../src/gracias.js";

export default (request) =>
  handleGracias({ request, env: process.env }, { template, kitPath: "kit-comprar-piso", expectedPlinkVar: "PLINK_KIT_COMPRAR_PISO" });

export const config = { path: ["/kit-comprar-piso/gracias", "/kit-comprar-piso/gracias/"], method: "GET" };
