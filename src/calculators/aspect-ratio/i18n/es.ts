import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { AspectRatioText } from "../text/en";

const es: CalculatorTranslation<AspectRatioText> = {
  content: {
    title: "Calculadora de relación de aspecto",
    shortTitle: "Relación de aspecto",
    summary:
      "Obtén la relación de aspecto de una imagen o una pantalla, redimensiona a una relación sin deformar o calcula el ancho y el alto de una pantalla a partir de su diagonal.",
    metaTitle: "Relación de aspecto – Simplificar, redimensionar y pantallas",
    metaDescription:
      "Reduce un ancho × alto a su relación de aspecto, busca la relación común más cercana, redimensiona en píxeles enteros o calcula una pantalla por su diagonal.",
    keywords: [
      "relación de aspecto",
      "calculadora 16:9",
      "redimensionar imagen",
      "proporción de pantalla",
      "tamaño de pantalla",
      "relación 21:9",
      "medidas de televisor por pulgadas",
      "ancho y alto",
    ],
    intro: [
      "La relación de aspecto describe la forma de una imagen o una pantalla: su ancho comparado con su alto, escrito W:H. Un vídeo de 1920 × 1080 y otro de 3840 × 2160 tienen tamaños distintos pero la misma forma 16:9, así que uno se puede escalar al otro sin estirarse.",
      "Esta calculadora hace tres cosas. Reduce cualquier ancho y alto a la relación de números enteros más pequeña y la compara con los formatos habituales; calcula el lado que falta al redimensionar a una relación; y convierte la diagonal de una pantalla en su ancho, su alto y su área. Para relaciones generales entre cualquier tipo de cantidades, consulta la calculadora de razones y proporciones.",
    ],
    howToUse: [
      "Elige lo que quieres hacer.",
      "Para obtener una relación, introduce el ancho y el alto en la misma unidad, normalmente píxeles. Los decimales se escalan a números enteros antes de reducir la relación.",
      "Para redimensionar, introduce la relación (por ejemplo, 16 y 9), elige si conoces el nuevo ancho o el nuevo alto e introdúcelo. El otro lado se muestra exacto y redondeado a píxeles enteros.",
      "Para una pantalla, introduce la diagonal en pulgadas o centímetros y la relación. El ancho, el alto y el área se muestran en ambas unidades.",
    ],
    formulas: [
      {
        title: "Relación simplificada",
        expression: "W:H = (ancho ÷ g) : (alto ÷ g), g = mcd(ancho, alto)",
        explanation:
          "g es el máximo común divisor, que se obtiene con el algoritmo de Euclides. Los tamaños decimales se multiplican primero por una potencia de 10 para convertirlos en números enteros.",
      },
      {
        title: "Redimensionar",
        expression: "nuevo alto = nuevo ancho × H ÷ W;  nuevo ancho = nuevo alto × W ÷ H",
        explanation: "Mantener la misma relación significa escalar los dos lados por el mismo factor.",
      },
      {
        title: "Tamaño de pantalla",
        expression: "ancho = d × W ÷ √(W² + H²);  alto = d × H ÷ √(W² + H²)",
        explanation: "La diagonal d es la hipotenusa de un triángulo rectángulo cuyos lados están en la relación W:H. El área es ancho × alto.",
      },
      {
        title: "Diferencia con una relación común",
        expression: "diferencia = (ancho ÷ alto) ÷ (Wc ÷ Hc) − 1",
        explanation: "Se muestra como porcentaje. La relación común más cercana es la que tiene la menor diferencia.",
      },
    ],
    examples: [
      {
        title: "Un monitor ultrapanorámico de 2560 × 1080 píxeles",
        steps: [
          "mcd(2560, 1080) = 40",
          "2560 ÷ 40 = 64 y 1080 ÷ 40 = 27, así que la relación es 64:27",
          "64 ÷ 27 ≈ 2,3704: un 1,59 % más ancha que «21:9» (2,3333) y un 0,82 % más estrecha que 2,39:1, la relación común más cercana",
        ],
      },
      {
        title: "Redimensionar una diapositiva 4:3 a un alto de 900 píxeles",
        steps: ["Nuevo ancho = 900 × 4 ÷ 3 = 1.200", "Los dos lados ya son números enteros, así que no hace falta redondear"],
      },
      {
        title: "Una pantalla de 81 cm en 4:3",
        steps: ["√(4² + 3²) = 5", "Ancho = 81 × 4 ÷ 5 = 64,8 cm; alto = 81 × 3 ÷ 5 = 48,6 cm", "Área = 64,8 × 48,6 = 3.149,28 cm²"],
      },
    ],
    assumptions: [
      "El ancho y el alto usan la misma unidad y describen píxeles cuadrados. Algunos formatos de vídeo antiguos usan píxeles no cuadrados, así que su tamaño almacenado y su forma en pantalla difieren.",
      "La lista de relaciones comunes es solo para comparar. En concreto, «21:9» es un nombre comercial: las pantallas de 2560 × 1080 son 64:27, y la pantalla panorámica de cine se suele citar como 2,39:1.",
      "La diagonal de una pantalla se mide sobre la imagen visible. No se incluyen los marcos ni la curvatura de las pantallas curvas.",
    ],
    faqs: [
      {
        question: "¿Por qué 1366 × 768 no es exactamente 16:9?",
        answer:
          "1366 × 768 se reduce a 683:384, aproximadamente 1,7786:1, que está a menos de un 0,05 % de 16:9 (1,7778:1). Los fabricantes redondearon el ancho a un número cómodo, así que se vende como 16:9 aunque la relación reducida no lo sea.",
      },
      {
        question: "¿Cómo mantengo la relación exacta al redimensionar?",
        answer:
          "Elige un ancho que sea múltiplo de la parte del ancho de la relación. Para 16:9, cualquier ancho múltiplo de 16, como 1280 o 1920, da un alto entero. Otros anchos requieren redondear, lo que cambia la forma mínimamente.",
      },
      {
        question: "¿Una pantalla 21:9 más grande muestra más que una 16:9 con la misma diagonal?",
        answer:
          "No necesariamente. Con la misma diagonal, una pantalla más ancha es más baja y su área es menor. Usa el modo de tamaño de pantalla para las dos formas y compara el alto y el área.",
      },
    ],
    sourcesUsedFor: [
      "Que «21:9» es un nombre comercial de las pantallas ultrapanorámicas cuya relación real es 64:27 (aproximadamente 2,37:1), por ejemplo 2560 × 1080.",
      "Las resoluciones de pantallas ultrapanorámicas y sus relaciones exactas, como 2560 × 1080 (64:27).",
      "El ancho y el alto de una pantalla a partir de la diagonal y la relación de aspecto con el teorema de Pitágoras.",
    ],
  },
  text: {
    mode: "¿Qué quieres hacer?",
    modes: {
      simplify: "Obtener la relación de un tamaño",
      resize: "Redimensionar a una relación",
      screen: "Tamaño de pantalla a partir de la diagonal",
    },
    width: "Ancho",
    height: "Alto",
    sizeHelp: "En píxeles o en cualquier otra unidad, siempre que los dos usen la misma. Se admiten decimales.",
    ratioWidth: "Ancho de la relación (W)",
    ratioHeight: "Alto de la relación (H)",
    ratioHelp: "Para 16:9, introduce 16 y 9. También sirven relaciones decimales como 2,39:1.",
    knownSide: "¿Qué lado nuevo conoces?",
    knownSides: { width: "El nuevo ancho", height: "El nuevo alto" },
    newSize: "Nuevo tamaño",
    newSizeHelp: "El ancho o el alto que quieres, normalmente en píxeles.",
    diagonal: "Diagonal de la pantalla",
    lengthUnit: "Unidad de longitud",
    lengthUnits: { in: "Pulgadas (in)", cm: "Centímetros (cm)" },
    errors: {
      tooPrecise: "Usa como máximo 6 decimales para que la relación se pueda simplificar exactamente.",
      tooLarge: "Estos valores son demasiado grandes para simplificarlos exactamente. Usa números más pequeños.",
    },
    ratioText: "{w}:{h}",
    sizeText: "{w} × {h}",
    sizeUnitText: "{w} × {h} {unit}",
    primaryRatio: "Relación de aspecto simplificada",
    primaryResize: "Nuevo tamaño (píxeles enteros)",
    primaryScreen: "Ancho × alto de la pantalla",
    captionSimplify: "{w} × {h} se reduce a {ratio} dividiendo los dos lados entre {gcd}.",
    captionResize: "Manteniendo la forma {ratio}: {side} de {size}.",
    captionScreen: "Una diagonal de {diagonal} {unit} en {ratio}.",
    sides: { width: "un ancho", height: "un alto" },
    decimalRatio: "Relación decimal (ancho ÷ alto)",
    decimalSuffix: ":1",
    nearest: "Relación común más cercana",
    difference: "Diferencia con la relación común más cercana",
    orientation: "Orientación",
    orientations: { landscape: "Horizontal (más ancho que alto)", portrait: "Vertical (más alto que ancho)", square: "Cuadrada" },
    pixels: "Píxeles totales (si el tamaño está en píxeles)",
    inputRatio: "Relación en su mínima expresión",
    exactWidth: "Ancho exacto",
    exactHeight: "Alto exacto",
    roundedWidth: "Ancho redondeado a píxeles enteros",
    roundedHeight: "Alto redondeado a píxeles enteros",
    roundedRatio: "Relación decimal tras el redondeo",
    screenWidth: "Ancho",
    screenHeight: "Alto",
    screenArea: "Área de la pantalla",
    otherWidth: "Ancho en {unit}",
    otherHeight: "Alto en {unit}",
    otherArea: "Área en {unit}",
    table: {
      caption: "Relaciones de aspecto comunes comparadas con la tuya",
      ratio: "Relación",
      decimal: "Decimal (W ÷ H)",
      difference: "Tu relación comparada con ella",
    },
    notes: {
      marketing:
        "«21:9» es un nombre comercial. Los monitores ultrapanorámicos como los de 2560 × 1080 son en realidad 64:27 (aproximadamente 2,37:1), y los de 3440 × 1440 son 43:18 (aproximadamente 2,39:1).",
      rounding: "Redondear a píxeles enteros cambia la forma muy ligeramente. Los anchos múltiplos de {w}, o los altos múltiplos de {h}, mantienen la relación exacta.",
      roundingSimple: "Redondear a píxeles enteros cambia la forma muy ligeramente.",
      diagonal:
        "El tamaño de las pantallas se mide en diagonal sobre la imagen visible. No se incluye el marco, y las pantallas curvas se miden siguiendo la curva.",
      difference: "La diferencia compara tu relación decimal con cada relación común: un valor positivo significa que tu forma es más ancha.",
    },
  },
};

export default es;
