import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { AreaShapesText } from "../text/en";

const es: CalculatorTranslation<AreaShapesText> = {
  content: {
    title: "Calculadora de áreas",
    shortTitle: "Área",
    summary:
      "Calcula el área de un trapecio, paralelogramo, rombo, elipse, sector circular, corona circular, triángulo a partir de sus tres lados o polígono regular, con el perímetro cuando se puede obtener.",
    metaTitle: "Calculadora de áreas – Trapecio, elipse, sector y polígono",
    metaDescription:
      "Calcula el área de un trapecio, paralelogramo, rombo, elipse, sector circular, corona, triángulo a partir de tres lados o polígono regular en siete unidades.",
    keywords: ["calculadora de áreas", "área del trapecio", "área de la elipse", "área del sector circular", "área de la corona circular", "fórmula de Herón", "área de un polígono regular", "área del hexágono", "área del rombo"],
    intro: [
      "El área mide cuánta superficie plana cubre una figura. Esta calculadora trabaja con ocho figuras que necesitan algo más que largo por ancho: el trapecio, el paralelogramo, el rombo, la elipse, el sector circular, la corona circular (anillo), un triángulo del que solo se conocen los tres lados y cualquier polígono regular, desde un triángulo hasta una figura de 1000 lados.",
      "Los rectángulos, los círculos y los triángulos con base y altura conocidas ya los cubre la Calculadora de pies cuadrados, así que aquí no se incluyen. Elige una figura y una unidad de longitud, escribe las medidas y el área aparece en esa unidad al cuadrado y en metros cuadrados, junto con el perímetro siempre que pueda obtenerse a partir de las mismas medidas.",
    ],
    howToUse: [
      "Elige la figura.",
      "Elige la unidad en la que has medido. Todas las longitudes deben estar en la misma unidad.",
      "Introduce las medidas que se piden para esa figura. Las alturas son siempre alturas perpendiculares y el ángulo del sector se da en grados.",
      "Consulta el área, el área en metros cuadrados y las medidas adicionales, como el perímetro, la longitud del arco o la apotema.",
    ],
    formulas: [
      {
        title: "Trapecio y paralelogramo",
        expression: "A = ½(a + b)h\nA = b × h",
        explanation: "a y b son los dos lados paralelos del trapecio; h es siempre la altura perpendicular.",
      },
      {
        title: "Rombo",
        expression: "A = ½ d₁d₂\nP = 2√(d₁² + d₂²)",
        explanation: "Las diagonales de un rombo se cortan en ángulo recto, así que los cuatro pequeños triángulos rectángulos dan tanto el área como la longitud del lado.",
      },
      {
        title: "Elipse",
        expression: "A = πab\nP ≈ π(a + b)(1 + 3h ÷ (10 + √(4 − 3h))), h = (a − b)² ÷ (a + b)²",
        explanation: "a y b son los semiejes. El perímetro usa la segunda aproximación de Ramanujan, porque no existe una fórmula exacta sencilla.",
      },
      {
        title: "Sector circular y corona",
        expression: "A = ½ r²θ, arco = rθ\nA = π(R² − r²)",
        explanation: "θ es el ángulo central convertido a radianes (θ = grados × π ÷ 180). R y r son los radios exterior e interior de la corona.",
      },
      {
        title: "Triángulo a partir de tres lados (Herón)",
        expression: "s = (a + b + c) ÷ 2\nA = √(s(s − a)(s − b)(s − c))",
        explanation: "s es el semiperímetro. Los lados deben cumplir la desigualdad triangular. La calculadora usa una reordenación equivalente que sigue siendo precisa en triángulos muy estrechos.",
      },
      {
        title: "Polígono regular",
        expression: "A = n s² ÷ (4 tan(π/n))\napotema = s ÷ (2 tan(π/n))\nángulo interior = (n − 2) × 180° ÷ n",
        explanation: "n es el número de lados iguales y s la longitud del lado. El perímetro es n × s.",
      },
    ],
    examples: [
      {
        title: "Un arriate curvo con forma de sector de 135° y 2,5 ft de radio",
        steps: [
          "θ = 135 × π ÷ 180 ≈ 2,35619 rad",
          "A = ½ × 2,5² × 2,35619 ≈ 7,3631 ft²",
          "Arco = 2,5 × 2,35619 ≈ 5,8905 ft, así que el borde que hay que rematar mide 5,8905 + 2 × 2,5 ≈ 10,8905 ft",
        ],
      },
      {
        title: "Un tablero de mesa octogonal regular con lados de 30 cm",
        steps: ["tan(π/8) ≈ 0,414214", "A = 8 × 30² ÷ (4 × 0,414214) ≈ 4345,58 cm²", "Son unos 0,4346 m², con un perímetro de 240 cm"],
      },
      {
        title: "Una parcela triangular con lados de 13 m, 14 m y 15 m",
        steps: ["s = (13 + 14 + 15) ÷ 2 = 21", "A = √(21 × 8 × 7 × 6) = √7056", "A = 84 m²"],
      },
    ],
    assumptions: [
      "Las figuras son ideales: los lados son rectos, el polígono regular tiene lados y ángulos iguales, y las figuras redondas son círculos o elipses perfectos.",
      "Las alturas son alturas perpendiculares. El lado inclinado de un trapecio o de un paralelogramo no sirve para calcular el área.",
      "El perímetro de la elipse es una aproximación, normalmente con un error de alrededor del 0,04 %. Todos los demás resultados usan fórmulas exactas y solo se redondean al mostrarlos.",
      "Los metros cuadrados se obtienen con factores de longitud exactos (1 in = 2,54 cm, 1 ft = 0,3048 m, 1 yd = 0,9144 m).",
    ],
    faqs: [
      {
        question: "¿Dónde están el rectángulo, el círculo y el triángulo normal?",
        answer: "La Calculadora de pies cuadrados ya cubre rectángulos, círculos y triángulos a partir de la base y la altura, así que esta página se centra en figuras que necesitan otra fórmula.",
      },
      {
        question: "¿Cómo calculo el área de un triángulo si solo conozco los lados?",
        answer: "Usa la fórmula de Herón: elige «Triángulo a partir de tres lados». Con lados de 5, 6 y 7, el semiperímetro es 9 y el área es √(9 × 4 × 3 × 2) = √216 ≈ 14,70.",
      },
      {
        question: "¿Por qué el perímetro de la elipse es solo aproximado?",
        answer: "El perímetro exacto de una elipse requiere una integral elíptica, que no tiene una expresión cerrada. La segunda aproximación de Ramanujan es suficientemente precisa para casi cualquier uso práctico y es exacta cuando la elipse es un círculo.",
      },
    ],
    sourcesUsedFor: [
      "Fórmulas del área del trapecio y de otras figuras planas básicas.",
      "Fórmula de Herón para el área de un triángulo a partir de sus tres lados.",
      "Segunda aproximación de Ramanujan del perímetro de la elipse y su precisión habitual.",
    ],
  },
  text: {
    shape: "Figura",
    shapes: {
      trapezoid: "Trapecio",
      parallelogram: "Paralelogramo",
      rhombus: "Rombo (a partir de las diagonales)",
      ellipse: "Elipse",
      sector: "Sector circular",
      annulus: "Corona circular (anillo)",
      heron: "Triángulo a partir de tres lados",
      polygon: "Polígono regular",
    },
    unit: "Unidad de longitud",
    unitHelp: "Introduce todas las longitudes en esta unidad. El área se muestra en la misma unidad al cuadrado.",
    units: { mm: "Milímetros (mm)", cm: "Centímetros (cm)", m: "Metros (m)", km: "Kilómetros (km)", in: "Pulgadas (in)", ft: "Pies (ft)", yd: "Yardas (yd)" },
    trapA: "Lado paralelo a",
    trapB: "Lado paralelo b",
    trapH: "Altura (h)",
    trapHelp: "La distancia perpendicular entre los dos lados paralelos.",
    paraBase: "Base (b)",
    paraH: "Altura (h)",
    paraHelp: "La distancia perpendicular desde la base hasta el lado opuesto, no el lado inclinado.",
    d1: "Diagonal d₁",
    d2: "Diagonal d₂",
    semiA: "Semieje a",
    semiB: "Semieje b",
    semiHelp: "La mitad de la anchura o la altura total de la elipse.",
    radius: "Radio (r)",
    angle: "Ángulo central (θ)",
    angleHelp: "En grados, mayor que 0 y hasta 360. 360° es un círculo completo.",
    outer: "Radio exterior (R)",
    inner: "Radio interior (r)",
    innerHelp: "Puede ser 0, lo que da un círculo completo.",
    sideA: "Lado a",
    sideB: "Lado b",
    sideC: "Lado c",
    sides: "Número de lados (n)",
    side: "Longitud del lado (s)",
    innerTooLarge: "El radio interior debe ser menor que el radio exterior.",
    notTriangle: "Estos lados no pueden formar un triángulo: cada lado debe ser más corto que la suma de los otros dos.",
    area: "Área",
    formula: {
      trapezoid: "A = ½(a + b)h",
      parallelogram: "A = b × h",
      rhombus: "A = ½ d₁d₂",
      ellipse: "A = πab",
      sector: "A = ½ r²θ (θ en radianes)",
      annulus: "A = π(R² − r²)",
      heron: "A = √(s(s − a)(s − b)(s − c)), s = (a + b + c) ÷ 2",
      polygon: "A = n s² ÷ (4 tan(π/n))",
    },
    squareMeters: "Área en metros cuadrados",
    perimeter: "Perímetro",
    perimeterApprox: "Perímetro (aproximado)",
    midsegment: "Base media ½(a + b)",
    rhombusSide: "Longitud del lado",
    arcLength: "Longitud del arco",
    ringWidth: "Anchura de la corona (R − r)",
    outerCircumference: "Circunferencia exterior",
    innerCircumference: "Circunferencia interior",
    semiPerimeter: "Semiperímetro (s)",
    apothem: "Apotema (radio inscrito)",
    circumradius: "Radio circunscrito",
    interiorAngle: "Ángulo interior",
    degrees: "{value}°",
    noPerimeterTrapezoid: "El perímetro de un trapecio también requiere las longitudes de los dos lados inclinados, así que no se muestra.",
    noPerimeterParallelogram: "El perímetro de un paralelogramo también requiere la longitud del lado inclinado, así que no se muestra.",
    ellipseNote:
      "El perímetro de la elipse no tiene una fórmula exacta sencilla. Se estima con la segunda aproximación de Ramanujan, que tiene un error de alrededor del 0,04 % en la mayoría de las elipses y es exacta para un círculo.",
    sectorNote: "El perímetro de un sector es el arco más los dos radios.",
    annulusNote: "El perímetro de una corona es la suma de las circunferencias exterior e interior.",
  },
};

export default es;
