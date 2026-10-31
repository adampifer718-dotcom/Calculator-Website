import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { AbvText } from "../text/en";

const es: CalculatorTranslation<AbvText> = {
  content: {
    title: "Calculadora de grado alcohólico (ABV)",
    shortTitle: "ABV a partir de la densidad",
    summary:
      "Estima el contenido alcohólico de una cerveza, un vino o una sidra caseros a partir de la densidad original y la final, en densidad relativa o en grados Plato.",
    metaTitle: "Calculadora de grado alcohólico (ABV) – Con OG y FG",
    metaDescription:
      "Estima el ABV de tu cerveza casera con la densidad original y la final (SG o °Plato), con la fórmula estándar y la alternativa, el ABW y la atenuación aparente.",
    keywords: [
      "calculadora ABV",
      "grado alcohólico",
      "alcohol por volumen",
      "densidad original",
      "densidad final",
      "cerveza casera",
      "grados Plato",
      "atenuación aparente",
    ],
    intro: [
      "La levadura transforma el azúcar en alcohol y dióxido de carbono y, como el alcohol es más ligero que el agua, la densidad de una cerveza, un vino o una sidra disminuye a medida que fermenta. Los cerveceros caseros miden esa densidad con un densímetro o un refractómetro antes y después de la fermentación: la densidad original (OG) y la densidad final (FG).",
      "Introduce las dos lecturas, en densidad relativa o en grados Plato, para estimar el alcohol por volumen. La calculadora muestra la fórmula estándar habitual, una fórmula alternativa que muchos cerveceros prefieren para las cervezas fuertes, un alcohol en peso aproximado y la atenuación aparente.",
    ],
    howToUse: [
      "Elige si tus lecturas están en densidad relativa (como 1,050) o en grados Plato (como 12 °P).",
      "Introduce la densidad original, medida antes de añadir la levadura.",
      "Introduce la densidad final, medida cuando ha terminado la fermentación.",
      "Consulta el ABV según la fórmula estándar y compáralo con la fórmula alternativa que aparece debajo.",
    ],
    formulas: [
      {
        title: "Fórmula estándar",
        expression: "ABV = (OG − FG) × 131,25",
        explanation: "La estimación más usada en la elaboración casera. Para una OG de 1,050 y una FG de 1,010 da 0,040 × 131,25 = 5,25 %.",
      },
      {
        title: "Fórmula alternativa",
        expression: "ABV = 76,08 × (OG − FG) ÷ (1,775 − OG) × FG ÷ 0,794",
        explanation: "Atribuida a Ritchie Products (Zymurgy, 1995). Da valores más altos que la fórmula estándar en las cervezas fuertes.",
      },
      {
        title: "De grados Plato a densidad relativa",
        expression: "SG = 1 + P ÷ (258,6 − (P ÷ 258,2) × 227,1)",
        explanation: "Se usa cuando las lecturas están en grados Plato. 12 °P equivalen aproximadamente a 1,0484.",
      },
      {
        title: "Alcohol en peso y atenuación",
        expression: "ABW ≈ ABV × 0,789 ÷ FG;  atenuación = (OG − FG) ÷ (OG − 1) × 100",
        explanation:
          "0,789 es la densidad del etanol respecto al agua a 20 °C. La atenuación es aparente porque el alcohol hace que la lectura del densímetro quede por debajo del extracto real restante.",
      },
    ],
    examples: [
      {
        title: "Una pale ale de 1,050 a 1,010",
        steps: ["Caída = 1,050 − 1,010 = 0,040", "ABV = 0,040 × 131,25 = 5,25 %", "Atenuación aparente = 0,040 ÷ 0,050 = 80 %"],
      },
      {
        title: "Una strong ale de 1,092 a 1,021",
        steps: [
          "Estándar: (1,092 − 1,021) × 131,25 ≈ 9,32 %",
          "Alternativa: 76,08 × 0,071 ÷ (1,775 − 1,092) × 1,021 ÷ 0,794 ≈ 10,17 %",
          "Con esta graduación, las dos fórmulas difieren en casi un punto porcentual",
        ],
      },
      {
        title: "Una lager medida en grados Plato: de 12 °P a 2,5 °P",
        steps: [
          "OG = 1 + 12 ÷ (258,6 − (12 ÷ 258,2) × 227,1) ≈ 1,04838",
          "FG = 1 + 2,5 ÷ (258,6 − (2,5 ÷ 258,2) × 227,1) ≈ 1,00975",
          "ABV = (1,04838 − 1,00975) × 131,25 ≈ 5,07 %",
        ],
      },
    ],
    assumptions: [
      "Esto es solo una estimación para la elaboración casera. No sirve para el etiquetado legal o comercial, que requiere un método de laboratorio calibrado.",
      "No se aplica ninguna corrección de temperatura del densímetro. Corrige primero tus lecturas a la temperatura de calibración del densímetro.",
      "Las lecturas se toman como densidades relativas reales. Una lectura de refractómetro tomada una vez iniciada la fermentación está distorsionada por el alcohol y necesita una corrección aparte.",
      "No se incluye el azúcar añadido al embotellar ni ningún azúcar añadido después de medir la densidad original.",
    ],
    faqs: [
      {
        question: "¿Qué fórmula debo usar?",
        answer:
          "Para la mayoría de las cervezas de entre 1,040 y 1,060, aproximadamente, las dos dan resultados muy parecidos. En las cervezas más fuertes se separan, y muchos cerveceros prefieren entonces la fórmula alternativa. Ninguna sustituye a una medición de laboratorio.",
      },
      {
        question: "¿Qué diferencia hay entre ABV y ABW?",
        answer:
          "El ABV es el volumen de alcohol como porcentaje del volumen de la bebida. El ABW es su peso como porcentaje del peso de la bebida. El alcohol es más ligero que el agua, así que el ABW es menor, aproximadamente el 80 % del ABV en una cerveza típica.",
      },
      {
        question: "¿Qué es la atenuación aparente?",
        answer:
          "Es la parte de la densidad original por encima de 1,000 que ha desaparecido durante la fermentación. Se llama aparente porque el alcohol es menos denso que el agua y hace que la lectura final sea más baja que el contenido real de azúcar restante.",
      },
    ],
    sourcesUsedFor: [
      "La fórmula estándar ABV = (OG − FG) × 131,25, la fórmula alternativa 76,08 (OG − FG) ÷ (1,775 − OG) × FG ÷ 0,794 y el ejemplo resuelto con OG 1,092 y FG 1,021.",
      "La conversión SG = 1 + P ÷ (258,6 − (P ÷ 258,2) × 227,1).",
      "El origen de la fórmula alternativa (Ritchie Products, Zymurgy, 1995).",
      "La conversión entre ABV y ABW con la densidad relativa de la bebida y la densidad del etanol (aproximadamente 0,789).",
    ],
  },
  text: {
    scale: "Escala de densidad",
    scales: { sg: "Densidad relativa (SG)", plato: "Grados Plato (°P)" },
    og: "Densidad original (OG)",
    ogHelp: "La densidad relativa antes de la fermentación; por ejemplo, 1,050. Intervalo admitido: de 0,980 a 1,200.",
    fg: "Densidad final (FG)",
    fgHelp: "La densidad relativa después de la fermentación; por ejemplo, 1,010.",
    ogPlato: "Extracto original",
    ogPlatoHelp: "La densidad original en grados Plato; por ejemplo, 12.",
    fgPlato: "Extracto final aparente",
    fgPlatoHelp: "La lectura final del densímetro en grados Plato; por ejemplo, 2,5. Puede quedar ligeramente por debajo de 0 en cervezas muy secas.",
    errors: {
      fgAboveOg: "La densidad final no puede ser mayor que la densidad original.",
      sgRange: "Esto equivale a una densidad relativa de {sg}, fuera del intervalo admitido de 0,980 a 1,200.",
    },
    abv: "Alcohol por volumen (fórmula estándar)",
    caption: "OG {og} − FG {fg} = {drop} puntos de densidad.",
    abvAlt: "Alcohol por volumen (fórmula alternativa)",
    abw: "Alcohol en peso (aproximado)",
    attenuation: "Atenuación aparente",
    ogSg: "Densidad original como SG",
    fgSg: "Densidad final como SG",
    notes: {
      estimate:
        "Esto es una estimación para la elaboración casera a partir de lecturas del densímetro, no una cifra para el etiquetado legal. No se aplica ninguna corrección de temperatura del densímetro.",
      high: "En mostos fuertes, las dos fórmulas dan resultados notablemente distintos. Muchos cerveceros prefieren la fórmula alternativa con densidades altas.",
      noAttenuation: "La atenuación aparente requiere una densidad original superior a 1,000.",
    },
  },
};

export default es;
