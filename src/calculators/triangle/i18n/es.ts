import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { TriangleText } from "../text/en";

const es: CalculatorTranslation<TriangleText> = {
  content: {
    title: "Calculadora de triángulos",
    shortTitle: "Triángulo",
    summary:
      "Resuelve cualquier triángulo a partir de tres lados y ángulos conocidos (LLL, LAL, ALA, AAL o LLA) y obtén su área, perímetro, tipo, radio inscrito y radio circunscrito.",
    metaTitle: "Calculadora de triángulos – Resuelve LLL, LAL, ALA, AAL, LLA",
    metaDescription:
      "Resuelve un triángulo a partir de tres lados, dos lados y un ángulo o dos ángulos y un lado. Trata el caso ambiguo LLA y halla el área, el perímetro y el tipo.",
    keywords: ["calculadora de triángulos", "resolver triángulos", "teorema del seno", "teorema del coseno", "caso ambiguo LLA", "área del triángulo", "lado desconocido", "ángulo desconocido", "radio inscrito", "radio circunscrito"],
    intro: [
      "Un triángulo queda determinado por tres medidas, siempre que al menos una de ellas sea un lado. Esta calculadora acepta cualquiera de esas combinaciones, LLL, LAL, ALA, AAL o LLA, y calcula los lados y ángulos que faltan con el teorema del coseno y el teorema del seno.",
      "También halla el área, el perímetro, el radio inscrito y el radio circunscrito, e indica si el triángulo es acutángulo, rectángulo u obtusángulo y si es equilátero, isósceles o escaleno. En el caso LLA, dos triángulos distintos pueden cumplir los mismos valores; la calculadora muestra ambos cuando ocurre y avisa cuando no existe ningún triángulo. Para triángulos rectángulos a partir de dos lados, la Calculadora del teorema de Pitágoras es más rápida.",
    ],
    howToUse: [
      "Elige qué valores conoces. El lado a siempre es opuesto al ángulo A, b al ángulo B y c al ángulo C.",
      "Introduce los lados en una misma unidad cualquiera y los ángulos en grados.",
      "Consulta el área y después la tabla con los tres lados y los tres ángulos.",
      "En el caso LLA, revisa la nota: puede haber un segundo triángulo, que se muestra por separado.",
    ],
    formulas: [
      {
        title: "Teorema del coseno",
        expression: "c² = a² + b² − 2ab cos C\ncos A = (b² + c² − a²) ÷ (2bc)",
        explanation: "Halla el tercer lado a partir de dos lados y el ángulo que forman (LAL), o todos los ángulos a partir de los tres lados (LLL).",
      },
      {
        title: "Teorema del seno",
        expression: "a ÷ sin A = b ÷ sin B = c ÷ sin C = 2R",
        explanation: "Halla los lados restantes cuando se conocen dos ángulos (ALA, AAL) y el segundo ángulo en el caso LLA. R es el radio circunscrito.",
      },
      {
        title: "Caso ambiguo LLA",
        expression: "h = b sin A\na < h: ningún triángulo; a = h: un triángulo rectángulo\nh < a < b: dos triángulos; a ≥ b: un triángulo",
        explanation: "Para un ángulo A agudo, sin B = b sin A ÷ a tiene dos ángulos posibles, B y 180° − B. Si A mide 90° o más, solo existe triángulo cuando a > b.",
      },
      {
        title: "Área y radios",
        expression: "Área = √(s(s − a)(s − b)(s − c)), s = (a + b + c) ÷ 2\nr = Área ÷ s\nR = abc ÷ (4 × Área)",
        explanation: "La fórmula de Herón da el área a partir de los tres lados. r es el radio de la circunferencia inscrita y R el de la circunscrita.",
      },
    ],
    examples: [
      {
        title: "Tres lados: 5, 6 y 7",
        steps: [
          "cos A = (36 + 49 − 25) ÷ 84 ≈ 0,7143, así que A ≈ 44,4153°; del mismo modo, B ≈ 57,1217° y C ≈ 78,4630°",
          "s = 9, Área = √(9 × 4 × 3 × 2) = √216 ≈ 14,6969",
          "Todos los ángulos miden menos de 90° y todos los lados son distintos: un triángulo acutángulo y escaleno",
        ],
      },
      {
        title: "Dos lados de 8 y 11 que forman un ángulo de 37°",
        steps: ["c² = 64 + 121 − 176 × cos 37° ≈ 44,4401, así que c ≈ 6,6663", "Área = ½ × 8 × 11 × sin 37° ≈ 26,4799", "B ≈ 96,7625°, así que el triángulo es obtusángulo"],
      },
      {
        title: "LLA: a = 6, b = 8 y A = 35° (dos triángulos)",
        steps: [
          "h = 8 × sin 35° ≈ 4,5886; como 4,5886 < 6 < 8, caben dos triángulos",
          "sin B = 8 × sin 35° ÷ 6 ≈ 0,7648, así que B ≈ 49,8864° o 130,1136°",
          "Triángulo 1: C ≈ 95,1136°, c ≈ 10,4190, área ≈ 23,9045. Triángulo 2: C ≈ 14,8864°, c ≈ 2,6874, área ≈ 6,1657",
        ],
      },
    ],
    assumptions: [
      "El triángulo es plano (euclidiano). Los ángulos están en grados y todos los lados usan la misma unidad de longitud.",
      "Cada ángulo debe ser mayor que 0° y menor que 180°, los ángulos dados deben sumar menos de 180° y tres lados deben cumplir la desigualdad triangular.",
      "Si es acutángulo, rectángulo u obtusángulo, y si tiene lados iguales, se decide con una tolerancia minúscula para que el redondeo interno del ordenador no oculte un ángulo recto o lados iguales.",
      "Los resultados solo se redondean al mostrarlos.",
    ],
    faqs: [
      {
        question: "¿Por qué el caso LLA puede dar dos triángulos?",
        answer:
          "Cuando el lado opuesto al ángulo conocido es más corto que el otro lado conocido pero más largo que la altura b × sin A, puede cortar el tercer lado en dos puntos. Uno da un ángulo B agudo y el otro su suplementario, 180° − B.",
      },
      {
        question: "¿Por qué no existe la opción AAA?",
        answer: "Tres ángulos fijan la forma, pero no el tamaño: cualquier copia a escala tiene los mismos ángulos. Hace falta conocer al menos la longitud de un lado.",
      },
      {
        question: "¿Cómo compruebo si tres longitudes forman un triángulo?",
        answer: "Cada lado debe ser más corto que la suma de los otros dos. Las longitudes 3, 4 y 8 no lo cumplen, porque 3 + 4 es menor que 8.",
      },
    ],
    sourcesUsedFor: [
      "El teorema del coseno para LLL y LAL, y la fórmula de Herón para el área.",
      "El teorema del seno para ALA, AAL y LLA, incluido el caso ambiguo.",
    ],
  },
  text: {
    given: "Valores conocidos",
    modes: {
      sss: "LLL: tres lados a, b y c",
      sas: "LAL: lados a, b y el ángulo C que forman",
      asa: "ALA: ángulos A, B y el lado c entre ellos",
      aas: "AAL: ángulos A, B y el lado a opuesto a A",
      ssa: "LLA: lados a, b y el ángulo A opuesto a a",
    },
    givenHelp: "El lado a es opuesto al ángulo A, el lado b al ángulo B y el lado c al ángulo C.",
    sideA: "Lado a",
    sideB: "Lado b",
    sideC: "Lado c",
    angleA: "Ángulo A",
    angleB: "Ángulo B",
    angleC: "Ángulo C",
    angleHelp: "En grados, entre 0 y 180.",
    notTriangle: "Estos lados no pueden formar un triángulo: cada lado debe ser más corto que la suma de los otros dos.",
    angleRange: "Introduce un ángulo menor que 180°.",
    angleSum: "Los dos ángulos deben sumar menos de 180°.",
    noSolution: "Ningún triángulo tiene estos valores: el lado a es demasiado corto para llegar al tercer lado. Debe medir al menos b × sin A.",
    noSolutionObtuse: "Ningún triángulo tiene estos valores: cuando el ángulo A mide 90° o más, el lado a debe ser más largo que el lado b.",
    area: "Área",
    areaTwo: "Área (triángulo 1)",
    caption: "Calculado con {method}.",
    methods: {
      sss: "el teorema del coseno",
      sas: "el teorema del coseno",
      asa: "la suma de los ángulos y el teorema del seno",
      aas: "la suma de los ángulos y el teorema del seno",
      ssa: "el teorema del seno",
    },
    perimeter: "Perímetro",
    classification: "Tipo",
    inradius: "Radio inscrito (r)",
    circumradius: "Radio circunscrito (R)",
    secondArea: "Área (triángulo 2)",
    secondPerimeter: "Perímetro (triángulo 2)",
    secondClassification: "Tipo (triángulo 2)",
    byAngle: { acute: "acutángulo", right: "rectángulo", obtuse: "obtusángulo" },
    bySide: { equilateral: "equilátero", isosceles: "isósceles", scalene: "escaleno" },
    type: "{angle}, {side}",
    tableCaption: "Lados y ángulos",
    tableCaptionN: "Triángulo {n}: lados y ángulos",
    colVertex: "Vértice",
    colSide: "Lado opuesto",
    colAngle: "Ángulo",
    rowA: "A",
    rowB: "B",
    rowC: "C",
    degrees: "{value}°",
    ambiguous: "Dos triángulos distintos cumplen estos valores (el caso ambiguo LLA). El ángulo B puede ser agudo u obtuso; se muestran ambos.",
    tolerance:
      "El tipo se decide con una tolerancia minúscula, de modo que un ángulo recto o unos lados iguales se siguen reconociendo aunque el redondeo del ordenador los haga diferir en la décima cifra.",
  },
};

export default es;
