import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { HendersonHasselbalchText } from "../text/en";

const es: CalculatorTranslation<HendersonHasselbalchText> = {
  content: {
    title: "Calculadora de pH de tampones (Henderson-Hasselbalch)",
    shortTitle: "pH de tampones",
    summary:
      "Calcula el pH de un tampón a partir de las concentraciones de ácido y base, o la relación base/ácido y la concentración de base necesarias para un pH objetivo.",
    metaTitle: "Calculadora de pH de tampones – Henderson-Hasselbalch",
    metaDescription:
      "Usa pH = pKa + log([A⁻]/[HA]) para obtener el pH de un tampón, la relación base/ácido para un pH objetivo o la base que añadir, con valores de pKa habituales.",
    keywords: [
      "Henderson-Hasselbalch",
      "pH de un tampón",
      "disolución amortiguadora",
      "pKa",
      "base conjugada",
      "tampón acetato",
      "tampón fosfato",
      "tampón Tris",
    ],
    intro: [
      "Un tampón (o disolución amortiguadora) es una mezcla de un ácido débil HA y su base conjugada A⁻. Mantiene el pH bastante estable cuando se añaden pequeñas cantidades de ácido o base fuertes, porque cada forma neutraliza a uno de ellos. La ecuación de Henderson-Hasselbalch relaciona el pH del tampón con el pKa del ácido y la proporción entre las dos formas.",
      "Usa esta calculadora para hallar el pH de un tampón que hayas preparado, la relación base/ácido que da un pH objetivo o qué concentración debe tener la forma básica para una concentración de ácido dada. Incluye valores predefinidos para tampones de acetato, bicarbonato, fosfato, Tris y amonio.",
    ],
    howToUse: [
      "Elige qué quieres calcular: el pH, la relación o la concentración de base.",
      "Elige un par tampón de la lista, o elige «Otro» y escribe el pKa.",
      "Introduce las concentraciones en mol/L (se admite notación e, como 5e-3) o el pH objetivo.",
      "Consulta el resultado y comprueba si el pH está dentro del intervalo eficaz pKa ± 1.",
    ],
    formulas: [
      {
        title: "Ecuación de Henderson-Hasselbalch",
        expression: "pH = pKa + log₁₀([A⁻] ÷ [HA])",
        explanation: "Cuando las dos formas son iguales, el término logarítmico es 0 y pH = pKa.",
      },
      {
        title: "Relación para un pH objetivo",
        expression: "[A⁻] ÷ [HA] = 10^(pH − pKa)",
        explanation: "Cada unidad de pH por encima del pKa multiplica la relación por 10.",
      },
      {
        title: "Intervalo eficaz",
        expression: "pKa − 1 ≤ pH ≤ pKa + 1",
        explanation: "En este intervalo ninguna forma supera en más de 10 veces a la otra, así que el tampón puede absorber tanto ácido como base añadidos.",
      },
    ],
    examples: [
      {
        title: "Tampón acetato con más base que ácido",
        steps: ["Relación = 0,15 ÷ 0,10 = 1,5", "pH = 4,76 + log₁₀(1,5) = 4,76 + 0,1761", "pH ≈ 4,936"],
      },
      {
        title: "Tampón fosfato a pH 7,40",
        steps: ["pH − pKa = 7,40 − 7,21 = 0,19", "[HPO₄²⁻] ÷ [H₂PO₄⁻] = 10^0,19 ≈ 1,549"],
      },
      {
        title: "Tris base necesaria para pH 7,8",
        steps: ["Relación = 10^(7,8 − 8,07) = 10^−0,27 ≈ 0,5370", "[Tris base] = 0,05 mol/L × 0,5370 ≈ 0,02685 mol/L"],
      },
    ],
    assumptions: [
      "Las concentraciones sustituyen a las actividades. En disoluciones concentradas o con mucha sal, el pH real puede diferir unas décimas.",
      "Las dos formas deben estar presentes en concentraciones mucho mayores que las de H⁺ y OH⁻, así que los tampones muy diluidos y los pH alejados del pKa son menos precisos.",
      "Los valores de pKa predefinidos corresponden a 25 °C. El pKa cambia con la temperatura y la fuerza iónica, algo especialmente importante en el Tris. Comprueba el pH de un tampón real con un pH-metro calibrado.",
      "En los ácidos con varios pKa (como el ácido fosfórico y el carbónico), solo se tiene en cuenta el par que elijas.",
    ],
    faqs: [
      {
        question: "¿Por qué el intervalo útil es pKa ± 1?",
        answer: "A una unidad de pH del pKa, una forma es diez veces la otra. Más allá, al tampón le queda muy poco de una de las formas, así que ya no puede absorber mucho ácido o base añadidos en ese sentido.",
      },
      {
        question: "¿Qué tampón debo elegir para un pH dado?",
        answer: "Elige un par cuyo pKa esté cerca del pH que necesitas, idealmente a menos de media unidad. Para pH 7,4, por ejemplo, el fosfato (pKa 7,21) es más adecuado que el acetato (pKa 4,76).",
      },
      {
        question: "¿Puedo usar moles en lugar de concentraciones?",
        answer: "Sí. Las dos formas están en el mismo volumen, así que la relación de moles es igual a la relación de concentraciones. Introduce las cantidades en moles en ambos campos y el pH será el mismo.",
      },
    ],
    sourcesUsedFor: [
      "La ecuación de Henderson-Hasselbalch, sus condiciones de uso y la capacidad amortiguadora.",
      "Los valores de pKa de sustancias tampón habituales a 25 °C.",
    ],
  },
  text: {
    solve: "Calcular",
    solves: {
      ph: "pH del tampón a partir de las concentraciones",
      ratio: "Relación base/ácido para un pH objetivo",
      base: "Concentración de base para un pH objetivo",
    },
    acid: "Par ácido débil / base conjugada",
    acids: {
      acetic: "Ácido acético / acetato (pKa {pka})",
      carbonic: "Ácido carbónico / bicarbonato, primera disociación (pKa {pka})",
      phosphate: "Dihidrogenofosfato / hidrogenofosfato (pKa {pka})",
      tris: "Tris-H⁺ / Tris base (pKa {pka})",
      ammonium: "Amonio / amoniaco (pKa {pka})",
      custom: "Otro (introduce el pKa)",
    },
    pka: "pKa del ácido débil",
    pkaHelp: "−log₁₀ de la constante de disociación ácida Ka, a la temperatura de tu tampón.",
    base: "Concentración de base conjugada [A⁻]",
    acidConc: "Concentración de ácido débil [HA]",
    concentrationHelp: "En mol/L. Se admite notación e, como 5e-3.",
    targetPh: "pH objetivo",
    targetPhHelp: "Entre 0 y 14. Los tampones funcionan mejor a menos de 1 unidad del pKa.",
    errors: {
      notNumber: "Introduce un número positivo, como 0,1 o 1e-3.",
      notPositive: "La concentración debe ser mayor que 0.",
      tooConcentrated: "Introduce como máximo {max} mol/L.",
    },
    molar: "{value} mol/L",
    results: { ph: "pH del tampón", ratio: "Relación [A⁻] ÷ [HA]", base: "Concentración de base conjugada [A⁻]" },
    captions: {
      ph: "pH = pKa + log₁₀([A⁻] ÷ [HA])",
      ratio: "[A⁻] ÷ [HA] = 10^(pH − pKa)",
      base: "[A⁻] = [HA] × 10^(pH − pKa)",
    },
    ratio: "Relación [A⁻] ÷ [HA]",
    phUsed: "pH objetivo",
    pkaUsed: "pKa usado",
    range: "Intervalo eficaz del tampón (pKa ± 1)",
    rangeText: "pH de {low} a {high}",
    baseShare: "Fracción del tampón en forma básica",
    notes: {
      insideRange: "El pH está a menos de 1 unidad del pKa, donde el tampón resiste bien los cambios de pH.",
      outsideRange:
        "El pH está a más de 1 unidad del pKa. Una forma del par es entonces más de 10 veces la otra, así que al tampón le queda poca capacidad en un sentido. Un par con un pKa más cercano al objetivo suele funcionar mejor.",
      tooMuchBase:
        "La concentración de base necesaria supera los 20 mol/L, lo que no es práctico. Reduce la concentración de ácido o elige un par con un pKa más cercano al pH objetivo.",
      extreme: "El pH está fuera del intervalo 0–14. La ecuación de Henderson-Hasselbalch no es fiable tan lejos del pKa.",
      general:
        "La ecuación usa concentraciones en lugar de actividades y supone que ambas formas están presentes muy por encima de las concentraciones de H⁺ y OH⁻. Los valores de pKa de la lista corresponden a 25 °C; el pKa cambia con la temperatura y la fuerza iónica, sobre todo en el Tris.",
    },
  },
};

export default es;
