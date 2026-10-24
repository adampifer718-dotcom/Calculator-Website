import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ProjectileMotionText } from "../text/en";

const es: CalculatorTranslation<ProjectileMotionText> = {
  content: {
    title: "Calculadora de tiro parabólico",
    shortTitle: "Tiro parabólico",
    summary: "Calcula el alcance, el tiempo de vuelo, la altura máxima y la velocidad de impacto de un objeto lanzado desde cualquier altura, en la Tierra, la Luna o Marte.",
    metaTitle: "Calculadora de tiro parabólico – Alcance, altura y tiempo",
    metaDescription:
      "Con la velocidad, el ángulo y la altura de lanzamiento obtén el alcance, el tiempo de vuelo, la altura máxima y la velocidad de impacto, sin rozamiento del aire.",
    keywords: ["tiro parabólico", "movimiento parabólico", "trayectoria", "alcance", "tiempo de vuelo", "altura máxima", "ángulo de lanzamiento", "cinemática"],
    intro: [
      "Una pelota lanzada, un balón chutado o un chorro de agua siguen casi la misma curva una vez en el aire: avanzan de lado a velocidad constante mientras la gravedad los atrae hacia abajo a un ritmo constante. El resultado es una parábola.",
      "Indica la velocidad de lanzamiento, el ángulo sobre la horizontal y la altura sobre el suelo de llegada. La calculadora halla qué distancia recorre el objeto, cuánto tiempo permanece en el aire, hasta qué altura sube y a qué velocidad va al caer, y muestra su posición en diez momentos del vuelo.",
    ],
    howToUse: [
      "Introduce la velocidad de lanzamiento y elige su unidad.",
      "Introduce el ángulo de lanzamiento en grados sobre la horizontal, de 0° (horizontal) a 90° (vertical hacia arriba).",
      "Introduce la altura de lanzamiento sobre el suelo de llegada y elige metros o pies para las alturas y las distancias.",
      "Elige la Tierra, la Luna, Marte o tu propio valor de gravedad y consulta el alcance y los demás resultados.",
    ],
    formulas: [
      {
        title: "Componentes de la velocidad",
        expression: "vₓ = v·cos θ, v_y = v·sin θ",
        explanation: "La componente horizontal se mantiene constante; la vertical cambia en g cada segundo.",
      },
      {
        title: "Tiempo de vuelo",
        expression: "T = (v_y + √(v_y² + 2·g·h)) ÷ g",
        explanation: "La raíz positiva de h + v_y·t − ½·g·t² = 0, que incluye la altura de lanzamiento h.",
      },
      {
        title: "Alcance y punto más alto",
        expression: "R = vₓ·T, H = h + v_y² ÷ (2·g), t_apex = v_y ÷ g",
        explanation: "La distancia horizontal, el punto más alto sobre el suelo y el momento en que se alcanza.",
      },
      {
        title: "Impacto",
        expression: "v_impact = √(vₓ² + v_y² + 2·g·h), angle = atan(√(v_y² + 2·g·h) ÷ vₓ)",
        explanation: "La velocidad y el ángulo bajo la horizontal con que el objeto llega al suelo.",
      },
    ],
    examples: [
      {
        title: "Un balón chutado a 25 m/s y 35° desde el suelo",
        steps: ["vₓ = 25 cos 35° ≈ 20,479 m/s, v_y = 25 sin 35° ≈ 14,339 m/s", "T = 2 × 14,339 ÷ 9,80665 ≈ 2,924 s", "R = 20,479 × 2,924 ≈ 59,89 m; altura máxima ≈ 10,48 m"],
      },
      {
        title: "Un lanzamiento a 15 m/s y 20° soltado a 1,8 m del suelo",
        steps: [
          "vₓ ≈ 14,095 m/s, v_y ≈ 5,130 m/s",
          "T = (5,130 + √(5,130² + 2 × 9,80665 × 1,8)) ÷ 9,80665 ≈ 1,324 s",
          "R = 14,095 × 1,324 ≈ 18,66 m; llega al suelo a unos 16,13 m/s",
        ],
      },
      {
        title: "Un golpe de golf a 40 m/s y 45° en la Luna",
        steps: ["En terreno llano, R = v² sin(2θ) ÷ g = 1600 × 1 ÷ 1,62", "R ≈ 987,65 m, unas seis veces más lejos que en la Tierra", "Tiempo de vuelo ≈ 34,92 s"],
      },
    ],
    assumptions: [
      "Se ignoran la resistencia del aire, el viento, el efecto y la sustentación. Las trayectorias reales son más cortas y más bajas, y un proyectil real cae con más inclinación de lo que predice este modelo.",
      "La gravedad es constante y apunta verticalmente hacia abajo, y el suelo es plano y horizontal. Esto funciona bien para distancias cotidianas, no para la balística de largo alcance.",
      "Para la Tierra se usa la gravedad estándar, 9,80665 m/s² (exacta por definición). La gravedad real varía alrededor de ±0,3 % con la latitud y la altitud. Los valores de la Luna y Marte son las cifras medias de superficie de la NASA.",
      "La altura de lanzamiento se mide sobre el punto de llegada. No se contempla una llegada por encima del punto de lanzamiento.",
    ],
    faqs: [
      {
        question: "¿Qué ángulo da el mayor alcance?",
        answer:
          "Desde el nivel del suelo y sin rozamiento, 45° da el alcance máximo. Lanzar desde una altura sitúa el mejor ángulo por debajo de 45°, y el rozamiento del aire en la realidad lo reduce todavía más.",
      },
      {
        question: "¿Influye la masa del objeto?",
        answer: "No, si no hay resistencia del aire: todos los objetos caen con la misma aceleración g, así que la trayectoria solo depende de la velocidad, el ángulo, la altura y la gravedad.",
      },
      {
        question: "¿Por qué la velocidad de impacto es mayor que la de lanzamiento cuando parto de una altura?",
        answer:
          "El objeto cae más de lo que ha subido, así que la gravedad le añade velocidad vertical. La velocidad horizontal no cambia nunca, de modo que el ángulo de impacto es más inclinado que el de lanzamiento.",
      },
    ],
    sourcesUsedFor: [
      "División del movimiento en componentes horizontal y vertical independientes; alcance, tiempo de vuelo, altura máxima y velocidad de impacto sin resistencia del aire.",
      "Gravedad en la superficie lunar, 1,62 m/s².",
      "Gravedad media en la superficie de Marte, 3,73 m/s².",
    ],
  },
  text: {
    speed: "Velocidad de lanzamiento",
    speedUnit: "Unidad de velocidad",
    speedUnits: { ms: "Metros por segundo (m/s)", kmh: "Kilómetros por hora (km/h)", mph: "Millas por hora (mph)", fts: "Pies por segundo (ft/s)" },
    angle: "Ángulo de lanzamiento",
    angleHelp: "Medido hacia arriba desde la horizontal: 0° es un lanzamiento horizontal y 90° es vertical hacia arriba.",
    height: "Altura de lanzamiento",
    heightHelp: "Altura sobre el suelo donde cae el proyectil. Usa 0 para un lanzamiento desde el nivel del suelo.",
    lengthUnit: "Unidad de longitud",
    lengthUnitHelp: "Se usa para la altura de lanzamiento y para las distancias y alturas de los resultados.",
    lengthUnits: { m: "Metros (m)", ft: "Pies (ft)" },
    gravity: "Gravedad",
    gravityOptions: {
      earth: "Tierra, estándar (9,80665 m/s²)",
      moon: "Luna (1,62 m/s²)",
      mars: "Marte (3,73 m/s²)",
      custom: "Personalizada",
    },
    customGravity: "Gravedad personalizada",
    customGravityHelp: "Aceleración hacia abajo en metros por segundo al cuadrado.",
    flatLaunch: "Un lanzamiento horizontal desde el nivel del suelo nunca se despega del suelo. Aumenta el ángulo o la altura de lanzamiento.",
    range: "Alcance horizontal",
    caption: "Distancia horizontal desde el punto de lanzamiento hasta donde llega al suelo.",
    flightTime: "Tiempo de vuelo",
    maxHeight: "Altura máxima sobre el suelo",
    apexTime: "Tiempo hasta el punto más alto",
    impactSpeed: "Velocidad de impacto",
    impactAngle: "Ángulo de impacto (bajo la horizontal)",
    components: "Componentes de la velocidad inicial (horizontal, vertical)",
    componentsText: "{vx}, {vy}",
    tableCaption: "Posición durante el vuelo",
    tableColumns: { time: "Tiempo", x: "Distancia horizontal", y: "Altura" },
    verticalNote: "A 90° el proyectil sube en vertical y vuelve a caer en el punto de lanzamiento, así que el alcance es 0.",
    note: "Se ignora la resistencia del aire. Las trayectorias reales son más cortas y más bajas porque el rozamiento frena el proyectil, sobre todo a velocidades altas.",
  },
};

export default es;
