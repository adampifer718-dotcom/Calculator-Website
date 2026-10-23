import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PhText } from "../text/en";

const es: CalculatorTranslation<PhText> = {
  content: {
    title: "Calculadora de pH",
    shortTitle: "pH",
    summary:
      "Calcula el pH, el pOH, [H⁺] y [OH⁻] a partir de la concentración de iones hidrógeno, del pH o el pOH, o de la concentración de un ácido fuerte, una base fuerte o un ácido débil.",
    metaTitle: "Calculadora de pH – pH, pOH, [H⁺] y [OH⁻] a 25 °C",
    metaDescription:
      "Calcula el pH y el pOH a partir de [H⁺], de la concentración de un ácido o una base fuertes, o de la concentración y la Ka o el pKa de un ácido débil.",
    keywords: [
      "calculadora de pH",
      "calcular pH",
      "pOH",
      "concentración de iones hidrógeno",
      "pH ácido débil",
      "pH ácido fuerte",
      "pKa y Ka",
      "ácido o básico",
    ],
    intro: [
      "El pH mide lo ácida o básica que es una disolución acuosa. Es el logaritmo decimal negativo de la concentración de iones hidrógeno, así que cada unidad de pH supone un cambio de diez veces: una disolución de pH 3 tiene diez veces más H⁺ que una de pH 4. A 25 °C, pH 7 es neutro, por debajo es ácido y por encima es básico.",
      "Esta calculadora convierte entre pH, pOH, [H⁺] y [OH⁻], y calcula el pH de un ácido fuerte, una base fuerte o un ácido débil a partir de su concentración. Las fórmulas del ácido y la base fuertes incluyen los iones del propio agua, así que incluso las disoluciones extremadamente diluidas dan un resultado razonable.",
    ],
    howToUse: [
      "Elige el dato que conoces: [H⁺], pH, pOH, o la concentración de un ácido fuerte, una base fuerte o un ácido débil.",
      "Introduce el valor. Las concentraciones van en mol/L y admiten notación e, así que 3,2 × 10⁻⁵ puede escribirse como 3.2e-5.",
      "Para un ácido débil, introduce también su fuerza como pKa o Ka.",
      "Consulta el pH, el pOH, las dos concentraciones de iones y si la disolución es ácida, neutra o básica.",
    ],
    formulas: [
      {
        title: "pH y pOH",
        expression: "pH = −log₁₀[H⁺]   pOH = −log₁₀[OH⁻]\npH + pOH = 14   (Kw = [H⁺][OH⁻] = 1,0 × 10⁻¹⁴ a 25 °C)",
        explanation: "Las concentraciones van en mol/L.",
      },
      {
        title: "Ácido fuerte monoprótico",
        expression: "[H⁺] = (C + √(C² + 4Kw)) ÷ 2",
        explanation:
          "Se obtiene del balance de cargas [H⁺] = C + [OH⁻]. Para C muy por encima de 10⁻⁶ mol/L se reduce a [H⁺] ≈ C. Una base fuerte usa la misma fórmula para [OH⁻].",
      },
      {
        title: "Ácido débil monoprótico",
        expression: "Ka = x² ÷ (C − x)   ⇒   x = [H⁺] = (−Ka + √(Ka² + 4·Ka·C)) ÷ 2",
        explanation:
          "La solución exacta de la ecuación de segundo grado, sin la aproximación x ≪ C, despreciando el H⁺ del agua. Ka = 10^(−pKa).",
      },
    ],
    examples: [
      {
        title: "Una disolución de ácido clorhídrico 0,025 mol/L",
        steps: ["[H⁺] = (0,025 + √(0,025² + 4 × 10⁻¹⁴)) ÷ 2 ≈ 0,025 mol/L", "pH = −log₁₀(0,025) ≈ 1,602", "pOH = 14 − 1,602 = 12,398"],
      },
      {
        title: "Un ácido débil 0,05 mol/L con pKa 4,76",
        steps: [
          "Ka = 10^(−4,76) ≈ 1,738 × 10⁻⁵",
          "[H⁺] = (−Ka + √(Ka² + 4 × Ka × 0,05)) ÷ 2 ≈ 9,235 × 10⁻⁴ mol/L",
          "pH = −log₁₀(9,235 × 10⁻⁴) ≈ 3,035, con un 1,85 % del ácido ionizado aproximadamente",
        ],
      },
      {
        title: "Una disolución con [H⁺] = 2,5 × 10⁻⁹ mol/L",
        steps: ["pH = −log₁₀(2,5 × 10⁻⁹) ≈ 8,602", "pOH = 14 − 8,602 = 5,398", "El pH es mayor que 7, así que la disolución es básica"],
      },
    ],
    assumptions: [
      "Todo se calcula a 25 °C, donde Kw = 1,0 × 10⁻¹⁴ y el agua neutra tiene pH 7. A otras temperaturas Kw cambia, y con ella el punto neutro y la suma pH + pOH.",
      "Se usan concentraciones en lugar de actividades. Esto funciona bien con disoluciones diluidas, pero pierde precisión por encima de unos 0,1 mol/L, y los valores de pH por debajo de 0 o por encima de 14 son solo aproximados.",
      "Los ácidos y las bases son monopróticos: cada uno libera un único H⁺ u OH⁻. El modo de ácido débil desprecia el H⁺ del agua, así que no es fiable cuando el ácido es extremadamente diluido o extremadamente débil.",
    ],
    faqs: [
      {
        question: "¿Por qué el pH del HCl 10⁻⁸ mol/L no es 8?",
        answer:
          "Porque un ácido no puede volver básica el agua. Con esa dilución, el propio agua aporta unos 10⁻⁷ mol/L de H⁺, más que el ácido. La fórmula usada aquí incluye la aportación del agua y da un pH de aproximadamente 6,98.",
      },
      {
        question: "¿Qué diferencia hay entre Ka y pKa?",
        answer:
          "El pKa es −log₁₀ de la Ka, igual que el pH es −log₁₀ de [H⁺]. Un pKa menor (una Ka mayor) indica un ácido más fuerte. Un pKa de 4,76 equivale a una Ka de aproximadamente 1,74 × 10⁻⁵.",
      },
      {
        question: "¿Puede ser negativo el pH?",
        answer:
          "Sí. Un ácido fuerte más concentrado que 1 mol/L tiene [H⁺] mayor que 1, así que su pH es menor que 0. Sin embargo, a esas concentraciones las disoluciones reales se desvían mucho de las fórmulas sencillas, así que toma el número como una orientación aproximada.",
      },
    ],
    sourcesUsedFor: [
      "Kw = 1,0 × 10⁻¹⁴ a 25 °C, pH = −log[H₃O⁺], pOH = −log[OH⁻] y pH + pOH = 14,00.",
      "La constante de acidez Ka y los cálculos de equilibrio de ácidos débiles, incluido el porcentaje de ionización.",
    ],
  },
  text: {
    mode: "Calcular a partir de",
    modes: {
      hydrogen: "Concentración de iones hidrógeno [H⁺]",
      ph: "pH",
      poh: "pOH",
      strongAcid: "Concentración de un ácido fuerte",
      strongBase: "Concentración de una base fuerte",
      weakAcid: "Concentración y Ka de un ácido débil",
    },
    hydrogen: "Concentración de [H⁺]",
    concentrationHelp: "En mol/L. Puedes usar notación e, p. ej., 2.5e-9 para 2,5 × 10⁻⁹.",
    ph: "pH",
    poh: "pOH",
    phRangeHelp: "Normalmente entre 0 y 14. Se admiten valores de −2 a 16.",
    concentration: "Concentración (C)",
    concentrationModeHelp:
      "Concentración molar en mol/L de un ácido monoprótico (un H⁺, como el HCl o el ácido acético) o de una base con un OH⁻ (como el NaOH). Se admite notación e, como 1e-8.",
    constantType: "Fuerza del ácido expresada como",
    constantTypes: { pka: "pKa", ka: "Ka" },
    ka: "Constante de disociación ácida (Ka)",
    kaHelp: "Se admite notación e, p. ej., 6.3e-5.",
    pka: "pKa",
    errors: {
      notNumber: "Introduce un número positivo, como 0.001 o 1e-3.",
      notPositive: "El valor debe ser mayor que 0.",
      tooConcentrated: "Introduce como máximo {max} mol/L. Las fórmulas no tienen sentido para disoluciones más concentradas.",
      kaTooLarge: "Introduce una Ka de como máximo {max}. Un ácido así de fuerte se comporta como un ácido fuerte.",
    },
    phResult: "pH",
    pohResult: "pOH",
    hResult: "Concentración de iones hidrógeno [H⁺]",
    ohResult: "Concentración de iones hidróxido [OH⁻]",
    ionization: "Porcentaje de ionización",
    nature: "Ácida, neutra o básica (a 25 °C)",
    natures: { acidic: "Ácida", neutral: "Neutra", basic: "Básica" },
    captions: {
      hydrogen: "pH = −log₁₀[H⁺]",
      ph: "[H⁺] = 10^(−pH)",
      poh: "pH = 14 − pOH",
      strongAcid: "[H⁺] = (C + √(C² + 4Kw)) ÷ 2",
      strongBase: "[OH⁻] = (C + √(C² + 4Kw)) ÷ 2",
      weakAcid: "[H⁺] = (−Ka + √(Ka² + 4·Ka·C)) ÷ 2",
    },
    notes: {
      kw: "Usa Kw = 1,0 × 10⁻¹⁴ a 25 °C, así que pH + pOH = 14. Las concentraciones sustituyen a las actividades.",
      outside:
        "El pH está fuera del intervalo 0–14. Eso solo ocurre en disoluciones muy concentradas, donde las concentraciones sustituyen mal a las actividades y el resultado es solo aproximado.",
      weak: "La fórmula del ácido débil desprecia el H⁺ que procede del propio agua.",
      weakDilute:
        "El ácido aporta menos de 1 × 10⁻⁶ mol/L de H⁺, así que los iones del propio agua no son despreciables y el pH real está más cerca de 7 de lo que se muestra.",
      dilute:
        "La disolución está tan diluida que los iones del agua importan. La fórmula los incluye, y por eso el pH se mantiene en el lado correcto de 7.",
    },
  },
};

export default es;
