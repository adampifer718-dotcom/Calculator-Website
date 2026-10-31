import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ResistorColorCodeText } from "../text/en";

const es: CalculatorTranslation<ResistorColorCodeText> = {
  content: {
    title: "Calculadora del código de colores de resistencias",
    shortTitle: "Código de colores de resistencias",
    summary:
      "Lee el valor, la tolerancia y el coeficiente de temperatura de una resistencia de 4, 5 o 6 bandas a partir de sus colores, o encuentra las bandas de color para una resistencia.",
    metaTitle: "Código de colores de resistencias – 4, 5 y 6 bandas",
    metaDescription:
      "Descifra los colores de resistencias de 4, 5 y 6 bandas en ohmios, tolerancia y coeficiente de temperatura, o encuentra las bandas para un valor como 4,7k.",
    keywords: [
      "código de colores de resistencias",
      "colores de resistencias",
      "resistencia de 4 bandas",
      "resistencia de 5 bandas",
      "resistencia de 6 bandas",
      "bandas de resistencia a ohmios",
      "iec 60062",
      "tolerancia de resistencias",
    ],
    intro: [
      "Las resistencias pequeñas de inserción son demasiado pequeñas para llevar el valor impreso, así que llevan bandas de colores. La norma internacional IEC 60062 asigna a cada color una cifra del 0 (negro) al 9 (blanco); las bandas que siguen a las cifras indican un multiplicador en potencias de diez, la tolerancia y, en las piezas de precisión, el coeficiente de temperatura.",
      "Elige 4, 5 o 6 bandas y selecciona los colores para leer la resistencia, su intervalo de tolerancia y el coeficiente de temperatura. O hazlo al revés: escribe un valor como 4,7k y obtén los colores para una resistencia de 4 o 5 bandas.",
    ],
    howToUse: [
      "Para leer una resistencia, elige «Colores a valor» y el número de bandas. Sujeta la resistencia con la banda de tolerancia (a menudo dorada, plateada o separada del resto) a la derecha.",
      "Selecciona los colores de izquierda a derecha: las bandas de cifras, el multiplicador, la tolerancia y, en las piezas de 6 bandas, el coeficiente de temperatura. Cada lista muestra solo los colores válidos para esa banda.",
      "Para encontrar los colores de un valor, elige «Valor a colores», escribe la resistencia (por ejemplo, 470, 4,7k, 4k7 o 2,2M) y elige 4 o 5 bandas y una tolerancia.",
    ],
    formulas: [
      {
        title: "Resistencia",
        expression: "R = (cifras significativas) × 10ⁿ Ω",
        explanation:
          "Dos bandas de cifras en una resistencia de 4 bandas y tres en las de 5 y 6 bandas. La banda multiplicadora fija n, desde −2 (plata) y −1 (oro) hasta 9 (blanco).",
      },
      {
        title: "Intervalo de tolerancia",
        expression: "R_min = R × (1 − tolerancia);  R_max = R × (1 + tolerancia)",
        explanation: "Por ejemplo, ±5 % para el oro. Sin banda de tolerancia, la tolerancia es de ±20 %.",
      },
      {
        title: "Coeficiente de temperatura",
        expression: "ΔR = R × TCR × ΔT",
        explanation: "El TCR se expresa en partes por millón por kelvin: 100 ppm/K significa que la resistencia cambia un 0,1 % con una variación de 10 K.",
      },
    ],
    examples: [
      {
        title: "Amarillo, violeta, rojo, oro (4 bandas)",
        steps: ["Cifras: amarillo 4, violeta 7, así que 47", "Multiplicador rojo: × 100, así que 4.700 Ω = 4,7 kΩ", "Tolerancia oro ±5 %: de 4.465 Ω a 4.935 Ω"],
      },
      {
        title: "Marrón, negro, negro, rojo, marrón, rojo (6 bandas)",
        steps: [
          "Cifras: 1, 0, 0, así que 100",
          "Multiplicador rojo: × 100, así que 10.000 Ω = 10 kΩ",
          "Tolerancia marrón ±1 %: de 9,9 kΩ a 10,1 kΩ",
          "Sexta banda roja: 50 ppm/K, unos 5 Ω más o menos por cada 10 K",
        ],
      },
      {
        title: "Colores para 4k7 en una resistencia de 5 bandas y 1 %",
        steps: ["4k7 = 4.700 Ω = 470 × 10¹", "Cifras 4, 7, 0: amarillo, violeta, negro", "Multiplicador 10¹: marrón; tolerancia 1 %: marrón"],
      },
    ],
    assumptions: [
      "El significado de los colores sigue la norma IEC 60062 para las cifras, los multiplicadores, los colores de tolerancia habituales y la banda del coeficiente de temperatura. No se incluyen algunos colores poco usados ni variantes antiguas o propias de un fabricante.",
      "La conversión de valor a colores solo admite valores que el número de bandas de cifras elegido pueda representar exactamente, a partir de 0,1 Ω. No comprueba si el valor pertenece a una serie E normalizada.",
      "Los colores son difíciles de distinguir con algunas luces y en piezas viejas o dañadas por el calor. Un polímetro da el valor definitivo.",
    ],
    faqs: [
      {
        question: "¿Por qué extremo empiezo a leer?",
        answer:
          "Empieza por el extremo en el que las bandas están más cerca del borde y deja a la derecha la banda de tolerancia, que suele ser dorada o plateada, estar separada o ser más ancha. El oro y la plata nunca inician el código, así que, si uno está en un extremo, lee desde el otro.",
      },
      {
        question: "¿Qué diferencia hay entre las resistencias de 4, 5 y 6 bandas?",
        answer:
          "Una resistencia de 4 bandas tiene dos cifras significativas, para valores como 4,7 kΩ. Una de 5 bandas tiene tres, para valores de precisión como 4,99 kΩ, y normalmente una tolerancia más estrecha. Una de 6 bandas añade al código de 5 bandas una banda de coeficiente de temperatura.",
      },
      {
        question: "¿Por qué no obtengo colores para 4,99k con 4 bandas?",
        answer:
          "4,99k tiene tres cifras significativas, pero un código de 4 bandas solo tiene dos bandas de cifras. Elige 5 bandas o redondea al valor más cercano que se pueda representar con dos cifras.",
      },
    ],
    sourcesUsedFor: [
      "Que los colores del negro al blanco indican las cifras del 0 al 9 y, junto con el oro y la plata, las bandas de multiplicador, tolerancia y coeficiente de temperatura.",
      "Los colores de tolerancia: marrón ±1 %, rojo ±2 %, verde ±0,5 %, azul ±0,25 %, violeta ±0,1 %, oro ±5 % y plata ±10 %.",
      "Que una resistencia de 4 bandas sin banda de tolerancia es de ±20 %.",
      "Los colores del coeficiente de temperatura de la sexta banda en ppm/K.",
    ],
  },
  text: {
    mode: "¿Qué quieres hacer?",
    modes: { decode: "Colores a valor", encode: "Valor a colores" },
    bands: "Número de bandas",
    bandCounts: { "4": "4 bandas", "5": "5 bandas", "6": "6 bandas" },
    encodeBandCounts: { "4": "4 bandas (2 cifras)", "5": "5 bandas (3 cifras)" },
    band1: "Banda 1: primera cifra",
    band2: "Banda 2: segunda cifra",
    band3: "Banda 3: tercera cifra",
    multiplier: "Banda multiplicadora",
    tolerance: "Banda de tolerancia",
    tcr: "Banda de coeficiente de temperatura (6.ª banda)",
    value: "Resistencia",
    valueHelp:
      "Por ejemplo, 470, 4,7k, 4k7, 2,2M o 0,47. Usa k para kilo, M para mega y G para giga; la R o una coma decimal marcan la posición decimal. También sirve el punto como separador decimal.",
    colors: {
      black: "Negro",
      brown: "Marrón",
      red: "Rojo",
      orange: "Naranja",
      yellow: "Amarillo",
      green: "Verde",
      blue: "Azul",
      violet: "Violeta",
      grey: "Gris",
      white: "Blanco",
      gold: "Oro",
      silver: "Plata",
      none: "Ninguna (sin banda)",
    },
    colorOption: "{color} – {meaning}",
    errors: {
      invalidValue: "Introduce una resistencia como 470, 4,7k, 4k7 o 2,2M.",
      ambiguousM: "Usa una M mayúscula para los megaohmios. Para valores inferiores a 1 Ω, usa un decimal como 0,47 o R47.",
      zero: "La resistencia debe ser mayor que 0 Ω.",
      tooManyDigits:
        "{value} necesita {digits} cifras significativas, pero una resistencia de {bands} bandas solo muestra {max}. Elige 5 bandas o redondea el valor.",
      tooSmall: "Este valor es demasiado pequeño para el código de colores. El multiplicador más pequeño es la plata (× 0,01).",
      tooLarge: "Este valor es demasiado grande para el código de colores. El multiplicador más grande es el blanco (× 1.000.000.000).",
      noneNeedsFour: "Solo las resistencias de 4 bandas pueden no tener banda de tolerancia (±20 %). Elige un color de tolerancia.",
    },
    valueText: "{value} {prefix}Ω",
    resistance: "Resistencia",
    bandsResult: "Bandas de color",
    captionDecode: "{bands}: {digits} × {multiplier}, tolerancia ±{tolerance}.",
    captionEncode: "{value} como resistencia de {bands} bandas con una tolerancia de ±{tolerance}.",
    bandSeparator: " – ",
    ohms: "Resistencia en ohmios",
    toleranceResult: "Tolerancia",
    toleranceText: "±{value}",
    minimum: "Mínimo dentro de la tolerancia",
    maximum: "Máximo dentro de la tolerancia",
    tcrResult: "Coeficiente de temperatura",
    tcrText: "{value} ppm/K",
    tcrChange: "Variación con un aumento de temperatura de 10 K (10 °C)",
    significantDigits: "Cifras significativas",
    multiplierResult: "Multiplicador",
    table: {
      caption: "Banda a banda",
      band: "Banda",
      color: "Color",
      meaning: "Significado",
      bandLabel: "Banda {n}",
    },
    meanings: {
      digit: "Cifra {n}",
      multiplier: "× {n}",
      tolerance: "Tolerancia ±{n}",
      tcr: "{n} ppm/K",
    },
    notes: {
      reading:
        "Lee desde el extremo en el que las bandas están agrupadas; la banda de tolerancia suele estar separada y a menudo es más ancha. El oro y la plata nunca son la primera banda.",
      noTolerance: "Sin banda de tolerancia, la resistencia es de ±20 %.",
      colors:
        "Algunos colores pueden parecerse con ciertas luces, sobre todo el rojo, el naranja y el marrón, o el gris y el blanco. Si tienes dudas, mide la resistencia con un polímetro.",
      tcr: "El coeficiente de temperatura indica cuánto cambia la resistencia con la temperatura: {value} significa una variación del {percent} por cada 10 K.",
    },
  },
};

export default es;
