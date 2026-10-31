import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ShannonIndexText } from "../text/en";

const es: CalculatorTranslation<ShannonIndexText> = {
  content: {
    title: "Calculadora del índice de diversidad de Shannon",
    shortTitle: "Índice de Shannon",
    summary:
      "Calcula el índice de diversidad de Shannon H′, la equitatividad de Pielou, el número efectivo de especies y los índices de Simpson a partir del número de individuos por especie.",
    metaTitle: "Índice de Shannon – Calcula H′ y la equitatividad",
    metaDescription:
      "Calcula el índice de Shannon H′ (ln, log2 o log10) de tus recuentos de especies, con la equitatividad J′, el número efectivo de especies y el índice de Simpson.",
    keywords: [
      "índice de Shannon",
      "índice de Shannon-Wiener",
      "diversidad de especies",
      "índice de biodiversidad",
      "equitatividad de Pielou",
      "índice de Simpson",
      "riqueza de especies",
      "ecología",
    ],
    intro: [
      "El índice de Shannon H′ (también llamado de Shannon-Wiener o de Shannon-Weaver) mide la diversidad de una comunidad a partir de cuántos individuos de cada especie has contado. Aumenta con el número de especies y con lo uniformemente que se reparten los individuos entre ellas, y vale 0 cuando solo hay una especie.",
      "Esta calculadora da H′ en la base logarítmica que elijas, la equitatividad de Pielou J′, el número efectivo de especies y el índice de Simpson con sus formas de Gini-Simpson e inversa, además de una tabla con la proporción del total que representa cada especie.",
    ],
    howToUse: [
      "Introduce el número de individuos contados de cada especie, un recuento por especie, separados por punto y coma, espacios o saltos de línea.",
      "Elige la base del logaritmo. El logaritmo natural es el más habitual en ecología; la base 2 da H′ en bits.",
      "Consulta H′ y los demás índices. Se admiten recuentos de cero, pero se ignoran, y el resultado indica cuántos había.",
    ],
    formulas: [
      {
        title: "Índice de Shannon",
        expression: "H′ = −Σ pᵢ log pᵢ, con pᵢ = nᵢ ÷ N",
        explanation: "nᵢ es el recuento de la especie i y N el recuento total. Solo se incluyen las especies con nᵢ > 0.",
      },
      {
        title: "Equitatividad de Pielou",
        expression: "J′ = H′ ÷ log S",
        explanation:
          "S es el número de especies presentes. J′ va desde cerca de 0 (domina una especie) hasta 1 (todas las especies igual de comunes), y requiere S ≥ 2.",
      },
      {
        title: "Número efectivo de especies",
        expression: "D₁ = base^H′ (e^H′ con el logaritmo natural)",
        explanation: "El número de especies igual de comunes que daría el mismo H′. No depende de la base.",
      },
      {
        title: "Índice de Simpson",
        expression: "D = Σ nᵢ(nᵢ − 1) ÷ (N(N − 1)); Gini-Simpson = 1 − D; inverso = 1 ÷ D",
        explanation: "D es la probabilidad de que dos individuos extraídos al azar sin reemplazo pertenezcan a la misma especie.",
      },
    ],
    examples: [
      {
        title: "Seis especies de aves a lo largo de un transecto",
        steps: [
          "N = 100, así que las proporciones son 0,42, 0,27, 0,15, 0,09, 0,05 y 0,02.",
          "H′ = −(0,42 ln 0,42 + 0,27 ln 0,27 + … + 0,02 ln 0,02) ≈ 1,4472.",
          "J′ = 1,4472 ÷ ln 6 ≈ 0,808; número efectivo e^1,4472 ≈ 4,25 especies.",
          "D de Simpson = (42·41 + 27·26 + 15·14 + 9·8 + 5·4 + 2·1) ÷ (100·99) = 2.728 ÷ 9.900 ≈ 0,2756.",
        ],
      },
      {
        title: "Recuentos por cuadrante con especies ausentes, en bits",
        steps: [
          "Los dos ceros se ignoran: S = 5 especies y N = 80 individuos.",
          "H′ = −Σ pᵢ log₂ pᵢ ≈ 2,0478 bits.",
          "J′ = 2,0478 ÷ log₂ 5 ≈ 0,882.",
        ],
      },
      {
        title: "Una comunidad dominada por una especie, en base 10",
        steps: ["p = 0,60, 0,25, 0,10, 0,05.", "H′ = −Σ pᵢ log₁₀ pᵢ ≈ 0,4487.", "Número efectivo 10^0,4487 ≈ 2,81 especies."],
      },
    ],
    assumptions: [
      "Los recuentos son una muestra aleatoria de la comunidad y todos los individuos se han identificado hasta especie. Las especies raras se pasan por alto con facilidad en muestras pequeñas, lo que reduce H′.",
      "H′ usa directamente las proporciones observadas, sin las correcciones del sesgo de muestras pequeñas que aplican algunos estudios.",
      "Los valores en distintas bases logarítmicas difieren en un factor constante (H′ en bits = H′ en nats ÷ ln 2), así que compara solo índices en la misma base.",
      "El índice de Simpson usa aquí la forma para muestras finitas nᵢ(nᵢ − 1) ÷ (N(N − 1)). Algunos textos usan Σ pᵢ², que da valores ligeramente distintos en muestras pequeñas.",
    ],
    faqs: [
      {
        question: "¿Qué es un índice de Shannon alto?",
        answer:
          "No hay una escala fija: H′ crece con el número de especies y con la equitatividad, y su máximo es log S. Por eso la equitatividad J′ (H′ ÷ log S) y el número efectivo de especies suelen ser más fáciles de interpretar y comparar.",
      },
      {
        question: "¿Por qué se ignoran los recuentos de cero?",
        answer:
          "Una especie sin individuos tiene pᵢ = 0, y el término pᵢ log pᵢ tiende a 0 cuando pᵢ disminuye, así que no aporta nada a H′. Tampoco cuenta para la riqueza de especies S.",
      },
      {
        question: "¿En qué se diferencia el índice de Shannon del de Simpson?",
        answer:
          "Ambos combinan riqueza y equitatividad, pero el índice de Simpson da más peso a las especies comunes, mientras que H′ es más sensible a las especies raras. Dar ambos, o los números efectivos de especies, ofrece una imagen más completa.",
      },
    ],
    sourcesUsedFor: [
      "El índice de Shannon H′ = −Σ pᵢ ln pᵢ con pᵢ = nᵢ ÷ N, y un ejemplo resuelto de los índices de Shannon y de Simpson.",
      "El índice de Simpson a partir de recuentos, Σ n(n − 1) ÷ (N(N − 1)).",
      "La equitatividad como H′ dividido entre su máximo, log S, que se alcanza cuando todas las especies son igual de abundantes.",
    ],
  },
  text: {
    counts: "Individuos contados por especie",
    countsHelp: "Un recuento entero por especie, separado por punto y coma, espacios o saltos de línea. Los ceros se ignoran.",
    base: "Base del logaritmo",
    bases: { e: "Logaritmo natural (ln), la opción habitual", "2": "Base 2 (bits)", "10": "Base 10" },
    errors: {
      empty: "Introduce al menos un recuento.",
      tooMany: "Introduce como máximo {max} recuentos.",
      notNumber: "«{token}» no es un número. Separa los recuentos con punto y coma, espacios o saltos de línea.",
      tooLarge: "«{token}» es demasiado grande.",
      notInteger: "{value} no es un número entero. Introduce el número de individuos de cada especie.",
      negative: "Los recuentos no pueden ser negativos ({value}).",
      countTooLarge: "Cada recuento puede ser como máximo {max}.",
      allZero: "Introduce al menos un recuento mayor que cero.",
    },
    result: "Índice de Shannon H′",
    caption: "H′ = −Σ pᵢ log pᵢ, con {log}",
    logNames: { e: "el logaritmo natural", "2": "el logaritmo en base 2", "10": "el logaritmo en base 10" },
    richness: "Riqueza de especies S",
    total: "Total de individuos N",
    evenness: "Equitatividad de Pielou J′",
    effective: "Número efectivo de especies",
    simpson: "Índice de Simpson D",
    giniSimpson: "Índice de Gini-Simpson (1 − D)",
    inverseSimpson: "Índice inverso de Simpson (1 ÷ D)",
    notAvailable: "No definido para estos recuentos",
    table: {
      caption: "Proporciones de especies",
      species: "Especie",
      count: "Recuento",
      proportion: "Proporción pᵢ",
      term: "−pᵢ log pᵢ",
      label: "Especie {n}",
    },
    notes: {
      zeros: "Recuentos de cero ignorados: {count}. Las especies sin individuos no contribuyen a H′ ni a S.",
      single: "Solo una especie tiene individuos, así que H′ es 0 y la equitatividad no está definida.",
      simpsonUndefined: "El índice de Simpson necesita al menos 2 individuos en total.",
      simpsonZero: "Cada especie tiene exactamente un individuo, así que la D de Simpson es 0 y su inverso no está definido.",
      truncated: "La tabla muestra las primeras {shown} especies con individuos.",
      general:
        "H′ depende de la base del logaritmo: los valores en distintas bases difieren en un factor constante, pero la equitatividad J′ y el número efectivo de especies no. Compara los índices solo cuando usen la misma base y el mismo esfuerzo de muestreo.",
    },
  },
};

export default es;
