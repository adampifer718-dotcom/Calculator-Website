import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ProteinConcentrationText } from "../text/en";

const es: CalculatorTranslation<ProteinConcentrationText> = {
  content: {
    title: "Calculadora de concentración de proteínas (A280)",
    shortTitle: "Concentración de proteínas",
    summary:
      "Convierte una lectura de absorbancia A280 en una concentración de proteína en mg/mL y µM con la ley de Beer-Lambert, a partir de un coeficiente de extinción molar o másico.",
    metaTitle: "Concentración de proteínas – A280 a mg/mL",
    metaDescription:
      "Convierte lecturas de A280 en concentración de proteína en mg/mL y µM con un coeficiente de extinción molar o másico, o estima ε a partir de Trp, Tyr y cistinas.",
    keywords: [
      "concentración de proteínas",
      "a280",
      "coeficiente de extinción",
      "ley de Beer-Lambert",
      "absortividad molar",
      "cuantificación de proteínas",
      "mg/ml",
      "triptófano tirosina",
    ],
    intro: [
      "Las proteínas absorben luz ultravioleta cerca de 280 nm, sobre todo por los aminoácidos aromáticos triptófano y tirosina, con una pequeña contribución de los puentes disulfuro (cistinas). Según la ley de Beer-Lambert, la absorbancia es proporcional a la concentración, al paso óptico y a un coeficiente de extinción propio de cada proteína.",
      "Esta calculadora convierte una lectura de A280 en una concentración. Puedes indicar un coeficiente de extinción molar ε con el peso molecular, un coeficiente de extinción másico (la absorbancia de una solución de 1 mg/mL) o el número de Trp, Tyr y cistinas de la secuencia para estimar ε.",
    ],
    howToUse: [
      "Elige cómo vas a indicar el coeficiente de extinción.",
      "Introduce la A280 corregida con el blanco, el paso óptico y el factor de dilución si diluiste la muestra antes de medirla.",
      "Introduce ε y el peso molecular, el coeficiente de extinción másico, o el número de triptófanos, tirosinas y puentes disulfuro junto con el peso molecular.",
      "Si quieres, introduce el volumen de la solución madre para obtener la cantidad total de proteína.",
    ],
    formulas: [
      {
        title: "Ley de Beer-Lambert",
        expression: "c (M) = A × dilución ÷ (ε × l)",
        explanation: "A es la absorbancia medida, ε el coeficiente de extinción molar en M⁻¹ cm⁻¹ y l el paso óptico en cm.",
      },
      {
        title: "Concentración en masa",
        expression: "c (mg/mL) = c (M) × PM (g/mol)",
        explanation: "Moles por litro por gramos por mol da gramos por litro, que equivale a miligramos por mililitro.",
      },
      {
        title: "Coeficiente de extinción másico",
        expression: "c (mg/mL) = A × dilución ÷ (E0.1% × l), con E0.1% = ε ÷ PM",
        explanation: "E0.1% es la absorbancia de una solución de 1 mg/mL (0,1 %) con un paso óptico de 1 cm.",
      },
      {
        title: "ε estimado (Pace et al., 1995)",
        expression: "ε₂₈₀ = 5.500 × nTrp + 1.490 × nTyr + 125 × nCistina",
        explanation: "En M⁻¹ cm⁻¹, para una proteína plegada en agua. Una cistina es un puente disulfuro entre dos cisteínas.",
      },
    ],
    examples: [
      {
        title: "A partir de un coeficiente de extinción molar conocido",
        steps: [
          "c = 0,72 ÷ (43.824 × 1) = 1,643 × 10⁻⁵ M = 16,43 µM.",
          "mg/mL = 1,643 × 10⁻⁵ mol/L × 66.463 g/mol = 1,092 g/L = 1,092 mg/mL.",
          "En 2 mL: 1,092 × 2 ≈ 2,18 mg.",
        ],
      },
      {
        title: "Estimación de ε a partir de la secuencia",
        steps: [
          "ε = 5.500 × 6 + 1.490 × 3 + 125 × 4 = 37.970 M⁻¹ cm⁻¹.",
          "c = 0,5 ÷ 37.970 = 1,317 × 10⁻⁵ M = 13,17 µM.",
          "mg/mL = 1,317 × 10⁻⁵ × 14.307 ≈ 0,1884 mg/mL.",
        ],
      },
      {
        title: "Con un coeficiente de extinción másico, un paso óptico corto y una dilución",
        steps: ["Corrige la dilución: 0,88 × 4 = 3,52.", "mg/mL = 3,52 ÷ (1,45 × 0,5 cm) ≈ 4,855 mg/mL."],
      },
    ],
    assumptions: [
      "La lectura de A280 está corregida con un blanco del mismo tampón y se encuentra dentro del intervalo lineal del instrumento. Muchos espectrofotómetros pierden linealidad a absorbancias altas, así que conviene diluir las muestras muy concentradas.",
      "El coeficiente de extinción corresponde a tu proteína en su tampón. Las estimaciones a partir de la composición de aminoácidos son bastante fiables para las proteínas que contienen triptófano y menos para las que no lo tienen; es mejor medir ε que predecirlo.",
      "Se cuentan todas las sustancias que absorben a 280 nm, incluidos los ácidos nucleicos, algunos tampones y la luz dispersada por agregados. Todo ello hace que el resultado sea demasiado alto.",
      "El factor de dilución se aplica a la absorbancia antes de calcular la concentración, así que el resultado corresponde a la solución madre sin diluir.",
    ],
    faqs: [
      {
        question: "¿Por qué mg/mL equivale a g/L?",
        answer:
          "Un mililitro es una milésima de litro y un miligramo es una milésima de gramo, así que las dos milésimas se anulan. Por eso la molaridad (mol/L) multiplicada por el peso molecular (g/mol) da directamente mg/mL.",
      },
      {
        question: "¿Y si no conozco el coeficiente de extinción?",
        answer:
          "Si conoces la secuencia, cuenta los triptófanos, las tirosinas y los puentes disulfuro y usa el modo de estimación. Para una mezcla desconocida, a veces se usa un coeficiente de extinción másico de aproximadamente 1,0 como orientación, pero el resultado puede desviarse mucho.",
      },
      {
        question: "¿Cuento cisteínas o cistinas?",
        answer:
          "Cistinas: cada puente disulfuro entre dos cisteínas cuenta una vez. Las cisteínas libres (tioles reducidos) absorben muy poco a 280 nm. Para una proteína totalmente reducida, introduce 0 cistinas.",
      },
    ],
    sourcesUsedFor: [
      "La estimación ε₂₈₀ = 5.500 × Trp + 1.490 × Tyr + 125 × cistina para una proteína plegada en agua, y su menor fiabilidad en proteínas sin triptófano.",
      "El cálculo de la concentración a partir de A280 con un coeficiente de extinción másico, y la referencia aproximada de que una solución de proteína de 1 mg/mL da una A280 de alrededor de 1,0 con 1 cm.",
    ],
  },
  text: {
    mode: "Coeficiente de extinción",
    modes: {
      molar: "ε molar (M⁻¹ cm⁻¹) y peso molecular",
      mass: "Coeficiente de extinción másico E0.1% (1 mg/mL)",
      residues: "Estimar ε a partir del número de Trp, Tyr y cistinas",
    },
    a280: "Absorbancia a 280 nm (A280)",
    a280Help: "La lectura corregida con el blanco de la muestra medida (posiblemente diluida).",
    pathLength: "Paso óptico",
    pathLengthHelp: "1 cm para una cubeta estándar. Deja 1 si tu instrumento ya da la absorbancia normalizada a 1 cm.",
    dilution: "Factor de dilución",
    dilutionHelp: "Volumen total ÷ volumen de muestra, si diluiste la muestra antes de medirla. Introduce 1 si no se diluyó.",
    epsilon: "Coeficiente de extinción molar ε",
    epsilonHelp: "A 280 nm, en M⁻¹ cm⁻¹; por ejemplo, a partir de la secuencia de la proteína o de una base de datos.",
    mw: "Peso molecular",
    mwHelp: "En daltons (g/mol). 1 kDa = 1.000 Da.",
    mwOptional: "Peso molecular (opcional)",
    mwOptionalHelp: "Opcional, en daltons (g/mol). Necesario para la concentración molar (µM).",
    e01: "Coeficiente de extinción másico E0.1%",
    e01Help: "La absorbancia a 280 nm de una solución de 1 mg/mL con 1 cm de paso óptico. Aproximadamente 1,0 es un valor orientativo habitual para proteínas desconocidas.",
    trp: "Residuos de triptófano (Trp, W)",
    tyr: "Residuos de tirosina (Tyr, Y)",
    cystine: "Cistinas (puentes disulfuro)",
    cystineHelp: "El número de puentes disulfuro, cada uno de los cuales une dos cisteínas. Las cisteínas libres apenas absorben a 280 nm.",
    volume: "Volumen de la muestra",
    volumeHelp: "Opcional. Volumen de la solución madre sin diluir, para obtener la cantidad total de proteína.",
    errors: {
      noChromophores: "Sin Trp, Tyr ni cistinas, ε a 280 nm es cero y no se puede calcular la concentración. Usa otro método.",
    },
    result: "Concentración de proteína",
    caption: "A280 × dilución ÷ (ε × paso óptico)",
    micromolar: "Concentración molar",
    totalMass: "Proteína total en {volume} mL",
    epsilonUsed: "ε molar utilizado",
    e01Used: "Coeficiente de extinción másico E0.1% utilizado",
    a280Normalized: "A280 por 1 cm de paso óptico (medida)",
    notes: {
      range:
        "La absorbancia medida por cm supera aproximadamente 1,5. Muchos espectrofotómetros dejan de ser lineales a absorbancias altas, así que comprueba el intervalo de tu instrumento y plantéate diluir la muestra.",
      low: "La absorbancia medida por cm es inferior a aproximadamente 0,1, donde las lecturas suelen ser menos precisas en relación con el ruido y los errores del blanco.",
      pace: "ε = 5.500 × Trp + 1.490 × Tyr + 125 × cistina es una estimación para una proteína plegada en agua (Pace et al., 1995). Es menos fiable para proteínas sin triptófano.",
      noTrp: "Esta proteína no tiene triptófano, así que el ε estimado es menos fiable.",
      general:
        "La A280 incluye todas las sustancias que absorben a 280 nm, como los ácidos nucleicos y otros contaminantes, y supone que el coeficiente de extinción es el correcto para tu proteína.",
    },
  },
};

export default es;
