import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DnaConcentrationText } from "../text/en";

const es: CalculatorTranslation<DnaConcentrationText> = {
  content: {
    title: "Calculadora de concentración de ADN y ARN",
    shortTitle: "Concentración de ADN",
    summary:
      "Convierte una lectura de absorbancia A260 en una concentración de ADN o ARN en ng/µL, con el rendimiento total y los cocientes A260/A280 y A260/A230.",
    metaTitle: "Calculadora de concentración de ADN y ARN – A260 a ng/µL",
    metaDescription:
      "Convierte lecturas de A260 en concentración de ADN o ARN en ng/µL con los factores 50, 33 y 40 µg/mL, con dilución, rendimiento total y cocientes de pureza.",
    keywords: [
      "concentración de ADN",
      "concentración de ARN",
      "A260",
      "cuantificación de ácidos nucleicos",
      "cociente 260/280",
      "cociente 260/230",
      "espectrofotómetro",
      "ng/µL",
    ],
    intro: [
      "Los ácidos nucleicos absorben la luz ultravioleta con más intensidad cerca de 260 nm. Dentro del intervalo lineal de un espectrofotómetro, la absorbancia A260 es proporcional a la concentración, así que una sola lectura y un factor de conversión dan la cantidad de ADN o ARN de una muestra.",
      "Los factores estándar son 50 µg/mL por unidad de A260 para el ADN bicatenario, 33 para el ADN monocatenario y 40 para el ARN, con un paso óptico de 1 cm. Esta calculadora aplica el factor, la dilución y el paso óptico, y añade el rendimiento total y los cocientes de pureza A260/A280 y A260/A230.",
    ],
    howToUse: [
      "Elige el tipo de muestra o introduce tu propio factor de conversión (por ejemplo, uno calculado para un oligonucleótido corto).",
      "Introduce la lectura de A260 corregida con el blanco y el paso óptico de la cubeta o del instrumento.",
      "Introduce el factor de dilución si diluiste la muestra antes de medirla.",
      "Si quieres, añade A280, A230 y el volumen de la solución madre para obtener los cocientes de pureza y la cantidad total de ácido nucleico.",
    ],
    formulas: [
      {
        title: "Concentración",
        expression: "c (ng/µL) = A260 ÷ paso óptico (cm) × factor × factor de dilución",
        explanation:
          "El factor es 50 para ADNbc, 33 para ADNmc y 40 para ARN, en µg/mL por unidad de absorbancia a 1 cm. 1 µg/mL equivale a 1 ng/µL.",
      },
      {
        title: "Rendimiento total",
        expression: "cantidad (µg) = c (ng/µL) × volumen (µL) ÷ 1000",
        explanation: "La concentración de la solución madre sin diluir multiplicada por su volumen.",
      },
      {
        title: "Cocientes de pureza",
        expression: "A260/A280 y A260/A230",
        explanation:
          "Para A260/A280 se suelen citar valores de 1,8 (ADN) y 2,0 (ARN), y para A260/A230, de 2,0–2,2. Son reglas prácticas, no límites estrictos.",
      },
    ],
    examples: [
      {
        title: "ADN plasmídico diluido en una cubeta de 1 cm",
        steps: ["0,65 ÷ 1 cm × 50 µg/mL × 10 = 325 µg/mL = 325 ng/µL", "En 50 µL: 325 × 50 ÷ 1000 = 16,25 µg", "A260/A280 = 0,65 ÷ 0,36 ≈ 1,81"],
      },
      {
        title: "Una muestra de ARN diluida 1 en 20",
        steps: [
          "0,42 × 40 µg/mL × 20 = 336 ng/µL",
          "A260/A280 = 0,42 ÷ 0,21 = 2,00",
          "A260/A230 = 0,42 ÷ 0,20 = 2,10",
          "En 30 µL: 336 × 30 ÷ 1000 = 10,08 µg",
        ],
      },
      {
        title: "ADN monocatenario en una cubeta de 2 mm",
        steps: ["Normalizar a 1 cm: 0,18 ÷ 0,2 = 0,9", "0,9 × 33 µg/mL × 1 = 29,7 ng/µL"],
      },
    ],
    assumptions: [
      "La lectura de A260 está corregida con el blanco y dentro del intervalo lineal del instrumento.",
      "Los factores estándar son medias. La absorbancia de un oligonucleótido corto depende de su secuencia de bases, así que un factor específico de la secuencia (introducido como personalizado) es más preciso.",
      "La absorbancia cuenta todos los ácidos nucleicos y los nucleótidos libres. El ARN contaminante en una muestra de ADN, o el ADN en una de ARN, aumenta el resultado.",
      "Los cocientes de pureza son valores de referencia citados habitualmente, no límites de aceptación o rechazo. Varían con el pH y la fuerza iónica de la solución y con el blanco utilizado.",
    ],
    faqs: [
      {
        question: "¿Por qué ng/µL es lo mismo que µg/mL?",
        answer: "Ambas multiplican el numerador y el denominador de la unidad por 1000: un microgramo son 1000 nanogramos y un mililitro son 1000 microlitros. Por eso 325 µg/mL y 325 ng/µL describen la misma concentración.",
      },
      {
        question: "¿Qué significa un cociente A260/A280 bajo?",
        answer: "Las proteínas y el fenol absorben cerca de 280 nm, así que un cociente bastante inferior a 1,8 para ADN o a 2,0 para ARN suele indicar ese tipo de contaminantes. El cociente no dice nada sobre si el ácido nucleico está íntegro.",
      },
      {
        question: "¿Necesito el paso óptico?",
        answer: "Solo si no es de 1 cm. Los factores suponen un paso de 1 cm. Muchos instrumentos de microvolumen miden con un paso más corto pero ya dan la absorbancia normalizada a 1 cm; en ese caso deja el valor predeterminado de 1.",
      },
    ],
    sourcesUsedFor: [
      "La medición de la concentración de ácidos nucleicos a partir de la absorbancia a 260 nm con factores de conversión estándar.",
      "Los valores de pureza citados habitualmente, de unos 1,8 (ADN) y 2,0 (ARN) para A260/A280 y de 2,0–2,2 para A260/A230.",
    ],
  },
  text: {
    type: "Tipo de muestra",
    types: {
      dsDNA: "ADN bicatenario (50 µg/mL por A260)",
      ssDNA: "ADN monocatenario (33 µg/mL por A260)",
      rna: "ARN (40 µg/mL por A260)",
      custom: "Factor de conversión personalizado",
    },
    sampleNames: { dsDNA: "ADN", ssDNA: "ADN", rna: "ARN" },
    factor: "Factor de conversión",
    factorHelp:
      "µg/mL de ácido nucleico que dan una absorbancia de 1,0 a 260 nm con un paso de 1 cm; p. ej., un valor calculado para un oligonucleótido concreto.",
    a260: "Absorbancia a 260 nm (A260)",
    a260Help: "La lectura corregida con el blanco de la muestra medida (quizá diluida).",
    pathLength: "Paso óptico",
    pathLengthHelp: "1 cm en una cubeta estándar. Muchos instrumentos de microvolumen ya dan valores normalizados a 1 cm; en ese caso deja 1.",
    dilution: "Factor de dilución",
    dilutionHelp: "Volumen total ÷ volumen de muestra. Para 5 µL de muestra en 50 µL en total, introduce 10. Introduce 1 para una muestra sin diluir.",
    a280: "Absorbancia a 280 nm (A280)",
    a230: "Absorbancia a 230 nm (A230)",
    optionalHelp: "Opcional. Se usa para un cociente de pureza.",
    volume: "Volumen de la muestra",
    volumeHelp: "Opcional. Volumen de la solución madre sin diluir, para estimar la cantidad total que contiene.",
    result: "Concentración de ácido nucleico",
    caption: "A260 ÷ paso óptico × factor de conversión × factor de dilución",
    ugPerMl: "Misma concentración en µg/mL",
    factorUsed: "Factor de conversión usado",
    a260Normalized: "A260 por 1 cm de paso óptico",
    totalYield: "Cantidad total en {volume} µL",
    ratio280: "Cociente A260/A280",
    ratio230: "Cociente A260/A230",
    notes: {
      ratio280: {
        near: "El cociente A260/A280 de {ratio} está cerca del valor de aproximadamente {reference} que se suele citar para el {sample} puro.",
        below:
          "El cociente A260/A280 de {ratio} está por debajo del valor de aproximadamente {reference} que se suele citar para el {sample} puro. Los cocientes más bajos pueden indicar proteínas, fenol u otras sustancias que absorben cerca de 280 nm.",
        above:
          "El cociente A260/A280 de {ratio} está por encima del valor de aproximadamente {reference} que se suele citar para el {sample} puro. Los valores algo más altos son habituales; en el ADN, la presencia de ARN en la muestra puede elevar el cociente.",
      },
      ratio280Generic: "Como referencia, se suelen citar valores de A260/A280 de aproximadamente 1,8 para el ADN puro y de 2,0 para el ARN puro.",
      ratio230: "El cociente A260/A230 de {ratio} está dentro o por encima del intervalo de 2,0–2,2 que se suele citar para el ácido nucleico puro.",
      ratio230Low:
        "El cociente A260/A230 de {ratio} está por debajo del intervalo de 2,0–2,2 que se suele citar para el ácido nucleico puro. Los valores más bajos pueden indicar sales, fenol, detergentes u otras sustancias que absorben cerca de 230 nm.",
      range:
        "La absorbancia por cm está fuera del intervalo aproximado de 0,1–1,0, en el que las lecturas de un espectrofotómetro de cubeta estándar suelen ser menos fiables. Comprueba el intervalo especificado de tu instrumento y diluye o concentra la muestra si hace falta.",
      general:
        "La absorbancia a 260 nm cuenta por igual todos los ácidos nucleicos y los nucleótidos libres, así que no distingue el ADN del ARN. Los cocientes de pureza también dependen del pH y del blanco utilizado.",
    },
  },
};

export default es;
