import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PotentialEnergyText } from "../text/en";

const es: CalculatorTranslation<PotentialEnergyText> = {
  content: {
    title: "Calculadora de energía potencial",
    shortTitle: "Energía potencial",
    summary:
      "Calcula la energía potencial gravitatoria (m·g·h) o la energía almacenada en un muelle (½·k·x²), o despeja de cualquiera de las dos fórmulas el valor que falta.",
    metaTitle: "Calculadora de energía potencial – Ep = mgh y ½kx²",
    metaDescription:
      "Calcula la energía potencial gravitatoria a partir de la masa, la altura y la gravedad, o la energía elástica de un muelle, y despeja m, h, k o x en cualquier unidad.",
    keywords: [
      "energía potencial",
      "calcular energía potencial",
      "energía potencial gravitatoria",
      "Ep = mgh",
      "energía potencial elástica",
      "energía de un muelle",
      "1/2 kx^2",
      "julios",
    ],
    intro: [
      "La energía potencial es la energía almacenada por la posición de un objeto o por su deformación. Si subes una caja de 12 kg a una plataforma de 2,5 m, le almacenas unos 294 julios, que devuelve en forma de movimiento si cae. Si comprimes un muelle, almacena una energía que libera al soltarlo.",
      "Esta calculadora trata los dos tipos. Para la gravedad usa Ep = m·g·h, con la gravedad de la Tierra, la Luna, Marte o un valor propio. Para un muelle usa Ep = ½·k·x². También puedes despejar de cualquiera de las dos fórmulas la masa, la altura, la constante elástica o el desplazamiento.",
    ],
    howToUse: [
      "Elige energía potencial gravitatoria o elástica.",
      "Elige qué quieres calcular. El campo de ese valor desaparece.",
      "Introduce los demás valores y elige sus unidades. Para la gravedad, elige un planeta o introduce tu propio valor.",
      "Consulta el resultado en la unidad elegida, junto con el mismo valor en las demás unidades.",
    ],
    formulas: [
      {
        title: "Energía potencial gravitatoria",
        expression: "Ep = m × g × h",
        explanation:
          "Con m en kilogramos, g en m/s² y h en metros, Ep sale en julios. h se mide desde un nivel de referencia que eliges tú.",
      },
      {
        title: "Energía potencial elástica",
        expression: "Ep = ½ × k × x²",
        explanation:
          "k es la constante elástica del muelle en N/m y x el estiramiento o la compresión respecto a su longitud en reposo, en metros.",
      },
      {
        title: "Despejar la incógnita",
        expression: "m = Ep ÷ (g·h)   h = Ep ÷ (m·g)\nk = 2·Ep ÷ x²   x = √(2·Ep ÷ k)",
        explanation: "Las mismas fórmulas reordenadas para el valor desconocido.",
      },
      {
        title: "Unidades de energía",
        expression: "1 kJ = 1000 J   1 Wh = 3600 J   1 kWh = 3.600.000 J\n1 ft·lbf = 1,3558179483314 J",
        explanation: "Un pie-libra es 0,3048 m × 4,4482216152605 N; ambos valores son exactos.",
      },
    ],
    examples: [
      {
        title: "Subir una caja de 12 kg a una plataforma de 2,5 m",
        steps: ["Ep = m × g × h", "= 12 × 9,80665 × 2,5", "= 294,1995 J (unos 0,29 kJ)"],
      },
      {
        title: "¿A qué altura podría subir 1 kWh un coche de 1000 kg?",
        steps: ["1 kWh = 3.600.000 J", "h = Ep ÷ (m × g) = 3.600.000 ÷ (1000 × 9,80665)", "≈ 367,10 m"],
      },
      {
        title: "Un muelle de 400 N/m comprimido 15 cm",
        steps: ["15 cm = 0,15 m", "Ep = ½ × 400 × 0,15²", "= 200 × 0,0225 = 4,5 J"],
      },
    ],
    assumptions: [
      "La gravedad se considera constante a lo largo de la altura, lo que es preciso cerca de la superficie de un planeta. Para alturas de cientos de kilómetros, la disminución de la gravedad con la distancia sí importa.",
      "Para la Tierra se usa la gravedad estándar, 9,80665 m/s², exacta por definición. La gravedad real varía ligeramente con la latitud y la altitud. Los valores de la Luna y Marte son valores medios en superficie tomados de las fichas técnicas de la NASA.",
      "El muelle es ideal: cumple la ley de Hooke y no se estira más allá de su límite elástico. Se ignoran el rozamiento, la resistencia del aire y la energía perdida en forma de calor.",
    ],
    faqs: [
      {
        question: "¿Desde dónde debo medir la altura?",
        answer:
          "Desde cualquier nivel que elijas como cero, como el suelo, el terreno o el tablero de una mesa. La energía potencial depende de esa elección, pero la variación de energía entre dos alturas no, y en la práctica lo que importa es esa variación.",
      },
      {
        question: "¿Qué relación hay entre la energía potencial y la cinética?",
        answer:
          "Cuando un objeto cae sin resistencia del aire, su energía potencial se convierte en energía cinética. Una caja de 12 kg que cae desde 2,5 m llega al suelo con unos 294 J de energía cinética, a una velocidad de √(2gh) ≈ 7,0 m/s.",
      },
      {
        question: "¿Importa si el muelle se estira o se comprime?",
        answer:
          "No. La energía depende de x², así que estirar o comprimir un muelle ideal la misma distancia almacena la misma energía.",
      },
    ],
    sourcesUsedFor: [
      "Energía potencial gravitatoria cerca de la superficie terrestre (mgh), energía potencial elástica de un muelle (½kx²) y elección del nivel cero.",
      "La gravedad en la superficie de la Luna, 1,62 m/s².",
      "La gravedad media en la superficie de Marte, 3,73 m/s².",
    ],
  },
  text: {
    mode: "Tipo de energía potencial",
    modes: { gravitational: "Gravitatoria (m·g·h)", elastic: "Muelle elástico (½·k·x²)" },
    solve: "Calcular",
    gSolveOptions: { energy: "Energía potencial (Ep)", mass: "Masa (m)", height: "Altura (h)" },
    eSolveOptions: { energy: "Energía almacenada (Ep)", k: "Constante elástica (k)", x: "Estiramiento o compresión (x)" },
    mass: "Masa (m)",
    massUnit: "Unidad de masa",
    massUnits: { kg: "Kilogramos (kg)", g: "Gramos (g)", lb: "Libras (lb)" },
    height: "Altura sobre el nivel de referencia (h)",
    heightHelp: "Medida desde el nivel que tomas como cero, como el suelo o el terreno.",
    heightUnit: "Unidad de altura",
    heightUnits: { m: "Metros (m)", cm: "Centímetros (cm)", ft: "Pies (ft)" },
    gravity: "Gravedad (g)",
    gravityOptions: {
      earth: "Tierra, estándar (9,80665 m/s²)",
      moon: "Luna (1,62 m/s²)",
      mars: "Marte (3,73 m/s²)",
      custom: "Valor personalizado",
    },
    customG: "Gravedad personalizada",
    energy: "Energía potencial (Ep)",
    energyUnit: "Unidad de energía",
    energyUnits: {
      J: "Julios (J)",
      kJ: "Kilojulios (kJ)",
      Wh: "Vatios hora (Wh)",
      kWh: "Kilovatios hora (kWh)",
      ftlbf: "Pies-libra (ft·lbf)",
    },
    k: "Constante elástica (k)",
    kHelp: "La rigidez del muelle: la fuerza en newtons necesaria para estirarlo un metro.",
    x: "Estiramiento o compresión (x)",
    xHelp: "La distancia respecto a la longitud en reposo del muelle. Comprimirlo y estirarlo almacena la misma energía.",
    xUnit: "Unidad de desplazamiento",
    xUnits: { m: "Metros (m)", cm: "Centímetros (cm)", in: "Pulgadas (in)" },
    results: {
      gEnergy: "Energía potencial gravitatoria",
      mass: "Masa necesaria",
      height: "Altura necesaria",
      eEnergy: "Energía potencial elástica",
      k: "Constante elástica necesaria",
      x: "Estiramiento o compresión necesarios",
    },
    captions: {
      gEnergy: "Ep = m × g × h",
      mass: "m = Ep ÷ (g × h)",
      height: "h = Ep ÷ (m × g)",
      eEnergy: "Ep = ½ × k × x²",
      k: "k = 2 × Ep ÷ x²",
      x: "x = √(2 × Ep ÷ k)",
    },
    inUnit: "En {unit}",
    weight: "Peso (fuerza de la gravedad, m × g)",
    fallSpeed: "Velocidad tras caer la altura h (sin resistencia del aire)",
    springForce: "Fuerza del muelle con ese desplazamiento (k × x)",
    notes: {
      reference: "La energía potencial se mide respecto a la altura que elegiste como cero. Solo importan las diferencias de altura.",
      gravity: "Usa g = {g} m/s², considerada constante a lo largo de la altura.",
      hooke: "Supone un muelle ideal que cumple la ley de Hooke (F = k × x) y no se estira más allá de su límite elástico.",
    },
  },
};

export default es;
