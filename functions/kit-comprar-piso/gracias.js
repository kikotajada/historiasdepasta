import template from "../../templates/gracias-kit-comprar-piso.html";
import { handleGracias } from "../../src/gracias.js";

export const onRequestGet = (context) =>
  handleGracias(context, { template, kitPath: "kit-comprar-piso", expectedPlinkVar: "PLINK_KIT_COMPRAR_PISO" });
